// const ClientTestimonials = () => {
//   return (
//     <section className="bg-blue-950   ">
//       <h2 className="  mb-10 text-center  font-bold text-4xl">Trusted by
//         <br/>
//        <span className=" text-blue-600">Industry Leaders </span>

// </h2>

//       <div>
//         <p className=" m-10 text-center">Our proven track record speaks for itself. We've helped manufacturing leaders across
//             <br/>
//             <span>the automotive industry achieve unprecedented efficiency and innovation.
//                 </span> 
// </p>
// </div>
// <div className="flex flex-wrap justify-center gap-6">

// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
    
    
// </div>
// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
    
    
// </div>
// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
    
    
// </div>
// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
//     </div>
//      </div>
// <p className="  m-10 text-center text-4xl ">
//   What Our Clients Say
// </p>    
// <div className="flex flex-wrap justify-center gap-10">

// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
    
    
// </div>
// <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    
    
//     <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-900">The Card Title</div>
//         <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla
//             minima corporis distinctio placeat.
//         </p>
//     </div>
    
    
// </div>
// </div>
// <h2 className=" m-10 text-center text-4xl  font-bold"> Ready to Transform Your Manufacturing? </h2>

//   <p className=" m-10 text-center text-2xl">Join the industry leaders who have already revolutionized their
//     <br/>
//     <span> operations with our digital twin solutions. </span>
//   </p>

//   {/* <button type="button" className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-4 text-center me-2 mb-2">Start  Your  Digital Transformation</button> */}


//  </section>
//   );
// };

// export default ClientTestimonials;
// components/AboutUsSection.jsx
import React from "react";
import { Trophy, Star, BarChart2, Shield } from "lucide-react";

const stats = [
  { icon: Trophy, value: "150+", label: "Digital Twin Projects Delivered" },
  { icon: Star, value: "95%", label: "Client Satisfaction Rate" },
  { icon: BarChart2, value: "40%", label: "Average Cost Reduction" },
  { icon: Shield, value: "24/7", label: "Support & Monitoring" },
];

const testimonials = [
  {
    title: "Global Automotive Manufacturer",
    subtitle: "Automotive Industry",
    content:
      '"DigitalTwin Pro transformed our production planning process. The 3D visualization capabilities reduced our design errors by 60% and accelerated time-to-market significantly."',
  },
  {
    title: "Leading Manufacturing Plant",
    subtitle: "Manufacturing Industry",
    content:
      '"The digital twin solution provided unprecedented visibility into our operations. We achieved lights-out manufacturing capabilities we never thought possible."',
  },
];

const awards = [
  {
    title: "Innovation Leader",
    content: "Recognized for pioneering digital twin solutions",
    color: "text-orange-500",
  },
  {
    title: "Trusted Partner",
    content: "Certified and validated by industry standards",
    color: "text-teal-500",
  },
  {
    title: "Quality Assured",
    content: "ISO certified processes and methodologies",
    color: "text-blue-500",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="bg-[#152b6f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by 
          <br/>
          <span className="text-green-400">Industry Leaders</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Our proven track record speaks for itself. We've helped manufacturing
          leaders across the automotive industry achieve unprecedented
          efficiency and innovation.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-700/50 p-6 rounded-lg flex flex-col items-center gap-2"
            >
              <stat.icon className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-gray-300 text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="mt-16 text-2xl font-semibold">What Our Clients Say</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-blue-700/50 p-6 rounded-lg shadow"
            >
              <h4 className="font-bold">{test.title}</h4>
              <p className="text-sm text-green-400 mb-2">{test.subtitle}</p>
              <p className="text-gray-300 italic">{test.content}</p>
            </div>
          ))}
        </div>

        {/* Awards */}
        <h3 className="mt-16 text-2xl font-semibold">Industry Recognized Excellence</h3>
        <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
          Our commitment to innovation and quality has earned us recognition from industry leaders and partners.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-blue-700/50 p-6 rounded-lg text-center"
            >
              <h4 className={`font-bold ${award.color}`}>{award.title}</h4>
              <p className="text-gray-300 mt-2">{award.content}</p>
            </div>
          ))}
        </div>
        
      </div>
            <div className="bg-[#152b6f] py-12 text-center">
        <h2 className="text-lg md:text-xl font-medium mb-4">
          Join the industry leaders who have already revolutionized their operations
          <br /> with our digital twin solutions.
        </h2>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-green-400 text-[#0b1736] font-semibold rounded-md hover:opacity-90 transition">
          Start Your Digital Transformation
        </button>
      </div>

    </section>
  );
};

export default ClientTestimonials;
