
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  detailedDescription?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  autoSlideInterval?: number;
  className?: string;
}

const ProjectCarousel = ({ 
  projects, 
  autoSlideInterval = 5000, 
  className 
}: ProjectCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    // Set up automatic sliding
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [projects.length, autoSlideInterval]);

  return (
    <Carousel className={className}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2 ">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              detailedDescription={project.detailedDescription}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 lg:-left-12" />
      <CarouselNext className="right-2 lg:-right-12" />
    </Carousel>
  );
};

export default ProjectCarousel;
