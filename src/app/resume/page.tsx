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
import Image from "next/image";

const ResumePage: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Abul_Bashar_Khan_Rakib_Resume",
  });

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <div className="my-8 w-full max-w-4xl bg-white shadow-lg">
        <div className="flex items-center justify-between bg-blue-600 p-6">
          <h1 className="text-2xl font-bold text-white">Resume</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-600 transition duration-200 hover:bg-blue-50"
          >
            <FiDownload className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
        </div>
        <div ref={resumeRef} className="bg-white p-6">
          <div className="border-b border-gray-200 pb-3">
            <div className="flex flex-wrap items-end justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/myimage.jpg"
                    alt="Abul Bashar Khan Rakib"
                    width={80}
                    height={80}
                    className="rounded-lg border-2 border-gray-200 object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Abul Bashar Khan Rakib
                  </h1>
                  <h2 className="text-lg font-semibold text-blue-600">
                    Frontend Developer
                  </h2>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div className="flex items-center justify-end gap-1">
                  <FiMail className="h-3 w-3" />
                  <span>khanrakib218@gmail.com</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <FiPhone className="h-3 w-3" />
                  <span>01687014788</span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FiMapPin className="h-3 w-3" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1">
                <FiLinkedin className="h-3 w-3" />
                <span>rakibkhanofficial</span>
              </div>
              <div className="flex items-center gap-1">
                <FiGithub className="h-3 w-3" />
                <span>rakibkhanofficial</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineLanguage className="h-3 w-3" />
                <span>rakibkhanofficial.com</span>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-4 flex flex-col gap-6 md:flex-row print:flex-row print:gap-4">
            <div className="w-full md:w-1/3 print:w-1/3">
              <div className="mb-4">
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Summary
                </h3>
                <p className="text-xs text-gray-600">
                  Dedicated{" "}
                  <span className="font-medium">Frontend Developer</span>{" "}
                  with <span className="font-medium">3+ years</span> of
                  experience delivering high-quality web applications using{" "}
                  <span className="font-medium">
                    React.js, Next.js, Tailwind CSS, and NestJS
                  </span>
                  . Experienced in{" "}
                  <span className="font-medium">
                    leading small teams, mentoring developers
                  </span>
                  , and implementing scalable full-stack solutions. Skilled in{" "}
                  <span className="font-medium">
                    performance optimization, SEO, and accessible UI development
                  </span>{" "}
                  for enterprise-level projects.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-4">
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Technical Skills
                </h3>
                <div>
                  <h4 className="text-sm font-medium text-blue-600">
                    Frontend
                  </h4>
                  <ul className="ml-4 mt-1 list-outside list-disc space-y-0.5 text-xs text-gray-600">
                    <li>HTML, CSS, JavaScript, TypeScript</li>
                    <li>React.js, Next.js, Redux/RTK</li>
                    <li>Tailwind CSS, Styled Components</li>
                    <li>Responsive Design, SEO, Accessibility</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-blue-600">Backend</h4>
                  <ul className="ml-4 mt-1 list-outside list-disc space-y-0.5 text-xs text-gray-600">
                    <li>Node.js, Express.js, NestJS</li>
                    <li>RESTful APIs, GraphQL</li>
                    <li>MongoDB, MySQL, PostgreSQL</li>
                    <li>Authentication/Authorization</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-blue-600">
                    DevOps & Tools
                  </h4>
                  <ul className="ml-4 mt-1 list-outside list-disc space-y-0.5 text-xs text-gray-600">
                    <li>Docker, Jenkins, GitHub Actions</li>
                    <li>CI/CD, Workflow Automation</li>
                    <li>Git, GitHub, Version Control</li>
                    <li>Agile/Scrum, JIRA, Slack</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-4">
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Education
                </h3>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Lovely Professional University
                  </h4>
                  <p className="text-xs text-gray-600">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                  <p className="text-xs text-gray-500">
                    Aug 2017 – Aug 2022 | Punjab, India
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="w-full md:w-2/3 print:w-2/3">
              <div className="mb-4">
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Work Experience
                </h3>

                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-800">
                      Frontend Developer | Akij Venture Group
                    </h4>
                    <span className="text-xs text-gray-500">
                      Jun 2023 – Present
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                  <ul className="ml-4 mt-1 list-outside list-disc space-y-0.5 text-xs text-gray-600">
                    <li>
                      Delivered{" "}
                      <span className="font-medium">
                        5+ responsive web applications
                      </span>{" "}
                      using React.js, Next.js, and Tailwind CSS, achieving high
                      reliability and performance.
                    </li>
                    <li>
                      Gained professional{" "}
                      <span className="font-medium">leadership experience</span>{" "}
                      by mentoring junior developers and guiding frontend team
                      workflows.
                    </li>
                    <li>
                      Implemented{" "}
                      <span className="font-medium">
                        server-side rendering, code splitting
                      </span>
                      , and optimized performance, reducing load times by{" "}
                      <span className="font-medium">2 seconds</span>.
                    </li>
                    <li>
                      Collaborated with backend developers to integrate RESTful
                      APIs and build full-stack solutions.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-800">
                      Frontend Developer Intern | Akij Venture Group
                    </h4>
                    <span className="text-xs text-gray-500">
                      Jan 2023 – May 2023
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                  <ul className="ml-4 mt-1 list-outside list-disc space-y-0.5 text-xs text-gray-600">
                    <li>
                      Developed responsive UI components and improved API
                      response times by <span className="font-medium">30%</span>
                      .
                    </li>
                    <li>
                      Collaborated with senior developers and designers to
                      implement frontend functionality for enterprise
                      applications.
                    </li>
                    <li>
                      Participated in Agile ceremonies including daily stand-ups
                      and sprint planning.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Key Projects
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="rounded-sm border border-gray-100 bg-gray-50 p-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-blue-600">
                        Akij Fair Value
                      </h4>
                      <span className="text-xs text-gray-500">
                        Jan 2023 – Present
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Tech:</span> HTML, CSS,
                      JavaScript, React.js 18, Next.js, Express.js, MongoDB,
                      Docker
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Developed a full-stack e-commerce platform with
                      server-side rendering, reducing load times by 45% and
                      implementing{" "}
                      <span className="font-medium">
                        NextAuth authentication
                      </span>{" "}
                      for secure user login.
                    </p>
                  </div>
                  <div className="rounded-sm border border-gray-100 bg-gray-50 p-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-blue-600">
                        HRIS
                      </h4>
                      <span className="text-xs text-gray-500">
                        Jan 2024 – Present
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Tech:</span> HTML, CSS,
                      JavaScript, React.js 18, Next.js, Tailwind CSS, NestJS,
                      MySQL
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Built a responsive HRIS solution with role-based access
                      control and analytics dashboard.
                    </p>
                  </div>
                  <div className="rounded-sm border border-gray-100 bg-gray-50 p-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-blue-600">
                        Warranty Wizard
                      </h4>
                      <span className="text-xs text-gray-500">
                        Oct 2023 – Present
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Tech:</span> HTML, CSS,
                      JavaScript, React.js 18, Next.js, NestJS, TypeScript,
                      MySQL, Docker
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Created a warranty tracking system with automated
                      notifications and analytics.
                    </p>
                  </div>
                  <div className="rounded-sm border border-gray-100 bg-gray-50 p-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-blue-600">
                        Store Sales & Inventory Management
                      </h4>
                      <span className="text-xs text-gray-500">
                        Jan 2024 – Oct 2024
                      </span>
                    </div>
                    {/* <p className="text-xs text-gray-600">
                      <span className="font-medium">Tech:</span> React.js,
                      Next.js, Tailwind CSS, NestJS, MySQL, NextAuth
                    </p> */}
                    <p className="mt-0.5 text-xs text-gray-600">
                      Developed a POS and inventory system with real-time
                      tracking, secure authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="flex flex-col gap-6 md:flex-row print:flex-row print:gap-4">
            <div className="w-full md:w-1/3 print:w-1/3">
              <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                Certifications
              </h3>
              <ul className="ml-4 list-outside list-disc space-y-1 text-xs text-gray-600">
                <li>
                  <span className="font-medium">Advanced React by Meta</span>{" "}
                  (Coursera)
                </li>
                <li>
                  <span className="font-medium">
                    Data Structure & Algorithm
                  </span>{" "}
                  (GeeksforGeeks)
                </li>
                <li>
                  <span className="font-medium">
                    AWS Certified Cloud Practitioner
                  </span>
                </li>
                <li>
                  <span className="font-medium">
                    Developing Front-End Apps with React
                  </span>{" "}
                  (IBM)
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 print:w-2/3">
              <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                Awards
              </h3>
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  Best Performer Award
                </h4>
                <p className="text-xs text-gray-600">
                  Akij Venture Group (June 2024)
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Recognized for outstanding contributions and exceptional
                  performance.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  Best Innovation Award
                </h4>
                <p className="text-xs text-gray-600">
                  Akij Venture Group (May 2025)
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Recognized for groundbreaking contributions and exceptional
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

