import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between">
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
      <div className="relative mt-10 lg:mt-0">
        {/* Graph and Store Info */}
        <div className="relative bg-white p-4 rounded-lg shadow-md w-[300px] md:w-[400px]">
          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span>Month 1</span>
            <span>Month 2</span>
            <span className="text-blue-600 font-semibold">Month 3</span>
            <span>Month 4</span>
          </div>
          <div className="flex justify-between items-end h-40 space-x-2">
            <div className="w-8 bg-blue-500 h-14 rounded-md"></div>
            <div className="w-8 bg-blue-500 h-20 rounded-md"></div>
            <div className="w-8 bg-blue-500 h-28 rounded-md relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-200 opacity-50"></div>
            </div>
            <div className="w-8 bg-blue-500 h-16 rounded-md"></div>
          </div>
        </div>

        {/* Flags and Store Managers */}
        <div className="absolute top-0 right-0 bg-white shadow-md rounded-full px-3 py-2 text-sm">
          🇫🇷 France <strong>3.6k</strong> products
        </div>
        <div className="absolute top-14 right-8 bg-white shadow-md rounded-full px-3 py-2 text-sm">
          🇪🇸 Spain <strong>1.2k</strong> products
        </div>
        <div className="absolute bottom-0 left-0 flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-blue-600">💬</span>
          </div>
          <span className="text-gray-500 text-sm">Handle multiple stores</span>
        </div>
        <div className="absolute top-20 -right-10">
          <div className="relative w-14 h-14 rounded-full border-4 border-white shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/50" alt="Manager" />
          </div>
          <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            Store Manager
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
