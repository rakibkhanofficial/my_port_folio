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
  FiArrowUp,
} from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import Image from "next/image";

const BadhonResumePage = () => {
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Muhammad_Badhon_Khan_Resume",
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
        <div ref={resumeRef} className="bg-white p-6 font-serif">
          <div className="border-b border-gray-200 pb-3">
            <div className="flex flex-wrap items-end justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center text-sm text-gray-500">
                    <Image
                      src="/badhonkhan.jpeg" // Replace with actual photo path or placeholder
                      alt="Muhammad Badhon Khan"
                      width={80}
                      height={80}
                      className="rounded-lg border-1 border-gray-200 object-cover"
                    />{" "}
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Muhammad Badhon Khan
                  </h1>
                  <h2 className="text-lg font-semibold text-blue-600">
                    LLB Student & Aspiring Lawyer
                  </h2>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div className="flex items-center justify-end gap-1">
                  <FiMail className="h-3 w-3" />
                  <span>badhonkhan70000@gmail.com</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <FiPhone className="h-3 w-3" />
                  <span>01685810492</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FiMapPin className="h-3 w-3" />
                <span>Bajitpur, Kishoreganj, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="mt-1">
            <div className="mb-1">
              <h3 className="mb-3 border-b border-gray-300 pb-2 text-lg font-bold text-black">
                Summary
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Motivated LLB student with a robust academic background and practical experience in operations management and IT support. Aiming to transition into a legal career by gaining hands-on experience under senior lawyers, utilizing strong organizational, communication, and technical skills.
              </p>
            </div>

            <div className="mb-1">
              <h3 className="mb-3 border-b border-gray-300 pb-2 text-lg font-bold text-black">
                Skills
              </h3>
              <div className="space-y-1">
                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    Legal & Professional
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Basic legal drafting and research skills (from LLB coursework), Foundational knowledge of constitutional and criminal law, Effective communication and client interaction
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    Technical
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Proficient in Microsoft Office (Word, Excel, PowerPoint), Email management (Gmail, Outlook), Virtual meeting platforms (Zoom, Google Meet), File management and PDF handling, Document preparation and formatting
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row print:flex-row print:gap-4">
              <div className="w-full md:w-1/3 print:w-1/3">

                <div className="mb-4">
                  <h3 className="mb-3 border-b border-gray-300 pb-1 text-lg font-bold text-black">
                    Education
                  </h3>
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
                    <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
                      <FiArrowUp className="h-2 w-2 text-white" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-800">
                      Bachelor of Laws (LLB)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Ongoing - 2nd Semester Completed
                    </p>
                    <p className="text-sm text-gray-600">
                      Ishakha International University, Bangladesh (IIUB)
                    </p>
                  </div>
                  <div className="relative pl-6 mt-3">
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
                    <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
                      <FiArrowUp className="h-2 w-2 text-white" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-800">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <p className="text-sm text-gray-700">
                      GPA: 4.05
                    </p>
                    <p className="text-sm text-gray-600">
                      Wali Newaz Khan College, Kishoreganj
                    </p>
                    <p className="text-sm text-gray-500">
                      2022
                    </p>
                  </div>
                  <div className="relative pl-6 mt-3">
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
                    <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-700 shadow-sm">
                      <FiArrowUp className="h-2 w-2 text-white" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-800">
                      Secondary School Certificate (SSC)
                    </h4>
                    <p className="text-sm text-gray-700">
                      GPA: 3.58
                    </p>
                    <p className="text-sm text-gray-600">
                      Emarat Hossain Ideal School
                    </p>
                    <p className="text-sm text-gray-500">
                      2018
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 border-b border-gray-300 pb-1 text-lg font-bold text-black">
                    Languages
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">Bangla</span> - Native
                    </p>
                    <p>
                      <span className="font-semibold">English</span> - Proficient
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 border-b border-gray-300 pb-1 text-lg font-bold text-black">
                    Interests
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Law, Legal Studies, Advocacy</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 print:w-2/3">
                <div className="mb-4">
                  <h3 className="mb-3 border-b border-gray-300 pb-1 text-lg font-bold text-black">
                    Work Experience
                  </h3>
                  <div className="relative">
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>
                    <div className="space-y-4">
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gray-600 shadow-sm">
                          <FiArrowUp className="h-2 w-2 text-white" />
                        </div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold text-gray-800">
                            Operations Assistant | Global IT Solution
                          </h4>
                          <span className="text-sm text-gray-500">
                            2022 – 2023
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Kishoreganj, Bangladesh</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700">
                          <li>
                            • Supported office management and client coordination to ensure seamless operations
                          </li>
                          <li>
                            • Assisted in IT operations, including troubleshooting and daily administrative tasks
                          </li>
                          <li>
                            • Maintained accurate records of client interactions, invoices, and service orders
                          </li>
                          <li>
                            • Enhanced customer satisfaction through effective problem-solving and communication
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 border-b border-gray-300 pb-1 text-lg font-bold text-black">
                    References
                  </h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <p className="font-semibold text-gray-800">Dr. Ahmed Rahman</p>
                      <p className="text-gray-600">Senior Lecturer, Law Department</p>
                      <p className="text-gray-600">Ishakha International University</p>
                      <div className="flex items-center gap-1 mt-1">
                        <FiPhone className="h-3 w-3" />
                        <span>+880-1712-345-678</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMail className="h-3 w-3" />
                        <span>ahmed.rahman@iiub.edu.bd</span>
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <p className="font-semibold text-gray-800">Mr. Rafiq Hassan</p>
                      <p className="text-gray-600">Manager, Global IT Solution</p>
                      <p className="text-gray-600">Former Supervisor</p>
                      <div className="flex items-center gap-1 mt-1">
                        <FiPhone className="h-3 w-3" />
                        <span>+880-1798-765-432</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMail className="h-3 w-3" />
                        <span>rafiq.hassan@globalitsolution.com</span>
                      </div>
                    </div>
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

export default BadhonResumePage;