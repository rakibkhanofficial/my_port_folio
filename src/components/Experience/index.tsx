import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  LuGraduationCap,
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuCheckCircle,
  LuBuilding,
} from "react-icons/lu";

interface Experience {
  id: string;
  title: string;
  company?: string;
  institution?: string;
  location: string;
  duration: string;
  description: string[];
  type: "work" | "education";
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    type: "work",
    title: "Software Developer",
    company: "Akij Venture",
    location: "Gulshan, Dhaka, Bangladesh",
    duration: "2023 - Present",
    description: [
      "Developed and maintained multiple full-stack web applications",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Implemented responsive designs and optimized application performance",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: "2",
    type: "work",
    title: "Software Development Intern",
    company: "Akij Venture.",
    location: "Gulshan, Dhaka, Bangladesh",
    duration: "2023 - 2023",
    description: [
      "Assisted in developing new features for the main product",
      "Participated in code reviews and technical discussions",
      "Gained hands-on experience with modern web technologies",
    ],
    technologies: ["JavaScript", "React", "Express.js", "MySQL"],
  },
  {
    id: "3",
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2017 - 2022",
    description: [
      "CGPA: 6.5/10",
      "Specialized in Full Stack Development and Cloud Computing",
      "Led technical team in university hackathons",
    ],
  },
];

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      setMatches(e.matches);
    };

    // Initial check
    setMatches(media.matches);

    // Add listener
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateMatch);
      return () => media.removeEventListener("change", updateMatch);
    } else {
      // Fallback for older browsers
      media.addListener(updateMatch);
      return () => media.removeListener(updateMatch);
    }
  }, [query]);

  return matches;
}

const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: isDesktop ? (index % 2 === 0 ? 50 : -50) : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
      },
    },
  };

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <div
        className={`relative flex flex-col items-center md:flex-row ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Timeline dot with icon */}
        <motion.div
          className="absolute left-0 z-10 flex h-10 w-10 -translate-x-4 transform items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 md:left-1/2 md:-translate-x-5"
          variants={iconVariants}
          initial="hidden"
          animate={controls}
        >
          {experience.type === "work" ? (
            <LuBriefcase className="h-4 w-4 text-white" />
          ) : (
            <LuGraduationCap className="h-4 w-4 text-white" />
          )}
          <div className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-20" />
        </motion.div>

        {/* Content */}
        <div
          className={`w-full overflow-hidden md:w-1/2 ${
            index % 2 === 0 ? "md:pr-16" : "md:pl-16"
          }`}
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="group rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/80"
            whileHover={{ scale: 1.02 }}
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <LuBuilding className="h-4 w-4" />
                <span>
                  {experience.type === "work"
                    ? experience.company
                    : experience.institution}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <LuCalendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuMapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <ul className="mb-4 space-y-2 text-gray-600 dark:text-gray-400">
              {experience.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <LuCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            {experience.technologies && (
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                transition={{ delay: 0.8 }}
              >
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-24 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            Experience Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A timeline of my professional growth and academic achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 md:left-1/2 md:-ml-0.5"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;