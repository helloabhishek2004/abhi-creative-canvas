
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  detailedDescription?: string;
}

const ProjectCard = ({ title, description, imageSrc, className, detailedDescription }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={cn("overflow-hidden rounded-xl bg-tertiary-light dark:bg-tertiary-dark shadow-lg cursor-pointer hover:scale-105 transition-transform", className)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-60 object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">{title}</h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">{description}</p>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair">{title}</DialogTitle>
          </DialogHeader>
          <div className="overflow-hidden rounded-lg mb-6">
            <img src={imageSrc} alt={title} className="w-full h-80 object-cover" />
          </div>
          <DialogDescription className="text-base leading-relaxed">
            {detailedDescription || description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
