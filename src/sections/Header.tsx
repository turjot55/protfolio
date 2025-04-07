"use client";
import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section) => {
      const top = section.offsetTop - window.scrollY;
      const height = section.offsetHeight;
      if (top <= 50 && top + height > 50) {
        setActiveSection(section.getAttribute("id") || "");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavItemClass = (section: string) => {
    return activeSection === section
      ? "nav-item bg-white text-gray-900"
      : "nav-item";
  };

  return (
    <div className="fixed  top-3 w-full z-10 flex justify-center px-3   pr-[500px]">
      <nav className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 sm:gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm w-full max-w-xs sm:max-w-fit">
        <a href="#home" className={getNavItemClass("home")}>
          Home
        </a>
        <a href="#projects" className={getNavItemClass("projects")}>
          Projects
        </a>
        <a href="#about" className={getNavItemClass("about")}>
          About
        </a>
        <a href="#contact" className={getNavItemClass("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
};
