
import { cn } from "@/lib/utils";

interface FlowerIconProps {
  className?: string;
}

const FlowerIcon = ({ className }: FlowerIconProps) => {
  return (
    <div className={cn("w-32 h-32 mx-auto mb-8", className)}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="7" className="fill-highlight-dark dark:fill-highlight-dark-dark animate-pulse-center" />
        <g>
          <path d="M50 20 Q40 35, 30 30 Q20 40, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-0.5s" }} />
          <path d="M80 50 Q60 40, 70 30 Q60 20, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-1s" }} />
          <path d="M50 80 Q40 60, 30 70 Q20 60, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-1.5s" }} />
          <path d="M20 50 Q40 40, 30 30 Q40 20, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-2s" }} />
          <path d="M50 20 Q60 35, 70 30 Q80 40, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-2.5s" }} />
          <path d="M50 80 Q60 60, 70 70 Q80 60, 50 50 Z" className="petal animate-petal-animation" style={{ animationDelay: "-3s" }} />
        </g>
      </svg>
    </div>
  );
};

export default FlowerIcon;
