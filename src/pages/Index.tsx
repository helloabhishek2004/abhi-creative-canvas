import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import FlowerIcon from "@/components/FlowerIcon";
import TypingEffect from "@/components/TypingEffect";
import AboutMeModal from "@/components/AboutMeModal";
import ProjectCarousel from "@/components/ProjectCarousel";
import ToolsGrid from "@/components/ToolsGrid";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, Facebook, Github } from "lucide-react";
import placeholderImage from '/placeholder.svg';
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { theme } = useTheme();
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const birthDate = new Date("2004-11-25T13:10:00+05:30");

    const updateAge = () => {
      const now = new Date();
      const ageDiff = now.getTime() - birthDate.getTime();

      const years = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((ageDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((ageDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const setText = (id: string, value: number) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value.toString();
      };

      setText("age-years", years);
      setText("age-months", months);
      setText("age-days", days);
      setText("age-hours", hours);
      setText("age-minutes", minutes);
      setText("age-seconds", seconds);
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);

    return () => clearInterval(interval);
  }, []);

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
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!document.getElementById('linkedin-badge-script')) {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.id = 'linkedin-badge-script';
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if ((window as any).LI && (window as any).LI.Widget && badgeRef.current) {
      (window as any).LI.Widget.init();
    }
  }, [theme]);

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
      case "tools":
        return "animate-fade-in-left";
      case "location":
        return "animate-fade-in-up";
      case "live-age":
        return "animate-zoom-in";
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

      <main className="container mx-auto px-4 sm:px-6 pt-32 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
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
            Turning ideas into pixels, code into magic, and creativity into digital experiences.
          </p>
        </section>

        {/* Portrait */}
        <div
          id="portrait"
          className={`card p-3 col-span-1 row-span-2 animate-on-scroll ${getAnimationClass("portrait")}`}
        >
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src="image/aa.jpg"
              onError={(e) => (e.currentTarget.src = placeholderImage)}
              alt="Portrait of Abhishek"
              className="w-full h-full object-cover rounded-3xl"
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

        {/* NEW: Tools I'm Good At Section */}
        <section
          id="tools"
          className={`card col-span-1 animate-on-scroll h-[450px] ${getAnimationClass("tools")}`}
        >
          <ToolsGrid />
        </section>



        {/* Skills */}
        <section
          id="skills"
          className={`card col-span-1 animate-on-scroll ${getAnimationClass("skills")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3 max-h-[310px] overflow-y-auto no-scrollbar">
            {["Web designing", "Video Production", "Graphic designing", "Web development", "AI tools", "SEO Basics", "Cross-Domain Thinker", " Photo Editing & Visual Enhancement", "Tech Explainer","Creative thinking", "Aesthetic Consistency","Creative Cooking"].map((skill) => (
              <span
                key={skill}
                className="bg-highlight-light dark:bg-highlight-light-dark px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        {/* Projects */}
        <section
          id="projects"
          className={`card col-span-1 md:col-span-2 animate-on-scroll ${getAnimationClass("projects")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-6">Projects</h2>
          <ProjectCarousel projects={projects} autoSlideInterval={5000} />
        </section>

        {/* Live Map Tile */}
        <section
          id="location"
          className={`card col-span-1 animate-on-scroll ${getAnimationClass("location")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-3">I'm somewhere here</h2>
          <div className="w-full h-[335px] rounded-xl overflow-hidden">
            <iframe
              title="Varkala Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6945374120467!2d76.70938167487007!3d8.737845296013416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef07104e5a7f%3A0x7f85f1d19024138d!2sVarkala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715592799351!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Live Age Tile */}
        <section
          id="live-age"
          className={`card col-span-1 animate-on-scroll ${getAnimationClass("live-age")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-3">My Age</h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            <span className="text-4xl font-bold text-highlight-light dark:text-highlight-light-dark" id="age-years">0</span>
            <span> years, </span>
            <span id="age-months">0</span> months,
            <span id="age-days">0</span> days,
            <span id="age-hours">0</span> hours,
            <span id="age-minutes">0</span> mins,
            <span id="age-seconds">0</span> secs
          </p>
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
              href="mailto:abhishekdq2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <Mail size={20} />
              <span>abhishekdq2004@gmail.com</span>
            </a>
            <a
              href="https://wa.me/9048825515"
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
              href="tel:+91 9048825515"
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <Phone size={20} />
              <span>+91 9048825515</span>
            </a>
          </div>
        </section>
        {/* LinkedIn Badge */}
        <section
          id="linkedin-badge"
          className={`no-scrollbar card col-span-1 md:col-span-1 w-full max-h-xl mx-auto animate-on-scroll ${getAnimationClass("linkedin-badge")}`}
        >
          <h2 className="text-2xl font-playfair font-bold mb-3">Connect with me </h2>
          <div
            ref={badgeRef}
            className=" border-gray-300 rounded-xl badge-base LI-profile-badge w-full flex justify-center no-scrollbar"
            data-locale="en_US"
            data-size="large"
            data-theme={theme === 'dark' ? 'dark' : 'light'}
            data-type="VERTICAL"
            data-vanity="abhisheks20"
            data-version="v1"
            style={{
              overflow: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maxWidth: "100%",
              minHeight: "100px",
            }}
          >

          </div>
        </section>





      </main>

      <footer className="pb-8 pt-4">
        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/helloabhishek2004"
            onClick={(e) => {
              e.preventDefault();
              const webGithubUrl = "https://github.com/helloabhishek2004";
              const mobileGithubUrl = "github://user?username=helloabhishek2004";

              // Check if running on mobile
              const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

              if (isMobile) {
                window.location.href = mobileGithubUrl;
                setTimeout(() => {
                  window.location.href = webGithubUrl;
                }, 25);
              } else {
                // Open in new tab on desktop
                window.open(webGithubUrl, '_blank');
              }
            }}
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="instagram://user?username=th.e_man"
            onClick={(e) => {
              e.preventDefault();
              const username = "th.e_man";
              const mobileInstagramUrl = `instagram://user?username=${username}`;
              const webInstagramUrl = `https://instagram.com/${username}`;
              window.location.href = mobileInstagramUrl;
              setTimeout(() => {
                window.location.href = webInstagramUrl;
              }, 25);
            }}
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href="fb://profile/abhishek.kannan.1291"
            onClick={(e) => {
              e.preventDefault();
              const username = "abhishek.kannan.1291";
              const mobileFacebookUrl = `fb://profile/${username}`;
              const webFacebookUrl = `https://www.facebook.com/${username}`;
              window.location.href = mobileFacebookUrl;
              setTimeout(() => {
                window.location.href = webFacebookUrl;
              }, 25);
            }}
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-blue-light dark:hover:text-accent-blue-dark transition-colors flex items-center gap-2"
          >
            <Facebook size={18} />
            <span>Facebook</span>
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
