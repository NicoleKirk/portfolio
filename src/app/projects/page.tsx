'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Wrench, Cpu, Palette } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Automotive Suspension System',
    description: 'Complete redesign of automotive suspension components using advanced FEA analysis and topology optimization.',
    category: 'Mechanical Engineering',
    technologies: ['SolidWorks', 'ANSYS', 'MATLAB', 'FEA'],
    image: '/api/placeholder/600/400',
    status: 'Completed',
    year: '2024',
    features: [
      '30% weight reduction through topology optimization',
      'Improved stress distribution analysis',
      'Manufacturing feasibility study',
      'Performance validation testing'
    ]
  },
  {
    id: 2,
    title: 'Robotic Arm End-Effector',
    description: 'Precision gripper design for industrial automation with integrated force feedback and adaptive grasping.',
    category: 'Robotics',
    technologies: ['Fusion 360', 'Arduino', '3D Printing', 'Sensors'],
    image: '/api/placeholder/600/400',
    status: 'In Progress',
    year: '2024',
    features: [
      'Adaptive grasping mechanism',
      'Force feedback integration',
      'Modular design approach',
      'Real-time control system'
    ]
  },
  {
    id: 3,
    title: 'Sustainable Packaging Design',
    description: 'Eco-friendly packaging solution for consumer electronics with 40% material reduction and improved protection.',
    category: 'Product Design',
    technologies: ['Rhino', 'Grasshopper', 'Life Cycle Analysis', 'Prototyping'],
    image: '/api/placeholder/600/400',
    status: 'Completed',
    year: '2023',
    features: [
      'Biodegradable materials',
      'Optimized structural geometry',
      'Reduced environmental impact',
      'Cost-effective manufacturing'
    ]
  },
  {
    id: 4,
    title: 'Wind Turbine Blade Optimization',
    description: 'Aerodynamic optimization of wind turbine blades using CFD analysis and composite material integration.',
    category: 'Renewable Energy',
    technologies: ['CFD', 'ANSYS Fluent', 'Composite Materials', 'Aerodynamics'],
    image: '/api/placeholder/600/400',
    status: 'Completed',
    year: '2023',
    features: [
      '15% efficiency improvement',
      'Reduced manufacturing complexity',
      'Enhanced durability analysis',
      'Cost-benefit optimization'
    ]
  },
  {
    id: 5,
    title: 'Medical Device Prototype',
    description: 'Ergonomic surgical instrument design with improved precision and reduced surgeon fatigue.',
    category: 'Medical Devices',
    technologies: ['SolidWorks', '3D Printing', 'Ergonomics', 'User Testing'],
    image: '/api/placeholder/600/400',
    status: 'Prototype',
    year: '2024',
    features: [
      'Ergonomic handle design',
      'Precision mechanism',
      'Sterilization compatibility',
      'User feedback integration'
    ]
  },
  {
    id: 6,
    title: 'Smart Home Automation Hub',
    description: 'IoT-enabled control system for home automation with intuitive user interface and energy monitoring.',
    category: 'IoT & Electronics',
    technologies: ['PCB Design', 'Arduino', 'Mobile App', 'Cloud Integration'],
    image: '/api/placeholder/600/400',
    status: 'Completed',
    year: '2023',
    features: [
      'Wireless connectivity',
      'Energy usage monitoring',
      'Mobile app integration',
      'Scalable architecture'
    ]
  }
];

const categories = ['All', 'Mechanical Engineering', 'Robotics', 'Product Design', 'Renewable Energy', 'Medical Devices', 'IoT & Electronics'];

export default function Projects() {
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
              PROJECT <span className="text-primary">PORTFOLIO</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto font-mono">
              Engineering solutions that combine technical precision with innovative design thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cad-panel group hover:border-primary transition-all duration-300"
              >
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
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-hover text-xs font-mono rounded-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-foreground mb-2 font-mono">
                      KEY FEATURES:
                    </h4>
                    <ul className="text-xs text-text-muted space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="cad-button flex-1 flex items-center justify-center space-x-2">
                      <Eye size={14} />
                      <span>VIEW DETAILS</span>
                    </button>
                    <button className="cad-button flex items-center justify-center space-x-2 px-4">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
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
              TECHNICAL <span className="text-primary">CAPABILITIES</span>
            </h2>
            <p className="text-text-muted font-mono">
              Advanced proficiency across the engineering design workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'CAD & Modeling',
                skills: ['SolidWorks', 'Fusion 360', 'AutoCAD', 'Rhino', 'Inventor']
              },
              {
                icon: Cpu,
                title: 'Simulation & Analysis',
                skills: ['ANSYS', 'FEA', 'CFD', 'MATLAB', 'Simulink']
              },
              {
                icon: Palette,
                title: 'Design & Prototyping',
                skills: ['3D Printing', 'Rapid Prototyping', 'User Research', 'Design Thinking']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cad-panel text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 font-mono">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-text-muted font-mono bg-surface-hover px-3 py-1 rounded-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
