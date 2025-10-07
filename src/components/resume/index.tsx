"use client";
import React, { useState } from "react";
import { FiSearch, FiUser, FiFileText, FiEye, FiFilter, FiX } from "react-icons/fi";
import FrontendDeveloperWithImageResume from "./frontendwithimage";
import FrontendDeveloperWithOutImageResume from "./frontendwithoutimage";
import ModerFrontendWithImage from "./modernfrontendwithimage";
import ModerFrontendWithoutImage from "./modernfrontendwithoutimage";
import FullstackwithImage from "./fullstackwithimage";
import FullstackwithoutImage from "./fullstackwithoutimage";
import FullStackModernWithImage from "./fullstackmoderwithimage";
import FullStackModernWithoutImage from "./fullstackmodernwithoutimage";

const AllResumes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const [selectedImageTypes, setSelectedImageTypes] = useState<string[]>(["all"]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["all"]);

  const resumes = [
    {
      id: "frontend-with-image",
      title: "Frontend Developer - Clean (With Image)",
      description: "Professional clean design with profile photo",
      category: "Frontend",
      style: "Clean",
      hasImage: true,
      component: FrontendDeveloperWithImageResume,
    },
    {
      id: "frontend-without-image",
      title: "Frontend Developer - Clean (Without Image)",
      description: "Professional clean design without profile photo",
      category: "Frontend",
      style: "Clean",
      hasImage: false,
      component: FrontendDeveloperWithOutImageResume,
    },
    {
      id: "frontend-modern-with-image",
      title: "Frontend Developer - Modern (With Image)",
      description: "Modern colorful design with profile photo",
      category: "Frontend",
      style: "Modern",
      hasImage: true,
      component: ModerFrontendWithImage,
    },
    {
      id: "frontend-modern-without-image",
      title: "Frontend Developer - Modern (Without Image)",
      description: "Modern colorful design without profile photo",
      category: "Frontend",
      style: "Modern",
      hasImage: false,
      component: ModerFrontendWithoutImage,
    },
    {
      id: "fullstack-with-image",
      title: "Full-Stack Developer - Clean (With Image)",
      description: "Full-stack focused clean design with profile photo",
      category: "Full-Stack",
      style: "Clean",
      hasImage: true,
      component: FullstackwithImage,
    },
    {
      id: "fullstack-without-image",
      title: "Full-Stack Developer - Clean (Without Image)",
      description: "Full-stack focused clean design without profile photo",
      category: "Full-Stack",
      style: "Clean",
      hasImage: false,
      component: FullstackwithoutImage,
    },
    {
      id: "fullstack-modern-with-image",
      title: "Full-Stack Developer - Modern (With Image)",
      description: "Full-stack modern colorful design with profile photo",
      category: "Full-Stack",
      style: "Modern",
      hasImage: true,
      component: FullStackModernWithImage,
    },
    {
      id: "fullstack-modern-without-image",
      title: "Full-Stack Developer - Modern (Without Image)",
      description: "Full-stack modern colorful design without profile photo",
      category: "Full-Stack",
      style: "Modern",
      hasImage: false,
      component: FullStackModernWithoutImage,
    },
  ];

  const handleImageTypeToggle = (type: string) => {
    if (type === "all") {
      setSelectedImageTypes(["all"]);
    } else {
      setSelectedImageTypes((prev) => {
        const filtered = prev.filter((t) => t !== "all");
        if (filtered.includes(type)) {
          const newTypes = filtered.filter((t) => t !== type);
          return newTypes.length === 0 ? ["all"] : newTypes;
        } else {
          return [...filtered, type];
        }
      });
    }
  };

  const handleStyleToggle = (style: string) => {
    if (style === "all") {
      setSelectedStyles(["all"]);
    } else {
      setSelectedStyles((prev) => {
        const filtered = prev.filter((s) => s !== "all");
        if (filtered.includes(style)) {
          const newStyles = filtered.filter((s) => s !== style);
          return newStyles.length === 0 ? ["all"] : newStyles;
        } else {
          return [...filtered, style];
        }
      });
    }
  };

  const clearAllFilters = () => {
    setSelectedImageTypes(["all"]);
    setSelectedStyles(["all"]);
    setSearchQuery("");
  };

  const filteredResumes = resumes.filter((resume) => {
    const matchesSearch =
      resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.style.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesImageType =
      selectedImageTypes.includes("all") ||
      (selectedImageTypes.includes("with-image") && resume.hasImage) ||
      (selectedImageTypes.includes("without-image") && !resume.hasImage);

    const matchesStyle =
      selectedStyles.includes("all") ||
      selectedStyles.some((s) => s.toLowerCase() === resume.style.toLowerCase());

    return matchesSearch && matchesImageType && matchesStyle;
  });

  if (selectedResume) {
    const resume = resumes.find((r) => r.id === selectedResume);
    if (resume) {
      const ResumeComponent = resume.component;
      return (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <button
                onClick={() => setSelectedResume(null)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>←</span>
                <span className="font-medium">Back to Gallery</span>
              </button>
            </div>
          </div>
          <ResumeComponent />
        </div>
      );
    }
  }

  const hasActiveFilters =
    !selectedImageTypes.includes("all") ||
    !selectedStyles.includes("all") ||
    searchQuery !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Resume Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed resumes.
            Select the perfect template that matches your style and career
            focus.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by position, style, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Image Type Filter */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                <FiFilter className="inline h-4 w-4 mr-1" />
                Image Type
              </label>
              <div className="flex gap-2 flex-wrap justify-center">
                {["all", "with-image", "without-image"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleImageTypeToggle(type)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      selectedImageTypes.includes(type)
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {type === "all"
                      ? "All"
                      : type === "with-image"
                      ? "With Image"
                      : "Without Image"}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                <FiFilter className="inline h-4 w-4 mr-1" />
                Style
              </label>
              <div className="flex gap-2 flex-wrap justify-center">
                {["all", "clean", "modern"].map((style) => (
                  <button
                    key={style}
                    onClick={() => handleStyleToggle(style)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      selectedStyles.includes(style)
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="mt-4 text-center">
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <FiX className="h-4 w-4" />
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mb-8 flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiFileText className="h-4 w-4 text-blue-600" />
            <span>
              <strong className="text-gray-900">
                {filteredResumes.length}
              </strong>{" "}
              {filteredResumes.length === 1 ? "Resume" : "Resumes"} Found
            </span>
          </div>
        </div>

        {/* Resume Grid */}
        {filteredResumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResumes.map((resume) => (
              <div
                key={resume.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {resume.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {resume.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {resume.hasImage ? (
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <FiUser className="h-6 w-6 text-white" />
                        </div>
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                          <FiFileText className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                      {resume.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
                      {resume.style}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        resume.hasImage
                          ? "text-green-700 bg-green-100"
                          : "text-gray-700 bg-gray-100"
                      }`}
                    >
                      {resume.hasImage ? "With Photo" : "No Photo"}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedResume(resume.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md group-hover:scale-[1.02]"
                  >
                    <FiEye className="h-4 w-4" />
                    <span>View Resume</span>
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
              <FiSearch className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Resumes Found
            </h3>
            <p className="text-gray-600">
              {`Try adjusting your search query or filters to find what you're looking for.`}
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>
            All resumes are ATS-optimized and print-ready. Choose your preferred
            style and customize as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllResumes;