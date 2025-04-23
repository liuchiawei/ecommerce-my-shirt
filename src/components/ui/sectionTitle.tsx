'use client'

import { motion } from 'motion/react';
import DecryptedText from '@/components/DecryptedText';

export default function SectionTitle({ text }: { text: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='text-6xl font-black [writing-mode:vertical-rl]'
    >
      <DecryptedText text={text} speed={40} sequential={true} animateOn='view'/>
    </motion.h2>
  )
}


