import React from 'react';
import { Github, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  GITHUB_MONTHS,
  GITHUB_CONTRIBUTION_WEEKS,
  GITHUB_TOTAL_CONTRIBUTIONS,
  CalendarDay,
} from '../../data/githubCalendarData';
import { SectionHeading } from '../ui/SectionHeading';

export const GitHubShowcase: React.FC = () => {
  const contributions: CalendarDay[][] = GITHUB_CONTRIBUTION_WEEKS;
  const totalContributions = GITHUB_TOTAL_CONTRIBUTIONS;

  // Authentic GitHub contribution colors
  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#216e39] border-[#216e39]/60 dark:bg-[#39d353] dark:border-[#39d353]/60';
      case 3:
        return 'bg-[#30a14e] border-[#30a14e]/60 dark:bg-[#26a641] dark:border-[#26a641]/60';
      case 2:
        return 'bg-[#40c463] border-[#40c463]/60 dark:bg-[#006d32] dark:border-[#006d32]/60';
      case 1:
        return 'bg-[#9be9a8] border-[#9be9a8]/60 dark:bg-[#0e4429] dark:border-[#0e4429]/60';
      case 0:
      default:
        return 'bg-[#ebedf0] border-[#d0d7de]/50 dark:bg-[#161b22] dark:border-[#21262d]/50';
    }
  };

  return (
    <section id="github" className="pt-4 border-t border-zinc-900">
      {/* Section Header */}
      <SectionHeading
        badge="06 — github activity"
        title="Open-Source Contributions."
        titleHighlight="Public Commit Activity."
        subtitle="Transparent commit activity and software engineering deliverables on GitHub."
        actionText="@JanNowel"
        actionHref={PERSONAL_INFO.github}
      />

      {/* Contribution Calendar Card matching GitHub Profile */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-7">
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
            className="hover:text-white transition-colors text-zinc-400 font-mono"
          >
            @JanNowel
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

              {/* 53 Weeks Matrix matching exact user GitHub contribution screenshot */}
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

        {/* Matrix Footer Stats matching GitHub Profile */}
        <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-200 font-medium tracking-normal normal-case">
              {totalContributions} contributions in the last year
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Level Legend Matching GitHub */}
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 normal-case font-mono">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22] border border-[#d0d7de]/50 dark:border-[#21262d]/50" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
