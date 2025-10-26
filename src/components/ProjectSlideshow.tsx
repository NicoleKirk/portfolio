'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectSlideshowProps {
  slides: Slide[];
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export default function ProjectSlideshow({ slides, isOpen, onClose, initialSlide = 0 }: ProjectSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-surface border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cad-panel-header flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-bold text-foreground font-mono">
              PROJECT SLIDESHOW
            </h3>
            <span className="text-sm text-text-muted font-mono">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={togglePlay}
              className="cad-button flex items-center space-x-2 px-3 py-2"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-xs">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
            <button
              onClick={onClose}
              className="cad-button flex items-center justify-center w-8 h-8"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row h-[calc(90vh-80px)]">
          {/* Image Display */}
          <div className="flex-1 relative bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center p-8"
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="max-w-full max-h-full object-contain rounded-sm border border-border"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 cad-button w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cad-button w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slide Info Panel */}
          <div className="lg:w-80 bg-surface border-l border-border p-6 flex flex-col">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-foreground mb-2 font-mono">
                {slides[currentSlide].title}
              </h4>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Slide Thumbnails */}
            <div className="space-y-2">
              <h5 className="text-sm font-bold text-foreground font-mono mb-3">
                SLIDE NAVIGATION
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`relative aspect-video rounded-sm border transition-all duration-300 ${
                      index === currentSlide
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-foreground bg-surface px-2 py-1 rounded-sm">
                        {index + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
