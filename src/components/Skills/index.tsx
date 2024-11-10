import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiJenkins,
  SiGithub,
  SiGoogleanalytics,
  SiVercel,
  SiPwa,
} from "react-icons/si";
import { FaServer, FaCode } from "react-icons/fa";

const SkillsSection = () => {
  // Skills data with categories
  const skillsData = {
    "Frontend Development": [
      { name: "React.js", icon: SiReact, proficiency: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 90, color: "#000000" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        proficiency: 88,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        proficiency: 92,
        color: "#06B6D4",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        proficiency: 85,
        color: "#0055FF",
      },
    ],
    "Backend Development": [
      { name: "Node.js", icon: SiNodedotjs, proficiency: 85, color: "#47A248" },
      { name: "Express js", icon: SiExpress, proficiency: 85, color: "#47A248" },
      { name: "Nest.js", icon: SiNestjs, proficiency: 85, color: "#E0234E" },
      { name: "MySQL", icon: SiMysql, proficiency: 82, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, proficiency: 88, color: "#47A248" },
    ],
    "DevOps & Tools": [
      { name: "Docker", icon: SiDocker, proficiency: 80, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, proficiency: 75, color: "#D24939" },
      { name: "GitHub", icon: SiGithub, proficiency: 90, color: "#181717" },
      { name: "Vercel", icon: SiVercel, proficiency: 90, color: "#181717" },
    ],
    "Web Concepts": [
      {
        name: "SEO",
        icon: SiGoogleanalytics,
        proficiency: 85,
        color: "#4285F4",
      },
      { name: "SSR", icon: FaServer, proficiency: 88, color: "#FF6B6B" },
      { name: "SPA", icon: FaCode, proficiency: 90, color: "#6B66FF" },
      { name: "PWA", icon: SiPwa, proficiency: 82, color: "#5A0FC8" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div
          className="mb-16 space-y-4 text-center"
          variants={itemVariants}
        >
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Expertise in modern web technologies and frameworks, with a focus on
            creating scalable and performant applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/50"
            >
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                {category}
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                        <skill.icon
                          className="h-6 w-6"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-500/10" />
      </motion.div>
    </div>
  );
};

export default SkillsSection;
