import React from "react";
import Waves from "@/components/Waves";
import SlideUpLetters from "@/components/SlideUpLetters";

export default function Hero() {
  return (
    <div className="relative w-full h-screen z-0">
      <Waves backgroundColor="black" lineColor="white" />
      <SlideUpLetters
        text="触れる奇跡 。"
        className="text-center text-white text-3xl md:text-5xl font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-shadow-xl select-none"
      />
      <h3 className="absolute top-1/2 left-8 -translate-y-1/2 z-50 text-center text-white text-shadow-lg text-sm [writing-mode:vertical-rl] [word-spacing:0.2em] tracking-widest select-none">
        not only a shirt.
      </h3>
      <h3 className="absolute top-1/2 right-8 -translate-y-1/2 z-50 text-center text-white text-shadow-lg text-sm [writing-mode:vertical-rl] [word-spacing:0.2em] tracking-widest select-none">
        since 2025
      </h3>
    </div>
  );
}
