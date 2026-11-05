import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FALLBACK_GITHUB_USER, FALLBACK_REPOS } from '../../data/githubFallback';
import {
  GITHUB_MONTHS,
  GITHUB_CONTRIBUTION_WEEKS,
  GITHUB_TOTAL_CONTRIBUTIONS,
  CalendarDay,
} from '../../data/githubCalendarData';
import { GitHubRepo, GitHubUser } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const GitHubShowcase: React.FC = () => {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [contributions] = useState<CalendarDay[][]>(GITHUB_CONTRIBUTION_WEEKS);
  const [totalContributions, setTotalContributions] = useState<number>(GITHUB_TOTAL_CONTRIBUTIONS);

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

      // 3. Optional real-time refresh from contributions API
      try {
        const contribRes = await fetch(
          'https://github-contributions-api.jogruber.de/v4/JanNowel?y=last'
        );
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          if (
            contribData?.total?.lastYear &&
            contribData.total.lastYear > GITHUB_TOTAL_CONTRIBUTIONS
          ) {
            setTotalContributions(contribData.total.lastYear);
          }
        }
      } catch {
        // Keeps verified GitHub dataset
      }
    };

    fetchGitHubData();
  }, []);

  // Authentic GitHub contribution colors (dark mode & light mode)
  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#39d353] border-[#39d353]/60';
      case 3:
        return 'bg-[#26a641] border-[#26a641]/60';
      case 2:
        return 'bg-[#006d32] border-[#006d32]/60';
      case 1:
        return 'bg-[#0e4429] border-[#0e4429]/60';
      case 0:
      default:
        return 'bg-[#161b22] border-[#21262d]/50';
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

      {/* Contribution Calendar Card matching GitHub Profile */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-7 mb-8">
        {/* Header without Live API label */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-zinc-900">
          <span className="flex items-center gap-2">
            <Github className="w-4 h-4 text-zinc-300" />
            <span className="font-semibold text-zinc-200">GitHub Public Commit Activity</span>
          </span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-zinc-400"
          >
            @{user.login}
          </a>
        </div>

        {/* Contribution Calendar Graph with Month & Day Labels */}
        <div className="overflow-x-auto py-2 no-scrollbar scroll-smooth">
          <div className="min-w-[690px] w-full">
            {/* Months Header Row */}
            <div className="flex pl-7 mb-1 text-[10px] font-mono text-zinc-500 select-none">
              {GITHUB_MONTHS.map((m, idx) => (
                <div key={idx} style={{ flex: m.span }} className="truncate">
                  {m.name}
                </div>
              ))}
            </div>

            {/* Grid Container with Day Labels on Left */}
            <div className="flex items-start gap-2">
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between h-[92px] sm:h-[101px] text-[9px] font-mono text-zinc-500 py-0.5 select-none shrink-0 w-5">
                <span className="opacity-0">Sun</span>
                <span>Mon</span>
                <span className="opacity-0">Tue</span>
                <span>Wed</span>
                <span className="opacity-0">Thu</span>
                <span>Fri</span>
                <span className="opacity-0">Sat</span>
              </div>

              {/* 53 Weeks Matrix */}
              <div className="flex justify-between items-center gap-[3px] sm:gap-1 flex-1">
                {contributions.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] sm:gap-1 shrink-0">
                    {week.map((day, dIdx) => {
                      if (!day.date) {
                        return (
                          <div
                            key={dIdx}
                            className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] opacity-0"
                          />
                        );
                      }
                      return (
                        <div
                          key={dIdx}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                          className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[2px] border transition-transform hover:scale-125 cursor-pointer ${getCellColor(
                            day.level
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Footer Stats */}
        <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-200 font-medium">
              {totalContributions} contributions in the last year
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Level Legend Matching GitHub */}
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 normal-case font-mono">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-[#21262d]/50" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
              <span>More</span>
            </div>

            <a
              href={`${PERSONAL_INFO.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-semibold text-zinc-300"
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
