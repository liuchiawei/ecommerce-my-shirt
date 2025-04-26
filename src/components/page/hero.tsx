import React from "react";
import Waves from "@/components/Waves";
import SlideUpLetters from "@/components/SlideUpLetters";

export default function Hero() {
  return (
    <div className="relative w-full h-screen z-0">
      <Waves backgroundColor="black" lineColor="white" />
      <div className="w-full max-w-xl p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-shadow-lg">
        <SlideUpLetters text="触れる奇跡 。" className="text-center text-white text-5xl font-black" />
        <p className="bg-black/30 p-4 mt-8 text-justify text-gray-100 text-md font-normal">最新のテクノロジーを駆使したこの高機能素材は、見た目の美しさだけでなく、着る人の肌に寄り添うような心地よさを提供します。</p>
      </div>
    </div>
  );
}