// "use client";

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiLinkedin,
//   FiGithub,
//   FiDownload,
//   FiArrowUp,
// } from "react-icons/fi";
// import { MdOutlineLanguage } from "react-icons/md";
// import Image from "next/image";

// const RakibResumePage = () => {
//   const resumeRef = useRef(null);

//   const handlePrint = useReactToPrint({
//     content: () => resumeRef.current,
//     documentTitle: "Abul_Bashar_Khan_Rakib_Resume",
//   });

//   return (
//     <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
//       <div className="my-8 w-full max-w-4xl bg-white shadow-lg">
//         <div className="flex items-center justify-between bg-blue-600 p-6">
//           <h1 className="text-2xl font-bold text-white">Resume</h1>
//           <button
//             onClick={handlePrint}
//             className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-600 transition duration-200 hover:bg-blue-50"
//           >
//             <FiDownload className="h-5 w-5" />
//             <span>Download PDF</span>
//           </button>
//         </div>
//         <div ref={resumeRef} className="bg-white p-6 font-serif">
//           <div className="border-b border-gray-200 pb-3">
//             <div className="flex flex-wrap items-end justify-between">
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   <div className="flex h-20 w-20 items-center justify-center text-xs text-gray-500">
//                     <Image
//                       src="/myimage.jpg"
//                       alt="Rakib Khan"
//                       width={80}
//                       height={80}
//                       className="rounded-lg border-1 border-gray-200 object-cover"
//                     />{" "}
//                   </div>
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-800">
//                     Abul Bashar Khan Rakib
//                   </h1>
//                   <h2 className="text-lg font-semibold text-blue-600">
//                     Frontend Developer & AR Specialist
//                   </h2>
//                 </div>
//               </div>
//               <div className="text-right text-sm text-gray-600">
//                 <div className="flex items-center justify-end gap-1">
//                   <FiMail className="h-3 w-3" />
//                   <span>khanrakib218@gmail.com</span>
//                 </div>
//                 <div className="flex items-center justify-end gap-1">
//                   <FiPhone className="h-3 w-3" />
//                   <span>01687014788</span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
//               <div className="flex items-center gap-1">
//                 <FiMapPin className="h-3 w-3" />
//                 <span>Dhaka, Bangladesh</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <FiLinkedin className="h-3 w-3" />
//                 <span>rakibkhanofficial</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <FiGithub className="h-3 w-3" />
//                 <span>rakibkhanofficial</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <MdOutlineLanguage className="h-3 w-3" />
//                 <span>rakibkhanofficial.com</span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 flex flex-col gap-4 md:flex-row print:flex-row print:gap-4">
//             <div className="w-full md:w-1/3 print:w-1/3">
//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Summary
//                 </h3>
//                 <p className="text-xs leading-relaxed text-gray-700">
//                   Dedicated{" "}
//                   <span className="font-semibold">Frontend Developer</span> and{" "}
//                   <span className="font-semibold">AR Specialist</span> with{" "}
//                   <span className="font-semibold">2.5+ years</span> of
//                   experience building{" "}
//                   <span className="font-semibold">
//                     responsive, accessible web applications
//                   </span>{" "}
//                   and{" "}
//                   <span className="font-semibold">
//                     immersive AR experiences
//                   </span>
//                   . Skilled in creating{" "}
//                   <span className="font-semibold">pixel-perfect UI</span>,
//                   optimizing performance, and developing{" "}
//                   <span className="font-semibold">AR/VR solutions</span> using
//                   modern technologies.
//                 </p>
//               </div>

