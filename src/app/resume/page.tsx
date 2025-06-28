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
          <div className="mt-4 flex flex-col gap-6 md:flex-row print:flex-row print:gap-4">
            <div className="w-full md:w-1/3 print:w-1/3">
              <div className="mb-4">
                <h3 className="mb-2 border-b border-gray-200 pb-1 text-base font-semibold text-gray-800">
                  Summary
                </h3>
                <p className="text-xs text-gray-600">
                  Dedicated{" "}
                  <span className="font-medium">Frontend Developer</span> with{" "}
                  <span className="font-medium">2.5+ years</span> of experience
                  building{" "}
                  <span className="font-medium">
                    responsive, accessible web applications
                  </span>{" "}
                  using{" "}
                  <span className="font-medium">
                    HTML, CSS, JavaScript, React.js 18, and Next.js
                  </span>
                  . Skilled in creating{" "}
                  <span className="font-medium">pixel-perfect UI</span>,
                  optimizing performance (e.g., reduced load times by 2
                  seconds), and collaborating with{" "}
                  <span className="font-medium">UX/UI designers</span> to ensure{" "}
                  <span className="font-medium">SEO and accessibility</span>{" "}
                  standards. Proficient in modern frontend workflows and state
                  management.
                </p>
              </div>
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
                      Developed{" "}
                      <span className="font-medium">
                        5+ responsive web applications
                      </span>{" "}
                      using HTML, CSS, JavaScript, React.js 18, and Next.js,
                      achieving 99.9% uptime
                    </li>
                    <li>
                      Implemented{" "}
                      <span className="font-medium">server-side rendering</span>{" "}
                      and <span className="font-medium">code splitting</span>,
                      reducing load times by{" "}
                      <span className="font-medium">2 seconds</span>
                    </li>
                    <li>
                      Collaborated with{" "}
                      <span className="font-medium">UX/UI designers</span> to
                      design{" "}
                      <span className="font-medium">
                        accessible UI components
                      </span>{" "}
                      with Tailwind CSS, increasing user engagement by{" "}
                      <span className="font-medium">25%</span>
                    </li>
                    <li>
                      Worked with{" "}
                      <span className="font-medium">backend developers</span> to
                      integrate RESTful APIs, optimizing frontend performance
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
                      Built responsive UI components using HTML, CSS, and
                      JavaScript, improving API response time by{" "}
                      <span className="font-medium">30%</span>
                    </li>
                    <li>
                      Collaborated with{" "}
                      <span className="font-medium">
                        senior developers and UX/UI designers
                      </span>{" "}
                      to implement frontend functionality
                    </li>
                    <li>
                      Participated in Agile ceremonies including daily stand-ups
                      and sprint planning
                    </li>
                  </ul>
                </div>
              </div>
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
                      server-side rendering, reducing load times by 45%.
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
                        Beach Limo
                      </h4>
                      <span className="text-xs text-gray-500">
                        Jan 2024 – Oct 2024
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Tech:</span> HTML, CSS,
                      JavaScript, React.js 18, Next.js, NestJS, TypeScript,
                      MySQL, Vercel
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Developed a car booking app with real-time availability
                      and secure payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-6 md:flex-row print:flex-row print:gap-4">
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
                  Recognizing groundbreaking contributions and exceptional
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
