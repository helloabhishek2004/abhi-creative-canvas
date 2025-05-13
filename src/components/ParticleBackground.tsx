
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * pixelRatio;
    canvas.height = dimensions.height * pixelRatio;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    
    ctx.scale(pixelRatio, pixelRatio);
    
    const particles: Array<{
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      opacity: number;
    }> = [];
    
    const PARTICLE_COUNT = 320;
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        
        const color = theme === 'dark'
          ? `rgba(255, 255, 255, ${p.opacity * 0.3})`
          : `rgba(43, 124, 90, ${p.opacity})`;
          
        ctx.fillStyle = color;
        ctx.fill();
        
        p.x += p.dx;
        p.y += p.dy;
        
        const buffer = 5;
        if (p.x < -buffer || p.x > dimensions.width + buffer) p.dx *= -1;
        if (p.y < -buffer || p.y > dimensions.height + buffer) p.dy *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions, theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;
