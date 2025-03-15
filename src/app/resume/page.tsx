// ResumePage.tsx
'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { MdOutlineLanguage } from 'react-icons/md';

const ResumePage: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Abul_Bashar_Khan_Rakib_Resume',
  });

//   const handlePrint = useReactToPrint({
//     content: () => resumeRef.current,
//     documentTitle: 'Abul_Bashar_Khan_Rakib_Resume',
//     // Add specific print styles
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 16mm;
//       }
//       @media print {
//         body {
//           -webkit-print-color-adjust: exact;
//           print-color-adjust: exact;
//         }
//         .page-break {
//           margin-top: 16mm;
//           page-break-before: always;
//         }
//       }
//     `,
//   });

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg my-8">
        <div className="p-6 bg-blue-600 flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Resume</h1>
          <button 
            onClick={handlePrint}
            className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 transition duration-200"
          >
            <FiDownload className="w-5 h-5" />
            <span>Download PDF</span>
          </button>
        </div>
        
        {/* Print-optimized resume content */}
        <div 
          ref={resumeRef} 
          className="p-6 bg-white"
        >
          {/* Header - more compact */}
          <div className="pb-3 border-b border-gray-200">
            <div className="flex flex-wrap justify-between items-end">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Abul Bashar Khan Rakib</h1>
                <h2 className="text-lg text-blue-600 font-semibold">Full Stack Developer</h2>
              </div>
              <div className="text-sm text-right text-gray-600">
                <div className="flex items-center gap-1 justify-end">
                  <FiMail className="w-3 h-3" />
                  <span>khanrakib218@gmail.com</span>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <FiPhone className="w-3 h-3" />
                  <span>01687014788</span>
                </div>
              </div>
            </div>
            
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <FiMapPin className="w-3 h-3" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1">
                <FiLinkedin className="w-3 h-3" />
                <span>rakibkhanofficial</span>
              </div>
              <div className="flex items-center gap-1">
                <FiGithub className="w-3 h-3" />
                <span>rakibkhanofficial</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineLanguage className="w-3 h-3" />
                <span>rakibkhanofficial.com</span>
              </div>
            </div>
          </div>
          
          {/* Two column layout for main content */}
          <div className="flex flex-col md:flex-row gap-6 mt-4 print:flex-row print:gap-4">
            {/* Left column - 35% width */}
            <div className="w-full md:w-1/3 print:w-1/3">
              {/* Skills */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Technical Skills</h3>
                
                <div>
                  <h4 className="font-medium text-blue-600 text-sm">Frontend</h4>
                  <ul className="mt-1 text-gray-600 text-xs list-disc list-outside ml-4 space-y-0.5">
                    <li>React.js, Next.js, TypeScript</li>
                    <li>Redux/RTK, Context API</li>
                    <li>Tailwind CSS, Styled Components</li>
                    <li>Performance Optimization, SEO</li>
                  </ul>
                </div>
                
                <div className="mt-2">
                  <h4 className="font-medium text-blue-600 text-sm">Backend</h4>
                  <ul className="mt-1 text-gray-600 text-xs list-disc list-outside ml-4 space-y-0.5">
                    <li>Node.js, Express.js, NestJS</li>
                    <li>RESTful APIs, GraphQL</li>
                    <li>MongoDB, MySQL, PostgreSQL</li>
                    <li>Authentication/Authorization</li>
                  </ul>
                </div>
                
                <div className="mt-2">
                  <h4 className="font-medium text-blue-600 text-sm">DevOps & Tools</h4>
                  <ul className="mt-1 text-gray-600 text-xs list-disc list-outside ml-4 space-y-0.5">
                    <li>Docker, Jenkins, GitHub Actions</li>
                    <li>CI/CD, Workflow Automation</li>
                    <li>Git, GitHub, Version Control</li>
                    <li>Agile/Scrum, JIRA, Slack</li>
                  </ul>
                </div>
              </div>
              
              {/* Education */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Education</h3>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Lovely Professional University</h4>
                  <p className="text-gray-600 text-xs">Bachelor of Technology in Computer Science & Engineering</p>
                  <p className="text-gray-500 text-xs">Aug 2017 – Aug 2022 | Punjab, India</p>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Certifications</h3>
                <ul className="text-gray-600 text-xs list-disc list-outside ml-4 space-y-1">
                  <li><span className="font-medium">Advanced React by Meta</span> (Coursera)</li>
                  <li><span className="font-medium">Data Structure & Algorithm</span> (GeeksforGeeks)</li>
                  <li><span className="font-medium">AWS Certified Cloud Practitioner</span></li>
                  <li><span className="font-medium">Developing Front-End Apps with React</span> (IBM)</li>
                </ul>
              </div>
              
              {/* Awards */}
              <div>
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Awards</h3>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Best Performer Award</h4>
                  <p className="text-gray-600 text-xs">Akij Venture Group (June 2024)</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Recognized for outstanding contributions and exceptional performance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - 65% width */}
            <div className="w-full md:w-2/3 print:w-2/3">
              {/* Profile */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Profile</h3>
                <p className="text-xs text-gray-600">
                  Results-driven <span className="font-medium">Full Stack Developer</span> with <span className="font-medium">2+ years</span> of experience architecting and implementing modern web applications using <span className="font-medium">React.js, Next.js, TypeScript, Node.js, and Express.js</span>. Demonstrated expertise in building <span className="font-medium">scalable, high-performance applications</span> with a focus on clean code, optimized user experiences, and CI/CD automation.
                </p>
              </div>
              
              {/* Experience */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Work Experience</h3>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800 text-sm">Software Developer | Akij Venture Group</h4>
                    <span className="text-gray-500 text-xs">Jun 2023 – Present</span>
                  </div>
                  <p className="text-gray-500 text-xs">Dhaka, Bangladesh</p>
                  <ul className="mt-1 text-gray-600 text-xs list-disc list-outside ml-4 space-y-0.5">
                    <li>Engineered and maintained <span className="font-medium">5+ production-grade web applications</span> using React.js, Next.js, and TypeScript with 99.9% uptime</li>
                    <li>Implemented <span className="font-medium">server-side rendering and code splitting</span> techniques, reducing load times by <span className="font-medium">40%</span></li>
                    <li>Designed and developed RESTful APIs and microservices using Express.js and NestJS</li>
                    <li>Containerized applications with Docker and implemented CI/CD pipelines using Jenkins</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800 text-sm">Software Developer Intern | Akij Venture Group</h4>
                    <span className="text-gray-500 text-xs">Jan 2023 – May 2023</span>
                  </div>
                  <p className="text-gray-500 text-xs">Dhaka, Bangladesh</p>
                  <ul className="mt-1 text-gray-600 text-xs list-disc list-outside ml-4 space-y-0.5">
                    <li>Contributed to the development of web applications using React and JavaScript</li>
                    <li>Collaborated with senior developers to implement backend functionality</li>
                    <li>Participated in Agile ceremonies including daily stand-ups and sprint planning</li>
                  </ul>
                </div>
              </div>
              
              {/* Projects */}
              <div>
                <h3 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Key Projects</h3>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="border border-gray-100 bg-gray-50 p-2 rounded-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-blue-600 text-sm">Akij Fair Value</h4>
                      <span className="text-gray-500 text-xs">Jan 2023 – Present</span>
                    </div>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Tech:</span> React, Next.js, Express.js, MongoDB, Docker</p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Developed a full-stack e-commerce platform with server-side rendering, reducing load times by 45%. Implemented responsive design and progressive web app features.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 bg-gray-50 p-2 rounded-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-blue-600 text-sm">HRIS</h4>
                      <span className="text-gray-500 text-xs">Jan 2024 – Present</span>
                    </div>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Tech:</span> React, Next.js, Tailwind CSS, NestJS, MySQL</p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Built a comprehensive HRIS solution with role-based access control and real-time analytics dashboard for managing employee data, payroll, and performance evaluations.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 bg-gray-50 p-2 rounded-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-blue-600 text-sm">Warranty Wizard</h4>
                      <span className="text-gray-500 text-xs">Oct 2023 – Present</span>
                    </div>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Tech:</span> Next.js, NestJS, TypeScript, MySQL, Docker</p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Created a robust system for tracking product warranties with automated email notifications and business analytics reporting capabilities.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 bg-gray-50 p-2 rounded-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-blue-600 text-sm">Beach Limo</h4>
                      <span className="text-gray-500 text-xs">Jan 2024 – Oct 2024</span>
                    </div>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Tech:</span> Next.js, NestJS, TypeScript, MySQL, Vercel</p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Developed full-stack car booking application with real-time availability tracking, secure payment processing, and dynamic pricing based on distance and vehicle type.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;