"use client"

import { motion } from "motion/react";

export default function CatchCopy() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full max-w-xl mx-auto my-10 px-4 text-justify text-md font-normal"
    >
      最新のテクノロジーを駆使したこの高機能素材は、見た目の美しさだけでなく、着る人の肌に寄り添うような心地よさを提供します。
    </motion.p>
  );
}
