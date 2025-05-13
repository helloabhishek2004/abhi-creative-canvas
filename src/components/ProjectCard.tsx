
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const ProjectCard = ({ title, description, imageSrc, className }: ProjectCardProps) => {
  return (
    <div className={cn("overflow-hidden rounded-xl bg-tertiary-light dark:bg-tertiary-dark shadow-lg", className)}>
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
  );
};

export default ProjectCard;
