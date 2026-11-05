import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Sparkles, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-3.5 h-3.5 text-zinc-300" />,
    Server: <Server className="w-3.5 h-3.5 text-zinc-300" />,
    Database: <Database className="w-3.5 h-3.5 text-zinc-300" />,
    Wrench: <Wrench className="w-3.5 h-3.5 text-zinc-300" />,
    Sparkles: <Sparkles className="w-3.5 h-3.5 text-zinc-300" />,
  };

  // Primary stack pills matching reference video "STACK I RELY ON"
  const primaryStack = [
    { name: 'TypeScript', tag: 'TS' },
    { name: 'React', tag: 'UI' },
    { name: 'React Native', tag: 'Mobile' },
    { name: 'Flutter', tag: 'Dart' },
    { name: 'Node.js', tag: 'JS' },
    { name: 'Express.js', tag: 'API' },
    { name: 'Python', tag: 'PY' },
    { name: 'MongoDB', tag: 'NoSQL' },
    { name: 'Supabase', tag: 'SQL' },
    { name: 'PostgreSQL', tag: 'DB' },
    { name: 'Git & GitHub', tag: 'VCS' },
    { name: 'Docker', tag: 'DevOps' },
    { name: 'Cloudflare', tag: 'Edge' },
    { name: 'AI Workflows', tag: 'LLM' },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#000000] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="04 — stack & capabilities"
          title="Stack I Rely On."
          titleHighlight="Modern Engineering."
          subtitle="Core languages, libraries, databases, and runtime environments powering production builds."
          actionText="View All"
          actionHref="#skills"
        />

        {/* Primary Stack Chip Strip matching reference video */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Core Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {primaryStack.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0c0c0e] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <span className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-300 flex items-center justify-center">
                  {tech.tag}
                </span>
                <span className="text-xs font-medium text-zinc-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Breakdown */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
            Competencies by Discipline
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeTab === idx
                    ? 'bg-white text-zinc-950 font-medium'
                    : 'text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800/80'
                }`}
              >
                {iconMap[cat.icon]}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-7"
          >
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-800/80">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {SKILL_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {SKILL_CATEGORIES[activeTab].subtitle}
                </p>
              </div>

              <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                {SKILL_CATEGORIES[activeTab].skills.length} Skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-zinc-500" />
                    <div>
                      <div className="text-xs font-medium text-zinc-200">
                        {skill.name}
                      </div>
                      {skill.tag && (
                        <div className="text-[9px] font-mono text-zinc-400">
                          {skill.tag}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800/80">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
