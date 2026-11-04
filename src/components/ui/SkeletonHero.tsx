import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonHero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden z-20 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Placeholders */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* Status Pill Skeleton */}
            <div className="h-8 w-44 rounded-full bg-white/[0.06] animate-pulse border border-white/5" />

            {/* Role Title Skeleton */}
            <div className="h-7 w-64 rounded-lg bg-white/[0.08] animate-pulse" />

            {/* Main Headline Skeleton */}
            <div className="w-full max-w-xl space-y-3">
              <div className="h-10 sm:h-12 w-full rounded-xl bg-white/[0.08] animate-pulse" />
              <div className="h-10 sm:h-12 w-4/5 rounded-xl bg-gradient-to-r from-cyan-400/20 via-accent-violet/20 to-accent-blue/20 animate-pulse" />
            </div>

            {/* Description Paragraph Skeleton */}
            <div className="w-full max-w-md space-y-2 pt-2">
              <div className="h-3.5 w-full rounded bg-white/[0.05] animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-white/[0.05] animate-pulse" />
              <div className="h-3.5 w-3/4 rounded bg-white/[0.05] animate-pulse" />
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="h-12 w-36 rounded-xl bg-white/[0.12] animate-pulse" />
              <div className="h-12 w-36 rounded-xl bg-white/[0.05] border border-white/10 animate-pulse" />
              <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/5 animate-pulse" />
              <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/5 animate-pulse" />
            </div>
          </div>

          {/* Right Column: Portrait Skeleton */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-white/[0.04] border border-white/10 p-4 shadow-2xl flex flex-col justify-between overflow-hidden animate-pulse">
              {/* Inner Avatar Glow Placeholder */}
              <div className="w-full h-full rounded-2xl bg-white/[0.05] flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-cyan-400/15 blur-xl animate-pulse" />
                
                {/* Moving shimmer light wave */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              </div>

              {/* Bottom tag placeholder */}
              <div className="mt-3 flex items-center justify-between">
                <div className="h-3 w-28 rounded bg-white/[0.08]" />
                <div className="h-3 w-16 rounded bg-cyan-400/20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
