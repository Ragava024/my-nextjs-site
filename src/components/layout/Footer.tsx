"use client";

import { Mail, Phone, MapPin, Building2, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1736] text-white">
      {/* Top Banner Section */}
      {/* <div className="bg-[#152b6f] py-12 text-center">
        <h2 className="text-lg md:text-xl font-medium mb-4">
          Join the industry leaders who have already revolutionized their operations
          <br /> with our digital twin solutions.
        </h2>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-green-400 text-[#0b1736] font-semibold rounded-md hover:opacity-90 transition">
          Start Your Digital Transformation
        </button>
      </div> */}

      {/* Main Footer Content */}
      <div className="py-12 px-8 md:px-20 grid md:grid-cols-3 gap-8 bg-[#0b1736]">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <Building2 className="text-orange-500 w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold">CY4 Digital Twin Products and Solutions</h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Pioneering Digital Twin solutions for the automotive and
            manufacturing sectors, empowering lights-out efficiency and
            unmatched operational intelligence.
          </p>

          <div className="flex space-x-3">
            <button className="p-2 bg-[#162447] rounded-lg hover:bg-[#1f2d58] transition">
              <Building2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-[#162447] rounded-lg hover:bg-[#1f2d58] transition">
              <Users className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Our Vision</a></li>
            <li><a href="#" className="hover:text-white transition">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition">Expertise</a></li>
            <li><a href="#" className="hover:text-white transition">Leadership</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-orange-400" />
              contact@digitaltwinpro.com
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-orange-400" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-400" />
              Semmanchery, <br />Chennai
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2025 DigitalTwin Pro. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
