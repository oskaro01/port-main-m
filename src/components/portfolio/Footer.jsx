import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm tracking-widest text-foreground">
              Sheikh Shihab<span className="text-primary">.</span>
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/iamshihab2020" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:shihabhossainii20@gmail.com" className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Mail size={16} />
            </a>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}