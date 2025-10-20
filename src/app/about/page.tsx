'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Lightbulb, 
  Target, 
  Heart,
  BookOpen,
  Trophy,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Design Engineering',
    school: 'University of Technology',
    year: '2022 - 2026',
    gpa: '3.8/4.0',
    description: 'Comprehensive program covering mechanical design, CAD modeling, manufacturing processes, and engineering analysis.',
    coursework: [
      'Advanced CAD Modeling',
      'Finite Element Analysis',
      'Manufacturing Processes',
      'Product Design',
      'Engineering Materials',
      'Thermodynamics',
      'Mechanics of Materials',
      'Design for Manufacturing'
    ]
  }
];

const achievements = [
  {
    title: 'Dean\'s List',
    year: '2023, 2024',
    description: 'Academic excellence recognition for maintaining high GPA',
    icon: Trophy
  },
  {
    title: 'Engineering Design Competition',
    year: '2024',
    description: '1st Place - Innovative automotive suspension design',
    icon: Award
  },
  {
    title: 'Research Assistant',
    year: '2023 - Present',
    description: 'Assisting in renewable energy research projects',
    icon: BookOpen
  },
  {
    title: 'Student Engineering Society',
    year: '2022 - Present',
    description: 'Active member and event coordinator',
    icon: Users
  }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly seeking creative solutions to complex engineering challenges through cutting-edge technology and design thinking.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Committed to delivering accurate, high-quality engineering solutions that meet exact specifications and performance requirements.'
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description: 'Passionate about developing environmentally conscious designs that contribute to a more sustainable future.'
  }
];

const timeline = [
  {
    year: '2022',
    title: 'Started Design Engineering Program',
    description: 'Began comprehensive study of mechanical design and engineering principles'
  },
  {
    year: '2023',
    title: 'First CAD Certification',
    description: 'Achieved SolidWorks Certified Professional certification'
  },
  {
    year: '2023',
    title: 'Research Position',
    description: 'Joined renewable energy research team as undergraduate assistant'
  },
  {
    year: '2024',
    title: 'Design Competition Win',
    description: 'Won 1st place in university engineering design competition'
  },
  {
    year: '2024',
    title: 'Advanced Certifications',
    description: 'Completed ANSYS and Autodesk professional certifications'
  }
];

export default function About() {
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
              ABOUT <span className="text-primary">NICOLE</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto font-mono">
              Passionate design engineering student with a drive for innovation and technical excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cad-panel"
          >
            <div className="cad-panel-header">
              <span className="font-mono text-sm">PERSONAL STORY</span>
            </div>
            <div className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  From a young age, I've been fascinated by how things work and how they can be made better. 
                  This curiosity led me to pursue design engineering, where I can combine my love for problem-solving 
                  with my passion for creating innovative solutions.
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  As a design engineering student, I specialize in transforming complex problems into elegant, 
                  functional solutions. My approach combines technical precision with creative thinking, 
                  ensuring that every design not only meets specifications but exceeds expectations in 
                  usability and innovation.
                </p>
                <p className="text-foreground leading-relaxed">
                  I believe that great engineering is about more than just technical competence—it's about 
                  understanding the human impact of design decisions and creating solutions that make a 
                  positive difference in people's lives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
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
              <span className="text-primary">EDUCATION</span> & ACHIEVEMENTS
            </h2>
            <p className="text-text-muted font-mono">
              Academic journey and professional accomplishments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cad-panel"
            >
              <div className="cad-panel-header flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">EDUCATION</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-mono">
                  {education[0].degree}
                </h3>
                <p className="text-primary font-mono text-sm mb-2">
                  {education[0].school}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-text-muted">
                    {education[0].year}
                  </span>
                  <span className="text-sm font-mono text-primary">
                    GPA: {education[0].gpa}
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-4">
                  {education[0].description}
                </p>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 font-mono">
                    KEY COURSEWORK:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {education[0].coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs text-text-muted bg-surface-hover px-2 py-1 rounded-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cad-panel"
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <achievement.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold text-foreground font-mono">
                            {achievement.title}
                          </h4>
                          <span className="text-xs text-text-muted">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs text-text-muted">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              CORE <span className="text-primary">VALUES</span>
            </h2>
            <p className="text-text-muted font-mono">
              The principles that guide my approach to engineering and design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cad-panel text-center group hover:border-primary transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-mono">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              JOURNEY <span className="text-primary">TIMELINE</span>
            </h2>
            <p className="text-text-muted font-mono">
              Key milestones in my academic and professional development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  
                  {/* Content */}
                  <div className="flex-1 cad-panel">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-foreground font-mono">
                          {item.title}
                        </h3>
                        <span className="text-sm text-primary font-mono">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              LET'S <span className="text-primary">CONNECT</span>
            </h2>
            <p className="text-lg text-text-muted mb-8">
              I'm always excited to discuss new opportunities and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cad-button cad-button-primary flex items-center space-x-2">
                <span>GET IN TOUCH</span>
                <ArrowRight size={16} />
              </a>
              <a href="/projects" className="cad-button flex items-center space-x-2">
                <span>VIEW MY WORK</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
