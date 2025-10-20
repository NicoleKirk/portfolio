'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Palette, Wrench } from 'lucide-react';
import Link from 'next/link';

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
              Specializing in CAD modeling, product development, and technical innovation.
            </p>
            
            {/* Design Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <blockquote className="text-xl sm:text-2xl text-primary font-mono italic max-w-4xl mx-auto">
                "Design is intelligence made visible"
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
            <Link href="/contact" className="cad-button flex items-center space-x-2">
              <span>GET IN TOUCH</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              TECHNICAL <span className="text-primary">EXPERTISE</span>
            </h2>
            <p className="text-text-muted font-mono">
              Advanced proficiency in design engineering tools and methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: 'CAD Modeling',
                description: 'SolidWorks, Fusion 360, AutoCAD expertise'
              },
              {
                icon: Cpu,
                title: 'Simulation',
                description: 'FEA, CFD, and stress analysis'
              },
              {
                icon: Palette,
                title: 'Design',
                description: 'Product design and prototyping'
              },
              {
                icon: Wrench,
                title: 'Engineering',
                description: 'Mechanical systems and manufacturing'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cad-panel text-center group hover:border-primary transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                  {skill.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              READY TO <span className="text-primary">COLLABORATE?</span>
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Let's discuss your next engineering challenge or design project.
            </p>
            <Link href="/contact" className="cad-button cad-button-primary inline-flex items-center space-x-2">
              <span>START A PROJECT</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}