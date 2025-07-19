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
  });

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <div className="resume-container my-8 w-full max-w-3xl bg-white shadow-lg">
        <div className="no-print flex items-center justify-between bg-blue-800 p-4">
          <h1 className="text-xl font-bold text-white">Resume</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-800 transition duration-200 hover:bg-blue-50"
          >
            <FiDownload className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>

        <div
          ref={resumeRef}
          className="bg-white p-6"
          style={{
            fontFamily: "Computer Modern, Latin Modern Roman, Times, serif",
            lineHeight: "1.4",
          }}
        >
          {/* Header Section */}
          <div className="mb-4 flex items-start justify-between border-b border-gray-400 pb-3">
            <div className="flex-1">
              <h1
                className="mb-1 text-2xl font-bold text-gray-900"
                style={{ fontWeight: "600" }}
              >
                ARAFAT MIA
              </h1>
              <h2 className="mb-2 text-base font-medium text-blue-700">
                Finance Graduate
              </h2>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <FiMail className="h-3 w-3" />
                  <span>arafathossainrimel@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone className="h-3 w-3" />
                  <span>+8801957386349</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="h-3 w-3" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiLinkedin className="h-3 w-3" />
                  <span>linkedin.com/in/arafat-mia</span>
                </div>
              </div>
            </div>

            <div className="ml-6 flex-shrink-0">
              <Image
                src="/arafat.jpeg"
                alt="Arafat Mia"
                width={80}
                height={80}
                className="rounded-lg border-1 border-gray-200 object-cover"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              Professional Summary
            </h3>
            <p className="text-xs leading-relaxed text-gray-700">
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
          <div className="mb-4">
            <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute bottom-4 left-2 top-4 w-0.5 bg-gray-400"></div>

              <div className="relative mb-3">
                {/* Timeline Icon with Arrow */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-sm">
                  <FiArrowUp className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Master of Business Administration (M.B.A) - Finance &
                      Banking
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2022
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">National University</p>
                  <p className="text-xs text-gray-600">
                    CGPA: 2.97/4.00 | Session: 2021-22
                  </p>
                </div>
              </div>

              <div className="relative mb-3">
                {/* Timeline Icon with Arrow */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
                  <FiArrowUp className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Bachelor of Business Administration (B.B.A) - Finance &
                      Banking
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2021
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">National University</p>
                  <p className="text-xs text-gray-600">
                    CGPA: 2.94/4.00 | Session: 2017-18
                  </p>
                </div>
              </div>

              {/* <div className="relative mb-3">
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
                  <FiArrowRight className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Higher Secondary School Certificate (H.S.C) - Business Studies
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2017
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">
                    Wali Newaz Khan College, Kishoreganj
                  </p>
                  <p className="text-xs text-gray-600">
                    GPA: 3.25/5.00 | Board: Dhaka
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-500 shadow-sm">
                  <FiArrowRight className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Secondary School Certificate (S.S.C) - Business Studies
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2015
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">
                    Azim Uddin High School, Kishoreganj
                  </p>
                  <p className="text-xs text-gray-600">
                    GPA: 3.33/5.00 | Board: Dhaka
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-4">
            <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-x-6 text-xs">
              <div>
                <h4 className="mb-1 font-semibold text-gray-800">
                  Technical Skills:
                </h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li>• Financial Analysis & Reporting</li>
                  <li>• Microsoft Office Suite (Advanced Excel)</li>
                  <li>• Adobe Software Applications</li>
                  <li>• Business Operations Management</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-800">
                  Professional Skills:
                </h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li>• Strong Communication & Presentation</li>
                  <li>• Leadership & Team Collaboration</li>
                  <li>• Problem-solving & Critical Thinking</li>
                  <li>• Adaptability & Quick Learning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Projects & Leadership */}
          <div className="mb-4">
            <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              Academic Projects & Leadership
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute bottom-4 left-2 top-4 w-0.5 bg-gray-400"></div>

              <div className="relative mb-3">
                {/* Timeline Icon with Arrow */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-sm">
                  <FiArrowUp className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Financial Management Research Project
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2022
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">
                    Conducted comprehensive research on financial planning and
                    risk management strategies for SMEs in Bangladesh. Analyzed
                    financial data and presented recommendations for improving
                    capital structure and profitability.
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline Icon with Arrow */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
                  <FiArrowRight className="h-2 w-2 text-white" />
                </div>
                <div className="ml-6">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className="text-xs font-bold text-gray-900">
                      Cultural Program Organization Leadership
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      2019 - 2021
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">
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
          <div className="mb-4 grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                Certifications
              </h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Advanced Excel for Business Analysis</li>
                <li>• Financial Management Fundamentals</li>
                <li>• Digital Marketing Basics</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                Languages
              </h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Bengali - Native (Excellent)</li>
                <li>• English - Professional (Fluent)</li>
              </ul>
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div className="mb-4">
            <h3 className="mb-1 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              Extra-Curricular Activities
            </h3>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>
                • Active participant in inter-college football and cricket
                tournaments, demonstrating teamwork and competitive spirit
              </li>
              <li>
                • Event coordinator and organizer for multiple cultural
                programs, showcasing leadership and management skills
              </li>
              <li>
                • Sports team member with experience in competitive environments
                and collaborative achievement
              </li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="mb-2 border-b border-gray-300 pb-0.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              References
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-xs">
                <h4 className="mb-1 font-bold text-gray-900">
                  Muniruzzaman Munna
                </h4>
                <p className="text-gray-700">Deputy Head of Islamic Bank</p>
                <p className="text-gray-700">Meghna Bank PLC</p>
                <p className="text-gray-600">Phone: 01716454433</p>
                <p className="text-gray-600">Relation: Brother</p>
              </div>
              <div className="text-xs">
                <h4 className="mb-1 font-bold text-gray-900">
                  Md Amirul Islam Rubel
                </h4>
                <p className="text-gray-700">MD Secretariat</p>
                <p className="text-gray-700">Citizens Bank PLC</p>
                <p className="text-gray-600">Phone: 01917009539</p>
                <p className="text-gray-600">Relation: Relative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

