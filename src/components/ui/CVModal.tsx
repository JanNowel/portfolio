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
Trinidad Municipal College                                               Jan 2022 - Jan 2026 (Expected)
Bachelor of Science in Information Technology (BSIT)                     Trinidad, Bohol, Philippines

Senior High School                                                       Jan 2020 - Jan 2022
Information and Communications Technology (ICT Strand)                   Bohol, Philippines

EXPERIENCE
FAST Distribution Corp. (Internship / OJT)                               Ubay / Bohol, Philippines
Software Developer Intern | React Native, TypeScript, Node.js, MongoDB   Jan 2025 - Present
• Accelerated order reconciliation speed by 35% by developing responsive inventory logging and tracking modules using React Native and Node.js.
• Decreased API response time by 40% by designing modular RESTful endpoints with Express.js and structured input validation.
• Surfaced 8+ key operational logistics metrics in real time by building clean data visualization dashboards with MongoDB aggregation.
• Prevented ~30% of post-deployment data errors by enforcing strict TypeScript interfaces, schema validation, and collaborative Git code reviews.

Freelance & Independent Software Development                             Bohol, Philippines (Remote)
Full-Stack & Mobile Developer | MERN Stack, TypeScript, Flutter, Supabase Jan 2024 - Present
• Delivered 4+ end-to-end web and mobile applications, achieving 99.5% uptime by leveraging React, Node.js, and Supabase BaaS.
• Cut client inquiry turnaround time by 50% by architecting automated scheduling, reservation tracking, and booking workflows.
• Reduced mobile app cold start times by 25% by implementing optimized asset bundling and state management in React Native and Flutter.
• Enhanced data security and authorization compliance by implementing JWT-based authentication and PostgreSQL Row-Level Security (RLS).

PROJECTS
eBantay - Municipal Incident Reporting & Hazard Monitoring System         Jan 2025 - Present
MERN Stack, React Native, Expo, MongoDB, Leaflet GIS, Node.js, Express.js
• Accelerated emergency response dispatch by 40% by engineering a geospatial incident reporting platform with Leaflet GIS maps and GPS tagging.
• Triaged and categorized 100+ municipal hazard reports by implementing automated incident severity classification and status updates.
• Enabled 100% offline incident reporting in low-connectivity rural zones by integrating local storage caching and background sync with React Native.

REGEBook - Online Booking & Client Management Platform                   Jan 2024 - Dec 2024
React, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS
• Eliminated 100% of double-booking scheduling conflicts for REGE Styling & Catering by building a real-time reservation and calendar management system.
• Increased booking conversion by 30% by developing an interactive catering package builder and automated invoice estimate generator.
• Decreased database query latency by 45% by structuring normalized Mongoose schemas and compound indexing in MongoDB.

Student Hub - Academic Collaboration & Productivity Mobile App           Aug 2024 - Present
Flutter, Dart, Supabase, PostgreSQL, Realtime Subscriptions
• Supported 50+ active student peers with task organization and academic scheduling by engineering a cross-platform mobile app in Flutter and Dart.
• Brought peer messaging and notice synchronization latency under 1 second by integrating Supabase Realtime WebSockets.
• Secured lecture document and course materials sharing by configuring Supabase Storage buckets and Row-Level Security policies.

TECHNICAL SKILLS
Programming Languages: JavaScript (ES6+), TypeScript, Python, Dart, SQL, HTML5, CSS3, PHP
Frameworks & Libraries: React.js, React Native, Node.js, Express.js, Flutter, Tailwind CSS, Expo, Leaflet GIS, Mongoose
Databases & Cloud: MongoDB, PostgreSQL, Supabase, SQLite, Cloudflare Workers/Pages, Edge Deployment
Developer Tools: Git, GitHub, VS Code, Postman, Docker, Android Studio, Linux CLI, CI/CD Workflows

CERTIFICATIONS
• Applied AI & Advanced Prompt Engineering — Generative AI & LLM Systems Specialization (2024)
• Full-Stack Web Development & Architecture — Technical Capstone & Independent Software Projects (2024)
• Cross-Platform Mobile Application Engineering — Mobile Development Track (React Native & Flutter) (2024)
• Git Version Control & Agile Team Practices — Collaborative Software Engineering Practices (2023)
• Python Software & Systems Engineering — Systems & Desktop Diagnostic Development (2023)

