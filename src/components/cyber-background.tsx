'use client';

import { useEffect, useRef } from 'react';

// Floating particles that drift across the screen
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--cyber-cyan)] opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <div
          key={`magenta-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-[var(--cyber-magenta)] opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// Animated grid lines that pulse
function GridOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyber-cyan)] to-transparent opacity-30"
        style={{
          animation: 'scanVertical 8s linear infinite',
        }}
      />
      {/* Vertical scan line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--cyber-magenta)] to-transparent opacity-20"
        style={{
          animation: 'scanHorizontal 12s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes scanVertical {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes scanHorizontal {
          0% { left: -10%; }
          100% { left: 110%; }
        }
      `}</style>
    </div>
  );
}

// Canvas-based subtle noise/static effect
function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 15;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 8;     // A - very subtle
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(drawNoise);
    };

    // Run noise at lower frame rate for performance
    const interval = setInterval(() => {
      drawNoise();
    }, 100);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
    />
  );
}

// Glowing orbs in the background
function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-right cyan orb */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      {/* Bottom-left magenta orb */}
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)',
          animation: 'pulse 6s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      {/* Center purple orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 60%)',
          animation: 'pulse 8s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 bg-[var(--cyber-black)] cyber-grid">
      <GlowOrbs />
      <FloatingParticles />
      <GridOverlay />
      <NoiseOverlay />
      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 15, 0.4) 100%)',
        }}
      />
    </div>
  );
}
