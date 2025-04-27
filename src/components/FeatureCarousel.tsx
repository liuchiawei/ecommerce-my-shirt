"use client";

import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeatureCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function FeatureCarousel({
  items,
  className,
}: FeatureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className={cn("relative w-full h-[600px] overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-500 mask-r-from-30%" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-2xl space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl font-bold text-foreground"
                >
                  {items[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-foreground/80"
                >
                  {items[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button size="lg" className="mt-4" asChild>
                    <a href={items[currentIndex].link}>もっと見る</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 rounded-full hover:bg-background/80 cursor-pointer"
        onClick={prevSlide}
        title="previous"
      >
        <ArrowLeft className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 rounded-full hover:bg-background/80 cursor-pointer"
        onClick={nextSlide}
        title="next"
      >
        <ArrowRight className="size-4" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-4"
                : "bg-foreground/30 hover:bg-foreground/50"
            )}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            title={`Switch to the ${index + 1}th slide`}
            aria-label={`Switch to the ${index + 1}th slide`}
          />
        ))}
      </div>
    </div>
  );
}