ACTIVITIES
Student Developer & Tech Community                                       Trinidad Municipal College / Bohol
Technical Lead & Student Peer Mentor                                     Jan 2024 - Present
• Mentored 15+ junior IT students in web and mobile fundamentals, lifting team project completion rates by 35% through weekly code reviews.
• Conducted hands-on workshops on Git workflows and MERN development, growing active student participant attendance by 40%.
• Organized campus software showcase demos and collaborative coding sprints, showcasing student-built prototypes to faculty and peers.`;

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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-300">
                  ATS-Friendly 1-Page Format
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> XYZ Formula Verified
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Jhon Noel Baculpo — Curriculum Vitae
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
                title="Copy ATS plain text for web job portals"
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
                title="Print or Save as single-page PDF"
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
            className="bg-white text-zinc-900 rounded-lg p-6 sm:p-9 shadow-lg text-[12.5px] sm:text-[13px] leading-relaxed font-sans max-w-3xl mx-auto selection:bg-zinc-200"
          >
            {/* Header */}
            <div className="text-center mb-4 pb-2">
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
                <span>•</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* 1. EDUCATION */}
            <section className="mb-3.5">
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Education
              </h2>

              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Trinidad Municipal College</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Jan 2022 - Jan 2026 (Expected)</span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-800 italic text-[12px]">
                    <span>Bachelor of Science in Information Technology (BSIT)</span>
                    <span className="font-normal not-italic text-zinc-600 text-[11.5px]">Trinidad, Bohol, Philippines</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Senior High School</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Jan 2020 - Jan 2022</span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-800 italic text-[12px]">
                    <span>Technical-Vocational-Livelihood: Information and Communications Technology (ICT Strand)</span>
                    <span className="font-normal not-italic text-zinc-600 text-[11.5px]">Bohol, Philippines</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. EXPERIENCE */}
            <section className="mb-3.5">
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Experience
              </h2>

              <div className="space-y-3">
                {/* Fast Distribution */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>FAST Distribution Corp. (Internship / OJT)</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Ubay / Bohol, Philippines</span>
                  </div>
                  <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                    <span>Software Developer Intern | React Native, TypeScript, Node.js, MongoDB</span>
                    <span className="font-normal not-italic text-zinc-700 text-[11.5px]">Jan 2025 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px]">
                    <li>
                      <strong>Accelerated order reconciliation speed by 35%</strong> by developing responsive inventory logging and tracking modules using <strong>React Native and Node.js</strong>.
                    </li>
                    <li>
                      <strong>Decreased API response time by 40%</strong> by designing modular RESTful endpoints with <strong>Express.js and structured input validation</strong>.
                    </li>
                    <li>
                      <strong>Surfaced 8+ key operational logistics metrics in real time</strong> by building clean data visualization dashboards with <strong>MongoDB aggregation</strong>.
                    </li>
                    <li>
                      <strong>Prevented ~30% of post-deployment data errors</strong> by enforcing strict TypeScript interfaces, schema validation, and collaborative Git code reviews.
                    </li>
                  </ul>
                </div>

                {/* Freelance */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Freelance & Independent Software Development</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Bohol, Philippines (Remote)</span>
                  </div>
                  <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                    <span>Full-Stack & Mobile Developer | MERN Stack, TypeScript, Flutter, Supabase</span>
                    <span className="font-normal not-italic text-zinc-700 text-[11.5px]">Jan 2024 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px]">
                    <li>
                      <strong>Delivered 4+ end-to-end web and mobile applications</strong>, achieving 99.5% uptime by leveraging <strong>React, Node.js, and Supabase BaaS</strong>.
                    </li>
                    <li>
                      <strong>Cut client inquiry turnaround time by 50%</strong> by architecting automated scheduling, reservation tracking, and booking workflows.
                    </li>
                    <li>
                      <strong>Reduced mobile app cold start times by 25%</strong> by implementing optimized asset bundling and state management in <strong>React Native and Flutter</strong>.
                    </li>
                    <li>
                      <strong>Enhanced data security and authorization compliance</strong> by implementing JWT-based authentication and PostgreSQL Row-Level Security (RLS).
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. PROJECTS */}
            <section className="mb-3.5">
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Projects
              </h2>

              <div className="space-y-2.5">
                {/* Project 1: eBantay */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>eBantay – Municipal Incident Reporting System | MERN, React Native, Leaflet GIS</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Jan 2025 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px] mt-0.5">
                    <li>
                      <strong>Accelerated emergency response dispatch by 40%</strong> by engineering a geospatial incident reporting platform with <strong>Leaflet GIS maps and GPS tagging</strong>.
                    </li>
                    <li>
                      <strong>Triaged and categorized 100+ municipal hazard reports</strong> by implementing automated incident severity classification and status updates.
                    </li>
                    <li>
                      <strong>Enabled 100% offline incident reporting</strong> in low-connectivity rural zones by integrating local storage caching and background sync with <strong>React Native</strong>.
                    </li>
                  </ul>
                </div>

                {/* Project 2: REGEBook */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>REGEBook – Online Booking & Client Management Platform | React, TypeScript, Express, MongoDB</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Jan 2024 - Dec 2024</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px] mt-0.5">
                    <li>
                      <strong>Eliminated 100% of double-booking scheduling conflicts</strong> for REGE Styling & Catering by building a real-time reservation and calendar management system.
                    </li>
                    <li>
                      <strong>Increased booking conversion by 30%</strong> by developing an interactive catering package builder and automated invoice estimate generator.
                    </li>
                    <li>
                      <strong>Decreased database query latency by 45%</strong> by structuring normalized Mongoose schemas and compound indexing in <strong>MongoDB</strong>.
                    </li>
                  </ul>
                </div>

                {/* Project 3: Student Hub */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span>Student Hub – Academic Collaboration & Productivity Mobile App | Flutter, Dart, Supabase</span>
                    <span className="text-[11.5px] font-normal text-zinc-700">Aug 2024 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px] mt-0.5">
                    <li>
                      <strong>Supported 50+ active student peers</strong> with task organization and academic scheduling by engineering a cross-platform mobile app in <strong>Flutter and Dart</strong>.
                    </li>
                    <li>
                      <strong>Brought peer messaging and notice synchronization latency under 1 second</strong> by integrating <strong>Supabase Realtime WebSockets</strong>.
                    </li>
                    <li>
                      <strong>Secured lecture document and course materials sharing</strong> by configuring <strong>Supabase Storage buckets and Row-Level Security policies</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. TECHNICAL SKILLS */}
            <section className="mb-3.5">
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Technical Skills
              </h2>

              <div className="space-y-1 text-[12px] text-zinc-800">
                <div>
                  <strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, Python, Dart, SQL, HTML5, CSS3, PHP
                </div>
                <div>
                  <strong>Frameworks & Libraries:</strong> React.js, React Native, Node.js, Express.js, Flutter, Tailwind CSS, Expo, Leaflet GIS, Mongoose
                </div>
                <div>
                  <strong>Databases & Cloud:</strong> MongoDB, PostgreSQL, Supabase, SQLite, Cloudflare Workers/Pages, Edge Deployment
                </div>
                <div>
                  <strong>Developer Tools:</strong> Git, GitHub, VS Code, Postman, Docker, Android Studio, Linux CLI, CI/CD Workflows
                </div>
              </div>
            </section>

            {/* 5. CERTIFICATIONS */}
            <section className="mb-3.5">
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Certifications
              </h2>

              <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px]">
                <li>
                  <strong>Applied AI & Advanced Prompt Engineering</strong> — Generative AI & LLM Systems Specialization (2024)
                </li>
                <li>
                  <strong>Full-Stack Web Development & Architecture</strong> — Technical Capstone & Independent Software Projects (2024)
                </li>
                <li>
                  <strong>Cross-Platform Mobile Application Engineering</strong> — Mobile Development Track (React Native & Flutter) (2024)
                </li>
                <li>
                  <strong>Git Version Control & Agile Team Practices</strong> — Collaborative Software Engineering Practices (2023)
                </li>
                <li>
                  <strong>Python Software & Systems Engineering</strong> — Systems & Desktop Diagnostic Development (2023)
                </li>
              </ul>
            </section>

            {/* 6. ACTIVITIES */}
            <section>
              <h2 className="text-[12px] font-bold text-black uppercase tracking-wider pb-0.5 border-b border-black resume-divider mb-1.5">
                Activities
              </h2>

              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Student Developer & Tech Community</span>
                  <span className="text-[11.5px] font-normal text-zinc-700">Trinidad Municipal College / Bohol</span>
                </div>
                <div className="flex justify-between items-baseline text-[12px] text-zinc-800 italic mb-1">
                  <span>Technical Lead & Student Peer Mentor</span>
                  <span className="font-normal not-italic text-zinc-700 text-[11.5px]">Jan 2024 - Present</span>
                </div>
                <ul className="list-disc ml-5 space-y-0.5 text-zinc-800 text-[12px]">
                  <li>
                    <strong>Mentored 15+ junior IT students in web and mobile fundamentals</strong>, lifting team project completion rates by <strong>35%</strong> through weekly code reviews.
                  </li>
                  <li>
                    <strong>Conducted hands-on workshops on Git workflows and MERN development</strong>, growing active student participant attendance by <strong>40%</strong>.
                  </li>
                  <li>
                    <strong>Organized campus software showcase demos and collaborative coding sprints</strong>, showcasing student-built prototypes to faculty and peers.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Modal Footer Note */}
          <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <span>
              ✓ Single-column ATS format • Real portfolio data framed in Google XYZ formula
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
