"use client"

import React, { useState } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Full-Stack Web Developer',
    company: 'Freelance / Personal Projects',
    period: '2023 – Present',
    status: 'current',
    bullets: [
      'Built full-stack e-commerce platforms with Next.js, React, and MongoDB including Stripe and PayPal payment integration.',
      'Developed real-time chat applications using Redis-based architecture and Node.js backend APIs.',
      'Conducted research in Computer Vision and Deep Learning, developing an end-to-end CNN pipeline for concrete crack detection.',
      'Authored research paper accepted for oral presentation at ICACIT 2024 (International Conference on Advanced Computing and Intelligent Technologies).',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Redis', 'Python', 'TensorFlow'],
  },
  {
    id: 2,
    role: 'B.Sc. Computer Science',
    company: 'Northern University of Business and Technology',
    period: '2019 – 2023',
    status: 'past',
    bullets: [
      'Graduated with CGPA 3.008 in Computer Science and Engineering.',
      'Specialized in Full-Stack Web Development, Machine Learning, and Computer Vision.',
      'Developed multiple real-world projects including e-commerce platforms and data-driven systems.',
      'Conducted academic research in Deep Learning for automated crack detection systems.',
    ],
    tech: ['Python', 'C++', 'JavaScript', 'PHP', 'TensorFlow', 'Keras'],
  },
];

export default function ExperienceSection() {
  const [active, setActive] = useState(1);

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">04</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-6xl text-silver tracking-tight">My Experience</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-grid-line">
        {/* Sidebar timeline */}
        <div className="border-r border-grid-line">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActive(exp.id)}
              className={`w-full text-left p-6 border-b border-grid-line transition-all duration-200 min-h-[44px] ${active === exp.id ? 'bg-basalt border-l-2 border-l-cobalt' : 'hover:bg-basalt/50'}`}
            >
              <p className="font-mono-jetbrains text-xs text-cobalt uppercase tracking-widest mb-1">
                {exp.status === 'current' ? '● Current' : '○ Past'}
              </p>
              <p className="text-silver font-semibold text-sm">{exp.company}</p>
              <p className="font-mono-jetbrains text-[11px] text-[#555] mt-1 uppercase tracking-widest">{exp.period}</p>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        {experiences.filter(e => e.id === active).map(exp => (
          <div key={exp.id} className="lg:col-span-2 p-8 bg-basalt/20">
            <div className="mb-6">
              <h3 className="font-inter-tight font-black text-2xl md:text-3xl text-silver mb-1">{exp.role}</h3>
              <p className="font-mono-jetbrains text-sm text-cobalt uppercase tracking-widest">{exp.company} · {exp.period}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-cobalt mt-1 shrink-0 font-mono-jetbrains text-xs">→</span>
                  <p className="text-[#bbb] text-base leading-relaxed">{bullet}</p>
                </li>
              ))}
            </ul>

            <div>
              <p className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-3">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="font-mono-jetbrains text-xs px-3 py-1 border border-grid-line text-[#999] uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}