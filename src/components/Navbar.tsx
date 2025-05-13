
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
        scrolled ? "py-4 bg-opacity-90" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-8 py-4">
        <h2 className="font-playfair text-3xl font-bold">ABHISHEK</h2>
        
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <button onClick={() => scrollToSection("about")} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="nav-link">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="nav-link">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-transform active:scale-90"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
