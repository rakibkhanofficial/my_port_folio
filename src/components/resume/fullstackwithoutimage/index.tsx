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

const FullstackwithoutImage: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Rakib_Khan_FullStack_Developer_Frontend_Focus",
  });

  return (
    <>
      <style suppressHydrationWarning>{`
        @media print {
          @page {
            margin: 0.3in;
            size: letter;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            font-size: 10pt;
            line-height: 1.2;
          }
          
          .print\\:break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          .print\\:break-after-avoid {
            break-after: avoid;
            page-break-after: avoid;
          }

          .print\\:text-xl {
            font-size: 1.25rem;
          }

          .print\\:text-base {
            font-size: 1rem;
          }

          .print\\:text-sm {
            font-size: 0.875rem;
          }

          .print\\:mt-0 {
            margin-top: 0;
          }

          .print\\:mt-0\\.5 {
            margin-top: 0.125rem;
          }

          .print\\:mt-1 {
            margin-top: 0.25rem;
          }

          .print\\:mt-1\\.5 {
            margin-top: 0.375rem;
          }

          .print\\:pb-0\\.5 {
            padding-bottom: 0.125rem;
          }

          .print\\:gap-x-2 {
            column-gap: 0.5rem;
          }

          .print\\:gap-1\\.5 {
            gap: 0.375rem;
          }

          .print\\:gap-2 {
            gap: 0.5rem;
          }

          .print\\:space-y-0\\.5 > * + * {
            margin-top: 0.125rem;
          }

          .print\\:space-y-1 > * + * {
            margin-top: 0.25rem;
          }

          .print\\:space-y-1\\.5 > * + * {
            margin-top: 0.375rem;
          }

          .print\\:p-4 {
            padding: 1rem;
          }

          .print\\:pl-4 {
            padding-left: 1rem;
          }

          .print\\:pl-5 {
            padding-left: 1.25rem;
          }

          .print\\:mb-2 {
            margin-bottom: 0.5rem;
          }

          .print\\:leading-tight {
            line-height: 1.25;
          }

          .print\\:h-3 {
            height: 0.75rem;
          }

          .print\\:w-3 {
            width: 0.75rem;
          }

          .print\\:h-2\\.5 {
            height: 0.625rem;
          }

          .print\\:w-2\\.5 {
            width: 0.625rem;
          }

          .print\\:-left-3\\.5 {
            left: -0.875rem;
          }

          .print\\:left-1\\.5 {
            left: 0.375rem;
          }

          .print\\:flex-row {
            flex-direction: row;
          }

          .print\\:w-1\\/2 {
            width: 50%;
          }
        }
      `}</style>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
        <div className="my-8 w-full max-w-4xl bg-white shadow-lg">
          <div className="flex items-center justify-between bg-blue-600 p-6">
            <h1 className="text-2xl font-bold text-white">
              ATS-Optimized Resume
            </h1>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-600 transition duration-200 hover:bg-blue-50"
            >
              <FiDownload className="h-5 w-5" />
              <span>Download PDF</span>
            </button>
          </div>
          <div ref={resumeRef} className="bg-white p-6 print:p-4">
            {/* Header Section */}
            <div className="border-b-2 border-gray-300 pb-1 text-center print:pb-0.5">
              <h1 className="text-2xl font-bold text-gray-900 print:text-xl">
                RAKIB KHAN
              </h1>
              <h2 className="mt-0.5 text-lg font-semibold text-blue-600 print:mt-0 print:text-base">
                Full-Stack Developer (Frontend Focus) | React.js • Next.js •
                TypeScript • Node.js
              </h2>
              <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-700 print:mt-1 print:gap-x-2">
                <div className="flex items-center gap-1">
                  <FiPhone className="h-4 w-4 print:h-3 print:w-3" />
                  <span>01687014788</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMail className="h-4 w-4 print:h-3 print:w-3" />
                  <span>khanrakib218@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="h-4 w-4 print:h-3 print:w-3" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-4 text-xs text-gray-700 print:mt-0.5 print:gap-x-2">
                <div className="flex items-center gap-1">
                  <FiLinkedin className="h-4 w-4 print:h-3 print:w-3" />
                  <span>linkedin.com/in/rakibkhanofficial</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiGithub className="h-4 w-4 print:h-3 print:w-3" />
                  <span>github.com/rakibkhanofficial</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineLanguage className="h-4 w-4 print:h-3 print:w-3" />
                  <span>rakibkhanofficial.com</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-2.5 print:mt-1.5">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                Professional Summary
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-700 print:mt-1 print:leading-tight">
                <strong>Full-Stack Developer with Frontend Focus</strong> and{" "}
                <strong>2.5+ years of specialized experience</strong> building
                modern, scalable web applications using{" "}
                <strong>
                  React.js, Next.js, TypeScript, Node.js, and NestJS
                </strong>
                . Expert in <strong>end-to-end development</strong> from
                database design to UI implementation. Proven track record in{" "}
                <strong>performance optimization</strong> (achieved{" "}
                <strong>45% faster load times</strong>),{" "}
                <strong>SEO enhancement</strong> (
                <strong>50% organic traffic increase</strong>), and{" "}
                <strong>RESTful API development</strong>. Successfully delivered{" "}
                <strong>5+ production applications</strong> serving{" "}
                <strong>10,000+ users daily</strong> with{" "}
                <strong>99.8% uptime</strong>. Strong expertise in{" "}
                <strong>
                  JWT/OAuth authentication, RBAC, MongoDB, MySQL, Redis
                </strong>
                , and modern frontend frameworks. Committed to writing{" "}
                <strong>clean, maintainable code</strong> and staying current
                with latest full-stack technologies.{" "}
                <strong>
                  Recognized with Best Innovation and Best Performer Awards
                </strong>{" "}
                for exceptional contributions.
              </p>
            </div>

            {/* Core Technical Skills */}
            <div className="mt-2.5 print:mt-1.5 print:break-inside-avoid">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                Core Technical Skills
              </h3>
              <div className="mt-1.5 grid grid-cols-1 gap-2 md:grid-cols-2 print:mt-1 print:gap-1.5">
                {/* Left Column - Frontend (Main Expertise) */}
                <div className="space-y-2 print:space-y-1">
                  <div>
                    <h4 className="text-xs font-bold text-blue-600">
                      ⭐ Frontend Development (Primary Expertise):
                    </h4>
                    <p className="mt-0.5 text-xs leading-tight text-gray-700">
                      React.js, Next.js 13/14, TypeScript, JavaScript (ES6+),
                      HTML5, CSS3, Tailwind CSS, Material-UI, Styled Components,
                      Redux Toolkit, Context API, React Query, SWR
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      ⚙️ Backend Development:
                    </h4>
                    <p className="mt-0.5 text-xs leading-tight text-gray-700">
                      Node.js, Express.js, NestJS, RESTful API, JWT, OAuth 2.0,
                      NextAuth, Microservices Architecture
                    </p>
                  </div>
                </div>

                {/* Right Column - Other Skills */}
                <div className="space-y-2 print:space-y-1">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      Database & Caching:
                    </h4>
                    <p className="mt-0.5 text-xs leading-tight text-gray-700">
                      MongoDB, MySQL, Prisma ORM, TypeORM, Redis
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      Testing & Quality:
                    </h4>
                    <p className="mt-0.5 text-xs leading-tight text-gray-700">
                      Jest, Unit Testing, Integration Testing, Cypress
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      DevOps & Tools:
                    </h4>
                    <p className="mt-0.5 text-xs leading-tight text-gray-700">
                      Docker, Jenkins, GitHub Actions, Git, GitHub, Vercel, AWS
                      S3, JIRA, Agile/Scrum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mt-2.5 print:mt-1.5">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                Professional Experience
              </h3>

              {/* Timeline Container */}
              <div className="relative mt-1.5 pl-6 print:mt-1 print:pl-5">
                {/* Vertical Timeline Line */}
                <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-blue-400 print:left-1.5"></div>

                {/* Current Position */}
                <div className="relative mb-3 print:mb-2 print:break-inside-avoid">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-1 h-3 w-3 rounded-full border-2 border-blue-600 bg-white print:-left-3.5 print:h-2.5 print:w-2.5"></div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        Full-Stack Developer (Frontend Focus)
                      </h4>
                      <p className="text-xs font-semibold text-blue-600">
                        Akij Venture Group | Dhaka, Bangladesh
                      </p>
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      June 2023 – Present
                    </span>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-tight text-gray-700 print:space-y-0.5 print:pl-4">
                    <li>
                      <strong>Led full-stack development</strong> for{" "}
                      <strong>5+ enterprise applications</strong> serving{" "}
                      <strong>10,000+ daily users</strong>, using React.js 18,
                      Next.js 14, TypeScript, Node.js, and NestJS, achieving{" "}
                      <strong>99.8% uptime</strong>
                    </li>
                    <li>
                      <strong>Architected end-to-end solutions</strong> with
                      NestJS, Express.js, MySQL, MongoDB, implementing RESTful
                      APIs with{" "}
                      <strong>JWT/OAuth authentication and RBAC</strong>,
                      ensuring secure and scalable backend systems
                    </li>
                    <li>
                      <strong>Optimized full-stack performance</strong> through
                      SSR, code splitting, lazy loading, and Redis caching,
                      reducing page load times by <strong>45%</strong> (4.5s to
                      2.5s) and improving{" "}
                      <strong>Core Web Vitals by 60%</strong>
                    </li>
                    <li>
                      <strong>Mentored 3 junior developers</strong>, conducting
                      code reviews and training sessions on both frontend and
                      backend best practices, improving{" "}
                      <strong>team productivity by 35%</strong> and reducing
                      defects by <strong>40%</strong>
                    </li>
                    <li>
                      <strong>Improved SEO and accessibility</strong> (WCAG 2.1
                      AA), resulting in{" "}
                      <strong>50% increase in organic traffic</strong> and
                      better search rankings
                    </li>
                    <li>
                      <strong>
                        Implemented comprehensive testing strategies
                      </strong>{" "}
                      with Jest and Cypress for both frontend and API endpoints,
                      achieving <strong>85%+ code coverage</strong> and reducing
                      post-release bugs
                    </li>
                  </ul>
                </div>

                {/* Previous Position */}
                <div className="relative print:break-inside-avoid">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-1 h-3 w-3 rounded-full border-2 border-blue-400 bg-white print:-left-3.5 print:h-2.5 print:w-2.5"></div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        Full-Stack Developer Intern
                      </h4>
                      <p className="text-xs font-semibold text-blue-600">
                        Akij Venture Group | Dhaka, Bangladesh
                      </p>
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      January 2023 – May 2023
                    </span>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-tight text-gray-700 print:space-y-0.5 print:pl-4">
                    <li>
                      <strong>Developed responsive UI components</strong> using
                      React.js, JavaScript, and CSS, ensuring cross-browser
                      compatibility and mobile responsiveness
                    </li>
                    <li>
                      <strong>Built RESTful APIs</strong> with Node.js and
                      Express.js, implementing authentication, authorization,
                      and data validation
                    </li>
                    <li>
                      <strong>
                        Optimized API integration and database queries
                      </strong>
                      , improving response times by <strong>30%</strong> through
                      efficient state management and caching strategies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="mt-3 print:mt-1.5">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                Key Projects & Achievements
              </h3>

              <div className="mt-2 space-y-2.5 print:mt-1 print:space-y-1.5">
                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🚀 Akij Fair Value - Full-Stack E-Commerce Platform
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js 18, Next.js 14, TypeScript,
                    Tailwind CSS, Express.js, MongoDB, NextAuth, Docker, AWS S3
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700 print:pl-4 print:leading-tight">
                    <li>
                      Architected{" "}
                      <strong>full-stack e-commerce platform</strong> with
                      product catalog, shopping cart, payment integration
                      (Stripe/PayPal), and order management system
                    </li>
                    <li>
                      Implemented <strong>SSR and ISR with Next.js</strong>,
                      reducing load time by <strong>45%</strong> and improving
                      SEO rankings by <strong>60%</strong>
                    </li>
                    <li>
                      Built <strong>secure backend APIs</strong> with Express.js
                      and MongoDB, implementing authentication with NextAuth
                      (Google/Facebook OAuth)
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      💼 HRIS - Human Resource Information System
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2024 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js 18, Next.js 14, TypeScript,
                    Tailwind CSS, NestJS, MySQL, Prisma ORM
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700 print:pl-4 print:leading-tight">
                    <li>
                      Built{" "}
                      <strong>comprehensive full-stack HRIS solution</strong>{" "}
                      managing employee data, attendance, leave, and payroll for{" "}
                      <strong>500+ employees</strong>
                    </li>
                    <li>
                      Implemented <strong>RBAC with NestJS backend</strong> and
                      multiple user roles, developed{" "}
                      <strong>real-time analytics dashboard</strong> with
                      Chart.js
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🛡️ Warranty Wizard - Warranty Management System
                    </h4>
                    <span className="text-xs text-gray-600">
                      Oct 2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js 18, Next.js 14, TypeScript,
                    NestJS, MySQL, Docker, Redis
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700 print:pl-4 print:leading-tight">
                    <li>
                      Created{" "}
                      <strong>full-stack warranty tracking system</strong> with
                      automated notifications, claims management, and
                      comprehensive analytics
                    </li>
                    <li>
                      Utilized <strong>Redis caching and React Query</strong>,
                      improving API response time by <strong>40%</strong> and
                      enhancing user experience
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🏪 Store Sales & Inventory Management - POS System
                    </h4>
                    <span className="text-xs text-gray-600">
                      Jan 2024 – Oct 2024
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js 18, Next.js 14, TypeScript,
                    Tailwind CSS, NestJS, MySQL, NextAuth
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700 print:pl-4 print:leading-tight">
                    <li>
                      Engineered{" "}
                      <strong>complete full-stack POS solution</strong> with
                      real-time inventory tracking, barcode scanning, and
                      multi-store support
                    </li>
                    <li>
                      Implemented{" "}
                      <strong>
                        secure authentication with RBAC and NestJS backend
                      </strong>
                      , created customizable reports with data visualization
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🌐 Corporate Portfolio Websites - Akij Group Sister
                      Concerns
                    </h4>
                    <span className="text-xs text-gray-600">
                      Mar 2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js 18, Next.js 14, TypeScript,
                    Tailwind CSS, Google Analytics, Google Search Console,
                    Microsoft Clarity
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700">
                    <li>
                      Developed <strong>5+ corporate websites</strong> (AFBL,
                      AVL, ABEL, AEEL, AMP) with advanced SEO strategies,
                      achieving <strong>200% organic traffic increase</strong>
                    </li>
                    <li>
                      Integrated{" "}
                      <strong>
                        Google Analytics 4, Search Console, and Microsoft
                        Clarity
                      </strong>{" "}
                      for comprehensive monitoring and user behavior analysis
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🎯 Brand Landing Pages - SPEED, Clemon, MOJO, Frutika
                    </h4>
                    <span className="text-xs text-gray-600">
                      2023 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js, Next.js 14, TypeScript,
                    Tailwind CSS, Framer Motion
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700">
                    <li>
                      Created <strong>modern single-page websites</strong> for
                      multiple Akij brands with engaging animations and
                      interactive UI
                    </li>
                    <li>
                      Implemented <strong>responsive designs</strong> and
                      optimized performance for mobile-first experiences
                    </li>
                  </ul>
                </div>

                <div className="print:break-inside-avoid">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      🤝 We Support Palestine By Mojo - Donation Collection
                      Platform
                    </h4>
                    <span className="text-xs text-gray-600">2024</span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-700">
                    <strong>Tech:</strong> React.js, Next.js, Tailwind CSS,
                    Stripe, Express.js, MongoDB
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-gray-700">
                    <li>
                      Built <strong>humanitarian donation website</strong> with
                      secure payment gateway and real-time donation tracking
                    </li>
                    <li>
                      Implemented{" "}
                      <strong>transparent fundraising dashboard</strong> with
                      progress visualization and donor management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-3 print:mt-1.5 print:break-inside-avoid">
              <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                Education
              </h3>
              <div className="mt-2 print:mt-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Bachelor of Technology in Computer Science & Engineering
                    </h4>
                    <p className="text-xs font-semibold text-blue-600">
                      Lovely Professional University, Punjab, India
                    </p>
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Aug 2017 – Aug 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Awards Combined */}
            <div className="mt-3 flex flex-col gap-3 md:flex-row print:mt-1.5 print:flex-row print:gap-2">
              <div className="w-full md:w-1/2 print:w-1/2 print:break-inside-avoid">
                <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                  Certifications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-gray-700 print:mt-1 print:space-y-0.5 print:pl-4 print:leading-tight">
                  <li>
                    <strong>Advanced React</strong> - Meta (Coursera)
                  </li>
                  <li>
                    <strong>Data Structures & Algorithms</strong> -
                    GeeksforGeeks
                  </li>
                  <li>
                    <strong>AWS Certified Cloud Practitioner</strong> - Amazon
                    Web Services
                  </li>
                  <li>
                    <strong>Developing Front-End Apps with React</strong> - IBM
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 print:w-1/2 print:break-inside-avoid">
                <h3 className="border-b-2 border-blue-600 pb-0.5 text-base font-bold uppercase text-gray-900 print:text-sm">
                  Awards & Recognition
                </h3>
                <div className="mt-2 space-y-2 print:mt-1 print:space-y-1">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      🏆 Best Innovation Award
                    </h4>
                    <p className="text-xs text-gray-700">
                      Akij Venture Group | May 2025
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-600 print:leading-tight">
                      Recognized for innovative full-stack solutions improving
                      product quality
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      ⭐ Best Performer Award
                    </h4>
                    <p className="text-xs text-gray-700">
                      Akij Venture Group | June 2024
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-600 print:leading-tight">
                      Awarded for outstanding performance and consistent
                      delivery
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

export default FullstackwithoutImage;
