import React from 'react';

// Research publication section replaces testimonials since CV shows research work
export default function TestimonialsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">04*</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-5xl text-silver tracking-tight">Research & Publication</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>

      <div className="border border-grid-line p-8 md:p-12 bg-basalt/20 relative overflow-hidden">
        {/* Accent corner */}
        <div className="absolute top-0 left-0 w-1 h-full bg-cobalt" />

        <div className="pl-8">
          <a href="https://link.springer.com/chapter/10.1007/978-981-96-4933-4_22" target="_blank" rel="noopener noreferrer" className="font-mono-jetbrains text-xs text-cobalt uppercase tracking-widest mb-6 hover:underline block">ICACIT 2024 · Oral Presentation → View Paper</a>

          <h3 className="font-inter-tight font-black text-xl md:text-2xl text-silver leading-tight mb-6">
            "A Comprehensive Deep Learning Approach for Precise Concrete Crack Detection and Severity Classification Using Ensemble Learning"
          </h3>

          <ul className="space-y-4 mb-8">
            {[
              'Conducted research in Computer Vision and Deep Learning for automated crack detection.',
              'Developed an end-to-end pipeline using CNN models for detection and classification of concrete cracks.',
              'Achieved high accuracy through ensemble learning combining multiple CNN architectures.',
              'Paper accepted for oral presentation at ICACIT 2024 (International Conference on Advanced Computing and Intelligent Technologies).',
            ].map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-cobalt mt-1 shrink-0 font-mono-jetbrains text-xs">→</span>
                <p className="text-[#bbb] text-base leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {['Python', 'TensorFlow', 'Keras', 'CNN', 'Pandas', 'Deep Learning', 'Computer Vision'].map(t => (
              <span key={t} className="font-mono-jetbrains text-[10px] px-3 py-1 border border-cobalt/40 text-cobalt uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}