"use client";

import { useEffect, useState } from "react";
import { Users, Award, Rocket, HeartHandshake, Cog } from "lucide-react";

const AboutUs: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animations once component is mounted
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-24">
      {/* Section Title */}
      <h2 className="text-center text-5xl font-bold text-gray-900 leading-tight mb-16">
        Driven by Experience,
        <br />
        <span className="text-blue-600">Defined by Innovation</span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT BLOCK */}
          <div
            className={`bg-blue-50 p-8 rounded-xl shadow transition-all duration-1000 ease-out ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">DigitalTwin Pro</span> Leadership
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our leadership brings a rich tapestry of experience directly from
              the heart of the manufacturing and automotive industries. Our
              Co-Founder, leveraging deep insights from nearly{" "}
              <span className="font-semibold text-blue-700">
                11 years at Ford Motor Company
              </span>
              , envisioned a future where digital intelligence drives every
              operational decision.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              This foundation, combined with our co-founder's leadership at{" "}
              <span className="font-semibold text-blue-700">
                CY4 (an IoT / Digital Twin Startup)
              </span>{" "}
              and Smartehop, fuels our commitment to cutting-edge solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We cultivate an employee-friendly, innovative culture where every
              project is approached with automation and client-focused precision,
              ensuring we deliver not just a service, but a transformative
              partnership.
            </p>
          </div>

          {/* RIGHT DARK CARD */}
          <div
            className={`bg-gradient-to-br from-blue-800 to-blue-600 text-white p-10 rounded-xl shadow-xl flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out delay-200 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex space-x-4 mb-4">
              <Users size={40} className="text-blue-200" />
              <Cog size={40} className="text-blue-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Expert Leadership Team
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Decades of combined experience in automotive manufacturing, digital
              transformation, and technology innovation.
            </p>
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-out delay-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-3">
              <Award className="text-blue-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Industry Expertise
            </h4>
            <p className="text-gray-600 text-sm">
              11+ years of Ford Motor Company experience driving automotive
              innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-3">
              <Rocket className="text-green-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Startup Leadership
            </h4>
            <p className="text-gray-600 text-sm">
              Proven track record in IoT and Digital Twin startup ecosystems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="p-3 bg-orange-100 rounded-lg w-fit mb-3">
              <HeartHandshake className="text-orange-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Employee-Friendly Culture
            </h4>
            <p className="text-gray-600 text-sm">
              Innovation-driven environment focused on collaboration and growth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-3">
              <Cog className="text-purple-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Automation Focus
            </h4>
            <p className="text-gray-600 text-sm">
              Every project approached with precision and smart automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
