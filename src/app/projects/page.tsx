'use client';

import { motion } from 'framer-motion';
import { Github, Eye, Code, Paintbrush } from 'lucide-react';
import { useState } from 'react';
import ProjectSlideshow from '@/components/ProjectSlideshow';
import Image from 'next/image';

const codingProjects = [
      {
        id: 1,
        title: 'TouchTiles',
        description: 'Bluetooth-enabled Arduino training pods designed to improve reaction time and agility. I programmed adaptive timing algorithms in C++ so that the LED sequences accelerated after each input, creating progressively more challenging drills. The compact, portable hardware design allowed the pods to be strapped onto tennis nets or fences, integrating electronics, programming, and mechanical design into a single functional product.',
        category: 'Hardware Programming',
        technologies: ['C++', 'Circuit Design', 'Arduino IDE'],
        image: '/Projects/coding/TouchTileImage.jpeg',
        status: 'Completed',
        year: '2025',
        features: [
          'Touch-responsive interface',
          'Dynamic tile interactions',
          'Intuitive user experience',
          'Cross-platform compatibility'
        ]
      },
  {
    id: 2,
    title: 'A Month of Media',
    description: 'Curious about my own media habits, I tracked everything I watched, read, and listened to for a month—then transformed that data into an interactive calendar. Users can explore how time, genre, and medium fluctuate over the month through an interactive interface.',
    category: 'Data Visualisation',
    technologies: ['Java', 'Processor.org'],
    image: '/Projects/coding/CalenderImage.png',
    status: 'Completed',
    year: '2025',
    features: [
      'Media consumption tracking',
      'Interactive data visualization',
      'Processor.org integration',
      'User engagement analytics'
    ]
  },
  {
    id: 3,
    title: 'Mathematics Paper',
    description: 'This investigation determines the optimal impact angle of a tennis serve by applying the principles of projectile motion and calculus. To manage the complex equations derived from these principles, this project heavily utilises Python as a computational tool. Python was instrumental in plotting the serve trajectories for various players and speeds, creating graphs to visualise the intricate relationship between impact angle and velocity, and ultimately validating the mathematical findings.',
    category: 'Computational Mathematics',
    technologies: ['Python', 'LaTeX'],
    image: '/Projects/coding/MathPaper.png',
    status: 'Completed',
    year: '2025',
    features: [
      'Mathematical modeling',
      'Physics-based calculations',
      'Statistical analysis',
      'Computational optimization'
    ]
  }
];

const designProjects = [
  {
    id: 1,
    title: 'Design Portfolio',
    description: 'Personal design portfolio showcasing creative exploration and design thinking process through hand-drawn concepts and ideation.',
    category: 'Design Documentation',
    technologies: ['Hand Drawing', 'Concept Development'],
    image: '/Projects/design/portfolioCAD.png',
    status: 'Ongoing',
    year: '2025',
    features: [
      'Creative exploration and ideation',
      'Design thinking process documentation',
      'Hand-drawn concept sketches',
      'Iterative design development'
    ]
  },
  {
    id: 2,
    title: 'Soft Robot Actuator',
    description: 'Pneumatic Soft Robotic Gripper designed with four symmetrical, semi-cylindrical arms spaced 90° apart to ensure a stable, balanced grip and uniform pressure distribution.',
    category: 'Robotics Design',
    technologies: ['Soft Robotics', 'Material Science', 'Pneumatic Actuation'],
    image: '/Projects/design/softgrip2.png',
    status: 'Completed',
    year: '2025',
    features: [
      'Flexible material integration',
      'Biomimetic movement patterns',
      'Precision control mechanisms',
      'Adaptive deformation capabilities'
    ]
  }
];

