'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

export function Carousel({ items, className = '' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <motion.div 
      className={`relative w-full overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black hover:shadow-lg transition-all z-50 cursor-pointer"
        aria-label="Previous slide"
        variants={{
          initial: { scale: 0 },
          hover: { scale: 1 }
        }}
        transition={{ type: 'spring', duration: 0.2 }}
      >
        <ChevronLeft className="size-8" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black hover:shadow-lg transition-all z-50 cursor-pointer"
        aria-label="Next slide"
        variants={{
          initial: { scale: 0 },
          hover: { scale: 1.2 }
        }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <ChevronRight className="size-8" />
      </motion.button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.2 }
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
} 