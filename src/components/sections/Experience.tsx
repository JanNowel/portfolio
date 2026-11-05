import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp } from '../../utils/animations';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#000000] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="03 — experience"
          title="Experience & Milestones."
          titleHighlight="Professional Timeline."
          subtitle="Track record spanning academic foundations, independent client builds, and upcoming on-the-job training."
          actionText="Full History"
          actionHref="#contact"
        />

        {/* Minimalist Chronological List matching Reference Style */}
        <div className="divide-y divide-zinc-900 border-t border-b border-zinc-900">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06 }}
              className="py-5 sm:py-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 shrink-0">
                  {item.period}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-zinc-400 flex flex-wrap items-center gap-2 mb-3">
                <span className="text-zinc-300 font-medium">{item.organization}</span>
                {item.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-400 font-mono text-xs">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {item.location}
                    </span>
                  </>
                )}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 ml-auto sm:ml-0">
                  {item.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Highlights List */}
              <ul className="space-y-1 mb-3">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-zinc-400 pl-3 border-l border-zinc-800 leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              {item.technologies && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
