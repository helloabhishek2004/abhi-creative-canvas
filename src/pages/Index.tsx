
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import FlowerIcon from "@/components/FlowerIcon";
import TypingEffect from "@/components/TypingEffect";
import AboutMeModal from "@/components/AboutMeModal";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import placeholderImage from '/placeholder.svg';

const Index = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleElements((prev) => {
              if (!prev.includes(entry.target.id)) {
                return [...prev, entry.target.id];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const getAnimationClass = (elementId: string) => {
    if (!visibleElements.includes(elementId)) return "opacity-0";
    
    switch (elementId) {
      case "hero":
        return "animate-zoom-in";
      case "portrait":
        return "animate-fade-in-right";
      case "about-me":
        return "animate-flip-in";
      case "projects":
        return "animate-fade-in-up";
      case "skills":
        return "animate-fade-in-left";
      case "contact":
        return "animate-fade-in-right";
      default:
        return "animate-fade-in-up";
    }
  };
  
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Brief description of Project One.",
      imageSrc: placeholderImage,
      detailedDescription: "Project One is a comprehensive web application designed to solve complex problems with an elegant user interface. It leverages modern technologies and design principles to deliver a seamless experience. The project demonstrates advanced functionality, responsive design, and attention to detail."
    },
    {
      id: 2,
      title: "Project Two",
      description: "Brief description of Project Two.",
      imageSrc: placeholderImage,
      detailedDescription: "Project Two represents an innovative approach to content management, featuring custom animations, real-time data visualization, and cross-platform compatibility. This project showcases advanced frontend techniques and optimization strategies for maximum performance."
    },
    {
      id: 3,
      title: "Project Three",
      description: "Brief description of Project Three.",
      imageSrc: placeholderImage,
      detailedDescription: "Project Three is an experimental design concept that pushes the boundaries of traditional web interfaces. It combines unique visual elements with practical functionality to create an engaging user experience that stands out."
    },
    {
      id: 4,
      title: "Project Four",
      description: "Brief description of Project Four.",
      imageSrc: placeholderImage,
      detailedDescription: "Project Four focuses on accessibility and inclusive design while maintaining visual appeal. This project demonstrates how beautiful interfaces can be built with universal access in mind, ensuring everyone can benefit from the application."
    }
  ];
  
  return (
    <>
      <ParticleBackground />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {/* Hero Section */}
        <section 
          id="hero" 
          className={`card col-span-1 md:col-span-2 row-span-2 flex flex-col items-center justify-center text-center animate-on-scroll ${getAnimationClass("hero")}`}
        >
          <FlowerIcon />
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Hi, I'm <TypingEffect textArray={["Abhishek", "a Designer", "a Developer", "an AI Explorer", "a Creative Thinker"]} />
          </h1>
          <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark">
            Turning ideas into pixels, code into magic, and creativity into experiences.
          </p>
        </section>
        
        {/* Portrait */}
        <div 
          id="portrait" 
          className={`card p-3 col-span-1 row-span-2 animate-on-scroll ${getAnimationClass("portrait")}`}
        >
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img 
              src={placeholderImage} 
              alt="Portrait of Abhishek" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* About Me */}
        <section 
          id="about-me" 
          className={`card col-span-1 animate-on-scroll cursor-pointer ${getAnimationClass("about-me")}`}
          onClick={() => setIsAboutModalOpen(true)}
        >
          <h2 className="text-2xl font-playfair font-bold mb-3" id="about">About Me</h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
            Creative designer and developer passionate about blending technology with art to craft meaningful digital experiences.
          </p>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              setIsAboutModalOpen(true);
            }}
            className="bg-highlight-light hover:bg-highlight-dark dark:bg-highlight-light-dark dark:hover:bg-highlight-dark-dark text-text-primary-light dark:text-text-primary-dark"
          >
            Read More
          </Button>
        </section>
        
        {/* Projects */}
        <section 
          id="projects" 
          className={`card col-span-1 md:col-span-2 animate-on-scroll ${getAnimationClass("projects")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-6">Projects</h2>
          <ProjectCarousel projects={projects} autoSlideInterval={5000} />
        </section>
        
        {/* Skills */}
        <section 
          id="skills" 
          className={`card col-span-1 animate-on-scroll ${getAnimationClass("skills")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Web designing", "Video Production", "Graphic designing", "Web development", "AI tools", "Creative thinking"].map((skill) => (
              <span 
                key={skill} 
                className="bg-highlight-light dark:bg-highlight-light-dark px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        
        {/* Contact */}
        <section 
          id="contact" 
          className={`card col-span-1 md:col-span-2 animate-on-scroll ${getAnimationClass("contact")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-4">Contact</h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-5">
            Interested in collaborating? Let's connect!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:abhishek@example.com"
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <Mail size={20} />
              <span>abhishek@example.com</span>
            </a>
            <a 
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <svg 
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                <path d="M13 7a2 2 0 0 0-2 2" />
                <path d="M11 15a2 2 0 0 0 2 2" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:+919999999999"
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <Phone size={20} />
              <span>+91 99999 99999</span>
            </a>
          </div>
        </section>
      </main>
      
      <footer className="pb-8 pt-4">
        <div className="flex justify-center gap-6">
          <a 
            href="https://instagram.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://twitter.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
      
      <AboutMeModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </>
  );
};

export default Index;
