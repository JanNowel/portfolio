import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionHeadingProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = false,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}
    >
      <div className={`flex items-center gap-2 mb-3.5 ${centered ? 'justify-center' : ''}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-accent-violet/10 text-accent-violet-light border border-accent-violet/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
          {badge}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-accent-violet via-purple-300 to-accent-blue bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

