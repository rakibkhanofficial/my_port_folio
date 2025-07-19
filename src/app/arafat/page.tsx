// "use client";

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiDownload,
//   FiArrowUp,
//   FiArrowRight,
//   FiLinkedin,
// } from "react-icons/fi";
// import Image from "next/image";

// const ResumePage = () => {
//   const resumeRef = useRef(null);
//   const handlePrint = useReactToPrint({
//     content: () => resumeRef.current,
//     documentTitle: "Arafat_Mia_Resume",
//   });

//   return (
//     <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
//       <div className="resume-container my-8 w-full max-w-3xl bg-white shadow-lg">
//         <div className="no-print flex items-center justify-between bg-blue-800 p-4">
//           <h1 className="text-xl font-bold text-white">Professional Resume</h1>
//           <button
//             onClick={handlePrint}
//             className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-800 transition duration-200 hover:bg-blue-50"
//           >
//             <FiDownload className="h-4 w-4" />
//             <span>Download PDF</span>
//           </button>
//         </div>

//         <div
//           ref={resumeRef}
//           className="bg-white p-6"
//           style={{
//             fontFamily: "Computer Modern, Latin Modern Roman, Times, serif",
//             lineHeight: "1.4",
//           }}
//         >
//           {/* Header Section */}
//           <div className="mb-4 flex items-start justify-between border-b border-gray-400 pb-3">
//             <div className="flex-1">
//               <h1
//                 className="mb-1 text-2xl font-bold text-gray-900"
//                 style={{ fontWeight: "600" }}
//               >
//                 ARAFAT MIA
//               </h1>
//               <h2 className="mb-2 text-base font-medium text-blue-700">
//                 Finance Graduate
//               </h2>

//               <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
//                 <div className="flex items-center gap-1">
//                   <FiMail className="h-3 w-3" />
//                   <span>arafathossainrimel@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <FiPhone className="h-3 w-3" />
//                   <span>+8801957386349</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <FiMapPin className="h-3 w-3" />
//                   <span>Dhaka, Bangladesh</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <FiLinkedin className="h-3 w-3" />
//                   <span>linkedin.com/in/arafat-mia</span>
//                 </div>
//               </div>
//             </div>

//             <div className="ml-6 flex-shrink-0">
//               <Image
//                 src="/arafat.jpeg"
//                 alt="Arafat Mia"
//                 width={80}
//                 height={80}
//                 className="rounded-lg border-1 border-gray-200 object-cover"
//               />
//             </div>
//           </div>

//           {/* Professional Summary */}
//           <div className="mb-4">
//             <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               Professional Summary
//             </h3>
//             <p className="text-xs leading-relaxed text-gray-700">
//               MBA graduate in Finance & Banking with strong academic foundation
//               and practical knowledge in financial management, accounting
//               principles, and business operations. Proficient in MS Office suite
//               and Adobe Software with excellent communication skills. Seeking to
//               establish a professional career in a reputable organization where
//               I can apply my analytical skills and contribute to organizational
//               growth while continuously learning and developing my expertise.
//             </p>
//           </div>

//           {/* Education */}
//           <div className="mb-4">
//             <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               Education
//             </h3>

//             <div className="relative">
//               {/* Timeline Line */}
//               <div className="absolute bottom-4 left-2 top-4 w-0.5 bg-gray-400"></div>

//               <div className="relative mb-3">
//                 {/* Timeline Icon with Arrow */}
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-sm">
//                   <FiArrowUp className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Master of Business Administration (M.B.A) - Finance &
//                       Banking
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2022
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">National University</p>
//                   <p className="text-xs text-gray-600">
//                     CGPA: 2.97/4.00 | Session: 2021-22
//                   </p>
//                 </div>
//               </div>

//               <div className="relative mb-3">
//                 {/* Timeline Icon with Arrow */}
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
//                   <FiArrowUp className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Bachelor of Business Administration (B.B.A) - Finance &
//                       Banking
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2021
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">National University</p>
//                   <p className="text-xs text-gray-600">
//                     CGPA: 2.94/4.00 | Session: 2017-18
//                   </p>
//                 </div>
//               </div>

