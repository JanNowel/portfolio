import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="pt-4 border-t border-zinc-900">
      <SectionHeading
        badge="05 — certifications"
        title="Credentials & Milestones."
        titleHighlight="Verified Track Record."
        subtitle="Documented achievements across software engineering, cross-platform mobile apps, and prompt engineering."
        actionText="All Certifications"
        actionHref="#certifications"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between text-center items-center group"
          >
            <div className="flex flex-col items-center">
              {/* Minimal Logo / Monogram Box matching reference video */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-zinc-300" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                {cert.title}
              </h3>

              {/* Issuer in uppercase mono */}
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
                {cert.issuer}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Minimal "VERIFY" button matching reference video: ⟨ VERIFY ⟩ */}
            <div className="pt-3 border-t border-zinc-900 w-full flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>{cert.date}</span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                ⟨ {cert.credentialId ? 'VERIFIED' : 'CREDENTIAL'} ⟩
              </span>
              <span className="text-[10px] text-zinc-400">{cert.category}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
