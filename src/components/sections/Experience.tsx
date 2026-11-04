import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Rocket, CheckCircle2, MapPin, Edit3 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp } from '../../utils/animations';

export const Experience: React.FC = () => {
  const categoryIconMap = {
    Education: <GraduationCap className="w-4 h-4 text-accent-violet" />,
    OJT: <Briefcase className="w-4 h-4 text-accent-blue" />,
    Project: <Code className="w-4 h-4 text-purple-400" />,
    Learning: <Rocket className="w-4 h-4 text-emerald-400" />,
  };

  const categoryColorMap = {
    Education: 'border-accent-violet/30 bg-accent-violet/10 text-accent-violet-light',
    OJT: 'border-accent-blue/30 bg-accent-blue/10 text-accent-blue-light',
    Project: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    Learning: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  };

  return (
    <section id="experience" className="relative py-28 bg-[#080808] border-t border-white/[0.05] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-accent-violet/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 04. JOURNEY & EXPERIENCE"
          title="Milestones & Learning."
          titleHighlight="Continuous Growth."
          subtitle="A transparent timeline tracking academic foundations, hands-on development milestones, and forthcoming OJT opportunities."
        />

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-8 sm:space-y-12">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Pin */}
              <div className="absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#121216] border-2 border-white/20 group-hover:border-accent-violet group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-md shadow-black">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-violet" />
              </div>

              {/* Main Timeline Card */}
              <div className="p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#121217]/85 border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/40">
                {/* Meta header: Category & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${categoryColorMap[item.category]}`}
                    >
                      {categoryIconMap[item.category]}
                      <span>{item.category}</span>
                    </span>

                    {item.isPlaceholder && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        <Edit3 className="w-3 h-3" />
                        <span>Editable Entry</span>
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-zinc-400">{item.period}</span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-violet-light transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-0.5 mb-3 flex items-center gap-2">
                  <span>{item.organization}</span>
                  {item.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-zinc-400 font-mono text-xs">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-4 pt-3 border-t border-white/[0.05]">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-violet mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Tags */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