//               {/* <div className="relative mb-3">
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
//                   <FiArrowRight className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Higher Secondary School Certificate (H.S.C) - Business Studies
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2017
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">
//                     Wali Newaz Khan College, Kishoreganj
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     GPA: 3.25/5.00 | Board: Dhaka
//                   </p>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-500 shadow-sm">
//                   <FiArrowRight className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Secondary School Certificate (S.S.C) - Business Studies
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2015
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">
//                     Azim Uddin High School, Kishoreganj
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     GPA: 3.33/5.00 | Board: Dhaka
//                   </p>
//                 </div>
//               </div> */}
//             </div>
//           </div>

//           {/* Core Competencies */}
//           <div className="mb-4">
//             <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               Core Competencies
//             </h3>
//             <div className="grid grid-cols-2 gap-x-6 text-xs">
//               <div>
//                 <h4 className="mb-1 font-semibold text-gray-800">
//                   Technical Skills:
//                 </h4>
//                 <ul className="space-y-0.5 text-gray-700">
//                   <li>• Financial Analysis & Reporting</li>
//                   <li>• Microsoft Office Suite (Advanced Excel)</li>
//                   <li>• Adobe Software Applications</li>
//                   <li>• Business Operations Management</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="mb-1 font-semibold text-gray-800">
//                   Professional Skills:
//                 </h4>
//                 <ul className="space-y-0.5 text-gray-700">
//                   <li>• Strong Communication & Presentation</li>
//                   <li>• Leadership & Team Collaboration</li>
//                   <li>• Problem-solving & Critical Thinking</li>
//                   <li>• Adaptability & Quick Learning</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Academic Projects & Leadership */}
//           <div className="mb-4">
//             <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               Academic Projects & Leadership
//             </h3>

//             <div className="relative">
//               {/* Timeline Line */}
//               <div className="absolute bottom-4 left-2 top-4 w-0.5 bg-gray-400"></div>

//               <div className="relative mb-3">
//                 {/* Timeline Icon with Arrow */}
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-sm">
//                   <FiArrowUp className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Financial Management Research Project
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2022
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">
//                     Conducted comprehensive research on financial planning and
//                     risk management strategies for SMEs in Bangladesh. Analyzed
//                     financial data and presented recommendations for improving
//                     capital structure and profitability.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative">
//                 {/* Timeline Icon with Arrow */}
//                 <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
//                   <FiArrowRight className="h-2 w-2 text-white" />
//                 </div>
//                 <div className="ml-6">
//                   <div className="mb-1 flex items-start justify-between">
//                     <h4 className="text-xs font-bold text-gray-900">
//                       Cultural Program Organization Leadership
//                     </h4>
//                     <span className="font-mono text-xs text-gray-500">
//                       2019 - 2021
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-700">
//                     Led and organized multiple cultural programs at college
//                     level, demonstrating leadership skills, event management
//                     capabilities, and team coordination. Successfully managed
//                     budgets and coordinated with various stakeholders.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Certifications & Languages */}
//           <div className="mb-4 grid grid-cols-2 gap-6">
//             <div>
//               <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//                 Certifications
//               </h3>
//               <ul className="space-y-1 text-xs text-gray-700">
//                 <li>• Advanced Excel for Business Analysis</li>
//                 <li>• Financial Management Fundamentals</li>
//                 <li>• Digital Marketing Basics</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//                 Languages
//               </h3>
//               <ul className="space-y-1 text-xs text-gray-700">
//                 <li>• Bengali - Native (Excellent)</li>
//                 <li>• English - Professional (Fluent)</li>
//               </ul>
//             </div>
//           </div>

//           {/* Extra-Curricular Activities */}
//           <div className="mb-4">
//             <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               Extra-Curricular Activities
//             </h3>
//             <ul className="space-y-1 text-xs text-gray-700">
//               <li>
//                 • Active participant in inter-college football and cricket
//                 tournaments, demonstrating teamwork and competitive spirit
//               </li>
//               <li>
//                 • Event coordinator and organizer for multiple cultural
//                 programs, showcasing leadership and management skills
//               </li>
//               <li>
//                 • Sports team member with experience in competitive environments
//                 and collaborative achievement
//               </li>
//             </ul>
//           </div>

