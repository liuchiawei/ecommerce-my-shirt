"use client"

import { motion } from "motion/react";

export default function CatchCopy() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-justify text-gray-500 text-md font-normal"
    >
      最新のテクノロジーを駆使したこの高機能素材は、見た目の美しさだけでなく、着る人の肌に寄り添うような心地よさを提供します。
    </motion.p>
  );
}
