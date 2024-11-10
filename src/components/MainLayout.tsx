"use client";
import React from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import HeroSection from "./HeroSection";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import ExperienceSection from "./Experience";
import Contact from "./Contact";
import ScrollToTop from "~/Elements/ScrollToTop";
import FloatingChatBot from "~/Elements/CustomMessenger";
import AnimatedGitHubCalendar from "./GithubCalender";

const MainLayout = () => {
  const faqs = [
    "How can I track my order?",
    "What's your return policy?",
    "Do you offer international shipping?",
    "How can I contact customer support?",
  ];

  return (
    <main>
      <div className="sticky h-16 w-full">
        <NavbarComponent />
      </div>
      <HeroSection />
      <AnimatedGitHubCalendar githubToken="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" username="rakibkhanofficial"/>
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Contact />
      <footer>
        <FooterComponent />
      </footer>
      <ScrollToTop />
      <FloatingChatBot
        messengerUrl="http://m.me/rakibkhan"
        chatBotType="messenger"
        position="bottom-left"
        size="small"
        brandName="Rakib Khan"
        brandLogo="/heroimage/hero.png"
        activeHours={{ start: 8, end: 22 }}
        faqs={faqs}
      />
    </main>
  );
};

export default MainLayout;
