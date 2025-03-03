import React from "react";
import { FaCar, FaRoad, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";

const prosData = [
  {
    icon: FaCar,
    title: "Modern Vehicles",
    description:
      "Learn to drive with a fleet of well-maintained, modern vehicles equipped with the latest safety features.",
    color: "text-orange-500",
  },
  {
    icon: FaRoad,
    title: "Real-World Road Training",
    description:
      "Gain hands-on experience with real-world driving scenarios, traffic rules, and parking techniques.",
    color: "text-blue-500",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert Instructors",
    description:
      "Train with certified driving instructors who provide patient, professional, and personalized guidance.",
    color: "text-yellow-500",
  },
  {
    icon: FaShieldAlt,
    title: "Safety First Approach",
    description:
      "We prioritize safety with defensive driving techniques, risk assessment, and emergency preparedness training.",
    color: "text-purple-500",
  },
];

const OurPros = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Gradient Background */}
      
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Discover the benefits of learning to drive with our expert team and top-notch training facilities.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prosData.map(({ icon: Icon, title, description, color }, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            <div className={`bg-gray-100 p-4 rounded-lg ${color}`}>
              <Icon className="text-3xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPros;
