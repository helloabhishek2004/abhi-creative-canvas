
import { useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal = ({ isOpen, onClose }: AboutMeModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark">
        <DialogHeader className="border-b border-tertiary-light dark:border-tertiary-dark pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-playfair text-text-primary-light dark:text-text-primary-dark">About Me</DialogTitle>
            <button
              onClick={onClose}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark text-xl transition-all hover:rotate-90"
            >
              <X />
            </button>
          </div>
        </DialogHeader>
        
        <div className="mt-4 space-y-4 text-text-secondary-light dark:text-text-secondary-dark px-1">
          <p className="leading-relaxed">👋 Hey there! I'm <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">Abhishek</span> — a creatively-wired designer, developer, and visual artist who blends code, aesthetics, and strategy to build powerful digital experiences.</p>
          
          <p className="leading-relaxed">✨ From crafting seamless UI/UX for web platforms to elevating brands through bold visuals, motion graphics, and custom design — I thrive where creativity meets functionality. I don't just build things. I create experiences that connect, inspire, and leave an impact.</p>
          
          <p className="leading-relaxed">🎨 With a sharp eye for detail and a love for visual storytelling, I specialize in responsive web design, frontend development, brand identity, and AI-powered content creation. Whether it's a portfolio, a product site, or a campaign reel — every pixel I place has a purpose.</p>
          
          <p className="leading-relaxed">💻 When I'm not designing or coding, you'll find me exploring emerging tech, experimenting with digital art, or vibing to late-night playlists while dreaming up the next big thing.</p>
          
          <div className="pt-2">
            <h3 className="text-xl font-playfair text-text-primary-light dark:text-text-primary-dark mt-4 mb-2">🌐 My Philosophy</h3>
            <p className="leading-relaxed">I believe great design lives at the intersection of creativity, usability, and authenticity. Every project I take on is built with empathy, intention, and a touch of magic ✨.</p>
          </div>
          
          <div className="pt-2">
            <h3 className="text-xl font-playfair text-text-primary-light dark:text-text-primary-dark mt-4 mb-2">📚 Education</h3>
            <p className="mb-1 font-medium text-text-primary-light dark:text-text-primary-dark">• Bachelor's in Computer Science</p>
            <p className="mb-4 font-medium text-text-primary-light dark:text-text-primary-dark">• Advanced Web Development & Creative Tech — Self-Taught, Curiosity-Fueled 🚀</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMeModal;
