"use client";

import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/95 backdrop-blur-sm border-b border-grid-line' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono-jetbrains text-sm text-cobalt tracking-widest uppercase">
          SAH<span className="text-silver">.</span>dev
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono-jetbrains text-xs text-[#999] hover:text-cobalt transition-colors duration-200 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mail_to:sabitalhasan888@gmail.com"
            className="font-mono-jetbrains text-xs px-4 py-2 border border-cobalt text-cobalt hover:bg-cobalt hover:text-white transition-all duration-200 uppercase tracking-widest min-h-[44px] flex items-center"
          >
            Hire Me
          </a>
        </div>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-silver p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-silver transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-silver transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-silver transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-basalt border-t border-grid-line px-6 py-4 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono-jetbrains text-xs text-[#999] hover:text-cobalt transition-colors uppercase tracking-widest py-2 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}