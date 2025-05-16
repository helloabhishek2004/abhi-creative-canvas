import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Music4, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isJiggling, setIsJiggling] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isSideNavOpen && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        toggleSideNav(true);
      }
    };

    if (isSideNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSideNavOpen]);

  // Smooth scroll
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header's height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleSoundToggle = () => {
    setIsSoundOn(prev => !prev);
    setIsJiggling(true);
    setTimeout(() => setIsJiggling(false), 500);

    if ((window as any).toggleBackgroundAudio) {
      (window as any).toggleBackgroundAudio();
    }
  };

  const toggleSideNav = (close = false) => {
    if (close) {
      setIsClosing(true);
      setTimeout(() => {
        setIsSideNavOpen(false);
        setIsClosing(false);
      }, 600);
    } else {
      // Toggle open/close from Menu icon
      if (isSideNavOpen) {
        toggleSideNav(true);
      } else {
        setIsSideNavOpen(true);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-300 ${
        scrolled ? "py-4 bg-opacity-90" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-8 py-4">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold">ABHISHEK</h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <a
                className="nav-link"
                href="https://drive.google.com/uc?export=download&id=18wUWSDZe-wd5RT6omiBlkbMAKjP5UyKl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            {["about", "projects", "skills", "contact"].map(section => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="nav-link capitalize"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
          <ul className="flex items-center gap-2 sm:gap-4">
            {/* Sound */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-transform active:scale-90 ${
                isJiggling ? "jiggle" : ""
              }`}
              aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
            >
              <Music4
                className={`h-5 w-5 transition-colors duration-200 ${
                  isSoundOn ? "text-current" : "text-gray-400 dark:text-gray-600"
                }`}
              />
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-transform active:scale-90"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Menu Toggle (Mobile) */}
            <button
              onClick={() => toggleSideNav()}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-transform active:scale-90 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSideNavOpen && (
        <div
          ref={sidebarRef}
          className={`fixed right-0 top-1/2 transform -translate-y-1/2 w-64 h-auto glass side-nav md:hidden flex flex-col items-center justify-center z-50 ${
            isSideNavOpen && !isClosing
              ? "animate-slideInFromRight"
              : isClosing
              ? "animate-slideOutToRight"
              : "hidden"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4 w-full">
            <button
              onClick={() => toggleSideNav(true)}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark text-xl transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center gap-6 pt-8 w-full">
          <ul className="text-white space-y-4 w-full text-center">
  <li className="bg-highlight-light dark:bg-highlight-light-dark px-6 py-3 rounded-full text-xl w-11/12 mx-auto font-semibold">
    <a
      href="https://drive.google.com/uc?export=download&id=18wUWSDZe-wd5RT6omiBlkbMAKjP5UyKl"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  </li>
  {["About", "Projects", "Skills", "Contact"].map((section, idx) => (
    <li
      key={section}
      className={`capitalize bg-highlight-light dark:bg-highlight-light-dark px-6 py-3 rounded-full text-xl font-semibold w-11/12 mx-auto ${
        isClosing
          ? "opacity-100 animate-fade-out-down"
          : "opacity-0 animate-fade-in-up"
      }`}
      style={{
        animationDelay: `${0.2 + idx * 0.1}s`,
        animationFillMode: "forwards",
      }}
    >
      <button
        onClick={() => {
          scrollToSection(section.toLowerCase());
          toggleSideNav(true);
        }}
        className="w-full"
      >
        {section}
      </button>
    </li>
  ))}
</ul>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
