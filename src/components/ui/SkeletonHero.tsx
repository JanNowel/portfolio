import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonHero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="space-y-16 sm:space-y-20 pointer-events-none"
    >
      {/* ============================================================
          HERO SKELETON (Matching 2-Column Minimalist Layout)
          ============================================================ */}
      <section className="pt-8 sm:pt-12 pb-14">
        <div className="space-y-10">
          {/* Main 2-Column Hero Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Portrait Frame Skeleton */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="w-full max-w-[280px] sm:max-w-[300px] aspect-square rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-2 sm:p-2.5 flex flex-col justify-between">
                <div className="w-full h-[85%] rounded-xl skeleton-shimmer border border-zinc-800/60" />
                <div className="px-2 py-1 flex items-center justify-between">
                  <div className="h-2.5 w-24 rounded skeleton-shimmer" />
                  <div className="h-2.5 w-16 rounded skeleton-shimmer" />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Intro Skeleton */}
            <div className="md:col-span-7 space-y-5">
              {/* Status Badge */}
              <div className="h-6 w-44 rounded-full skeleton-shimmer border border-zinc-800" />

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <div className="h-10 sm:h-12 w-3/4 rounded-lg skeleton-shimmer" />
                <div className="h-5 sm:h-6 w-1/2 rounded skeleton-shimmer" />
              </div>

              {/* Narrative Paragraphs */}
              <div className="space-y-2 pt-1">
                <div className="h-3.5 w-full rounded skeleton-shimmer" />
                <div className="h-3.5 w-11/12 rounded skeleton-shimmer" />
                <div className="h-3.5 w-4/5 rounded skeleton-shimmer" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="h-11 w-36 rounded-xl skeleton-shimmer" />
                <div className="h-11 w-32 rounded-xl skeleton-shimmer border border-zinc-800" />
                <div className="h-11 w-28 rounded-xl skeleton-shimmer border border-zinc-800" />
              </div>
            </div>
          </div>

          {/* Tech Framework Strip Skeleton */}
          <div className="pt-4 border-t border-zinc-900 space-y-3">
            <div className="h-3 w-40 rounded skeleton-shimmer" />
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 rounded-xl skeleton-shimmer border border-zinc-800/60"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT SKELETON
          ============================================================ */}
      <section className="pt-4 border-t border-zinc-900 space-y-6">
        {/* Section Heading Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-28 rounded-full skeleton-shimmer" />
          <div className="h-7 w-64 rounded-lg skeleton-shimmer" />
          <div className="h-4 w-80 rounded skeleton-shimmer" />
        </div>

        {/* Narrative Box */}
        <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 space-y-3">
          <div className="h-3.5 w-full rounded skeleton-shimmer" />
          <div className="h-3.5 w-5/6 rounded skeleton-shimmer" />
          <div className="h-3.5 w-4/6 rounded skeleton-shimmer" />
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#0c0c0e] border border-zinc-800/80 space-y-2"
            >
              <div className="h-6 w-12 rounded skeleton-shimmer" />
              <div className="h-3 w-20 rounded skeleton-shimmer" />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          PROJECTS SKELETON
          ============================================================ */}
      <section className="pt-4 border-t border-zinc-900 space-y-6">
        {/* Section Heading Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-32 rounded-full skeleton-shimmer" />
          <div className="h-7 w-72 rounded-lg skeleton-shimmer" />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 rounded-lg skeleton-shimmer border border-zinc-800/60"
            />
          ))}
        </div>

        {/* 2 Project Cards Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6 space-y-4"
            >
              {/* Media Preview Box */}
              <div className="w-full h-44 sm:h-52 rounded-xl skeleton-shimmer border border-zinc-800/60" />

              {/* Title & Desc */}
              <div className="space-y-2">
                <div className="h-5 w-48 rounded skeleton-shimmer" />
                <div className="h-3.5 w-full rounded skeleton-shimmer" />
                <div className="h-3.5 w-3/4 rounded skeleton-shimmer" />
              </div>

              {/* Tags & Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                <div className="flex gap-1.5">
                  <div className="h-6 w-16 rounded skeleton-shimmer" />
                  <div className="h-6 w-16 rounded skeleton-shimmer" />
                  <div className="h-6 w-16 rounded skeleton-shimmer" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 rounded-lg skeleton-shimmer" />
                  <div className="h-8 w-20 rounded-lg skeleton-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export const SkeletonPage = SkeletonHero;
