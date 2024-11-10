import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Image } from "@nextui-org/react";

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
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 overflow-hidden">
      {/* Animated background circles */}
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

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block">
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-sm bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  👋 Welcome to my portfolio
                </motion.span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <motion.span
                  className="block"
                  variants={itemVariants}
                >
                  {"Hi, I'm Rakib Khan"}
                </motion.span>
                <motion.span
                  className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  Full Stack Developer
                </motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mt-4"
              >
                I craft elegant solutions through code, specializing in building exceptional 
                digital experiences that live on the internet.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </motion.button>
              <motion.div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "100+" },
                { label: "Technologies", value: "20+" },
                { label: "Client Satisfaction", value: "100%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-1 max-w-md"
            animate={floatingAnimation}
          >
            <div className="relative">
              {/* Gradient circle behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
              {/* Profile image placeholder */}
              <motion.div
                className="relative aspect-square rounded-full overflow-hidden border-2 border-blue-200 dark:border-blue-500/20 bg-gray-100/50 dark:bg-gray-800/50"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/heroimage/hero.jpeg"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Tech stack marquee */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-0 left-0 right-0 py-4 bg-gradient-to-r from-gray-50/0 via-gray-50/80 to-gray-50/0 dark:from-gray-900/0 dark:via-gray-900/80 dark:to-gray-900/0"
      >
        <div className="flex justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
          <motion.span
            animate={{ x: [-1000, 1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            React • Next.js • TypeScript • Node.js • TailwindCSS • MongoDB • GraphQL • AWS • Docker • Git
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;