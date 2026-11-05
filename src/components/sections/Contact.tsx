import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Briefcase,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { triggerConfetti } from '../../utils/confetti';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactChannels = [
    {
      id: 'email',
      icon: Mail,
      label: 'Direct Email',
      value: PERSONAL_INFO.email,
      description:
        'Fastest channel for project estimates, commissions, client proposals, or confidential inquiries.',
      actionLabel: 'Send Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      isExternal: false,
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn Network',
      value: 'linkedin.com/in/jhonnoelbaculpo',
      description:
        'Connect for professional networking, career discussions, recommendations, and technical hiring.',
      actionLabel: 'Connect',
      href: PERSONAL_INFO.linkedin,
      isExternal: true,
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub Profile',
      value: 'github.com/JanNowel',
      description:
        'Explore repositories, inspect open-source contributions, architecture patterns, and commit activity.',
      actionLabel: 'View Repositories',
      href: PERSONAL_INFO.github,
      isExternal: true,
    },
  ];

  const professionalHighlights = [
    {
      icon: Briefcase,
      label: 'Work Availability',
      value: 'Full-Time, Commissions, OJT & Junior Roles',
    },
    {
      icon: MapPin,
      label: 'Location & Mode',
      value: `${PERSONAL_INFO.location} • Remote / Hybrid`,
    },
    {
      icon: Clock,
      label: 'Response Window',
      value: 'Typically within 24 hours (UTC+8)',
    },
    {
      icon: ShieldCheck,
      label: 'Code Quality',
      value: 'Clean Architecture, Scalable & Well-Tested',
    },
  ];

  return (
    <section id="contact" className="pt-4 border-t border-zinc-900">
      {/* Section Header */}
      <SectionHeading
        badge="08 — contact & inquiry"
        title="Start a Conversation."
        titleHighlight="Let's Build Together."
        subtitle="Have a software project, commission, or full-stack role in mind? Reach me directly through my verified channels."
      />

      {/* Main Direct Contact Spotlight Card */}
      <div className="mb-8 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Info */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Work & Collabs</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Primary Direct Channel
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-white tracking-tight break-all">
                {PERSONAL_INFO.email}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-xl">
              Direct inbox access. Feel free to send project briefs, architecture questions, or commission proposals anytime.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Compose Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3 Direct Professional Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          return (
            <div
              key={channel.id}
              className="flex flex-col justify-between p-5 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 hover:border-zinc-700/80 transition-colors space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-zinc-300" />
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    {channel.label}
                  </div>
                  <div className="text-sm font-mono font-semibold text-zinc-200 mt-0.5 truncate">
                    {channel.value}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {channel.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900">
                <a
                  href={channel.href}
                  target={channel.isExternal ? '_blank' : undefined}
                  rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-colors group"
                >
                  <span>{channel.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Professional Working Information Details Bar */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-zinc-400" />
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Collaboration & Professional Overview
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {professionalHighlights.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <ItemIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </span>
                </div>
                <div className="text-xs font-mono font-medium text-zinc-200 leading-snug">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
