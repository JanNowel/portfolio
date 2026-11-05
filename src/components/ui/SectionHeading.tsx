import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionHeadingProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  actionText,
  actionHref,
  onActionClick,
  centered = false,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-10 sm:mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-4xl'}`}
    >
      {/* Top Section Index Bar matching reference: "01 — about", "ALL POSTS →" */}
      <div
        className={`flex items-center justify-between pb-2.5 border-b border-zinc-800/80 mb-5 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          {badge}
        </span>

        {actionText && (
          actionHref ? (
            <a
              href={actionHref}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-wider"
            >
              {actionText} →
            </a>
          ) : (
            <button
              onClick={onActionClick}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-wider"
            >
              {actionText} →
            </button>
          )
        )}
      </div>

      {/* Main Title (Clean High Contrast Monospace/Sans, No Gradients) */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="text-zinc-400 font-normal">
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
