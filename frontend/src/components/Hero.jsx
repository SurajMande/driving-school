import React from "react";

const Hero = () => {
  return (
    <>
    <section className="bg-[url('../src/assets/hero-image.jpg')] bg-cover bg-center relative w-full bg-white px-6 md:px-12 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-between min-h-screen">
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 text-sm font-semibold rounded-full">
            🚗 Trusted by Thousands of Learners
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Master Driving Skills, <br />
          <span className="font-bold text-black">Drive with Confidence</span>
        </h1>
        <p className="text-gray-950 mt-4 text-lg">
          Learn from certified instructors and gain hands-on experience with our expert driving courses. Safe, reliable, and beginner-friendly training.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700">
            Book a Lesson
          </button>
          <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-medium flex items-center space-x-2 shadow-md hover:bg-gray-300">
            <span>▶</span> <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Right Content */}
      {/* <div className="p-4 block">
          <img
            src="https://images.pexels.com/photos/376729/pexels-photo-376729.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Driving School"
            className="w-full rounded-xl shadow-lg"
          />
        </div> */}

    </section>
    </>
  );
};

export default Hero;
