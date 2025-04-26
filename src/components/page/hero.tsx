import React from "react";
import Waves from "@/components/Waves";
import SlideUpLetters from "@/components/SlideUpLetters";

export default function Hero() {
  return (
    <div className="relative w-full h-screen z-0">
      <Waves backgroundColor="black" lineColor="white" />
      <SlideUpLetters
        text="触れる奇跡 。"
        className="text-center text-white text-5xl font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-shadow-lg select-none"
      />
    </div>
  );
}
