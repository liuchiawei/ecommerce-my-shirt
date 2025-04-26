'use client'

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SectionTitle({ text, className }: { text: string, className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={cn('text-4xl md:text-6xl font-black [writing-mode:vertical-rl] select-none absolute -top-10 left-4 z-50 drop-shadow-md', className)}
    >
      {text}
    </motion.h2>
  )
}


