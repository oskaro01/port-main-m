import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillRing({ name, category, level }) {
  const [hovered, setHovered] = useState(false);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 p-4 border border-border hover:border-primary/40 transition-all duration-300 bg-card/50 hover:bg-card cursor-default group"
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="hsl(var(--border))" strokeWidth="3" fill="none" />
          <motion.circle
            cx="50" cy="50" r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-semibold text-foreground">{level}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground mt-0.5">{category}</p>
      </div>
      {hovered && (
        <div className="font-mono text-xs text-primary">
          {level >= 90 ? 'Expert Level' : level >= 80 ? 'Advanced' : 'Proficient'}
        </div>
      )}
    </motion.div>
  );
}