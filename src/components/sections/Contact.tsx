import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  Loader2,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { triggerConfetti } from '../../utils/confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setIsSuccess(true);
    triggerConfetti();

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="pt-4 border-t border-zinc-900">
      {/* Section Header */}
      <SectionHeading
        badge="08 — contact & inquiry"
        title="Start a Conversation."
        titleHighlight="Available for Work."
        subtitle="For work, collabs, commissions, or technical internships, reach me directly."
      />

      {/* Reference Phrasing Strip matching Reference Video */}
      <div className="mb-10 pb-8 border-b border-zinc-900">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
          For work, collabs & commissions, reach me at:
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Mail className="w-4 h-4 text-zinc-300" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-mono font-semibold text-white break-all">
                {PERSONAL_INFO.email}
              </span>
              <div className="text-[11px] font-mono text-zinc-500">
                {PERSONAL_INFO.location} • Usually responds within 24 hours
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Compose</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Minimalist Message Dispatch Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Quick Info Col */}
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 space-y-4 text-xs font-mono">
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold">
              Online Handles
            </div>

            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>github.com/JanNowel</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-zinc-400" />
                  <span>linkedin.com/in/jhonnoelbaculpo</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-900 text-[11px] text-zinc-400 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5" />
              <span>Open for Commissions, Contract, and OJT</span>
            </div>
          </div>
        </div>

        {/* Form Col */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-3.5 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-5 sm:p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
              Direct Message Form
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 mt-0.5 block">{errors.name}</span>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 mt-0.5 block">{errors.email}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                Subject *
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Project Commission / Full-Stack Work"
                className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
              />
              {errors.subject && (
                <span className="text-[10px] text-red-400 mt-0.5 block">{errors.subject}</span>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                Message *
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your requirements..."
                className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 resize-none"
              />
              {errors.message && (
                <span className="text-[10px] text-red-400 mt-0.5 block">{errors.message}</span>
              )}
            </div>

            {isSuccess && (
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Email client opening with pre-filled message...</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Preparing email client...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
