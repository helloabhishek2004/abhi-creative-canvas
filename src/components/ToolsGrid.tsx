
import { useState, useEffect } from "react";
import { 
  Figma, 
  Image, 
  Video, 
  Code, 
  Palette, 
  Camera, 
  Film, 
  Layers, 
  Database 
} from "lucide-react";

interface ToolItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const ToolsGrid = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: ToolItem[] = [
    { 
      name: "Figma", 
      icon: <Figma size={24} />,
      color: "bg-purple-200 dark:bg-purple-900"
    },
    { 
      name: "Photoshop", 
      icon: <Image size={24} />,
      color: "bg-blue-200 dark:bg-blue-900"
    },
    { 
      name: "Premiere Pro", 
      icon: <Video size={24} />,
      color: "bg-indigo-200 dark:bg-indigo-900"
    },
    { 
      name: "CapCut", 
      icon: <Film size={24} />,
      color: "bg-teal-200 dark:bg-teal-900" 
    },
    { 
      name: "Django", 
      icon: <Code size={24} />,
      color: "bg-green-200 dark:bg-green-900"
    },
    { 
      name: "PHP", 
      icon: <Database size={24} />,
      color: "bg-blue-200 dark:bg-blue-900"
    },
    { 
      name: "Lightroom", 
      icon: <Palette size={24} />,
      color: "bg-amber-200 dark:bg-amber-900"
    },
    { 
      name: "Canvas", 
      icon: <Layers size={24} />,
      color: "bg-pink-200 dark:bg-pink-900"
    },
    { 
      name: "Camera", 
      icon: <Camera size={24} />,
      color: "bg-gray-200 dark:bg-gray-800"
    }
  ];

  useEffect(() => {
    // Auto-hover effect that cycles through tools
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tools.length);
      setHoveredTool(tools[randomIndex].name);
      
      // Clear hover effect after a short time
      setTimeout(() => {
        setHoveredTool(null);
      }, 1800);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [tools.length]);
  
  // Subtle ASMR-lite click sound on hover
  const playHoverSound = () => {
    const audio = new Audio();
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExMWlpaWlpaZ2dnZ2dnb29vb29vfX19fX2LiYmJiYmXl5eXl5eioqKioqKwsLCwsLC+vr6+vr7Ly8vLy8vX19fX19ff39/f39/s7Ozs7Oz4+Pj4+Pj/%2F%2F%2F%2F%2F%2F8AAAAATGF2ZgAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrS9s4iBMQxP85WDpMzEyRiAA4HAVMWAechAGCFCVBSgf%2F%2F%2F5BUqC1vHuSN/lgsHHkGf/yNIESsGvBv%2F9cKR7Jr/7kGTwI3FKYpQS9YcI7RxngoAABHGkib+qqJE9RMTK4qaoAF7%2F%2FGmRcYfFokKKKE5CZyFpyA1YRiQAf//5Q4L0hx1CTijQ3m/z1UdILnMl%2F5FWAASZvxQGWink7%2F%2FnIVLiIlY5/5H39NWRKnoRWz2r/3YAMbZPLrNPJUMd5s4Orkk7EXRnm9vIPFg//7kmQLAARsG1nUYGnAnGJqKoQlABSsX2dRhKAClAsoqZCUAEQAAGIw7DT1JCs4TJdFg7eljXcpyVvs%2B%2BzHuHZbWPc%2B5IZ9xQ3%2FhGRH41Z8Y1??dTVLXTKsJHOzREt9IwH8%2B%2F6C7HVln//7e8d8r/Pf0f/5CwRJE/dEMKsF8%2B/rE%2F9E//S8JAzM7hQSEUaXgT7yfQGK1N8Y//uvYdUAFW1x%2Frq7/5EFsPfIZYydACo6%2BwwGqSqUX5%2BqPSA5sUGcvN9r/0gMB8h2L5%2B%2Bn7di5TMv1f/7kmQMgAVbGlX0GWNwq+NKaokJQAUwEVVQZWACtY0o%2BgYlABP9l/cN//UMofq/5EuRxQxT5%2F%2FpmZHHP8%2F9Ej29a5/4G%2BZsMmA1jRcX/8/1t//su5pmC9Kdt%2B%2Bf%2Fr/GOf/vBv%2B%2BX7//%2F7sKnYRFM%2Bx9%2B//CLf//W3//%2BtZEIAMdRn/0jVamrKSp72/C4MMjF5Gk0jSpgnBeGpXzpnCxp%2F/7kmQFAAU8GtNUGRJQnYNqKoQiShT8aU1QZZFCj40pqhCJKFtE2YpZ3%2Bb0Ylq10zu8vQDO5b5Z%2BP8MaHIclQMjOeV7EV8FaoEA7CwKNB5nM24tl2t%2F/UTtDIgoMgwOh0OJCSg9Zj/1Apifd%2F24GiohddAaAD6MfzEyFWb/9xAQVBR/0g0TRIgOElG4Y9YSsJfTM0YYf/yZElY36ak2/oAAAC8gEUDQIxOj7kziYxOAEo8DtP/7kmQDgBVHH9L0GXP4lUN6OoGIABRQb0nQZc/CcA4ougYgAFNSzdELF4DNfS00kVytI0kdW%2Brn/P9yvtfOaXv//%2B/20537/3/7/82KbEK0ElY9IdJA7G6UHI//#ua3/t///1B3LiCaEVu7Z//V//9f//7oVLQgAAAAAA//MZ5GCwHVTIrKgMAIwEJ6MQODQ0tEQ3tc4S5Uk6l/AZcHhQd2h3f/kHf/yD//7kmQFgAV6GtHUDFNYnQNqOoGIARPIa0dQMQ1iVA1o7AYYrAT//22t//9vf99v9v1q7/7mmMZdNKOWZTSLDqcLm6aIEQ15VmnabVPSSLf/Tf//2t/9FMQwGJiTzCNEFFDUXe/2v/9e%2B///27/44QGhYQDhP/7kmQGgAVEG1FUDEJYVUM6KoJmJBQ0aU3QMMzCZg0o%2BgYYAF79P%2F5g7ol9eq2qVStxtlTX/Tb9P/9v89/9v//02bZbb73//2/5lj8RETEzETL4Y6KCz31qr/4n/9v%2B3//9FaDgiIiGXutv/r//Waj9v//pAAAAAP/7kmQJAAT/IM%2BuEFNwj2M57JMJThLwYzq4QU3CNAul0AYYAEgQdQr3IpFguOlTrJoVTBdlFp/t/nv/t/mVt//zKO///y7//+3///st989vvnvfC4KjT/zf//q33/9//vyu3l7gwOsHQv/9PVv/4P///6P//6gAP/7kmQPgAXSHM3OEFN4jCLY5AYYABMkYy84RbeI2C6OQGFAASZWx3GQI9SOEFDCGYhTC0YcUZ13957//f9v//n/ff//3/ff//97fvaWi4KWJiIiYmUEMUM4bTMzK%2Bb/b/eve%2B%2B9v9v/oDiIEQTML//%2Bqf///9v/r/1/FAA//tQZBAABNkU0HwTMLCVI4j2AhYUE4BhJTkGngLsDqOoCBhQAP3rrCGJFrUkgjM0CVDEY//+96//f//v/+/f/f//vn//e/n3+/fPfZnDYgcREzMxEy8MLhzOmR//L/5/5/5f//9/9tf//v/9FYDiSREQ//u/qn/9H/s/6915AAAAAAgAA//tSZAgAFL8YyE5Bp5C1g6j2BhgEFABdFQCEwAJ1C6HYIJgAabG4QxJFrUkgjNECVDEY/f%2B9/3/f//3/v3/n/3//7/fv9/3z32Zw2IHEzMTMRMvDC4czpkf/y/+f+f+X///f/bX//7//RWBISISX/k/f/0f+z/r/XoQEAAAACAAA//tSZAwABNsZR6ZBp4C1A5j0BhgAE8hhEoDDAAKHDOJQGFAAX2EsIYkWJSSGYIkiBGP3/vf%2B//f/9//v/+//f/v9%2B%2Be//ZnDYgcRETMxEy8MLhzOmR//L/5/5/5f//9/9tf//v/9FcDBIiI//q9f/0f+3/r/r0ICAAAAEAAA//tSZA6ABOUZQ7AwwAChYziECCYAE3xnDoDDAAKHjGGgIJgAdEoIYkipSSCM0QVQxGMBv/e/7/v/+/7/v/f//vv/v9%2B%2Be/+zOGxA4iJmYiZeGFw5nTI//l/8/8/8v//+/+2v//3/+iuBwkzER/8j7/+j/2f9f9ehAAAAIAAA//tSZBIABPkYw7BAwACeQxh2CCYAFAhjDIEEwAKJDGFYIJgATwSwhiRYlJIJgySEaGIxgN/73/f9/33/f9/3/7/9/v3z3/7M4bEHEREzMzEvDC4czpkf/y/+f%2Bf+X///f/bX//7//RXBYSJWZ//Vbf/o/9n/X/XoAYAEAAP/7UmQTgATzF8KgQTAApOMYVAgmABRMXwbBBMACc4vg0CCYAGmtsCGJFiUkgpBJIRoYjK4xgN/73/f99/3/f9/3/7/9/v3z3r92cNiBxETMzMS8MLh0OmR//L/5/5/5f//9/9tf//v/9FcFhIlZn/9Vt/+j/2f9f9egEgAQIAAA//tSZBWABSUXwTBBMACiIvgUCCYAFMBfAoDDAAKYi%2BAgGGAATOA0UISwXQmgCODh8eTArS5P/t//f9/3////f9//f9/e/+cWZmYS0ETMzGDC4UzNE2X/1//1/13//vv/3/r//+//6KoHAcRKev/kv//r/r/83/qtQAIAAAAQAAA//tSZBaABRYXv9AwoACkwtfoCCYAFIRa90DCgAKPi16gGGAA6REDUUISwXQtAEcHD48mBWkn/fv//3////7/3/3/zN//+MzMZnEAiZmYwYXCmZomzGXt//q/q92/7/7/3///f/6K4HAcRKev/kv//r/r/83/qtAAgAAAAQAAA//tSZBaABRwWu8AwTAChgtdoBhQAFJxa6QDCgAKRi10gGFAAYCliIIocFqSQULROFg8mEav7/v++///7///v//v/v/u9/95222xZYYqaxBhcOZ1Sb//X/1f1f/v/v/v%2B//3/+iuQcHDFn/5t3/9X7f/X/ZUYCAAAABADyAP/7UmQWAAUjFrjAMKwApeK2%2BAYVgBS0VtcAwoAClora4BhQAHcDQuQs4QdI7bIKJLBjaP3/f9//3///3/v//v//fvf/edtttigXVCDC4hDnqk3/+v/r%2Br/9/9/9/3//f/6K5BQcMs//Nv/6v2/+v+yogEAAAAIIAAA//tSZBWABSUVs8AwoAClYrZoBhQAFJxWzQDCgAKQitlgGFAAGaXF6FnCDpHbZBRJYMbR%2B/7/v/+/7/v/f/v/3/7/7ztstttqBdUIQYXEIc9Um2X/6/+r%2Br/9/9/9/3//f/6K5BQcMv//Nv/6v2/+v%2BymgIAAAAIIAAA//tSZBUABScVscAwoAChgrY4BhQAFKRWwwDCgAJ%2BCtdgGFAAZj0UUIqwXQlQuRwcPHzG0f/+/7/v%2B/7/v/f/v/3/3n7bbbigYmYIMLiGOeuTf/6/+v6v/3/3/3/f/9//orgcRK//8m//q/b/6/7KaAAAAAgQAAA//tSZBYABSkVrkAwoAChIrWoBhQAFHRWswDCgAKMCtXgGFAA0jCKIIocFqSYULReFg8mEav7/v++///7/v%2B/7/v/3/3e/edtttigXVE4MLhzOqTf/6/+r%2Br/9/9/9/3//f/6K5BQcMs//Nv/6v2/+v+yogEAAAAIIAAA//tSZBaABSsVqkAwrACkYrU4BhWAFKRWqQDCgAKOitSgGFYA2NAiIIocFqCYULRODg8mGqv7/v++/7/v%2B/7/3/v/v/u9+87bbbYoF1QgwuHM6pN//r/6v6v/3/3/3/f/9//orgcHDL//zb/+r9v/r/spkBAIMAAA=';
    audio.volume = 0.1; // Very subtle volume
    audio.play().catch(e => console.error("Audio play failed:", e));
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-playfair font-bold mb-4">Tools I'm Good At</h2>
      
      <div className="grid grid-cols-3 gap-3 mt-2">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
              hoveredTool === tool.name 
                ? "transform scale-110 shadow-lg " + tool.color
                : "bg-tertiary-light dark:bg-tertiary-dark"
            }`}
            onMouseEnter={() => {
              setHoveredTool(tool.name);
              playHoverSound();
            }}
            onMouseLeave={() => setHoveredTool(null)}
          >
            <div 
              className={`p-2 rounded-full ${
                hoveredTool === tool.name
                  ? "animate-pulse"
                  : "bg-highlight-light dark:bg-highlight-light-dark"
              }`}
            >
              {tool.icon}
            </div>
            <span className="mt-1 text-xs font-medium text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;
