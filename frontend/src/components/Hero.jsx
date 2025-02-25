import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 text-sm font-semibold rounded-full">
            🔶 Backed by Y Combinator
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Streamline Sales, <br />
          <span className="font-bold text-black">Maximize Growth</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Take control of your operations with our intuitive dashboard. Track, analyze, and optimize every aspect of your business effortlessly.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700">
            Request a Demo
          </button>
          <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-medium flex items-center space-x-2 shadow-md hover:bg-gray-300">
            <span>▶</span> <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Right Content */}
      
    </section>
  );
};

export default Hero;