//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Technical Skills
//                 </h3>
//                 <div className="space-y-2">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800">
//                       Frontend
//                     </h4>
//                     <p className="text-xs text-gray-700">
//                       HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
//                       Redux/RTK, Tailwind CSS
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800">
//                       AR/VR Technologies
//                     </h4>
//                     <p className="text-xs text-gray-700">
//                       Three.js, A-Frame, WebXR, AR.js, Unity, Vuforia, ARCore,
//                       ARKit
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800">
//                       Backend
//                     </h4>
//                     <p className="text-xs text-gray-700">
//                       Node.js, Express.js, NestJS, MongoDB, MySQL, PostgreSQL
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800">
//                       DevOps & Tools
//                     </h4>
//                     <p className="text-xs text-gray-700">
//                       Docker, Jenkins, GitHub Actions, Git, JIRA, Slack
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Education
//                 </h3>
//                 <div className="relative pl-6">
//                   <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
//                   <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
//                     <FiArrowUp className="h-2 w-2 text-white" />
//                   </div>
//                   <h4 className="text-sm font-semibold text-gray-800">
//                     Bachelor of Technology
//                   </h4>
//                   <p className="text-xs text-gray-700">
//                     Computer Science & Engineering
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     Lovely Professional University
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Aug 2017 – Aug 2022 | Punjab, India
//                   </p>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Certifications
//                 </h3>
//                 <div className="space-y-1 text-xs text-gray-700">
//                   <p>
//                     <span className="font-semibold">Advanced React</span> - Meta
//                     (Coursera)
//                   </p>
//                   <p>
//                     <span className="font-semibold">
//                       AWS Cloud Practitioner
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-semibold">Unity AR Development</span>
//                   </p>
//                   <p>
//                     <span className="font-semibold">WebXR Fundamentals</span>
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   References
//                 </h3>
//                 <div className="space-y-2 text-xs text-gray-700">
//                   <div>
//                     <p className="font-semibold">Md. Abdullah Al Mamun</p>
//                     <p>Senior Software Engineer, Akij Venture Group</p>
//                     <p>Email: mamun.abdullah@akij.net</p>
//                     <p>Phone: +880 1712-345678</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Sarah Johnson</p>
//                     <p>Project Manager, Tech Solutions Ltd.</p>
//                     <p>Email: sarah.j@techsolutions.com</p>
//                     <p>Phone: +880 1798-765432</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full md:w-2/3 print:w-2/3">
//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Work Experience
//                 </h3>
//                 <div className="relative">
//                   <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
//                   <div className="space-y-4">
//                     <div className="relative pl-6">
//                       <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
//                         <FiArrowUp className="h-2 w-2 text-white" />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <h4 className="text-sm font-semibold text-gray-800">
//                           Frontend Developer | Akij Venture Group
//                         </h4>
//                         <span className="text-xs text-gray-500">
//                           Jun 2023 – Present
//                         </span>
//                       </div>
//                       <p className="text-xs text-gray-600">Dhaka, Bangladesh</p>
//                       <ul className="mt-1 space-y-0.5 text-xs text-gray-700">
//                         <li>
//                           • Developed 5+ responsive web applications using
//                           React.js 18 and Next.js
//                         </li>
//                         <li>
//                           • Implemented AR features using Three.js and WebXR,
//                           enhancing user engagement by 35%
//                         </li>
//                         <li>
//                           • Reduced load times by 2 seconds through server-side
//                           rendering optimization
//                         </li>
//                         <li>
//                           • Collaborated with UX/UI teams to design accessible
//                           UI components
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="relative pl-6">
//                       <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
//                         <FiArrowUp className="h-2 w-2 text-white" />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <h4 className="text-sm font-semibold text-gray-800">
//                           Frontend Developer Intern | Akij Venture Group
//                         </h4>
//                         <span className="text-xs text-gray-500">
//                           Jan 2023 – May 2023
//                         </span>
//                       </div>
//                       <p className="text-xs text-gray-600">Dhaka, Bangladesh</p>
//                       <ul className="mt-1 space-y-0.5 text-xs text-gray-700">
//                         <li>
//                           • Built responsive UI components improving API
//                           response time by 30%
//                         </li>
//                         <li>
//                           • Collaborated with senior developers on frontend
//                           functionality
//                         </li>
//                         <li>
//                           • Participated in Agile ceremonies and sprint planning
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Key Projects
//                 </h3>
//                 <div className="grid grid-cols-1 gap-2">
//                   <div className="rounded border border-gray-200 bg-gray-50 p-2">
//                     <div className="flex items-center justify-between">
//                       <h4 className="text-sm font-semibold text-blue-600">
//                         AR Product Visualizer
//                       </h4>
//                       <span className="text-xs text-gray-500">
//                         Mar 2024 – Present
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-600">
//                       <span className="font-semibold">Tech:</span> Three.js,
//                       WebXR, React.js, ARCore, TypeScript
//                     </p>
//                     <p className="mt-0.5 text-xs text-gray-700">
//                       Interactive AR app for 3D product visualization with 90%
//                       accuracy in real-world placement.
//                     </p>
//                   </div>

