import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink, Flame } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FALLBACK_GITHUB_USER, FALLBACK_REPOS } from '../../data/githubFallback';
import { GitHubRepo, GitHubUser } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { fadeInUp } from '../../utils/animations';

export const GitHubShowcase: React.FC = () => {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
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
          setIsLive(true);
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
        console.warn('Using curated GitHub showcase data (API rate limit or offline).', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languageColors: Record<string, string> = {
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Dart: '#00B4AB',
    Python: '#3572A5',
    HTML: '#E34F26',
    CSS: '#563D7C',
  };

  const weeks = 14;
  const daysPerWeek = 7;
  const generateContributionGrid = () => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const r = Math.random();
        if (r > 0.75) week.push(3);
        else if (r > 0.5) week.push(2);
        else if (r > 0.25) week.push(1);
        else week.push(0);
      }
      grid.push(week);
    }
    return grid;
  };

  const contributionGrid = React.useMemo(() => generateContributionGrid(), []);

  return (
    <section id="github" className="relative py-28 bg-[#0a0a0d] border-t border-white/[0.05] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="// 05. OPEN SOURCE & CODE"
            title="GitHub Activity."
            titleHighlight="Code Repositories."
            subtitle="Explore open repositories, code experiments, and version-controlled commits hosted on GitHub."
          />

          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-zinc-300">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400'}`} />
              <span>{isLive ? 'Live API Synced' : 'Showcase Mode'}</span>
            </span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-mono text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Visit @{user.login}</span>
            </a>
          </div>
        </div>

        {/* Profile Card & Stats Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* User Profile Card */}
          <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-[#121217]/90 border border-white/[0.08] backdrop-blur-md flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-16 h-16 rounded-2xl border-2 border-white/10 object-cover shadow-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{user.name}</h3>
                <div className="text-xs font-mono text-accent-violet-light">@{user.login}</div>
                <div className="text-[11px] text-zinc-400 mt-1">{user.location || 'Philippines'}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              {user.bio || 'Building modern web, mobile, and intelligent software solutions.'}
            </p>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06] text-center">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-base font-bold font-mono text-white">{user.public_repos}</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Repositories</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-base font-bold font-mono text-white">{user.followers}</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Followers</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-base font-bold font-mono text-white">{user.following}</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Following</div>
              </div>
            </div>
          </div>

          {/* Activity & Language Distribution */}
          <div className="lg:col-span-7 p-4 sm:p-6 rounded-2xl bg-[#121217]/90 border border-white/[0.08] backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Contribution Heatmap & Consistency</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-400">Past 90 Days</span>
              </div>

              {/* Heatmap Grid */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1.5">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3.5 h-3.5 rounded-sm transition-colors ${level === 0
                            ? 'bg-white/[0.04]'
                            : level === 1
                              ? 'bg-purple-950 border border-purple-800/40'
                              : level === 2
                                ? 'bg-purple-700'
                                : 'bg-accent-violet shadow-sm shadow-purple-500/50'
                            }`}
                          title={`Activity level: ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] font-mono text-zinc-400">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-950" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-accent-violet" />
                <span>More</span>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Repository Language Distribution
              </div>
              <div className="h-2 w-full rounded-full bg-white/[0.05] overflow-hidden flex mb-3">
                <div style={{ width: '40%' }} className="bg-[#3178C6]" title="TypeScript 40%" />
                <div style={{ width: '25%' }} className="bg-[#F7DF1E]" title="JavaScript 25%" />
                <div style={{ width: '18%' }} className="bg-[#00B4AB]" title="Dart 18%" />
                <div style={{ width: '12%' }} className="bg-[#3572A5]" title="Python 12%" />
                <div style={{ width: '5%' }} className="bg-[#E34F26]" title="Other 5%" />
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3178C6]" /> TypeScript (40%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F7DF1E]" /> JavaScript (25%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00B4AB]" /> Dart (18%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3572A5]" /> Python (12%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <TiltCard
                maxTilt={6}
                glareOpacity={0.1}
                className="h-full bg-[#111116]/85 border border-white/[0.07] p-6 hover:border-accent-violet/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent-violet" />
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white hover:text-accent-violet-light transition-colors line-clamp-1"
                      >
                        {repo.name}
                      </a>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-zinc-400 hover:text-white"
                      aria-label="Open Repository"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description || 'Public software repository and development implementation.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    {repo.language && (
                      <>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: languageColors[repo.language] || '#8B5CF6',
                          }}
                        />
                        <span>{repo.language}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-zinc-300">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1 hover:text-zinc-300">
                      <GitFork className="w-3 h-3 text-zinc-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
