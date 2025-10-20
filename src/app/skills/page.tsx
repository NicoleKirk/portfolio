'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Palette, 
  Wrench, 
  Zap, 
  Layers, 
  Settings, 
  BarChart3,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const skillCategories = [
  {
    title: 'CAD & Modeling',
    icon: Code,
    description: 'Advanced proficiency in computer-aided design and 3D modeling',
    skills: [
      { name: 'SolidWorks', level: 95, experience: '3+ years' },
      { name: 'Fusion 360', level: 90, experience: '2+ years' },
      { name: 'AutoCAD', level: 85, experience: '2+ years' },
      { name: 'Rhino 3D', level: 80, experience: '1+ years' },
      { name: 'Inventor', level: 75, experience: '1+ years' }
    ]
  },
  {
    title: 'Simulation & Analysis',
    icon: Cpu,
    description: 'Engineering analysis and computational simulation expertise',
    skills: [
      { name: 'ANSYS', level: 90, experience: '2+ years' },
      { name: 'FEA Analysis', level: 95, experience: '3+ years' },
      { name: 'CFD Analysis', level: 85, experience: '2+ years' },
      { name: 'MATLAB', level: 80, experience: '2+ years' },
      { name: 'Simulink', level: 75, experience: '1+ years' }
    ]
  },
  {
    title: 'Design & Prototyping',
    icon: Palette,
    description: 'Product design, prototyping, and user-centered design',
    skills: [
      { name: '3D Printing', level: 90, experience: '3+ years' },
      { name: 'Rapid Prototyping', level: 85, experience: '2+ years' },
      { name: 'Design Thinking', level: 80, experience: '2+ years' },
      { name: 'User Research', level: 75, experience: '1+ years' },
      { name: 'Sketching', level: 85, experience: '3+ years' }
    ]
  },
  {
    title: 'Manufacturing',
    icon: Wrench,
    description: 'Manufacturing processes and production optimization',
    skills: [
      { name: 'CNC Machining', level: 80, experience: '2+ years' },
      { name: 'Injection Molding', level: 75, experience: '1+ years' },
      { name: 'Sheet Metal', level: 85, experience: '2+ years' },
      { name: 'Welding', level: 70, experience: '1+ years' },
      { name: 'Quality Control', level: 80, experience: '2+ years' }
    ]
  }
];

const technicalSkills = [
  {
    category: 'Software Proficiency',
    items: [
      'SolidWorks (Advanced)',
      'ANSYS Workbench',
      'Fusion 360',
      'AutoCAD',
      'MATLAB/Simulink',
      'Rhino 3D',
      'Keyshot (Rendering)',
      'Adobe Creative Suite'
    ]
  },
  {
    category: 'Analysis & Simulation',
    items: [
      'Finite Element Analysis (FEA)',
      'Computational Fluid Dynamics (CFD)',
      'Stress Analysis',
      'Thermal Analysis',
      'Modal Analysis',
      'Topology Optimization',
      'Design of Experiments (DOE)',
      'Statistical Analysis'
    ]
  },
  {
    category: 'Manufacturing & Production',
    items: [
      '3D Printing (FDM, SLA, SLS)',
      'CNC Programming',
      'Injection Molding Design',
      'Sheet Metal Design',
      'Assembly Design',
      'GD&T (Geometric Dimensioning)',
      'Manufacturing Process Planning',
      'Quality Assurance'
    ]
  },
  {
    category: 'Project Management',
    items: [
      'Agile Methodology',
      'Project Planning',
      'Risk Assessment',
      'Cost Analysis',
      'Timeline Management',
      'Team Collaboration',
      'Documentation',
      'Presentation Skills'
    ]
  }
];

const certifications = [
  {
    title: 'SolidWorks Certified Professional',
    issuer: 'Dassault Systèmes',
    year: '2024',
    status: 'Active'
  },
  {
    title: 'ANSYS Mechanical APDL',
    issuer: 'ANSYS Inc.',
    year: '2023',
    status: 'Active'
  },
  {
    title: 'Autodesk Certified Professional',
    issuer: 'Autodesk',
    year: '2023',
    status: 'Active'
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              TECHNICAL <span className="text-primary">EXPERTISE</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto font-mono">
              Comprehensive skills in design engineering, from concept to production
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="cad-panel"
              >
                <div className="cad-panel-header flex items-center space-x-3">
                  <category.icon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">{category.title}</span>
                </div>
                
                <div className="p-6">
                  <p className="text-text-muted mb-6 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-mono text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-text-muted">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="w-full bg-surface-hover rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-primary h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Grid */}
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
              COMPREHENSIVE <span className="text-primary">SKILL SET</span>
            </h2>
            <p className="text-text-muted font-mono">
              Detailed breakdown of technical capabilities and expertise areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="cad-panel"
              >
                <div className="cad-panel-header">
                  <span className="font-mono text-sm">{skillGroup.category}</span>
                </div>
                
                <div className="p-4">
                  <div className="space-y-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-text-muted">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              PROFESSIONAL <span className="text-primary">CERTIFICATIONS</span>
            </h2>
            <p className="text-text-muted font-mono">
              Industry-recognized credentials validating technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cad-panel text-center group hover:border-primary transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-text-muted">{cert.year}</span>
                    <span className="px-2 py-1 bg-success/20 text-success rounded-sm font-mono">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
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
              Let's discuss how my technical expertise can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cad-button cad-button-primary flex items-center space-x-2">
                <span>GET IN TOUCH</span>
                <ArrowRight size={16} />
              </a>
              <a href="/projects" className="cad-button flex items-center space-x-2">
                <span>VIEW PROJECTS</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
