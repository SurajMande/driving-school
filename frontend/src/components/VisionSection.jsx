import React from "react";
import { FaCar, FaShieldAlt, FaClock } from "react-icons/fa";

const visionData = [
  {
    id: 1,
    title: "Personalized Lessons",
    description: "Tailored one-on-one training to fit your schedule and skill level.",
    icon: <FaCar className="text-blue-600 text-2xl" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    linkText: "Learn More",
    linkColor: "text-blue-600 hover:text-blue-700",
  },
  {
    id: 2,
    title: "Safety Programs",
    description: "Advanced defensive driving courses for a safer experience.",
    icon: <FaShieldAlt className="text-green-600 text-2xl" />,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    linkText: "Explore Safety",
    linkColor: "text-green-600 hover:text-green-700",
  },
  {
    id: 3,
    title: "Flexible Schedules",
    description: "Morning, evening, and weekend classes for your convenience.",
    icon: <FaClock className="text-yellow-600 text-2xl" />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
    linkText: "View Timings",
    linkColor: "text-yellow-600 hover:text-yellow-700",
  },
];

const VisionSection = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-gray-900">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Drive with <span className="text-blue-600">Confidence</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Unlock expert training and master the road with our tailored lessons.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition-all">
          Explore Courses
        </button>
      </div>

      {/* Grid Layout */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visionData.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
          >
            <div className={`w-14 h-14 ${item.bgColor} flex items-center justify-center rounded-full`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-600 transition-all">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3">{item.description}</p>
            <button className={`mt-4 font-medium ${item.linkColor} transition-all`}>
              {item.linkText} →
            </button>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="mt-16 flex justify-center">
        <img
          src="https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Driving School"
          className="w-full max-w-3xl rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default VisionSection;
