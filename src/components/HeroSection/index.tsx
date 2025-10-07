import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const circles = Array.from({ length: 20 }, (_, i) => ({
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      {/* Animated background circles - lowered z-index */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-500/5 dark:bg-blue-500/10"
            style={{
              width: circle.size,
              height: circle.size,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content - increased z-index */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-4 pb-16 pt-24 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block">
                <motion.span
                  className="inline-block rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  👋 Welcome to my portfolio
                </motion.span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
                <motion.span className="block" variants={itemVariants}>
                  {"Hi, I'm Rakib Khan"}
                </motion.span>
                <motion.span
                  className="mt-2 block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500"
                  variants={itemVariants}
                >
                  Full Stack Developer
                </motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400"
              >
                I craft elegant solutions through code, specializing in building
                exceptional digital experiences that live on the internet.
              </motion.p>
            </motion.div>

            {/* CTA Buttons - with improved button structure and z-index */}
            <motion.div
              variants={itemVariants}
              className="relative z-20 flex flex-wrap gap-4"
            >
              {/* Download CV Button */}
              <Link href="/resumes" className="z-20">
                <motion.div
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="h-5 w-5" />
                  Download CV
                </motion.div>
              </Link>
              
              <div className="flex gap-4">
                {/* GitHub Link */}
                <Link 
                  href="https://github.com/rakibkhanofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="z-20"
                >
                  <motion.div
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                  </motion.div>
                </Link>
                
                {/* LinkedIn Link */}
                <Link 
                  href="https://linkedin.com/in/rakibkhanofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="z-20"
                >
                  <motion.div
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "10+" },
                { label: "Technologies", value: "20+" },
                { label: "Client Satisfaction", value: "100%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg border border-gray-200 bg-white/50 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 max-w-md flex-1"
            animate={floatingAnimation}
          >
            <div className="relative">
              {/* Gradient circle behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl dark:from-blue-500/20 dark:to-purple-500/20" />
              {/* Profile image placeholder */}
              <motion.div
                className="relative aspect-square overflow-hidden rounded-full border-2 border-blue-200 bg-gray-100/50 dark:border-blue-500/20 dark:bg-gray-800/50"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/heroimage/hero.jpeg"
                  alt="Rakib Khan"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/5 blur-xl dark:bg-blue-500/10" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/5 blur-xl dark:bg-purple-500/10" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Tech stack marquee - adjusted z-index */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-gray-50/0 via-gray-50/80 to-gray-50/0 py-4 dark:from-gray-900/0 dark:via-gray-900/80 dark:to-gray-900/0"
      >
        <div className="flex items-center justify-center gap-8 text-gray-500 dark:text-gray-400">
          <motion.span
            animate={{ x: [-1000, 1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            React • Next.js • TypeScript • Node.js • TailwindCSS • MongoDB •
            GraphQL • AWS • Docker • Git
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;