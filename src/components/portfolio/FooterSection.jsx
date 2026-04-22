import React from 'react';

const quickLinks = ['About', 'Skills', 'Projects', 'Contact'];
const techStack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Python', 'TensorFlow'];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grid-line bg-basalt/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="font-mono-jetbrains text-lg text-cobalt tracking-widest uppercase block">
              SAH<span className="text-silver">.</span>dev
            </a>
            <p className="text-[#555] text-sm leading-relaxed">
              Full-Stack Web Developer building scalable, modern web applications and ML systems.
            </p>
            <p className="font-mono-jetbrains text-xs text-[#333] uppercase tracking-widest">
              Khulna, Bangladesh
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-6">Quick Links</p>
            <div className="space-y-3">
              {quickLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-mono-jetbrains text-xs text-[#777] hover:text-cobalt transition-colors uppercase tracking-widest min-h-[44px] flex items-center"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-6">Core Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="font-mono-jetbrains text-[10px] px-2 py-1 border border-grid-line text-[#555] uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-grid-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-jetbrains text-xs text-[#333] uppercase tracking-widest">
            © {year} Sabit Al Hasan. All rights reserved.
          </p>
          <p className="font-mono-jetbrains text-xs text-[#333] uppercase tracking-widest">
            Built with React · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}