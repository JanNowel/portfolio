import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Globe, Smartphone, Server, Cpu, Sparkles, Wrench } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'web-engineering': <Globe className="w-4 h-4 text-zinc-300" />,
    'mobile-development': <Smartphone className="w-4 h-4 text-zinc-300" />,
    'backend-architecture': <Server className="w-4 h-4 text-zinc-300" />,
    'python-automation': <Cpu className="w-4 h-4 text-zinc-300" />,
    'ai-prompt-engineering': <Sparkles className="w-4 h-4 text-zinc-300" />,
    'commission-refactoring': <Wrench className="w-4 h-4 text-zinc-300" />,
  };

  return (
    <section id="services" className="pt-4 border-t border-zinc-900">
      <SectionHeading
        badge="05 — services & commissions"
        title="Engineering Services."
        titleHighlight="Available for Work."
        subtitle="Specialized development capabilities for freelance commissions, technical contracts, and team collaboration."
        actionText="Inquire Now"
        actionHref="#contact"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {iconMap[service.id] || <Wrench className="w-4 h-4 text-zinc-300" />}
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                {service.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {service.shortDesc}
              </p>

              <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-900">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1 mb-4">
                {service.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <span>Inquire for Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
