import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Sparkles, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5 text-accent-violet" />,
    Server: <Server className="w-5 h-5 text-accent-blue" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Wrench: <Wrench className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="skills" className="relative py-28 bg-[#0a0a0d] border-t border-white/[0.05] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-accent-blue/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 03. TECHNICAL CAPABILITIES"
          title="Tools & Technologies."
          titleHighlight="Modern Stack."
          subtitle="Proficiency across frontend frameworks, backend environments, database modeling, and developer tooling."
        />

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-10 pb-2 border-b border-white/[0.08]">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-accent-violet/20 text-white border border-accent-violet/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {iconMap[cat.icon]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Cards Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-14"
        >
          <div className="p-4 sm:p-6 sm:p-8 rounded-2xl bg-[#121217]/90 border border-white/[0.08] backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  {iconMap[SKILL_CATEGORIES[activeTab].icon]}
                  <span>{SKILL_CATEGORIES[activeTab].title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {SKILL_CATEGORIES[activeTab].subtitle}
                </p>
              </div>

              <span className="text-[11px] sm:text-xs font-mono text-accent-violet-light self-start sm:self-auto px-2.5 py-1 rounded bg-accent-violet/10 border border-accent-violet/20">
                {SKILL_CATEGORIES[activeTab].skills.length} Core Competencies
              </span>
            </div>

            {/* Grid of individual skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-violet/40 hover:bg-accent-violet/[0.04] transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-accent-violet/30 transition-transform">
                      <Code className="w-4 h-4 text-zinc-300 group-hover:text-accent-violet-light" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-accent-violet-light transition-colors">
                        {skill.name}
                      </div>
                      {skill.tag && (
                        <div className="text-[10px] font-mono text-zinc-400">{skill.tag}</div>
                      )}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors px-2 py-0.5 rounded bg-white/[0.03]">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Overview Bento Summary: All Categories at a glance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <TiltCard
              key={idx}
              maxTilt={5}
              glareOpacity={0.08}
              onClick={() => setActiveTab(idx)}
              className="bg-[#111115]/80 border border-white/[0.06] p-6 hover:border-accent-violet/40 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {iconMap[category.icon]}
                </div>
                <span className="text-[10px] font-mono text-zinc-400 group-hover:text-accent-violet-light transition-colors">
                  View Skills →
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1 group-hover:text-accent-violet-light transition-colors">
                {category.title}
              </h4>
              <p className="text-xs text-zinc-400 mb-4 line-clamp-1">{category.subtitle}</p>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.slice(0, 4).map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {s.name}
                  </span>
                ))}
                {category.skills.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400">
                    +{category.skills.length - 4}
                  </span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
