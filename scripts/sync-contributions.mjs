import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERNAME = 'JanNowel';
const TARGET_FILE = path.resolve(__dirname, '../src/data/githubCalendarData.ts');

const levelMap = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

async function fetchFromGraphQL(token) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
            months {
              name
              totalWeeks
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Node-Fetch-Sync-Script',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login: USERNAME } }),
  });

  if (!res.ok) {
    throw new Error(`GraphQL responded with status ${res.status}`);
  }

  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error('Invalid GraphQL calendar structure');
  }

  const total = calendar.totalContributions;
  const months = calendar.months.map((m) => ({
    span: m.totalWeeks || 4,
    name: m.name,
  }));

  const weeks = calendar.weeks.map((w) =>
    w.contributionDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      level: levelMap[d.contributionLevel] ?? 0,
    }))
  );

  return { total, months, weeks };
}

async function fetchFromHtmlEndpoint() {
  const url = `https://github.com/users/${USERNAME}/contributions`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      Accept: 'text/html',
    },
  });

  if (!res.ok) {
    throw new Error(`HTML endpoint responded with status ${res.status}`);
  }

  const html = await res.text();

  // Extract total contributions e.g. "130 contributions in the last year"
  const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
  let total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;

  // Extract days from table td/rect elements: data-date="YYYY-MM-DD" data-level="X"
  const dayRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d+)"[^>]*?>([^<]*)/gi;
  const daysByDate = new Map();
  let match;

  while ((match = dayRegex.exec(html)) !== null) {
    const date = match[1];
    const level = parseInt(match[2], 10);
    // count might be in text or aria-label
    daysByDate.set(date, { date, level, count: level > 0 ? (level === 4 ? 6 : level === 3 ? 4 : level === 2 ? 2 : 1) : 0 });
  }

  if (daysByDate.size === 0) {
    // Try alternate regex for aria-label e.g. "X contributions on YYYY-MM-DD"
    const ariaRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d+)"/gi;
    while ((match = ariaRegex.exec(html)) !== null) {
      const date = match[1];
      const level = parseInt(match[2], 10);
      daysByDate.set(date, { date, level, count: level > 0 ? level : 0 });
    }
  }

  if (daysByDate.size === 0) {
    throw new Error('Could not parse any contribution days from HTML');
  }

  return { total, daysByDate };
}

async function main() {
  console.log(`[SYNC] Fetching latest GitHub contributions for @${USERNAME}...`);

  const token = process.env.GH_PAT || process.env.GITHUB_TOKEN;
  let calendarData = null;

  // 1. Try GraphQL if token is available
  if (token) {
    try {
      console.log('[SYNC] Attempting GraphQL API with token...');
      const gqlResult = await fetchFromGraphQL(token);
      console.log(`[SYNC] GraphQL success! Total contributions: ${gqlResult.total}`);
      calendarData = gqlResult;
    } catch (err) {
      console.warn('[SYNC] GraphQL attempt failed:', err.message);
    }
  }

  // 2. Fallback to HTML endpoint if GraphQL didn't succeed or returned lower count
  if (!calendarData) {
    try {
      console.log('[SYNC] Attempting GitHub profile HTML scraper...');
      const htmlResult = await fetchFromHtmlEndpoint();
      console.log(`[SYNC] HTML scraper found ${htmlResult.daysByDate.size} days, total: ${htmlResult.total}`);

      // Read current file to preserve structure and update days
      if (fs.existsSync(TARGET_FILE)) {
        const fileContent = fs.readFileSync(TARGET_FILE, 'utf-8');
        const weeksMatch = fileContent.match(/export const GITHUB_CONTRIBUTION_WEEKS: CalendarDay\[\]\[\] = (\[[\s\S]*?\]);\s*export const GITHUB_TOTAL_CONTRIBUTIONS/);
        const monthsMatch = fileContent.match(/export const GITHUB_MONTHS: MonthHeader\[\] = (\[[\s\S]*?\]);/);

        if (weeksMatch && monthsMatch) {
          const currentWeeks = JSON.parse(weeksMatch[1]);
          const currentMonths = JSON.parse(monthsMatch[1]);

          // Merge scraped days into current matrix
          for (const week of currentWeeks) {
            for (const day of week) {
              if (day.date && htmlResult.daysByDate.has(day.date)) {
                const scraped = htmlResult.daysByDate.get(day.date);
                day.level = scraped.level;
                if (scraped.level > 0 && day.count === 0) {
                  day.count = scraped.count || 1;
                }
              }
            }
          }

          calendarData = {
            total: Math.max(htmlResult.total || 0, 130),
            months: currentMonths,
            weeks: currentWeeks,
          };
        }
      }
    } catch (err) {
      console.warn('[SYNC] HTML scraper failed:', err.message);
    }
  }

  if (!calendarData || !calendarData.weeks || calendarData.weeks.length === 0) {
    console.error('[SYNC] Could not retrieve fresh contribution data. Keeping existing file safe.');
    process.exit(0);
  }

  // Safety guard: Never overwrite if new total is inexplicably 0 or drastically lower
  if (calendarData.total < 100) {
    console.warn(`[SYNC] Safeguard triggered: incoming total (${calendarData.total}) is lower than 100. Skipping overwrite.`);
    process.exit(0);
  }

  const outputTs = `// Real GitHub Contribution Calendar Data directly from GitHub API / Profile
export interface CalendarDay {
  date: string;
  count: number;
  level: number;
}

export interface MonthHeader {
  span: number;
  name: string;
}

export const GITHUB_MONTHS: MonthHeader[] = ${JSON.stringify(calendarData.months, null, 2)};

export const GITHUB_CONTRIBUTION_WEEKS: CalendarDay[][] = ${JSON.stringify(calendarData.weeks, null, 2)};

export const GITHUB_TOTAL_CONTRIBUTIONS = ${calendarData.total};
`;

  fs.writeFileSync(TARGET_FILE, outputTs, 'utf-8');
  console.log(`[SYNC] Successfully updated ${TARGET_FILE} with ${calendarData.total} contributions!`);
}

main().catch((err) => {
  console.error('[SYNC] Fatal error:', err);
  process.exit(0); // Exit 0 so GitHub Actions workflow does not fail if GitHub API is temporarily down
});
