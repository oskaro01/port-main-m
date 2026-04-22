import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Marketplace',
    subtitle: 'Full-Stack E-commerce Platform',
    description: 'Built a full-stack e-commerce platform with authentication, Stripe & PayPal payment integration, cart/session state management, and MongoDB database structure for products, users, and orders.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'PayPal'],
    fallbackImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    link: 'https://marketapp-one.vercel.app/',
  },
  {
    id: 2,
    title: 'Personal Dictionary',
    subtitle: 'Custom Word Management App',
    description: 'A personal dictionary platform to store and manage custom words with responsive UI, form handling & validation, and MongoDB for persistent data storage.',
    tech: ['React', 'MongoDB', 'Tailwind CSS', 'Zod', 'React Hook Form'],
    fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    link: 'https://personal-dictionary-pcki.vercel.app/',
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    subtitle: 'Instant Messaging System',
    description: 'A real-time messaging system with instant communication, live updates using Redis-based architecture, and backend APIs for message flow and user interaction.',
    tech: ['Node.js', 'Redis', 'MongoDB', 'WebSockets'],
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: 'https://chat-app-tau-one-23.vercel.app/',
  },
  {
    id: 4,
    title: 'Concrete Crack Detection',
    subtitle: 'Computer Vision Research',
    description: 'End-to-end CNN pipeline for automated concrete crack detection and severity classification. Research paper accepted for oral presentation at ICACIT 2024.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Pandas'],
    fallbackImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-4933-4_22',
  },
  {
    id: 5,
    title: 'Pixel Game',
    subtitle: 'Game Development Project',
    description: 'A pixel-style game project demonstrating skills in game development and interactive UI design.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    fallbackImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    link: 'https://fighting-game-qx6x5auxr-oskaro01s-projects.vercel.app/',
  },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-4">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">05</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-6xl text-silver tracking-tight">My Projects</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>
      <p className="text-center font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-16">
        A showcase of recent work built with modern technologies
      </p>

      <div className="border border-grid-line divide-y divide-grid-line">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer overflow-hidden block"
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Ghost image background on hover */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${hovered === project.id ? 'opacity-15' : 'opacity-0'}`}>
              <img
                src={project.fallbackImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute inset-0 transition-colors duration-300 ${hovered === project.id ? 'bg-[#111]/80' : 'bg-transparent'}`} />

            <div className="relative z-10 p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1">
                <span className="font-mono-jetbrains text-xs text-[#333] group-hover:text-cobalt transition-colors">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3
                  className="font-inter-tight font-black text-2xl md:text-3xl lg:text-4xl text-silver tracking-tight group-hover:text-cobalt transition-colors duration-300"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {project.title}
                </h3>
                <p className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mt-1">{project.subtitle}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-[#777] text-sm leading-relaxed group-hover:text-[#bbb] transition-colors duration-300">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <span className={`font-mono-jetbrains text-2xl transition-all duration-300 ${hovered === project.id ? 'text-cobalt translate-x-2' : 'text-[#333]'}`}>
                  →
                </span>
              </div>
            </div>

            <div className={`relative z-10 px-8 pb-6 flex flex-wrap gap-2 transition-all duration-300 ${hovered === project.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
              {project.tech.map(t => (
                <span key={t} className="font-mono-jetbrains text-[10px] px-2 py-1 border border-cobalt/40 text-cobalt uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
            </a>
            ))}
            </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/oskaro01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-mono-jetbrains text-sm text-[#999] hover:text-cobalt border border-grid-line hover:border-cobalt px-6 py-3 transition-all duration-200 uppercase tracking-widest min-h-[44px]"
        >
          See More on GitHub →
        </a>
      </div>
    </section>
  );
}