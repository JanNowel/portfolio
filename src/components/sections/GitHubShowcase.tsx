import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FALLBACK_GITHUB_USER, FALLBACK_REPOS } from '../../data/githubFallback';
import { GitHubRepo, GitHubUser } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const GitHubShowcase: React.FC = () => {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);

  useEffect(() => {
    const fetchGitHubData = async () => {
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

        const repoRes = await fetch('https://api.github.com/users/JanNowel/repos?sort=updated&per_page=6');
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
    };

    fetchGitHubData();
  }, []);

  // Generate 26 columns of 7 dots matching reference video
  const weeks = 28;
  const daysPerWeek = 7;
  const generateContributionGrid = () => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const r = Math.random();
        if (r > 0.7) week.push(3);
        else if (r > 0.45) week.push(2);
        else if (r > 0.2) week.push(1);
        else week.push(0);
      }
      grid.push(week);
    }
    return grid;
  };

  const contributionGrid = React.useMemo(() => generateContributionGrid(), []);

  return (
    <section id="github" className="py-20 sm:py-24 bg-[#000000] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="07 — github activity"
          title="Open-Source Repositories."
          titleHighlight="Public Contributions."
          subtitle="Transparent software codebases, experimental prototypes, and academic deliverables on GitHub."
          actionText="@JanNowel"
          actionHref={PERSONAL_INFO.github}
        />

        {/* Contribution Matrix matching Reference Video */}
        <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-7 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-zinc-900">
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4 text-zinc-300" />
              <span>GitHub Public Commit Activity</span>
            </span>
            <span>@{user.login}</span>
          </div>

          {/* Matrix Dots */}
          <div className="overflow-x-auto py-2 no-scrollbar">
            <div className="flex gap-1.5 min-w-[500px]">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5 shrink-0">
                  {week.map((level, dIdx) => {
                    const colors = [
                      'bg-zinc-900',
                      'bg-zinc-700',
                      'bg-zinc-400',
                      'bg-zinc-100',
                    ];
                    return (
                      <div
                        key={dIdx}
                        className={`w-2.5 h-2.5 rounded-full ${colors[level]} transition-colors`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
            <span>500+ Contributions in the last year</span>
            <span>{user.public_repos} Repositories</span>
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
      </div>
    </section>
  );
};