//                   <div className="rounded border border-gray-200 bg-gray-50 p-2">
//                     <div className="flex items-center justify-between">
//                       <h4 className="text-sm font-semibold text-blue-600">
//                         Akij Fair Value
//                       </h4>
//                       <span className="text-xs text-gray-500">
//                         Jan 2023 – Present
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-600">
//                       <span className="font-semibold">Tech:</span> React.js 18,
//                       Next.js, Express.js, MongoDB, Docker
//                     </p>
//                     <p className="mt-0.5 text-xs text-gray-700">
//                       Full-stack e-commerce platform with server-side rendering,
//                       reducing load times by 45%.
//                     </p>
//                   </div>

//                   <div className="rounded border border-gray-200 bg-gray-50 p-2">
//                     <div className="flex items-center justify-between">
//                       <h4 className="text-sm font-semibold text-blue-600">
//                         HRIS Management System
//                       </h4>
//                       <span className="text-xs text-gray-500">
//                         Jan 2024 – Present
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-600">
//                       <span className="font-semibold">Tech:</span> React.js 18,
//                       NestJS, MySQL, Tailwind CSS
//                     </p>
//                     <p className="mt-0.5 text-xs text-gray-700">
//                       Comprehensive HRIS solution for employee management and
//                       onboarding processes.
//                     </p>
//                   </div>

