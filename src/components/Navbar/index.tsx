import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DarkModeSwitch } from "./darkmodeswitch";

interface MenuItem {
  label: string;
  id: string;
  minHeight: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", id: "home", minHeight: "100vh" },
  { label: "Contributions", id: "contributions", minHeight: "80vh" },
  { label: "Skills", id: "skills", minHeight: "90vh" },
  { label: "Projects", id: "projects", minHeight: "100vh" },
  { label: "Experience", id: "experience", minHeight: "85vh" },
  { label: "Contact", id: "contact", minHeight: "70vh" }
];

interface Section {
  id: string;
  top: number;
  bottom: number;
}

const GlossyNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = (): void => {
      requestAnimationFrame(() => {
        const sections: Section[] = menuItems
          .map(({ id }) => {
            const element = document.getElementById(id);
            if (!element) return null;
            
            const rect = element.getBoundingClientRect();
            return {
              id,
              top: rect.top,
              bottom: rect.bottom
            };
          })
          .filter((section): section is Section => section !== null);

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

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

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
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-[20000] h-20 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="relative h-full"
          style={{ backgroundColor: navBackground }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/80 to-purple-50/80 dark:from-gray-900/80 dark:via-blue-950/80 dark:to-purple-950/80" />
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10" />
          
          <div className="relative h-full mx-auto max-w-[1400px] px-6">
            <div className="flex h-full items-center justify-between">
              <div className="text-xl font-bold">Logo</div>
              
              {!isMobile && (
                <div className="flex items-center gap-8">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative text-base font-medium ${
                        activeSection === item.id
                          ? "text-purple-500"
                          : "text-gray-700 hover:text-purple-700 dark:text-gray-200 dark:hover:text-purple-400"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
              
              <DarkModeSwitch />
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* <main className="relative z-0">
        {menuItems.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            style={{ 
              minHeight: item.minHeight,
              paddingTop: index === 0 ? "5rem" : 0 
            }}
            className="relative w-full"
          >
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold mb-6">{item.label}</h2>
              <div className="mt-4">Content for {item.label} section</div>
            </div>
          </section>
        ))}
      </main> */}
    </>
  );
};

export default GlossyNavbar;