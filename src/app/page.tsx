'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Typewriter Quote Component
function TypewriterQuote({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-mono">
      {displayedText}
      <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}></span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* CAD Grid Background */}
        <div className="absolute inset-0 cad-grid opacity-20"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rotate-45"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 border border-secondary/30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-16 h-16 bg-accent/20"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="text-primary">NICOLE</span> KIRK
            </h1>
            <p className="text-xl sm:text-2xl text-text-muted mb-4 font-mono">
              DESIGN ENGINEERING STUDENT
            </p>
            <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
              Crafting innovative solutions through precision engineering and creative design. 
              Specialising in CAD modeling, product development, and technical innovation.
            </p>
            
            {/* Design Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <blockquote className="text-xl sm:text-2xl text-primary italic max-w-4xl mx-auto">
                <TypewriterQuote text='"Design is intelligence made visible"' speed={80} />
              </blockquote>
              <p className="text-sm text-text-muted mt-2 font-mono">
                — Alina Wheeler
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects" className="cad-button cad-button-primary flex items-center space-x-2">
              <span>VIEW PROJECTS</span>
              <ArrowRight size={16} />
            </Link>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/nicol3kirk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cad-button flex items-center justify-center px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/NicoleKirk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cad-button flex items-center justify-center px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me & Tech Stack Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                ABOUT <span className="text-primary">ME</span>
              </h2>
              <div className="cad-panel flex-1">
                <div className="p-8 h-full flex flex-col justify-center">
                  <p className="text-lg text-text-muted mb-6 leading-relaxed">
                    Hi! I&apos;m Nicole, a Design Engineering student at Queen Mary University of London, where I love to create from CAD to code.
                  </p>
                  <p className="text-lg text-text-muted leading-relaxed">
                    I was awarded a position at the prestigious CERN Particle School and selected as the youngest research assistant at QMUL. These opportunities allowed me to collaborate directly with leading engineers and academics on cutting-edge, sustainability-focused research projects.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                TECH <span className="text-primary">STACK</span>
              </h2>
              <div className="cad-panel flex-1">
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'C++', color: 'bg-primary/20 text-primary border-primary/30' },
                      { name: 'Python', color: 'bg-secondary/20 text-secondary border-secondary/30' },
                      { name: 'React', color: 'bg-accent/20 text-accent border-accent/30' },
                      { name: 'JavaScript', color: 'bg-primary/20 text-primary border-primary/30' },
                      { name: 'Java', color: 'bg-surface-hover text-foreground border-border' },
                      { name: 'Swift', color: 'bg-secondary/20 text-secondary border-secondary/30' },
                      { name: 'SolidWorks', color: 'bg-accent/20 text-accent border-accent/30' },
                      { name: 'Shapr3D', color: 'bg-primary/20 text-primary border-primary/30' },
                      { name: 'Fusion360', color: 'bg-secondary/20 text-secondary border-secondary/30' },
                      { name: 'Figma', color: 'bg-accent/20 text-accent border-accent/30' },
                      { name: 'Blender', color: 'bg-primary/20 text-primary border-primary/30' }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`${tech.color} px-4 py-2 rounded-sm text-sm font-mono text-center hover:scale-105 transition-transform duration-200 border`}
                      >
                        {tech.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted font-mono text-sm">
            Built by Nicole Kirk
          </p>
        </div>
      </footer>
    </div>
  );
}