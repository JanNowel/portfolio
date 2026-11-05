import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FALLBACK_GITHUB_USER, FALLBACK_REPOS } from '../../data/githubFallback';
import { GitHubRepo, GitHubUser } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export const GitHubShowcase: React.FC = () => {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [contributions, setContributions] = useState<ContributionDay[][]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  // Fallback 52-week grid generator (covers full card width)
  const generateFallbackGrid = (): ContributionDay[][] => {
    const grid: ContributionDay[][] = [];
    const now = new Date();
    const totalWeeks = 52;
    const daysPerWeek = 7;

    for (let w = 0; w < totalWeeks; w++) {
      const week: ContributionDay[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const dayOffset = (totalWeeks - 1 - w) * 7 + (daysPerWeek - 1 - d);
        const date = new Date(now.getTime() - dayOffset * 24 * 60 * 60 * 1000);
        const dateStr = date.toISOString().split('T')[0];
        
        // Moderate activity pattern
        const rand = Math.random();
        let level = 0;
        let count = 0;
        if (rand > 0.78) {
          level = 3;
          count = 4;
        } else if (rand > 0.58) {
          level = 2;
          count = 2;
        } else if (rand > 0.35) {
          level = 1;
          count = 1;
        }

        week.push({ date: dateStr, count, level });
      }
      grid.push(week);
    }
    return grid;
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      // 1. Fetch User Profile
      try {
        const userRes = await fetch('https://api.github.com/users/JanNowel');
        if (userRes.ok) {
          const userData = await userRes.json();
          setUser({
            login: userData.login || FALLBACK_GITHUB_USER.login,
            name: userData.name || FALLBACK_GITHUB_USER.name,
            avatar_url: userData.avatar_url || FALLBACK_GITHUB_USER.avatar_url,
            html_url: userData.html_url || FALLBACK_GITHUB_USER.html_url,
            bio: userData.bio || FALLBACK_GITHUB_USER.bio,
            public_repos: userData.public_repos || FALLBACK_GITHUB_USER.public_repos,
            followers: userData.followers || FALLBACK_GITHUB_USER.followers,
            following: userData.following || FALLBACK_GITHUB_USER.following,
            location: userData.location || FALLBACK_GITHUB_USER.location,
          });
        }
      } catch (err) {
        console.warn('Using fallback user data.', err);
      }

      // 2. Fetch Public Repositories
      try {
        const repoRes = await fetch(
          'https://api.github.com/users/JanNowel/repos?sort=updated&per_page=6'
        );
        if (repoRes.ok) {
          const repoData: any[] = await repoRes.json();
          if (Array.isArray(repoData) && repoData.length > 0) {
            const mapped: GitHubRepo[] = repoData.map((r) => ({
              name: r.name,
              description: r.description,
              html_url: r.html_url,
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              language: r.language,
              updated_at: r.updated_at,
              topics: r.topics || [],
            }));
            setRepos(mapped);
          }
        }
      } catch (err) {
        console.warn('Using fallback repository data.', err);
      }

      // 3. Fetch Live Contribution Graph
      try {
        const contribRes = await fetch(
          'https://github-contributions-api.jogruber.de/v4/JanNowel?y=last'
        );
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          if (contribData && Array.isArray(contribData.contributions)) {
            const list: ContributionDay[] = contribData.contributions.map((c: any) => ({
              date: c.date,
              count: c.count || 0,
              level: Math.min(Math.max(c.level || 0, 0), 4),
            }));

            // Group into 7-day columns (weeks)
            const groupedWeeks: ContributionDay[][] = [];
            for (let i = 0; i < list.length; i += 7) {
              groupedWeeks.push(list.slice(i, i + 7));
            }

            setContributions(groupedWeeks);
            if (contribData.total?.lastYear !== undefined) {
              setTotalContributions(contribData.total.lastYear);
            }
          }
        } else {
          setContributions(generateFallbackGrid());
        }
      } catch (err) {
        console.warn('Could not fetch live contribution graph, using fallback grid.', err);
        setContributions(generateFallbackGrid());
      }
    };

    fetchGitHubData();
  }, []);

  const activeGrid = contributions.length > 0 ? contributions : generateFallbackGrid();

  // Helper for dot color by level in dark and light modes
  const getDotColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-white border-white dark:bg-white dark:border-white';
      case 3:
        return 'bg-zinc-300 border-zinc-300 dark:bg-zinc-300 dark:border-zinc-300';
      case 2:
        return 'bg-zinc-500 border-zinc-500 dark:bg-zinc-500 dark:border-zinc-500';
      case 1:
        return 'bg-zinc-700 border-zinc-700 dark:bg-zinc-700 dark:border-zinc-700';
      case 0:
      default:
        return 'bg-zinc-900 border-zinc-800/80 dark:bg-zinc-900 dark:border-zinc-800/80';
    }
  };

  return (
    <section id="github" className="pt-4 border-t border-zinc-900">
      {/* Section Header */}
      <SectionHeading
        badge="07 — github activity"
        title="Open-Source Repositories."
        titleHighlight="Public Contributions."
        subtitle="Transparent software codebases, live commit telemetry, and academic deliverables on GitHub."
        actionText="@JanNowel"
        actionHref={PERSONAL_INFO.github}
      />

      {/* Live Contribution Matrix matching Reference Video & Full 52-Week Span */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-7 mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-zinc-900">
          <span className="flex items-center gap-2">
            <Github className="w-4 h-4 text-zinc-300" />
            <span className="font-semibold text-zinc-200">GitHub Public Commit Activity</span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live API</span>
            </span>
          </span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            @{user.login}
          </a>
        </div>

        {/* 52-Week Full Contribution Dot Matrix */}
        <div className="overflow-x-auto py-2 no-scrollbar scroll-smooth">
          <div className="flex justify-between items-center gap-1 sm:gap-1.5 min-w-[720px] w-full">
            {activeGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1 sm:gap-1.5 shrink-0">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                    className={`w-2.5 h-2.5 rounded-full border transition-transform hover:scale-125 cursor-pointer ${getDotColor(
                      day.level
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix Footer Stats */}
        <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-zinc-400" />
            <span>
              {totalContributions !== null
                ? `${totalContributions} contributions in the last year`
                : '100+ contributions in the last year'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Level Legend */}
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 normal-case font-mono">
              <span>Less</span>
              <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="w-2 h-2 rounded-full bg-zinc-300" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>More</span>
            </div>

            <a
              href={`${PERSONAL_INFO.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-semibold"
            >
              {user.public_repos} Repositories ↗
            </a>
          </div>
        </div>
      </div>

      {/* Repositories Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {repos.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0" />
              </div>

              <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                {repo.description || 'Public software repository on GitHub.'}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-3 border-t border-zinc-900">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>{repo.language || 'Code'}</span>
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-zinc-500" />
                  <span>{repo.stargazers_count}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-zinc-500" />
                  <span>{repo.forks_count}</span>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
