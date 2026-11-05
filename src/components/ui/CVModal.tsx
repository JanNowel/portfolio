import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, Sparkles, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { modalVariants } from '../../utils/animations';
import { triggerConfetti } from '../../utils/confetti';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  const plainTextResume = `JHON NOEL BACULPO
(+63) 948-261-2678 | ${PERSONAL_INFO.email} | linkedin.com/in/jhonnoelbaculpo | github.com/JanNowel | ${PERSONAL_INFO.location}

EDUCATION
Trinidad Municipal College                                               Jan 2022 - Jan 2026
Bachelor of Science in Information Technology (BSIT)

Senior High School                                                       Jan 2020 - Jan 2022
Information and Communications Technology (ICT Strand)

EXPERIENCE
FAST Distribution Corp. (Internship)                                     Bohol / Cebu, Philippines
Software Developer Intern | React Native, TypeScript, Node.js            Jan 2025 - Present
• Cut manual task time by 30% by building 8 mobile and web features with React Native, Node.js, and MongoDB.
• Reduced average API response time by 40% by developing REST APIs with Express.js and JWT.
• Surfaced 5+ key metrics in real time by creating live dashboards with MongoDB and responsive analytics.
• Lowered post-release bugs by 35% by adding input validation, automated testing, and CI/CD.

Freelance Full-Stack Developer                                           Remote, Philippines
Full-Stack Engineer | React, Next.js, Node.js, Express, MongoDB          Jan 2024 - Present
• Raised weekly active users by 25% by delivering 6 full-stack features with React, Next.js, Node.js, and MongoDB.
• Cut p95 API latency by 45% by building secured REST APIs with Express.js, JWT, and PostgreSQL.
• Saved the team ~8 hours weekly by integrating third-party APIs and cloud storage for file uploads and data sync.
• Speed up report generation by 50% by optimizing database queries with MongoDB aggregation and indexing.

PROJECTS
eBantay - Community Incident Reporting & Dispatch System                 Jan 2025 - Present
React, TypeScript, Node.js, Express.js, MongoDB, Socket.IO
• Processed 100+ community emergency incidents by building an e-reporting platform with React, Node.js, and MongoDB.
• Reduced dispatch drop-off by 20% by integrating real-time geolocation tagging and JWT authentication.
• Scaled the app to handle 3x traffic by optimizing API and database performance.

MedSync - Healthcare Clinical Management Platform                        Jan 2024 - Jan 2025
Next.js, Express.js, PostgreSQL, Tailwind CSS, Prisma
• Supported 50+ active users by developing a task & patient management application with Next.js and PostgreSQL.
• Brought status-update latency under 1 second by implementing real-time updates with Socket.IO.
• Tracked 10+ productivity metrics by building analytics dashboards with charts and filtering.

TECHNICAL SKILLS
Programming Languages: JavaScript (ES6+), TypeScript, Python, Java, SQL, HTML5, CSS3, PHP
Frameworks & Libraries: React.js, Next.js, Node.js, Express.js, React Native, Flutter, Tailwind CSS, Prisma, Socket.IO
Databases & Tools: PostgreSQL, MongoDB, MySQL, Supabase, Git, Docker, Postman, Figma, Linux, CI/CD

CERTIFICATIONS
• Oracle Cloud Infrastructure (OCI) 2024 Generative AI Certified Professional - Oracle (2024)
• Full-Stack Web Development Specialization - FreeCodeCamp (2024)
• Foundational Cybersecurity & Agile Practices - Google Career Certificates (2023)

ACTIVITIES
Student Developer Community                                              Bohol, Philippines
Technical Lead                                                           Jan 2024 - Present
• Grew workshop attendance by 40% by leading technical workshops and coding sessions on web and software engineering.
• Lifted member engagement by 30% by coordinating with student developers and organizers to plan community events.
• Mentored 20+ students to ship 10+ projects through programming activities, project reviews, and learning initiatives.`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 p-4 sm:p-6 md:p-8 shadow-2xl z-10 max-h-[95vh] overflow-y-auto"
        >
          {/* Top Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-300">
                  ATS-Friendly 1-Page Format
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> XYZ Bullet Structure
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Developer Resume Template & Preview
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
                title="Copy ATS plain text version for web forms"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* =========================================================
              AUTHENTIC ATS ONE-PAGE RESUME DOCUMENT (#resume-document)
              Single-column, high parseability, crisp typography
              ========================================================= */}
          <div
            id="resume-document"
            className="bg-white text-zinc-900 rounded-lg p-6 sm:p-10 shadow-lg text-[13px] sm:text-[13.5px] leading-relaxed font-sans max-w-3xl mx-auto selection:bg-zinc-200"
          >
            {/* Header */}
            <div className="text-center mb-5 pb-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-[12px] sm:text-[12.5px] text-zinc-700 font-normal flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>(+63) 948-261-2678</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-black">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black"
                >
                  linkedin.com/in/jhonnoelbaculpo
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black"
                >
                  github.com/JanNowel
                </a>
              </div>
            </div>

            {/* 1. EDUCATION */}
            <section className="mb-4">
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Education
              </h2>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Trinidad Municipal College</span>
                    <span className="text-[12px] font-normal text-zinc-700">Jan 2022 - Jan 2026</span>
                  </div>
                  <div className="text-zinc-800 italic text-[12.5px]">
                    Bachelor of Science in Information Technology (BSIT)
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Senior High School</span>
                    <span className="text-[12px] font-normal text-zinc-700">Jan 2020 - Jan 2022</span>
                  </div>
                  <div className="text-zinc-800 italic text-[12.5px]">
                    Senior High School - Information and Communications Technology (ICT Strand)
                  </div>
                </div>
              </div>
            </section>

            {/* 2. EXPERIENCE */}
            <section className="mb-4">
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Experience
              </h2>

              <div className="space-y-3.5">
                {/* Fast Distribution */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>FAST Distribution Corp. (Internship)</span>
                    <span className="text-[12px] font-normal text-zinc-700">Bohol / Cebu, Philippines</span>
                  </div>
                  <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                    <span>Software Developer Intern | React Native, TypeScript, Node.js, PostgreSQL</span>
                    <span className="font-normal not-italic text-zinc-700">Jan 2025 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px]">
                    <li>
                      <strong>Cut manual task time by 30%</strong> by building 8 mobile dispatch and tracking features with <strong>React Native, Node.js, and MongoDB</strong>.
                    </li>
                    <li>
                      <strong>Reduced average API response time by 40%</strong> by developing secure REST APIs with <strong>Express.js, JWT, and PostgreSQL</strong>.
                    </li>
                    <li>
                      <strong>Surfaced 5+ key metrics in real time</strong> by creating live operational dashboards with <strong>MongoDB aggregation</strong> and responsive analytics.
                    </li>
                    <li>
                      <strong>Lowered post-release bugs by 35%</strong> by adding rigorous input validation, automated regression testing, and CI/CD checks.
                    </li>
                  </ul>
                </div>

                {/* Freelance */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Freelance Development (Full Time / Contract)</span>
                    <span className="text-[12px] font-normal text-zinc-700">Remote, Philippines</span>
                  </div>
                  <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                    <span>Full-Stack Engineer | React, Next.js, Node.js, Express, MongoDB</span>
                    <span className="font-normal not-italic text-zinc-700">Jan 2024 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px]">
                    <li>
                      <strong>Raised weekly active users by 25%</strong> by delivering 6 production full-stack features with <strong>React, Next.js, Node.js, and MongoDB</strong>.
                    </li>
                    <li>
                      <strong>Cut p95 API latency by 45%</strong> by architecting indexed REST APIs with <strong>Express.js, JWT, and PostgreSQL</strong>.
                    </li>
                    <li>
                      <strong>Saved the team ~8 hours weekly</strong> by integrating third-party APIs, Supabase real-time sync, and cloud file storage.
                    </li>
                    <li>
                      <strong>Sped up report generation by 50%</strong> by optimizing complex database queries with <strong>MongoDB aggregation pipelines</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. PROJECTS */}
            <section className="mb-4">
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Projects
              </h2>

              <div className="space-y-3">
                {/* Project 1 */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>eBantay - Community Incident Reporting System | React, TypeScript, Node.js</span>
                    <span className="text-[12px] font-normal text-zinc-700">Jan 2025 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px] mt-1">
                    <li>
                      <strong>Processed 100+ community emergency incidents</strong> by engineering a full-stack incident reporting platform with <strong>React, Node.js, Express.js, and MongoDB</strong>.
                    </li>
                    <li>
                      <strong>Reduced emergency dispatch drop-off by 20%</strong> by integrating real-time geolocation tagging and JWT authentication.
                    </li>
                    <li>
                      <strong>Scaled the app to handle 3x concurrent traffic</strong> by optimizing database query performance and state caching.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>MedSync - Healthcare Clinical Management Platform | Next.js, PostgreSQL</span>
                    <span className="text-[12px] font-normal text-zinc-700">Jan 2024 - Jan 2025</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px] mt-1">
                    <li>
                      <strong>Supported 50+ active healthcare users</strong> by developing a task and clinical management platform with <strong>Next.js, Express.js, PostgreSQL, and Prisma</strong>.
                    </li>
                    <li>
                      <strong>Brought status-update latency under 1 second</strong> by implementing real-time websocket synchronization with <strong>Socket.IO</strong>.
                    </li>
                    <li>
                      <strong>Tracked 10+ productivity metrics</strong> by building interactive clinic analytics dashboards with charting and filtering.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. TECHNICAL SKILLS */}
            <section className="mb-4">
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Technical Skills
              </h2>

              <div className="space-y-1 text-[12.5px] text-zinc-800">
                <div>
                  <strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, SQL, HTML5, CSS3, PHP
                </div>
                <div>
                  <strong>Frameworks & Libraries:</strong> React.js, Next.js, Node.js, Express.js, React Native, Flutter, Tailwind CSS, Prisma, Socket.IO
                </div>
                <div>
                  <strong>Databases & Tools:</strong> PostgreSQL, MongoDB, MySQL, Supabase, Git, Docker, AWS, Postman, Figma, Linux, CI/CD
                </div>
              </div>
            </section>

            {/* 5. CERTIFICATIONS */}
            <section className="mb-4">
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Certifications
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px]">
                <li>
                  <strong>Oracle Cloud Infrastructure (OCI) 2024 Generative AI Certified Professional</strong> - Oracle (Jan 2024)
                </li>
                <li>
                  <strong>Full-Stack Web Development Specialization</strong> - FreeCodeCamp (2024)
                </li>
                <li>
                  <strong>Foundations of Cybersecurity & Agile Team Practices</strong> - Google Career Certificates (2023)
                </li>
              </ul>
            </section>

            {/* 6. ACTIVITIES */}
            <section>
              <h2 className="text-[12.5px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-2">
                Activities
              </h2>

              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Student Developer Community / University Tech Club</span>
                  <span className="text-[12px] font-normal text-zinc-700">Bohol, Philippines</span>
                </div>
                <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                  <span>Technical Lead & Student Mentor</span>
                  <span className="font-normal not-italic text-zinc-700">Jan 2024 - Present</span>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-zinc-800 text-[12.5px]">
                  <li>
                    <strong>Grew workshop attendance by 40%</strong> by leading technical workshops and coding sessions on web and software engineering.
                  </li>
                  <li>
                    <strong>Lifted member engagement by 30%</strong> by coordinating with student developers and organizers to plan community events.
                  </li>
                  <li>
                    <strong>Mentored 20+ students to ship 10+ projects</strong> through programming activities, project reviews, and learning initiatives.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Modal Footer Note */}
          <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <span>
              ✓ Single-column ATS format • Verified XYZ bullet point structure
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save PDF</span>
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20-%20Jhon%20Noel%20Baculpo`}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Hire Jhon Noel</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
