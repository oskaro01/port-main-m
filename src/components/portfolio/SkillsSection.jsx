import React, { useState, useRef, useEffect } from 'react';

const skills = [
  { name: 'React', category: 'Frontend', level: 90, note: 'Primary Stack' },
  { name: 'Next.js', category: 'Frontend', level: 90, note: 'Primary Stack' },
  { name: 'JavaScript', category: 'Frontend', level: 88, note: 'Primary Stack' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 88, note: 'Expert Level' },
  { name: 'HTML & CSS', category: 'Frontend', level: 90, note: 'Expert Level' },
  { name: 'Node.js', category: 'Backend', level: 85, note: 'Primary Stack' },
  { name: 'MongoDB', category: 'Database', level: 85, note: 'Primary Stack' },
  { name: 'MySQL', category: 'Database', level: 82, note: 'Advanced' },
  { name: 'Redis', category: 'Database', level: 75, note: 'Proficient' },
  { name: 'Python', category: 'Language', level: 85, note: 'Advanced' },
  { name: 'PHP', category: 'Language', level: 75, note: 'Proficient' },
  { name: 'C++', category: 'Language', level: 75, note: 'Proficient' },
  { name: 'TensorFlow', category: 'ML / AI', level: 78, note: 'Advanced' },
  { name: 'Keras', category: 'ML / AI', level: 78, note: 'Advanced' },
  { name: 'Pandas', category: 'ML / AI', level: 75, note: 'Proficient' },
  { name: 'CNN', category: 'ML / AI', level: 75, note: 'Research Level' },
  { name: 'Zod', category: 'Libraries', level: 80, note: 'Proficient' },
  { name: 'React Hook Form', category: 'Libraries', level: 80, note: 'Proficient' },
  { name: 'Zustand', category: 'Libraries', level: 78, note: 'Proficient' },
  { name: 'Git', category: 'Tools', level: 85, note: 'Proficient' },
  { name: 'GitHub', category: 'Tools', level: 85, note: 'Proficient' },
  { name: 'Postman', category: 'Tools', level: 80, note: 'Proficient' },
  { name: 'Linux', category: 'OS', level: 78, note: 'Proficient' },
  { name: 'Windows', category: 'OS', level: 90, note: 'Expert Level' },
];

function SkillRing({ level, size = 80, stroke = 6 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#2A2A2A" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#3D5AFE" strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
        />
      </svg>
      <span className="absolute font-mono-jetbrains text-xs text-cobalt font-bold">{level}%</span>
    </div>
  );
}

export default function SkillsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-4">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">03</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-6xl text-silver tracking-tight">Skills & Expertise</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>
      <p className="text-center font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-16">
        Hover over each skill to see proficiency details
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-grid-line">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative border-b border-r border-grid-line bg-obsidian p-6 flex flex-col items-center gap-3 cursor-default group transition-all duration-300 hover:bg-basalt"
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <SkillRing level={skill.level} />
            <div className="text-center">
              <p className="text-silver text-sm font-semibold">{skill.name}</p>
              <p className="font-mono-jetbrains text-[10px] text-[#555] uppercase tracking-widest mt-1">{skill.category}</p>
            </div>
            {hovered === skill.name && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 bg-basalt border border-cobalt px-3 py-2 whitespace-nowrap pointer-events-none">
                <p className="font-mono-jetbrains text-xs text-cobalt">{skill.note}</p>
                <p className="font-mono-jetbrains text-xs text-silver">{skill.level}% Proficiency</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}