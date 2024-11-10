import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      const scrollPercent = (scrolled / height) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex h-12 w-12 items-center justify-center"
            aria-label="Scroll to top"
          >
            {/* Circular Progress Background */}
            <svg
              className="absolute h-full w-full -rotate-90 transform"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="stroke-gray-200 dark:stroke-gray-700"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
                className="stroke-blue-600 transition-all duration-300 ease-in-out dark:stroke-blue-400"
              />
            </svg>
            
            {/* Button Content */}
            <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:bg-blue-600 dark:bg-gray-800 dark:group-hover:bg-blue-500">
              <FiArrowUp 
                className="h-5 w-5 text-blue-600 transition-all duration-300 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white" 
              />
            </span>

            {/* Tooltip */}
            <span className="absolute -top-10 rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-gray-800">
              Scroll to Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
