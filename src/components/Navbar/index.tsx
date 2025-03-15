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
  { label: "Skills", id: "skills", minHeight: "90vh" },
  { label: "Projects", id: "projects", minHeight: "100vh" },
  { label: "Experience", id: "experience", minHeight: "85vh" },
  { label: "Contact", id: "contact", minHeight: "70vh" }
];

const GlossyNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  // Improved scroll spy functionality
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find the current active section
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + rect.height;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (activeSection !== item.id) {
            setActiveSection(item.id);
          }
          break;
        }
      }
    };

    // Throttle scroll event
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", scrollListener, { passive: true });
    handleResize();
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", scrollListener);
    };
  }, [activeSection]);

  // Improved smooth scroll functionality
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight = 80; // Height of the navigation bar
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Update active section immediately for better UX
    setActiveSection(id);
  };

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-[500] h-20 w-full"
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
              <div className="text-xl text-blue-600 dark:border-blue-500/20 dark:text-blue-400 font-bold">Rakib Khan</div>
              
              {!isMobile && (
                <div className="flex items-center gap-8">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative text-base font-medium transition-colors duration-200 ${
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