// SnapSeat Chair slideshow data
const snapSeatSlides = [
  {
    id: 1,
    title: 'Design Brief & Overview',
    description: 'The SnapSeat Chair design brief requiring a product that fits the "Office" theme and must fit through a 175×35mm letterbox slot. The recipient must be able to assemble without tools, glue, or tape.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmOWY5ZjkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIj5TbmFwU2VhdCBDaGFpciBEZXNpZ24gQnJpZWY8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiPk9mZmljZSB0aGVtZSB3aXRoIGxldHRlcmJveCBjb25zdHJhaW50czwvdGV4dD4KPC9zdmc+'
  },
  {
    id: 2,
    title: 'Concept Development Sketches',
    description: 'Initial design exploration showing various chair concepts including foldable designs, flat-pack solutions, and modular seating systems. Features detailed sketches of interlocking components and assembly methods.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmOWY5ZjkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIj5Db25jZXB0IERldmVsb3BtZW50PC90ZXh0Pgo8dGV4dCB4PSIzMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2NjY2Ij5EZXNpZ24gc2tldGNoZXMgYW5kIGlkZWF0aW9uPC90ZXh0Pgo8L3N2Zz4='
  },
  {
    id: 3,
    title: 'CAD Modeling & Assembly',
    description: '3D CAD renderings showing the modular SnapSeat Chair design with interlocking vertical panels and curved horizontal elements. Demonstrates the tool-free assembly concept.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmOWY5ZjkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIj5DQkQgTW9kZWxpbmc8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiPjNEIHJlbmRlcmluZyBhbmQgYXNzZW1ibHk8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 4,
    title: 'Physical Prototype',
    description: 'Cardboard prototype demonstrating the flat-pack design and tool-free assembly. Shows the modular components fitting together to create the final SnapSeat Chair structure.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmOWY5ZjkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIj5QaHlzaWNhbCBQcm90b3R5cGU8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiPkZsYXQtcGFjayBjYXJkYm9hcmQgcHJvdG90eXBlPC90ZXh0Pgo8L3N2Zz4='
  }
];

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  status: string;
  year: string;
  features: string[];
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'coding' | 'design'>('coding');
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  const renderProject = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="cad-panel group hover:border-primary transition-all duration-300"
    >
      {/* Project Image */}
      {project.image && (
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={192}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="cad-panel-header flex justify-between items-center">
        <span className="text-xs font-mono">{project.category}</span>
        <span className={`text-xs font-mono px-2 py-1 rounded-sm ${
          project.status === 'Completed' ? 'bg-success/20 text-success' :
          project.status === 'In Progress' ? 'bg-warning/20 text-warning' :
          'bg-accent/20 text-accent'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground font-mono">
            {project.title}
          </h3>
          <span className="text-sm text-text-muted font-mono">
            {project.year}
          </span>
        </div>

        <p className="text-text-muted mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-surface-hover text-xs font-mono rounded-sm border border-border"
            >
              {tech}
            </span>
          ))}
        </div>


        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.title === 'SnapSeat Chair' ? (
            <button 
              onClick={() => setSlideshowOpen(true)}
              className="cad-button cad-button-primary flex-1 flex items-center justify-center space-x-2"
            >
              <Eye size={14} />
              <span>VIEW PORTFOLIO</span>
            </button>
          ) : activeTab === 'coding' ? (
            <a 
              href={
                project.title === 'TouchTiles' 
                  ? 'https://github.com/NicoleKirk/Arduino_Agility_Trainer'
                  : project.title === 'A Month of Media'
                  ? 'https://github.com/NicoleKirk/Month-Of-Media'
                  : project.title === 'Mathematics Paper'
                  ? 'https://github.com/NicoleKirk/Maths_Tennis_Angle'
                  : '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300"
            >
              <Github size={14} />
              <span>VIEW ON GITHUB</span>
            </a>
          ) : null}
        </div>
        
        {/* Additional buttons for TouchTiles */}
        {project.title === 'TouchTiles' && (
          <div className="flex gap-2 mt-2">
            <button className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300">
              <span>Play concept game!</span>
            </button>
            <a 
              href="/Projects/coding/DT.IA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300"
            >
              <span>PDF</span>
            </a>
          </div>
        )}

        {/* Additional buttons for Mathematics Paper */}
        {project.title === 'Mathematics Paper' && (
          <div className="flex gap-2 mt-2">
            <a 
              href="/Projects/coding/MathsIA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300"
            >
              <Eye size={14} />
              <span>VIEW PDF</span>
            </a>
          </div>
        )}

        {/* Additional button for Design Portfolio */}
        {project.title === 'Design Portfolio' && (
          <div className="flex gap-2 mt-2">
            <a 
              href="/Projects/design/Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300"
            >
              <Eye size={14} />
              <span>VIEW PDF</span>
            </a>
          </div>
        )}

        {/* Additional button for Soft Robot Actuator */}
        {project.title === 'Soft Robot Actuator' && (
          <div className="flex gap-2 mt-2">
            <a 
              href="/Projects/design/Actuatorfile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cad-button flex-1 flex items-center justify-center space-x-2 hover:bg-primary hover:text-background transition-all duration-300"
            >
              <Eye size={14} />
              <span>VIEW PDF</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated geometric shapes */}
          <div className="relative overflow-hidden mb-8 h-32">
            <motion.div
              className="absolute top-4 left-8 w-16 h-16 border-2 border-primary/50 rotate-45"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-6 right-8 w-12 h-12 border-2 border-secondary/50"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-2 left-1/3 w-10 h-10 bg-accent/30"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              PROJECT <span className="text-primary">PORTFOLIO</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto font-mono">
              Engineering solutions that combine technical precision with innovative design thinking
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <div className="cad-panel">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('coding')}
                  className={`flex items-center space-x-2 px-6 py-3 font-mono text-sm transition-all duration-300 ${
                    activeTab === 'coding'
                      ? 'bg-primary text-background'
                      : 'text-foreground hover:bg-surface-hover'
                  }`}
                >
                  <Code size={16} />
                  <span>CODING</span>
                </button>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`flex items-center space-x-2 px-6 py-3 font-mono text-sm transition-all duration-300 ${
                    activeTab === 'design'
                      ? 'bg-primary text-background'
                      : 'text-foreground hover:bg-surface-hover'
                  }`}
                >
                  <Paintbrush size={16} />
                  <span>DESIGN</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        {/* CAD Grid Background for black sections only */}
        <div className="absolute inset-0 cad-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
              activeTab === 'design' 
                ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
            }`}
          >
            {activeTab === 'coding' 
              ? codingProjects.map((project, index) => renderProject(project, index))
              : designProjects.map((project, index) => renderProject(project, index))
            }
          </motion.div>
        </div>
      </section>

      {/* Project Slideshow */}
      <ProjectSlideshow
        slides={snapSeatSlides}
        isOpen={slideshowOpen}
        onClose={() => setSlideshowOpen(false)}
      />

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
