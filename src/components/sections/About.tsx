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
    <section id="about" className="py-24 sm:py-28 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 / About Me"
          title="Practical Engineering."
          titleHighlight="Continuous Curiosity."
          subtitle="A developer dedicated to building reliable digital solutions, mastering modern technology stacks, and turning complex workflows into smooth user experiences."
        />

        {/* Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12">
          {/* Main Story & Core Principles */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-zinc-800/80">
              <Terminal className="w-4 h-4 text-zinc-400" />
              <h3 className="text-base font-semibold text-zinc-200">
                Background & Engineering Perspective
              </h3>
            </div>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>{ABOUT_DATA.intro}</p>
              <p>{ABOUT_DATA.philosophy}</p>
            </div>

            {/* Core Commitments List */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Writing clean, type-safe, maintainable code',
                'Designing intuitive user-first interfaces',
                'Exploring practical AI & automation tools',
                'Continuous self-directed learning & curiosity',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300">{point}</span>
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
            className="lg:col-span-5 grid grid-cols-2 gap-3.5"
          >
            {ABOUT_DATA.stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-5 flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-zinc-100 font-mono flex items-baseline">
                  <Counter to={stat.value} duration={1.5} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-medium text-zinc-200">{stat.label}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{stat.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Areas of Interest / Core Pillars */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
            Technical Disciplines
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DATA.areasOfInterest.map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center mb-4">
                  {iconMap[area.icon]}
                </div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-1.5">
                  {area.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
