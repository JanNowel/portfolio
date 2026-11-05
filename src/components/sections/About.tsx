import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Brain, Cloud, CheckCircle2, Terminal } from 'lucide-react';
import { ABOUT_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Counter } from '../ui/Counter';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-4 h-4 text-zinc-300" />,
    Smartphone: <Smartphone className="w-4 h-4 text-zinc-300" />,
    Brain: <Brain className="w-4 h-4 text-zinc-300" />,
    Cloud: <Cloud className="w-4 h-4 text-zinc-300" />,
  };

  return (
    <section id="about" className="pt-4 border-t border-zinc-900">
      <SectionHeading
        badge="01 — about"
        title="Engineering Perspective."
        titleHighlight="Core Principles."
        subtitle="A developer dedicated to building reliable digital solutions, mastering modern technology stacks, and turning complex workflows into smooth user experiences."
        actionText="Read More"
        actionHref="#contact"
      />

      {/* Narrative & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start mb-8">
        {/* Main Story & Core Principles */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-7 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-900">
            <Terminal className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-zinc-200">
              Values & Technical Philosophy
            </h3>
          </div>

          <div className="space-y-3.5 text-zinc-400 text-xs sm:text-sm leading-relaxed">
            <p>{ABOUT_DATA.intro}</p>
            <p>{ABOUT_DATA.philosophy}</p>
          </div>

          {/* Core Commitments List */}
          <div className="mt-5 pt-4 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              'Clean, maintainable code',
              'Intuitive user interfaces',
              'Practical AI automation',
              'Continuous self-learning',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                <span className="text-xs text-zinc-300">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Stats Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-5 grid grid-cols-2 gap-3"
        >
          {ABOUT_DATA.stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-4 flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-white font-mono flex items-baseline">
                <Counter to={stat.value} duration={1.5} />
                <span>{stat.suffix}</span>
              </div>
              <div className="mt-2">
                <div className="text-xs font-medium text-zinc-200">{stat.label}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">{stat.description}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Areas of Interest / Pillars */}
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
          Disciplines of Practice
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ABOUT_DATA.areasOfInterest.map((area, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl bg-[#0c0c0e] border border-zinc-800/80 p-4 hover:border-zinc-700 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3">
                {iconMap[area.icon]}
              </div>
              <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                {area.title}
              </h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
