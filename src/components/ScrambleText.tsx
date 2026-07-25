import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScrambleText({ text, className = '', delay = 0, duration = 800 }: ScrambleTextProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [, setFrame] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Assign a random reveal time for each character to resolve near the end (60% to 100%)
  const charRevealTimes = useMemo(() => {
    return text.split('').map(() => 0.6 + Math.random() * 0.4);
  }, [text]);

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    let animationFrame: number;
    let startTime: number;
    
    timeout = setTimeout(() => {
      setIsAnimating(true);
      startTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const p = Math.min((now - startTime) / duration, 1);
        setProgress(p);
        setFrame(f => f + 1); // trigger re-render for new random characters
        
        if (p < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
          setHasAnimated(true);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, delay, duration]);

  let charIndex = 0;

  return (
    <span ref={ref} className={className}>
      {text.split(' ').map((word, wordIndex, wordsArray) => {
        const isLastWord = wordIndex === wordsArray.length - 1;
        
        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIndexInWord) => {
                const i = charIndex++;
                const isRevealed = hasAnimated || progress >= charRevealTimes[i];
                const showInitial = !isAnimating && !hasAnimated;
                const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                
                return (
                  <span key={charIndexInWord} className="relative inline-block">
                    <span className="invisible">{char}</span>
                    {!showInitial && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        {isRevealed ? char : randomChar}
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
            {!isLastWord && ' '}
          </React.Fragment>
        );
      })}
    </span>
  );
}
