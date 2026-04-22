import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono-jetbrains text-xs text-cobalt tracking-[0.3em] uppercase">06</span>
        <div className="flex-1 h-px bg-grid-line" />
        <h2 className="font-inter-tight font-black text-4xl md:text-6xl text-silver tracking-tight">Get In Touch</h2>
        <div className="flex-1 h-px bg-grid-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left info */}
        <div className="space-y-8">
          <p className="text-[#ccc] text-lg leading-relaxed">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out through the form or directly via email.
          </p>
          <p className="text-[#999] text-base leading-relaxed">
            I'm always open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-grid-line flex items-center justify-center">
                <span className="text-cobalt text-sm">@</span>
              </div>
              <div>
                <p className="font-mono-jetbrains text-[10px] text-[#555] uppercase tracking-widest">Email</p>
                <a href="mailto:sabitalhasan888@gmail.com" className="text-silver text-sm hover:text-cobalt transition-colors">
                  sabitalhasan888@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-grid-line flex items-center justify-center">
                <span className="text-cobalt text-sm">#</span>
              </div>
              <div>
                <p className="font-mono-jetbrains text-[10px] text-[#555] uppercase tracking-widest">Phone</p>
                <a href="tel:+8801771367100" className="text-silver text-sm hover:text-cobalt transition-colors">
                  +8801771367100
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest mb-4">Connect With Me</p>
            <div className="flex gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/oskaro01' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sabitalhasan404/' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-jetbrains text-xs px-4 py-2 border border-grid-line text-[#999] hover:border-cobalt hover:text-cobalt transition-all duration-200 uppercase tracking-widest min-h-[44px] flex items-center"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal form */}
        <div className="border border-grid-line bg-basalt/30">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-grid-line bg-basalt">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest">contact.sah</span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-0">
            <div className="border-b border-grid-line py-6">
              <label className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest block mb-2">
                <span className="text-cobalt">$</span> name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full bg-transparent text-silver text-base outline-none placeholder:text-[#333] font-inter-tight"
              />
            </div>
            <div className="border-b border-grid-line py-6">
              <label className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest block mb-2">
                <span className="text-cobalt">$</span> email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-transparent text-silver text-base outline-none placeholder:text-[#333] font-inter-tight"
              />
            </div>
            <div className="border-b border-grid-line py-6">
              <label className="font-mono-jetbrains text-xs text-[#555] uppercase tracking-widest block mb-2">
                <span className="text-cobalt">$</span> message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-transparent text-silver text-base outline-none placeholder:text-[#333] font-inter-tight resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-mono-jetbrains text-sm uppercase tracking-widest mt-0 bg-basalt text-silver hover:bg-cobalt hover:text-white transition-all duration-300 min-h-[44px]"
            >
              {submitted ? '✓ Message Sent' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}