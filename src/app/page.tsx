'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CyberBackground from '@/components/cyber-background';
import GlitchText from '@/components/glitch-text';
import TypingText from '@/components/typing-text';

function CyberButton({
  href,
  children,
  external = false,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'primary' | 'secondary';
}) {
  const baseStyles =
    'group relative px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden';
  const primaryStyles =
    'border border-[var(--cyber-cyan)] text-[var(--cyber-cyan)] hover:bg-[var(--cyber-cyan)] hover:text-[var(--cyber-black)] box-glow-cyan';
  const secondaryStyles =
    'border border-[var(--cyber-magenta)] text-[var(--cyber-magenta)] hover:bg-[var(--cyber-magenta)] hover:text-[var(--cyber-black)] box-glow-magenta';

  const Component = external ? 'a' : Link;
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`}
      {...externalProps}
    >
      {/* Hover scan effect */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-white/20 to-transparent transition-all duration-300 group-hover:h-full" />
      </span>
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

function AnimatedBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[var(--cyber-cyan)] to-transparent"
          style={{ animation: 'slideRight 3s linear infinite' }}
        />
      </div>
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-1/3 ml-auto bg-gradient-to-r from-transparent via-[var(--cyber-magenta)] to-transparent"
          style={{ animation: 'slideLeft 3s linear infinite' }}
        />
      </div>
      {/* Left border */}
      <div className="absolute top-0 bottom-0 left-0 w-px overflow-hidden">
        <div
          className="w-full h-1/3 bg-gradient-to-b from-transparent via-[var(--cyber-cyan)] to-transparent"
          style={{ animation: 'slideDown 3s linear infinite' }}
        />
      </div>
      {/* Right border */}
      <div className="absolute top-0 bottom-0 right-0 w-px overflow-hidden">
        <div
          className="w-full h-1/3 mt-auto bg-gradient-to-b from-transparent via-[var(--cyber-magenta)] to-transparent"
          style={{ animation: 'slideUp 3s linear infinite' }}
        />
      </div>
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-400%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        @keyframes slideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-400%); }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Stagger the reveal animations
    setTimeout(() => setShowContent(true), 500);
    setTimeout(() => setShowProducts(true), 2000);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--cyber-black)]" />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CyberBackground />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          {/* Logo/Brand */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block relative p-8 bg-[var(--cyber-dark)]/50 backdrop-blur-sm">
              <AnimatedBorder />

              {/* Company name */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <GlitchText
                  text="VENIN"
                  className="text-[var(--cyber-cyan)] glow-cyan-subtle"
                />
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-300">CLIENT SYSTEMS</span>
              </h1>

              {/* Tagline with typing effect */}
              <div className="h-8 flex items-center justify-center">
                <span className="text-gray-500 mr-2 font-mono text-sm">$</span>
                <TypingText
                  text="Software infrastructure for the real world"
                  className="text-gray-400 font-mono text-sm"
                  delay={1000}
                  speed={40}
                />
              </div>
            </div>
          </div>

          {/* Products section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              showProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-8">
              <p className="text-xs text-gray-600 uppercase tracking-[0.3em] mb-6 font-mono">
                [ PRODUCTS ]
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CyberButton href="https://excisemate.com.au" external variant="primary">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--cyber-cyan)] animate-pulse" />
                    ExciseMate
                  </span>
                </CyberButton>

                <span className="text-gray-600 font-mono text-xs hidden sm:block">
                  ───
                </span>

                <span className="text-gray-500 font-mono text-xs">
                  excisemate.com.au
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-gray-800/50">
              <a
                href="mailto:investors@venin.space"
                className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--cyber-magenta)] transition-colors font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[var(--cyber-magenta)] transition-colors" />
                investors@venin.space
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--cyber-magenta)]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Footer coordinates - decorative */}
          <div
            className={`mt-16 transition-all duration-1000 delay-1000 ${
              showProducts ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-[10px] text-gray-700 font-mono tracking-widest">
              LAT -35.0286° / LONG 138.8078° / ADL.AU
            </p>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="fixed top-4 left-4 text-[10px] text-gray-700 font-mono z-20">
        <span className="text-[var(--cyber-cyan)]">■</span> VENIN.SPACE
      </div>
      <div className="fixed top-4 right-4 text-[10px] text-gray-700 font-mono z-20">
        SYS_ONLINE <span className="text-green-500 animate-pulse">●</span>
      </div>
      <div className="fixed bottom-4 left-4 text-[10px] text-gray-700 font-mono z-20">
        © {new Date().getFullYear()} Venin Client Systems Pty Ltd
      </div>
      <div className="fixed bottom-4 right-4 text-[10px] text-gray-600 font-mono z-20 flex items-center gap-3">
        <Link href="/privacy" className="hover:text-[var(--cyber-cyan)] transition-colors">
          Privacy
        </Link>
        <span className="text-gray-800">|</span>
        <Link href="/terms" className="hover:text-[var(--cyber-cyan)] transition-colors">
          Terms
        </Link>
      </div>
    </div>
  );
}