//           {/* References */}
//           <div>
//             <h3 className="mb-2 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
//               References
//             </h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="text-xs">
//                 <h4 className="mb-1 font-bold text-gray-900">
//                   Muniruzzaman Munna
//                 </h4>
//                 <p className="text-gray-700">Deputy Head of Islamic Bank</p>
//                 <p className="text-gray-700">Meghna Bank PLC</p>
//                 <p className="text-gray-600">Phone: 01716454433</p>
//                 <p className="text-gray-600">Relation: Brother</p>
//               </div>
//               <div className="text-xs">
//                 <h4 className="mb-1 font-bold text-gray-900">
//                   Md Amirul Islam Rubel
//                 </h4>
//                 <p className="text-gray-700">MD Secretariat</p>
//                 <p className="text-gray-700">Citizens Bank PLC</p>
//                 <p className="text-gray-600">Phone: 01917009539</p>
//                 <p className="text-gray-600">Relation: Relative</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumePage;

"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiArrowUp,
  FiArrowRight,
  FiLinkedin,
} from "react-icons/fi";
import Image from "next/image";

const ResumePage = () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Arafat_Mia_Resume",
    pageStyle: `
      @media print {
        @page {
          size: A4;
          margin: 0.5in;
        }
        body {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `,
  });

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <div className="resume-container my-8 w-auto bg-white shadow-lg">
        <div className="no-print flex items-center justify-between bg-blue-800 p-4">
          <h1 className="text-xl font-bold text-white">Professional Resume</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-800 transition duration-200 hover:bg-blue-50"
          >
            <FiDownload className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>

        {/* PDF Content Container with Fixed Layout */}
        <div
          ref={resumeRef}
          className="print-container bg-white"
          style={{
            fontFamily: "Computer Modern, Latin Modern Roman, Times, serif",
            lineHeight: "1.4",
            width: "210mm", // A4 width
            minHeight: "297mm", // A4 height
            padding: "10mm", // Standard margin
            boxSizing: "border-box",
            fontSize: "12px", // Fixed base font size
          }}
        >
          {/* Header Section */}
          <div
            className="mb-6 flex items-start justify-between border-b border-gray-400 pb-4"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid #9ca3af",
            }}
          >
            <div style={{ flex: "1" }}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "8px",
                  lineHeight: "1.2",
                }}
              >
                ARAFAT MIA
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1d4ed8",
                  marginBottom: "12px",
                }}
              >
                Finance Graduate
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  fontSize: "11px",
                  color: "#374151",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <FiMail style={{ width: "12px", height: "12px" }} />
                  <span>arafathossainrimel@gmail.com</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <FiPhone style={{ width: "12px", height: "12px" }} />
                  <span>+8801957386349</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <FiMapPin style={{ width: "12px", height: "12px" }} />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <FiLinkedin style={{ width: "12px", height: "12px" }} />
                  <span>linkedin.com/in/arafat-mia</span>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: "24px", flexShrink: "0" }}>
              <Image
                src="/arafat.jpeg"
                alt="Arafat Mia"
                width={80}
                height={80}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "8px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              Professional Summary
            </h3>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.6",
                color: "#374151",
                textAlign: "justify",
              }}
            >
              MBA graduate in Finance & Banking with strong academic foundation
              and practical knowledge in financial management, accounting
              principles, and business operations. Proficient in MS Office suite
              and Adobe Software with excellent communication skills. Seeking to
              establish a professional career in a reputable organization where
              I can apply my analytical skills and contribute to organizational
              growth while continuously learning and developing my expertise.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "8px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              Education
            </h3>

            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "16px",
                  bottom: "16px",
                  width: "2px",
                  backgroundColor: "#9ca3af",
                }}
              ></div>

              <div style={{ position: "relative", marginBottom: "16px" }}>
                {/* Timeline Icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#1f2937",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiArrowUp
                    style={{ width: "8px", height: "8px", color: "white" }}
                  />
                </div>
                <div style={{ marginLeft: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#111827",
                        flex: "1",
                        marginRight: "8px",
                      }}
                    >
                      Master of Business Administration (M.B.A) - Finance &
                      Banking
                    </h4>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        fontFamily: "monospace",
                        flexShrink: "0",
                      }}
                    >
                      2022
                    </span>
                  </div>
                  <p
                    style={{ fontSize: "11px", color: "#374151", margin: "0" }}
                  >
                    National University
                  </p>
                  <p
                    style={{ fontSize: "11px", color: "#4b5563", margin: "0" }}
                  >
                    CGPA: 2.97/4.00 | Session: 2021-22
                  </p>
                </div>
              </div>

              <div style={{ position: "relative", marginBottom: "16px" }}>
                {/* Timeline Icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#374151",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiArrowUp
                    style={{ width: "8px", height: "8px", color: "white" }}
                  />
                </div>
                <div style={{ marginLeft: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#111827",
                        flex: "1",
                        marginRight: "8px",
                      }}
                    >
                      Bachelor of Business Administration (B.B.A) - Finance &
                      Banking
                    </h4>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        fontFamily: "monospace",
                        flexShrink: "0",
                      }}
                    >
                      2021
                    </span>
                  </div>
                  <p
                    style={{ fontSize: "11px", color: "#374151", margin: "0" }}
                  >
                    National University
                  </p>
                  <p
                    style={{ fontSize: "11px", color: "#4b5563", margin: "0" }}
                  >
                    CGPA: 2.94/4.00 | Session: 2017-18
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "8px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              Core Competencies
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                fontSize: "11px",
              }}
            >
              <div>
                <h4
                  style={{
                    marginBottom: "6px",
                    fontWeight: "600",
                    color: "#1f2937",
                  }}
                >
                  Technical Skills:
                </h4>
                <ul
                  style={{
                    margin: "0",
                    paddingLeft: "0",
                    listStyle: "none",
                    color: "#374151",
                  }}
                >
                  <li style={{ marginBottom: "2px" }}>
                    • Financial Analysis & Reporting
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Microsoft Office Suite (Advanced Excel)
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Adobe Software Applications
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Business Operations Management
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    marginBottom: "6px",
                    fontWeight: "600",
                    color: "#1f2937",
                  }}
                >
                  Professional Skills:
                </h4>
                <ul
                  style={{
                    margin: "0",
                    paddingLeft: "0",
                    listStyle: "none",
                    color: "#374151",
                  }}
                >
                  <li style={{ marginBottom: "2px" }}>
                    • Strong Communication & Presentation
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Leadership & Team Collaboration
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Problem-solving & Critical Thinking
                  </li>
                  <li style={{ marginBottom: "2px" }}>
                    • Adaptability & Quick Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Projects & Leadership */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "8px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              Academic Projects & Leadership
            </h3>

            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "16px",
                  bottom: "16px",
                  width: "2px",
                  backgroundColor: "#9ca3af",
                }}
              ></div>

              <div style={{ position: "relative", marginBottom: "16px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#1f2937",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiArrowUp
                    style={{ width: "8px", height: "8px", color: "white" }}
                  />
                </div>
                <div style={{ marginLeft: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#111827",
                        flex: "1",
                        marginRight: "8px",
                      }}
                    >
                      Financial Management Research Project
                    </h4>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        fontFamily: "monospace",
                        flexShrink: "0",
                      }}
                    >
                      2022
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#374151",
                      margin: "0",
                      lineHeight: "1.5",
                      textAlign: "justify",
                    }}
                  >
                    Conducted comprehensive research on financial planning and
                    risk management strategies for SMEs in Bangladesh. Analyzed
                    financial data and presented recommendations for improving
                    capital structure and profitability.
                  </p>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#4b5563",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiArrowRight
                    style={{ width: "8px", height: "8px", color: "white" }}
                  />
                </div>
                <div style={{ marginLeft: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#111827",
                        flex: "1",
                        marginRight: "8px",
                      }}
                    >
                      Cultural Program Organization Leadership
                    </h4>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        fontFamily: "monospace",
                        flexShrink: "0",
                      }}
                    >
                      2019 - 2021
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#374151",
                      margin: "0",
                      lineHeight: "1.5",
                      textAlign: "justify",
                    }}
                  >
                    Led and organized multiple cultural programs at college
                    level, demonstrating leadership skills, event management
                    capabilities, and team coordination. Successfully managed
                    budgets and coordinated with various stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div
            style={{
              marginBottom: "20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#1f2937",
                  marginBottom: "8px",
                  paddingBottom: "2px",
                  borderBottom: "1px solid #d1d5db",
                }}
              >
                Certifications
              </h3>
              <ul
                style={{
                  margin: "0",
                  paddingLeft: "0",
                  listStyle: "none",
                  fontSize: "11px",
                  color: "#374151",
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  • Advanced Excel for Business Analysis
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • Financial Management Fundamentals
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • Digital Marketing Basics
                </li>
              </ul>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#1f2937",
                  marginBottom: "8px",
                  paddingBottom: "2px",
                  borderBottom: "1px solid #d1d5db",
                }}
              >
                Languages
              </h3>
              <ul
                style={{
                  margin: "0",
                  paddingLeft: "0",
                  listStyle: "none",
                  fontSize: "11px",
                  color: "#374151",
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  • Bengali - Native (Excellent)
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • English - Professional (Fluent)
                </li>
              </ul>
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "8px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              Extra-Curricular Activities
            </h3>
            <ul
              style={{
                margin: "0",
                paddingLeft: "0",
                listStyle: "none",
                fontSize: "11px",
                color: "#374151",
              }}
            >
              <li style={{ marginBottom: "4px", textAlign: "justify" }}>
                • Active participant in inter-college football and cricket
                tournaments, demonstrating teamwork and competitive spirit
              </li>
              <li style={{ marginBottom: "4px", textAlign: "justify" }}>
                • Event coordinator and organizer for multiple cultural
                programs, showcasing leadership and management skills
              </li>
              <li style={{ marginBottom: "4px", textAlign: "justify" }}>
                • Sports team member with experience in competitive environments
                and collaborative achievement
              </li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#1f2937",
                marginBottom: "12px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              References
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1px 1fr", // Added 1px column for divider
                gap: "32px",
                alignItems: "start",
              }}
            >
              {/* First Reference */}
              <div
                style={{
                  fontSize: "11px",
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr",
                  gap: "3px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "4px",
                    fontWeight: "bold",
                    color: "#111827",
                  }}
                >
                  Muniruzzaman Munna
                </h4>
                <p
                  style={{ color: "#374151", margin: "0", marginBottom: "2px" }}
                >
                  Deputy Head of Islamic Bank
                </p>
                <p
                  style={{ color: "#374151", margin: "0", marginBottom: "2px" }}
                >
                  Meghna Bank PLC
                </p>
                <p
                  style={{ color: "#4b5563", margin: "0", marginBottom: "2px" }}
                >
                  Phone: 01716454433
                </p>
                <p style={{ color: "#4b5563", margin: "0" }}>
                  Relation: Brother
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  backgroundColor: "#d1d5db", // Tailwind gray-300
                  width: "1px",
                  height: "100%",
                }}
              />

              {/* Second Reference */}
              <div
                style={{
                  fontSize: "11px",
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr",
                  gap: "3px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "4px",
                    fontWeight: "bold",
                    color: "#111827",
                  }}
                >
                  Md Amirul Islam Rubel
                </h4>
                <p
                  style={{ color: "#374151", margin: "0", marginBottom: "2px" }}
                >
                  MD Secretariat
                </p>
                <p
                  style={{ color: "#374151", margin: "0", marginBottom: "2px" }}
                >
                  Citizens Bank PLC
                </p>
                <p
                  style={{ color: "#4b5563", margin: "0", marginBottom: "2px" }}
                >
                  Phone: 01917009539
                </p>
                <p style={{ color: "#4b5563", margin: "0" }}>
                  Relation: Relative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }

          .print-container {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 10mm !important;
            font-size: 12px !important;
            background: white !important;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          @page {
            size: A4;
            margin: 0;
          }

          body {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
