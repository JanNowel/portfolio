import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonHero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden z-20 pointer-events-none bg-[#09090b]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Placeholders */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Status Pill Skeleton */}
            <div className="h-6 w-52 rounded-full bg-zinc-900 border border-zinc-800 animate-pulse" />

            {/* Name Skeleton */}
            <div className="h-12 sm:h-14 w-80 rounded-lg bg-zinc-900 animate-pulse" />

            {/* Professional Title Skeleton */}
            <div className="h-5 w-64 rounded bg-zinc-900 animate-pulse" />

            {/* Intro Paragraph Skeleton */}
            <div className="w-full max-w-md space-y-2 pt-2">
              <div className="h-3.5 w-full rounded bg-zinc-900 animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-zinc-900 animate-pulse" />
              <div className="h-3.5 w-4/6 rounded bg-zinc-900 animate-pulse" />
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="h-10 w-36 rounded-full bg-zinc-800 animate-pulse" />
              <div className="h-10 w-32 rounded-full bg-zinc-900 border border-zinc-800 animate-pulse" />
              <div className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 animate-pulse" />
              <div className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 animate-pulse" />
            </div>
          </div>

          {/* Right Column: Portrait Skeleton */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-3 flex flex-col justify-between animate-pulse">
              <div className="w-full h-full rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800/80">
                <div className="w-20 h-20 rounded-full bg-zinc-900" />
              </div>
              <div className="mt-2.5 flex items-center justify-between px-1">
                <div className="h-2.5 w-24 rounded bg-zinc-800" />
                <div className="h-2.5 w-16 rounded bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
