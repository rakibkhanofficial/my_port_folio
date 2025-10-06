// ats optimize
"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiDownload,
} from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";

const ModerResume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Rakib_Khan_Frontend_Developer",
  });

  return (
    <>
      <style>{`
        @media print {
          @page {
            margin: 0.25in;
            size: letter;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            font-size: 11pt;
            line-height: 1.3;
          }
          
          .print\\:break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          .print\\:break-after-avoid {
            break-after: avoid;
            page-break-after: avoid;
          }
          
          /* Ensure colors print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Ensure gradients and backgrounds print */
          .bg-gradient-to-r,
          .bg-gradient-to-b,
          .bg-blue-50,
          .bg-blue-600,
          .bg-green-600,
          .bg-purple-600,
          .bg-orange-600,
          .bg-pink-600,
          .bg-cyan-600,
          .bg-yellow-50,
          .bg-gray-50,
          .border-blue-600,
          .border-yellow-500,
          .border-blue-500 {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-2">
        <div className="my-4 w-full max-w-4xl bg-white shadow-lg">
          <div className="flex items-center justify-between bg-blue-600 p-4">
            <h1 className="text-xl font-bold text-white">
              ATS-Optimized Resume
            </h1>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-blue-600 transition duration-200 hover:bg-blue-50 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>
          <div ref={resumeRef} className="bg-white p-4 print:p-4">
            {/* Header Section */}
            <div className="border-b-2 border-gray-300 pb-1 text-center">
              <h1 className="text-2xl font-bold text-gray-900">RAKIB KHAN</h1>
              <h2 className="mt-0.5 text-lg font-semibold text-blue-600">
                Frontend Developer | React.js • Next.js • TypeScript
              </h2>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <FiPhone className="h-3 w-3" />
                  <span>01687014788</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMail className="h-3 w-3" />
                  <span>khanrakib218@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="h-3 w-3" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <FiLinkedin className="h-3 w-3" />
                  <span>linkedin.com/in/rakibkhanofficial</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiGithub className="h-3 w-3" />
                  <span>github.com/rakibkhanofficial</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineLanguage className="h-3 w-3" />
                  <span>rakibkhanofficial.com</span>
                </div>
              </div>
            </div>

            {/* Frontend Development Impact Summary */}
            <div className="mt-3 rounded-lg border-2 border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 p-2 print:break-inside-avoid">
              <h3 className="text-xs font-bold text-blue-900">
                💡 Why Choose Me as Your Frontend Developer?
              </h3>
              <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs leading-relaxed">
                <div>
                  <h4 className="font-bold text-gray-900">
                    ✓ Proven Performance Expert
                  </h4>
                  <p className="mt-0.5 text-gray-700">
                    Deliver <strong>40-60% performance improvements</strong> through advanced techniques
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    ✓ Modern Tech Stack Mastery
                  </h4>
                  <p className="mt-0.5 text-gray-700">
                    Expertise in <strong>React.js, Next.js 14, TypeScript</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    ✓ User-Centric Approach
                  </h4>
                  <p className="mt-0.5 text-gray-700">
                    Build <strong>accessible, responsive, SEO-optimized</strong> interfaces
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    ✓ Leadership & Collaboration
                  </h4>
                  <p className="mt-0.5 text-gray-700">
                    Mentor teams to deliver <strong>enterprise solutions</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-2">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                Professional Summary
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-700">
                <strong>Passionate Frontend Developer</strong> with <strong>3+ years expertise</strong> in <strong>React.js, Next.js, TypeScript</strong>. Led frontend for <strong>5+ enterprise apps</strong> serving <strong>10K+ users</strong>. Optimized performance (<strong>45% faster loads</strong>, <strong>60% Core Web Vitals</strong>), SEO (<strong>50% traffic growth</strong>), and WCAG-compliant UI/UX. Skilled in Redux Toolkit, React Query, Tailwind, Jest/Cypress. Mentored juniors, code reviews. Full-stack with <strong>Node.js/NestJS</strong>. Awards: Best Innovation & Performer.
              </p>
              {/* Frontend Expertise Highlight Badges */}
              <div className="mt-1.5 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 p-2">
                <h4 className="text-xs font-bold text-blue-900">
                  Frontend Expertise Highlights:
                </h4>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  <div className="flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    ⚡ 45% Performance Boost
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-green-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    📈 50% SEO Growth
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-purple-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    👥 Team Leadership
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-orange-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    🎯 5+ Enterprise Apps
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-pink-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    ✨ 85%+ Test Coverage
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-cyan-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                    🚀 10K+ Daily Users
                  </div>
                </div>
              </div>
            </div>

            {/* Core Technical Skills */}
            <div className="mt-2 print:break-inside-avoid">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                Core Technical Skills
              </h3>
              <div className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {/* Left Column - Frontend (Main Expertise) - Takes full width first */}
                <div className="col-span-2">
                  <h4 className="text-xs font-bold text-blue-700">
                    ⭐ Frontend Development (Core Expertise):
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                    <strong>React.js 18</strong>, <strong>Next.js 13/14</strong>, <strong>TypeScript</strong>, JS (ES6+), HTML5, CSS3, <strong>Tailwind CSS</strong>, MUI, Styled Components, <strong>Redux Toolkit</strong>, Context API, <strong>React Query</strong>, SWR, Responsive Design, <strong>Performance Optimization</strong>, <strong>SEO</strong>, Accessibility (WCAG)
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                      React.js Expert
                    </span>
                    <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                      Next.js Specialist
                    </span>
                    <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                      TypeScript Pro
                    </span>
                    <span className="rounded-full bg-green-600 px-2 py-0.5 text-xs font-semibold text-white">
                      UI/UX Focused
                    </span>
                  </div>
                </div>

                {/* Right Side - Two Column Grid for Other Skills */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Backend Development:
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                    Node.js, Express.js, NestJS, RESTful API, JWT, OAuth 2.0, NextAuth
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Database & Caching:
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                    MongoDB, MySQL, Prisma ORM, TypeORM, Redis
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Testing & Quality:
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                    Jest, React Testing Library, Cypress, Unit/Integration Testing
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    DevOps & Tools:
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                    Docker, Jenkins, GitHub Actions, Git, Vercel, Netlify, JIRA
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mt-2.5">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                Professional Experience & Career Growth
              </h3>

              {/* Timeline Container */}
              <div className="relative mt-2 pl-6">
                {/* Vertical Timeline Line */}
                <div className="absolute left-2 top-2 h-[calc(100%-1.5rem)] w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>

                {/* Current Position */}
                <div className="relative mb-3 print:break-inside-avoid">
                  {/* Timeline Dot - Current */}
                  <div className="absolute -left-4 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 shadow-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  </div>

                  <div className="rounded-md border-l-4 border-blue-600 bg-blue-50 p-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">
                          Frontend Developer
                        </h4>
                        <p className="text-xs font-semibold text-blue-600">
                          Akij Venture Group | Dhaka, Bangladesh
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full bg-green-600 px-1.5 py-0.5 text-xs font-semibold text-white">
                          Current
                        </span>
                        <p className="mt-0.5 text-xs font-medium text-gray-700">
                          June 2023 – Present
                        </p>
                      </div>
                    </div>
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-gray-700">
                      <li><strong>Leading frontend</strong> for <strong>5+ enterprise apps</strong> serving <strong>10K+ users</strong>, using <strong>React.js 18, Next.js 14, TypeScript</strong>, achieving <strong>99.8% uptime</strong></li>
                      <li><strong>Spearheaded optimizations</strong> with SSR, code splitting, lazy loading; reduced loads by <strong>45% (4.5s → 2.5s)</strong>, improved <strong>Core Web Vitals by 60%</strong></li>
                      <li><strong>Mentored 3 juniors</strong> via code reviews, pair programming; boosted productivity <strong>35%</strong>, reduced defects <strong>40%</strong></li>
                      <li><strong>Architected full-stack</strong> with <strong>NestJS, Express.js, MySQL</strong>, RESTful APIs, <strong>JWT/OAuth RBAC</strong></li>
                      <li><strong>Improved SEO/accessibility</strong> with semantic HTML, ARIA, WCAG 2.1 AA; <strong>50% organic traffic growth</strong></li>
                      <li><strong>Established testing</strong> with Jest, RTL, Cypress; <strong>85%+ coverage</strong>, fewer bugs</li>
                    </ul>
                  </div>
                </div>

                {/* Previous Position */}
                <div className="relative print:break-inside-avoid">
                  {/* Timeline Dot - Previous */}
                  <div className="absolute -left-4 top-1.5 h-3 w-3 rounded-full border-2 border-blue-400 bg-white shadow-sm"></div>

                  <div className="rounded-md border-l-4 border-blue-300 bg-gray-50 p-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">
                          Frontend Developer Intern
                        </h4>
                        <p className="text-xs font-semibold text-blue-600">
                          Akij Venture Group | Dhaka, Bangladesh
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        January 2023 – May 2023
                      </span>
                    </div>
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-gray-700">
                      <li><strong>Developed responsive UIs</strong> with <strong>React.js, JS, CSS</strong>; ensured cross-browser/mobile compatibility</li>
                      <li><strong>Optimized API/data fetching</strong>; improved responses <strong>30%</strong> via state management/caching</li>
                      <li><strong>Collaborated</strong> with seniors/designers for <strong>pixel-perfect designs</strong>; Agile/Scrum participation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="mt-3">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                Key Projects & Frontend Achievements
              </h3>

              <div className="mt-2 space-y-2.5">
                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs font-bold text-blue-700">
                      🚀 Akij Fair Value - Full-Stack E-Commerce Platform
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-gray-700">
                    <strong>Frontend:</strong> React.js 18, Next.js 14, TypeScript, Tailwind | <strong>Backend:</strong> Express.js, MongoDB, NextAuth | <strong>DevOps:</strong> Docker, AWS S3
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-gray-700">
                    <li><strong>Architected frontend</strong> for e-commerce with catalog, cart, <strong>Stripe/PayPal integration</strong>, order management</li>
                    <li><strong>Implemented Next.js SSR/ISR</strong>; <strong>45% faster loads</strong>, <strong>60% SEO improvement</strong></li>
                    <li>Built <strong>secure auth</strong> with <strong>NextAuth</strong> (Google/Facebook OAuth)</li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs font-bold text-blue-700">
                      💼 HRIS - Enterprise Human Resource Management System
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2024 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-gray-700">
                    <strong>Frontend:</strong> React.js 18, Next.js 14, TypeScript, Tailwind, Chart.js | <strong>Backend:</strong> NestJS, MySQL, Prisma
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-gray-700">
                    <li><strong>Developed frontend</strong> for employee data, attendance, leave, payroll for <strong>500+ users</strong></li>
                    <li>Implemented <strong>RBAC</strong> with Context API; built <strong>real-time analytics dashboard</strong> with Chart.js</li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs font-bold text-blue-700">
                      🛡️ Warranty Wizard - Product Warranty Management Platform
                    </h4>
                    <span className="text-xs text-gray-600">
                      Oct 2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-gray-700">
                    <strong>Frontend:</strong> React.js 18, Next.js 14, TypeScript | <strong>Backend:</strong> NestJS, MySQL, Docker, Redis
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-gray-700">
                    <li><strong>Created warranty tracking UI</strong> with notifications, claims, analytics</li>
                    <li>Optimized with <strong>Redis/React Query</strong>; <strong>40% faster API responses</strong></li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs font-bold text-blue-700">
                      🏪 Store Sales & Inventory - Point of Sale System
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2024 – Oct 2024
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-gray-700">
                    <strong>Frontend:</strong> React.js 18, Next.js 14, TypeScript, Tailwind | <strong>Backend:</strong> NestJS, MySQL, NextAuth
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-gray-700">
                    <li><strong>Engineered POS UI</strong> with real-time inventory, barcode, multi-store support</li>
                    <li>Built <strong>customizable dashboard/reports</strong> with data visualization for insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-3 print:break-inside-avoid">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                Education
              </h3>
              <div className="mt-1.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      Bachelor of Technology in Computer Science & Engineering
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold text-blue-600">
                      Lovely Professional University, Punjab, India
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Focus: Web Development, Data Structures, Software Engineering
                    </p>
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Aug 2017 – Aug 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Awards Combined */}
            <div className="mt-3 flex flex-col gap-3 md:flex-row print:flex-row">
              <div className="w-full md:w-1/2 print:w-1/2 print:break-inside-avoid">
                <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                  Professional Certifications
                </h3>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-gray-700">
                  <li><strong>Advanced React</strong> - Meta (Coursera)<br /><span className="text-gray-600">Advanced patterns, hooks, optimization</span></li>
                  <li><strong>Data Structures & Algorithms</strong> - GeeksforGeeks<br /><span className="text-gray-600">Problem-solving, algorithmic thinking</span></li>
                  <li><strong>AWS Certified Cloud Practitioner</strong> - AWS<br /><span className="text-gray-600">Cloud fundamentals</span></li>
                  <li><strong>Developing Front-End Apps with React</strong> - IBM<br /><span className="text-gray-600">Modern React practices</span></li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 print:w-1/2 print:break-inside-avoid">
                <h3 className="border-b-2 border-blue-600 pb-0.5 text-sm font-bold uppercase text-gray-900">
                  Awards & Recognition
                </h3>
                <div className="mt-1.5 space-y-2">
                  <div className="rounded-md border-l-4 border-yellow-500 bg-yellow-50 p-1.5">
                    <h4 className="text-xs font-bold text-gray-900">
                      🏆 Best Innovation Award 2025
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold text-blue-600">
                      Akij Venture Group | May 2025
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                      For innovative <strong>frontend solutions</strong> with <strong>React.js/Next.js</strong> improving UX
                    </p>
                  </div>
                  <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-1.5">
                    <h4 className="text-xs font-bold text-gray-900">
                      ⭐ Best Performer Award 2024
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold text-blue-600">
                      Akij Venture Group | June 2024
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-700">
                      For outstanding <strong>frontend contributions</strong> and high-quality apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModerResume;