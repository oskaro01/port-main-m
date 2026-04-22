import React from 'react';
import NavBar from '../components/portfolio/NavBar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import TestimonialsSection from '../components/portfolio/TestimonialsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ContactSection from '../components/portfolio/ContactSection';
import FooterSection from '../components/portfolio/FooterSection';
import ScrollToTop from '../components/portfolio/ScrollToTop';

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen font-inter-tight">
      <NavBar />
      <HeroSection />
      <div className="w-full h-px bg-grid-line" />
      <AboutSection />
      <div className="w-full h-px bg-grid-line" />
      <SkillsSection />
      <div className="w-full h-px bg-grid-line" />
      <TestimonialsSection />
      <div className="w-full h-px bg-grid-line" />
      <ExperienceSection />
      <div className="w-full h-px bg-grid-line" />
      <ProjectsSection />
      <div className="w-full h-px bg-grid-line" />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}