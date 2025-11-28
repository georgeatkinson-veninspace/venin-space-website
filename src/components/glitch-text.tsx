'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Randomly trigger glitch effect
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 z-0 text-[var(--cyber-cyan)] opacity-70"
            style={{
              clipPath: 'inset(10% 0 60% 0)',
              transform: 'translate(-2px, -1px)',
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 z-0 text-[var(--cyber-magenta)] opacity-70"
            style={{
              clipPath: 'inset(60% 0 10% 0)',
              transform: 'translate(2px, 1px)',
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
