"use client";

import React, { useEffect, useRef } from 'react';

const tickerText = "Available for Global Commission · Full-Stack Web Developer · Open to Opportunities · Sabit Al Hasan · ";

export default function HeroSection() {
  const parallaxRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #2A2A2A 0px, #2A2A2A 0.5px, transparent 0.5px, transparent calc(100%/12))',
          opacity: 0.3
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <p className="font-mono-jetbrains text-cobalt text-sm tracking-[0.3em] uppercase mb-4">
                Hello, I am
              </p>
              <h1
                className="font-inter-tight font-black text-silver leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
              >
                Sabit<br /><span className="text-cobalt">Al Hasan</span>
              </h1>
            </div>
            <div className="border-l-2 border-cobalt pl-6">
              <p className="font-mono-jetbrains text-sm text-[#999] tracking-wider uppercase mb-1">Role</p>
              <p className="font-inter-tight text-2xl font-semibold text-silver">Full-Stack Web Developer</p>
            </div>
            <p className="text-[#999] text-lg leading-relaxed max-w-xl">
              Full-Stack Web Developer focused on building modern, scalable web applications using Next.js, React, and MongoDB. Experienced in e-commerce platforms, real-time applications, and data-driven systems with authentication and payment integration.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-cobalt text-white font-mono-jetbrains text-sm uppercase tracking-widest hover:bg-blue-600 transition-colors duration-200 min-h-[44px]"
              >
                View Projects
              </a>
              <a
                href="https://media.base44.com/files/public/69e09f0f54a6bfd6302b4e39/8e078b79e_upMyCv2-duplicate-link-exposed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-grid-line text-silver font-mono-jetbrains text-sm uppercase tracking-widest hover:border-cobalt hover:text-cobalt transition-colors duration-200 min-h-[44px]"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex justify-center lg:justify-end lg:mr-6">
            <div className="relative">
              <div className="absolute -inset-4 border border-grid-line" />
              <div className="absolute -inset-8 border border-grid-line opacity-50" />
              <div className="relative w-64 h-80 md:w-72 md:h-96">
                <img
                  src="https://media.base44.com/images/public/69e09f0f54a6bfd6302b4e39/3f794740a_IMG_1881copy1.jpg"
                  alt="Sabit Al Hasan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ objectPosition: '50% 10%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cobalt/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Corner marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cobalt" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cobalt" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cobalt" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cobalt" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-[#555]">
          <p className="font-mono-jetbrains text-xs tracking-widest uppercase">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-[#555] to-transparent animate-pulse" />
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-grid-line bg-basalt/50 py-3 overflow-hidden">
        <div className="flex ticker-animation whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono-jetbrains text-xs text-cobalt tracking-widest uppercase mr-0">
              {tickerText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}