//                   <div className="rounded border border-gray-200 bg-gray-50 p-2">
//                     <div className="flex items-center justify-between">
//                       <h4 className="text-sm font-semibold text-blue-600">
//                         Beach Limo Car Booking
//                       </h4>
//                       <span className="text-xs text-gray-500">
//                         Jan 2024 – Oct 2024
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-600">
//                       <span className="font-semibold">Tech:</span> React.js,
//                       Next.js, NestJS, TypeScript, MySQL
//                     </p>
//                     <p className="mt-0.5 text-xs text-gray-700">
//                       Car booking platform with real-time vehicle tracking and
//                       user-friendly interface.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Awards
//                 </h3>
//                 <div className="space-y-2 text-xs">
//                   <div>
//                     <h4 className="font-semibold text-gray-800">
//                       Best Innovation Award
//                     </h4>
//                     <p className="text-gray-600">
//                       Akij Venture Group (May 2025) - AR integration in
//                       enterprise solutions
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">
//                       Best Performer Award
//                     </h4>
//                     <p className="text-gray-600">
//                       Akij Venture Group (June 2024) - Outstanding contributions
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2 border-b border-gray-300 pb-1 text-base font-bold text-black">
//                   Languages
//                 </h3>
//                 <div className="space-y-1 text-xs text-gray-700">
//                   <p>
//                     <span className="font-semibold">English</span> - Fluent
//                     (Professional Working)
//                   </p>
//                   <p>
//                     <span className="font-semibold">Bengali</span> - Native
//                   </p>
//                   <p>
//                     <span className="font-semibold">Hindi</span> -
//                     Conversational
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RakibResumePage;
