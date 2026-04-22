import React from 'react';

const quickFacts = [
  { label: 'Name', value: 'Sabit Al Hasan' },
  { label: 'Email', value: 'sabitalhasan888@gmail.com' },
  { label: 'Phone', value: '+8801771367100' },
  { label: 'Location', value: 'Khulna, Bangladesh' },
  { label: 'Degree', value: 'B.Sc. Computer Science' },
  { label: 'University', value: 'Northern University of Business and Technology' },
  { label: 'Availability', value: 'Open to opportunities' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">02</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-6xl text-silver tracking-tight">About Me</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Who I Am */}
        <div className="space-y-6">
          <div>
            <p className="font-mono-jetbrains text-xs text-cobalt tracking-widest uppercase mb-4">Who I Am</p>
            <p className="text-[#ccc] text-lg leading-relaxed mb-4">
              My name is Sabit Al Hasan. I am a Full-Stack Web Developer focused on building modern, scalable web 
              applications using Next.js, React, and MongoDB. I have hands-on experience developing real-world 
              projects including e-commerce platforms, real-time applications, and data-driven systems.
            </p>
            <p className="text-[#999] text-base leading-relaxed">
              I am passionate about solving practical problems and creating clean, efficient user experiences. 
              Beyond web development, I have conducted research in Computer Vision and Deep Learning — my paper on 
              automated concrete crack detection was accepted for oral presentation at ICACIT 2024.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-4">
            {[
              { label: 'GitHub', href: 'https://github.com/oskaro01' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabitalhasan404/' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-jetbrains text-xs px-4 py-2 border border-grid-line text-[#999] hover:border-cobalt hover:text-cobalt transition-all duration-200 uppercase tracking-widest min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div>
          <p className="font-mono-jetbrains text-xs text-cobalt tracking-widest uppercase mb-6">Quick Facts</p>
          <div className="space-y-0">
            {quickFacts.map((fact, i) => (
              <div key={fact.label} className={`flex gap-4 py-4 ${i < quickFacts.length - 1 ? 'border-b border-grid-line' : ''}`}>
                <span className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest w-28 shrink-0 pt-0.5">{fact.label}</span>
                <span className="text-silver text-sm">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}