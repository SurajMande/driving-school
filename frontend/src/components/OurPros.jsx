import React from "react";
import { FaChartBar, FaColumns, FaCogs, FaSmile } from "react-icons/fa";

const prosData = [
  {
    icon: <FaColumns className="text-orange-500 text-3xl" />,
    title: "Customizable Views",
    description:
      "Easily tailor your dashboard with flexible layouts, widgets, and data displays that fit your workflow.",
  },
  {
    icon: <FaChartBar className="text-blue-500 text-3xl" />,
    title: "Real-Time Analytics",
    description:
      "Access live metrics and actionable insights to make informed decisions faster and stay ahead of the game.",
  },
  {
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
    title: "Seamless Integration",
    description:
      "Connect your favorite tools and platforms to streamline operations and enhance productivity.",
  },
  {
    icon: <FaSmile className="text-purple-500 text-3xl" />,
    title: "User-Friendly Interface",
    description:
      "Navigate with ease using an intuitive design crafted for simplicity and optimal efficiency.",
  },
];

const OurPros = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          What Sets Us Apart
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Explore the features that make managing your operations easier, smarter, and more efficient.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prosData.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-gray-100 p-3 rounded-lg">{item.icon}</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPros;
