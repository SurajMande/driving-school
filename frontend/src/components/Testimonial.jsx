import React from "react";
import { FaStar } from "react-icons/fa";

// JSON Data for Testimonials
const testimonials = [
  {
    quote: "The experience with this brand was outstanding. Their attention to detail is truly exceptional.",
    author: "Michael Smith",
    position: "CEO, Tech Solutions",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "High-quality products and fantastic service. Definitely exceeded my expectations.",
    author: "Sarah Johnson",
    position: "Marketing Head, FashionCo",
    image: "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Absolutely love the craftsmanship! The service and attention to detail are unmatched.",
    author: "David Brown",
    position: "Founder, Luxe Interiors",
    image: "https://images.pexels.com/photos/13452647/pexels-photo-13452647.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialCard = ({ quote, author, position, image }) => {
  return (
    <div className="group relative bg-white bg-opacity-90  rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-300">
      {/* Background Image */}
      <div className="h-48 w-full bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: `url(${image})` }}></div>

      {/* Content */}
      <div className="p-5 text-center">
        <p className="text-lg italic text-gray-800">"{quote}"</p>
        <h4 className="mt-4 font-semibold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-500">{position}</p>

        {/* Star Rating */}
        <div className="flex justify-center mt-3 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-6">
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-30 left-96 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Clients Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
