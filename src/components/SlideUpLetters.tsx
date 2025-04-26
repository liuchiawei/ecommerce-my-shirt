"use client";

import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

export default function SlideUpLetters({
  text,
  className,
  duration = 0.8,
  delay = 0.1,
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn("flex justify-center items-center", className)}
    >
      {text.split("").map((letter, index) => (
        <motion.div
          key={index}
          variants={variants(duration, delay)}
          custom={index}
        >
          {letter}
        </motion.div>
      ))}
    </motion.div>
  );
}

const variants = (duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => {
    const letterDelay = i * delay;
    return {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: letterDelay, type: "spring", duration, bounce: 0.4 },
    };
  },
});
