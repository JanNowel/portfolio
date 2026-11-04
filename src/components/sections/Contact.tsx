import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { triggerConfetti } from '../../utils/confetti';
import { fadeInUp } from '../../utils/animations';

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
  const [copiedMessage, setCopiedMessage] = useState(false);

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
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic processing state
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
    triggerConfetti();

    // Prepare mailto link as client-side fallback
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

  const copyMessageToClipboard = () => {
    const fullText = `Subject: ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080808] border-t border-white/[0.05] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 06. GET IN TOUCH"
          title="Let's Build Something."
          titleHighlight="Start a Conversation."
          subtitle="Interested in hiring for an internship, collaborating on a software project, or discussing full-stack development? Reach out anytime."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#121217]/90 border border-white/[0.08] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Feel free to message me regarding internship openings, freelance projects, technical collaborations, or just to say hi.
              </p>

              {/* Email item */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-violet" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-accent-violet-light transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location} (Remote / On-site Ready)
                    </div>
                  </div>
                </div>

                {/* GitHub & LinkedIn Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all flex items-center gap-3 group"
                  >
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400">GitHub</div>
                      <div className="text-xs font-bold text-white group-hover:text-accent-violet-light">
                        @JanNowel
                      </div>
                    </div>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-blue/40 transition-all flex items-center gap-3 group"
                  >
                    <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-accent-blue" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400">LinkedIn</div>
                      <div className="text-xs font-bold text-white group-hover:text-accent-blue-light">
                        Connect
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-violet/10 via-[#13121d] to-[#0f0e18] border border-accent-violet/20 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent-violet/20 border border-accent-violet/30">
                <Sparkles className="w-6 h-6 text-accent-violet-light" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Currently Open for Inquiries</h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Full-stack engineering, mobile apps, software internships, and freelance projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121217]/90 border border-white/[0.08] backdrop-blur-md">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">Message Ready to Dispatch!</h3>
                      <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Because this portfolio runs client-side, your default mail client was triggered. You can also copy your message below to send directly to <span className="font-mono text-accent-violet-light">{PERSONAL_INFO.email}</span>.
                      </p>
                    </div>

                    {/* Pre-formatted message card */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left max-w-lg mx-auto text-xs font-mono text-zinc-300 space-y-1.5">
                      <div><span className="text-zinc-500">Subject:</span> {formData.subject}</div>
                      <div><span className="text-zinc-500">Sender:</span> {formData.name} ({formData.email})</div>
                      <div className="pt-2 border-t border-white/[0.06] text-zinc-400 max-h-24 overflow-y-auto">
                        {formData.message}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={copyMessageToClipboard}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                      >
                        {copiedMessage ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedMessage ? 'Copied to Clipboard!' : 'Copy Message Text'}</span>
                      </button>

                      <button
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-accent-violet" />
                        <span>Send a Message</span>
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">All fields required</span>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Rivera"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                            errors.name
                              ? 'border-red-500/60 focus:border-red-500'
                              : 'border-white/10 focus:border-accent-violet/60 focus:bg-white/[0.05]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500/60 focus:border-red-500'
                              : 'border-white/10 focus:border-accent-violet/60 focus:bg-white/[0.05]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Collaboration / Internship Opportunity"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors ${
                          errors.subject
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/10 focus:border-accent-violet/60 focus:bg-white/[0.05]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, team, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/10 focus:border-accent-violet/60 focus:bg-white/[0.05]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-white hover:bg-zinc-100 disabled:opacity-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>Preparing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4 text-black" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] font-mono text-zinc-400 text-center pt-1">
                      Direct client-side dispatch with pre-filled email client fallback.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
