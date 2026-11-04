import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Brain, Cloud, Terminal, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Counter } from '../ui/Counter';
import { TiltCard } from '../ui/TiltCard';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-accent-violet" />,
    Smartphone: <Smartphone className="w-5 h-5 text-accent-blue" />,
    Brain: <Brain className="w-5 h-5 text-purple-400" />,
    Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section id="about" className="relative py-28 bg-[#0a0a0d] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-violet/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 01. ABOUT ME"
          title="Practical Engineering."
          titleHighlight="Continuous Curiosity."
          subtitle="A developer dedicated to building reliable digital solutions, mastering modern technology stacks, and turning complex workflows into smooth user experiences."
        />

        {/* 2-Column Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Introduction & Philosophy Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl bg-[#121216]/80 border border-white/[0.08] p-8 md:p-10 relative overflow-hidden backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center">
                <Compass className="w-4 h-4 text-accent-violet" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Engineering Perspective & Values
              </h3>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{ABOUT_DATA.intro}</p>
              <p>{ABOUT_DATA.philosophy}</p>
            </div>

            {/* Core Commitments List */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                'Writing clean, type-safe, maintainable code',
                'Designing intuitive user-first interfaces',
                'Exploring practical AI & automation tools',
                'Continuous self-directed learning & curiosity',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-violet mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Info & Focus Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl bg-[#121216]/80 border border-white/[0.08] p-8 relative overflow-hidden backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Developer Snapshot</h3>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Full Name
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">{PERSONAL_INFO.name}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Primary Focus
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Full-Stack Web & Mobile Applications
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Location & Collaboration
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.location} • Available for Remote & On-Site
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Key Philosophy
                  </div>
                  <div className="text-xs font-mono text-accent-violet-light mt-0.5">
                    "Transforming ideas into functional code with thoughtful design."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Areas of Interest Bento Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Specialized Areas of Focus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.areasOfInterest.map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard
                  maxTilt={6}
                  glareOpacity={0.12}
                  className="h-full bg-[#131317]/90 border border-white/[0.07] p-6 hover:border-accent-violet/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                    {iconMap[area.icon] || <Sparkles className="w-5 h-5 text-accent-violet" />}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{area.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{area.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Statistics (Values are genuine, non-fabricated metrics with editable props) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-[#111115] border border-white/[0.08]"
        >
          {ABOUT_DATA.stats.map((stat) => (
            <div key={stat.id} className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono text-white tracking-tight">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5 hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
