"use client";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0f2c] via-[#0c1b4d] to-[#0e265f] text-white py-32">
      {/* Decorative Dots */}
      <div className="absolute top-16 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ease-out">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-1000`}
        >
          Shaping the Future of <br />
          <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Manufacturing, Digitally
          </span>
        </h1>

        <p
          className={`text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-1000 delay-200`}
        >
          We are <span className="text-orange-400 font-semibold">DigitalTwin Pro</span>, pioneers in Digital Twin solutions, empowering the Automotive and Manufacturing sectors to achieve lights-out efficiency and unmatched operational intelligence.
        </p>

        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="px-8 py-3 bg-white/10 border border-white/20 rounded-full text-white text-lg font-semibold hover:bg-white/20 backdrop-blur-md transition-all duration-300">
            Our Vision ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
