import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiHome4Fill, RiHome4Line } from "react-icons/ri";
import { BsListTask, BsList } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiFillProject, AiOutlineProject } from "react-icons/ai";
import { MdWork, MdWorkOutline } from "react-icons/md";
import { RiContactsFill, RiContactsLine } from "react-icons/ri";

interface NavItem {
  icon: React.ElementType;
  activeIcon: React.ElementType;
  label: string;
  id: string;
  minHeight: string;
}

const navItems: NavItem[] = [
  {
    icon: RiHome4Line,
    activeIcon: RiHome4Fill,
    label: "Home",
    id: "home",
    minHeight: "100vh"
  },
  {
    icon: BsListTask,
    activeIcon: BsList,
    label: "Contributions",
    id: "contributions",
    minHeight: "80vh"
  },
  {
    icon: GiSkills,
    activeIcon: GiSkills,
    label: "Skills",
    id: "skills",
    minHeight: "90vh"
  },
  {
    icon: AiOutlineProject,
    activeIcon: AiFillProject,
    label: "Projects",
    id: "projects",
    minHeight: "100vh"
  },
  {
    icon: MdWorkOutline,
    activeIcon: MdWork,
    label: "Experience",
    id: "experience",
    minHeight: "85vh"
  },
  {
    icon: RiContactsLine,
    activeIcon: RiContactsFill,
    label: "Contact",
    id: "contact",
    minHeight: "70vh"
  }
];

const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle bottom nav visibility
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setIsVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Handle active section detection
      requestAnimationFrame(() => {
        const sections = navItems.map(({ id }) => {
          const element = document.getElementById(id);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top,
            bottom: rect.bottom
          };
        }).filter((section): section is { id: string; top: number; bottom: number; } => 
          section !== null
        );

        const viewportHeight = window.innerHeight;
        let maxVisibleSection = sections[0]?.id;
        let maxVisibleHeight = 0;

        sections.forEach((section) => {
          const visibleHeight = Math.min(section.bottom, viewportHeight) - 
                              Math.max(section.top, 0);
          
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleSection = section.id;
          }
        });

        if (maxVisibleSection && maxVisibleSection !== activeSection) {
          setActiveSection(maxVisibleSection);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, activeSection]);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 1,
          }}
          className="pb-safe-area fixed bottom-0 left-0 z-50 w-full md:hidden"
        >
          {/* Blur Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/70 backdrop-blur-lg dark:from-gray-900/90 dark:to-gray-900/70" />

          <div className="relative px-4 py-2">
            <div className="mx-auto grid grid-cols-6 items-center justify-items-center max-w-lg">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative flex flex-col items-center px-2 py-1"
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl bg-purple-100 dark:bg-purple-900/30"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}

                    {/* Icon and Label Container */}
                    <div className="relative z-10 flex flex-col items-center">
                      <Icon
                        className={`h-4 w-4 transition-colors duration-200 ${
                          isActive
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200"
                        }`}
                      />
                      <span
                        className={`mt-1 text-[10px] transition-colors duration-200 ${
                          isActive
                            ? "font-medium text-purple-600 dark:text-purple-400"
                            : "text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default BottomNav;