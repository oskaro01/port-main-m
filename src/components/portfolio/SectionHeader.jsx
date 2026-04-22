import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, accentWord }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">{label}</p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
        {title} <span className="text-primary">{accentWord}</span>
      </h2>
    </motion.div>
  );
}