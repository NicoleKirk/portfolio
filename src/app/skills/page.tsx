'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Palette, 
  Wrench, 
  X,
  Eye
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const skillCategories = [
  {
    title: 'CAD & Modeling',
    icon: Code,
    description: 'Advanced proficiency in computer-aided design and 3D modeling',
    skills: [
      { name: 'Shapr3D', level: 95, experience: '4+ years' },
      { name: 'Fusion 360', level: 90, experience: '3+ years' },
      { name: 'SolidWorks', level: 85, experience: '1+ years' },
      { name: 'AutoCAD', level: 80, experience: '1+ years' }
    ]
  },
  {
    title: 'Simulation & Analysis',
    icon: Cpu,
    description: 'Engineering analysis and computational simulation expertise',
    skills: [
      { name: 'FEA Analysis', level: 95, experience: '3+ years' },
      { name: 'CFD Analysis', level: 85, experience: '2+ years' },
      { name: 'MATLAB', level: 80, experience: '2+ years' }
    ]
  },
  {
    title: 'Design & Prototyping',
    icon: Palette,
    description: 'Product design, prototyping, and manufacturing processes',
    skills: [
      { name: '3D Printing', level: 90, experience: '3+ years' },
      { name: 'Sketching', level: 85, experience: '3+ years' },
      { name: 'Rapid Prototyping', level: 85, experience: '2+ years' },
      { name: 'Injection Molding', level: 75, experience: '1+ years' }
    ]
  }
];

// const technicalSkills = [
//   {
//     category: 'Software Proficiency',
//     items: [
//       'SolidWorks (Advanced)',
//       'ANSYS Workbench',
//       'Fusion 360',
//       'AutoCAD',
//       'MATLAB/Simulink',
//       'Rhino 3D',
//       'Keyshot (Rendering)',
//       'Adobe Creative Suite'
//     ]
//   },
//   {
//     category: 'Analysis & Simulation',
//     items: [
//       'Finite Element Analysis (FEA)',
//       'Computational Fluid Dynamics (CFD)',
//       'Stress Analysis',
//       'Thermal Analysis',
//       'Modal Analysis',
//       'Topology Optimization',
//       'Design of Experiments (DOE)',
//       'Statistical Analysis'
//     ]
//   },
//   {
//     category: 'Manufacturing & Production',
//     items: [
//       '3D Printing (FDM, SLA, SLS)',
//       'CNC Programming',
//       'Injection Molding Design',
//       'Sheet Metal Design',
//       'Assembly Design',
//       'GD&T (Geometric Dimensioning)',
//       'Manufacturing Process Planning',
//       'Quality Assurance'
//     ]
//   },
//   {
//     category: 'Project Management',
//     items: [
//       'Agile Methodology',
//       'Project Planning',
//       'Risk Assessment',
//       'Cost Analysis',
//       'Timeline Management',
//       'Team Collaboration',
//       'Documentation',
//       'Presentation Skills'
//     ]
//   }
// ];

const certifications = [
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford University',
    year: '2022',
    status: 'Completed',
    image: '/certificates/AdvancedLearningAlgorithms.jpg'
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    year: '2022',
    status: 'Completed',
    image: '/certificates/SupervisedML.jpg'
  },
  {
    title: 'SolidWorks Certified Professional',
    issuer: 'Dassault Systèmes',
    year: '2025',
    status: 'In Progress',
    image: null
  }
];

interface Certification {
  title: string;
  issuer: string;
  year: string;
  status: string;
  image: string | null;
}

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const openCertViewer = (cert: Certification) => {
    setSelectedCert(cert);
  };

  const closeCertViewer = () => {
    setSelectedCert(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated geometric shapes */}
          <div className="relative overflow-hidden mb-8 h-32">
            <motion.div
              className="absolute top-4 right-12 w-18 h-18 border-2 border-accent/50 rotate-45"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-8 left-12 w-14 h-14 border-2 border-primary/50"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-2 right-1/4 w-12 h-12 bg-secondary/30"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          
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

      {/* Skills Overview Cards */}
      <section className="py-20 bg-background relative">
        {/* CAD Grid Background for black sections only */}
        <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Skill Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Certifications */}
      <section className="py-20 relative">
        {/* CAD Grid Background for black sections only */}
        <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Animated geometric shapes */}
            <div className="relative overflow-hidden mb-8 h-32">
              <motion.div
                className="absolute top-2 left-8 w-16 h-16 border-2 border-secondary/50 rotate-45"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 border-2 border-accent/50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-2 left-1/2 w-14 h-14 bg-primary/30"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              PROFESSIONAL <span className="text-primary">CERTIFICATIONS</span>
            </h2>
            <p className="text-text-muted font-mono">
              Industry-recognised credentials validating technical expertise
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
                className="cad-panel text-center group hover:border-primary transition-all duration-300 cursor-pointer"
                onClick={() => openCertViewer(cert)}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="w-full h-48 bg-surface-hover rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors overflow-hidden">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-contain rounded-sm"
                      />
                    ) : (
                      <div className="text-text-muted text-center">
                        <div className="w-16 h-8 mx-auto mb-2 border border-text-muted/30 bg-surface-hover">
                          <div className="h-full bg-primary w-3/4"></div>
                        </div>
                        <p className="text-sm font-mono">Certificate In Progress</p>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">
                      {cert.issuer}
                    </p>
                    <div className="flex justify-between items-center text-xs mb-4">
                      <span className="text-text-muted">{cert.year}</span>
                      <span className={`px-2 py-1 rounded-sm font-mono ${
                        cert.status === 'Completed' ? 'bg-success/20 text-success' :
                        cert.status === 'In Progress' ? 'bg-warning/20 text-warning' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    {cert.status === 'Completed' && (
                      <button className="cad-button flex items-center justify-center space-x-2 w-full mt-auto">
                        <Eye size={14} />
                        <span>VIEW CERTIFICATE</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeCertViewer}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-surface border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cad-panel-header flex justify-between items-center p-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-bold text-foreground font-mono">
                  CERTIFICATE VIEWER
                </h3>
                <span className="text-sm text-text-muted font-mono">
                  {selectedCert.title}
                </span>
              </div>
              <button
                onClick={closeCertViewer}
                className="cad-button flex items-center justify-center w-8 h-8"
              >
                <X size={16} />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-8 bg-background">
              <div className="flex justify-center">
                {selectedCert.image ? (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[70vh] object-contain rounded-sm border border-border"
                  />
                ) : (
                  <div className="text-center text-text-muted">
                    <div className="w-32 h-16 mx-auto mb-4 border border-text-muted/30 bg-surface-hover">
                      <div className="h-full bg-primary w-3/4"></div>
                    </div>
                    <p className="text-lg font-mono">Certificate In Progress</p>
                    <p className="text-sm mt-2">This certificate is currently being worked towards</p>
                  </div>
                )}
              </div>
            </div>

            {/* Certificate Info */}
            <div className="cad-panel-header p-4">
              <div className="text-center">
                <h4 className="text-lg font-bold text-foreground mb-2 font-mono">
                  {selectedCert.title}
                </h4>
                <p className="text-text-muted mb-2">
                  {selectedCert.issuer}
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm">
                  <span className="text-text-muted">{selectedCert.year}</span>
                  <span className="px-2 py-1 bg-success/20 text-success rounded-sm font-mono">
                    {selectedCert.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
