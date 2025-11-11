"use client";

import { Eye, Users, Zap, DollarSign } from "lucide-react";

const Factory = () => {
  return (  
    <section className="bg-[#f5f8ff] min-h-screen py-20 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1736]">
          The Power of 
          <br/>
          <span className="text-[#3c7d4c]">
            3D Factory Design</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Visualizing Tomorrow, Today
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        <button className="px-6 py-2 bg-[#1d4ed8] text-white font-medium rounded-md shadow hover:bg-blue-700 transition">
          2D Layout
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition">
          3D Digital Twin
        </button>
      </div>

      {/* Layout Comparison Section */}
      <div className="grid md:grid-cols-2 gap-8 justify-center items-center mb-16">
        {/* Traditional 2D Layout */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-lg font-semibold text-[#0b1736] mb-4">
            Traditional 2D Layouts
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2"></span>
              Limited visibility and understanding
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2"></span>
              Extensive stakeholder coordination required
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              High risk of costly physical errors
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              Slow decision-making process
            </li>
          </ul>
        </div>

        {/* Illustration Card */}
        <div className="bg-gray-200 rounded-lg flex justify-center items-center h-56 text-gray-700 font-medium">
          Limited Perspective
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white shadow-md rounded-lg p-8 text-center mb-12">
        <p className="text-gray-700 leading-relaxed">
          In a world where 2D layouts offer limited visibility and require
          extensive stakeholder coordination, our <b>3D Factory Digital Twin</b>{" "}
          solutions provide an unparalleled advantage. We transform complex
          manufacturing challenges into visually intuitive, collaborative
          environments.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <Eye className="w-8 h-8 text-red-400" />
          </div>
          <h4 className="font-semibold text-[#0b1736] mb-2">Reduced Rework</h4>
          <p className="text-gray-600 text-sm">
            Identify clashes and inefficiencies early.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <h4 className="font-semibold text-[#0b1736] mb-2">
            Streamlined Collaboration
          </h4>
          <p className="text-gray-600 text-sm">
            All stakeholders visualize and contribute with ease.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <Zap className="w-8 h-8 text-green-400" />
          </div>
          <h4 className="font-semibold text-[#0b1736] mb-2">
            Accelerated Decisions
          </h4>
          <p className="text-gray-600 text-sm">
            Make informed choices faster, reducing timelines.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <DollarSign className="w-8 h-8 text-orange-400" />
          </div>          
          <h4 className="font-semibold text-[#0b1736] mb-2">
            Significant Savings
          </h4>
          <p className="text-gray-600 text-sm">
            Prevent costly physical errors through virtual planning.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-lg py-10 px-6 text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          We don’t just create models; we create a foundation for proactive,
          data-driven manufacturing.
        </h3>
        <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition">
          Learn More About Our Process
        </button>
      </div>
    </section>
  );
};

export default Factory;
