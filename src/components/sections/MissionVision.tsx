"use client";

import { useEffect, useState, useRef } from "react";
import { Lightbulb, Target, Cpu } from "lucide-react";

const MissionVision = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLeftVisible(true);
      },
      { threshold: 0.3 }
    );

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRightVisible(true);
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    return () => {
      if (leftRef.current) leftObserver.unobserve(leftRef.current);
      if (rightRef.current) rightObserver.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-40">
        <h2 className="text-center text-5xl font-bold text-gray-900 leading-tight mb-8">
          Born from a Vision for <br />
          <span className="text-blue-600">Digital Transformation</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div
          ref={leftRef}
          className={`transition-all duration-3000 ${
            leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="text-gray-600 mb-4 leading-relaxed">
            In an era demanding unprecedented efficiency and foresight,{" "}
            <span className="font-semibold text-blue-700">DigitalTwin Pro</span>{" "}
            was founded on a singular, powerful premise: the future of
            manufacturing belongs to the digital twin.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We recognized a critical void in the industry – the foundational
            requirement of a precise digital model for any successful digital
            transformation. Our journey began with a commitment to close this,
            delivering <span className="font-semibold">Scan-to-BIM</span> and
            comprehensive{" "}
            <span className="font-semibold text-blue-700">3D Factory solutions</span>{" "}
            that bridge the gap between physical operations and digital
            intelligence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our ultimate mission: to be the leading digital solution provider
            for lights-out factories and plants, driving the entire automotive
            sector from product development to logistics into a new era of
            Industry 4.0.
          </p>

          <blockquote className="mt-6 border-l-4 border-orange-400 bg-orange-50 italic text-gray-700 p-4 rounded-md">
            “We believe that a truly optimized factory begins with a flawless
            digital blueprint.”
          </blockquote>
        </div>

        {/* RIGHT CARDS */}
        <div
          ref={rightRef}
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Card 1 */}
          <div className="flex items-start p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Lightbulb className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Innovation First
              </h3>
              <p className="text-gray-600">
                Pioneering cutting-edge digital twin technologies that transform
                traditional manufacturing approaches.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Target className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Precision Focus
              </h3>
              <p className="text-gray-600">
                Every solution built with meticulous attention to detail and
                industry-specific requirements.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 bg-orange-100 rounded-lg mr-4">
              <Cpu className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Industry 4.0 Ready
              </h3>
              <p className="text-gray-600">
                Solutions designed for the future of manufacturing, enabling
                lights-out operations and smart factories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
