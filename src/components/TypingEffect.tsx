
import { useEffect, useState } from 'react';

interface TypingEffectProps {
  textArray: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayAfterTyping?: number;
  delayAfterErasing?: number;
}

const TypingEffect = ({
  textArray,
  typingSpeed = 100,
  erasingSpeed = 60,
  delayAfterTyping = 1500,
  delayAfterErasing = 300
}: TypingEffectProps) => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {
    if (textArray.length === 0) return;
    
    let timeout: NodeJS.Timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsTyping(!isTyping);
      }, isTyping ? delayAfterTyping : delayAfterErasing);
      return () => clearTimeout(timeout);
    }
    
    if (isTyping) {
      if (text.length < textArray[textIndex].length) {
        timeout = setTimeout(() => {
          setText(textArray[textIndex].substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        setIsWaiting(true);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, erasingSpeed);
      } else {
        setTextIndex((textIndex + 1) % textArray.length);
        setIsWaiting(true);
      }
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, textIndex, isTyping, isWaiting, textArray, typingSpeed, erasingSpeed, delayAfterTyping, delayAfterErasing]);
  
  return <span>{text}</span>;
};

export default TypingEffect;
