'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'nicole.kirk@email.com',
    description: 'Best way to reach me for project inquiries'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Available for urgent matters'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    description: 'Open to remote and local opportunities'
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nicole-kirk',
    description: 'Professional network and portfolio'
  },
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/nicole-kirk',
    description: 'Code repositories and projects'
  }
];

const availability = [
  {
    day: 'Monday - Friday',
    time: '9:00 AM - 6:00 PM PST',
    status: 'Available'
  },
  {
    day: 'Saturday',
    time: '10:00 AM - 2:00 PM PST',
    status: 'Limited'
  },
  {
    day: 'Sunday',
    time: 'Closed',
    status: 'Unavailable'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      });
    }, 3000);
  };

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
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto font-mono">
              Ready to collaborate on your next engineering project? Let's discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="cad-panel">
              <div className="cad-panel-header">
                <span className="font-mono text-sm">CONTACT INFO</span>
              </div>
              <div className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <info.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground font-mono mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-foreground mb-1">
                        {info.value}
                      </p>
                      <p className="text-xs text-text-muted">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="cad-panel">
              <div className="cad-panel-header">
                <span className="font-mono text-sm">SOCIAL LINKS</span>
              </div>
              <div className="p-6 space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-sm hover:bg-surface-hover transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-foreground font-mono">
                        {social.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {social.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="cad-panel">
              <div className="cad-panel-header flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">AVAILABILITY</span>
              </div>
              <div className="p-6 space-y-3">
                {availability.map((slot, index) => (
                  <motion.div
                    key={slot.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-mono text-foreground">
                        {slot.day}
                      </p>
                      <p className="text-xs text-text-muted">
                        {slot.time}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-sm font-mono ${
                      slot.status === 'Available' ? 'bg-success/20 text-success' :
                      slot.status === 'Limited' ? 'bg-warning/20 text-warning' :
                      'bg-error/20 text-error'
                    }`}>
                      {slot.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="cad-panel">
              <div className="cad-panel-header flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">SEND MESSAGE</span>
              </div>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2 font-mono">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="cad-input w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cad-input w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-foreground mb-2">
                      PROJECT TYPE
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="cad-input w-full"
                    >
                      <option value="">Select project type</option>
                      <option value="product-design">Product Design</option>
                      <option value="cad-modeling">CAD Modeling</option>
                      <option value="simulation">Simulation & Analysis</option>
                      <option value="prototyping">Prototyping</option>
                      <option value="consulting">Engineering Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-foreground mb-2">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cad-input w-full"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-foreground mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="cad-input w-full resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cad-button cad-button-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              READY TO <span className="text-primary">START?</span>
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Prefer a quick call? I'm available for project discussions and consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:nicole.kirk@email.com" className="cad-button cad-button-primary flex items-center space-x-2">
                <Mail size={16} />
                <span>SEND EMAIL</span>
              </a>
              <a href="tel:+15551234567" className="cad-button flex items-center space-x-2">
                <Phone size={16} />
                <span>CALL NOW</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
