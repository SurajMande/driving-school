import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillCarFrontFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const coursesData = [
  {
    id: 1,
    name: "Beginner Driving Course",
    price: "₹5,999",
    description: "Perfect for first-time drivers. Learn the basics of driving with expert guidance.",
    duration: "4 Weeks",
    features: ["Basic traffic rules", "Parking skills", "City driving practice", "Highway basics"],
    image: "https://source.unsplash.com/400x250/?car,driving",
  },
  {
    id: 2,
    name: "Advanced Road Training",
    price: "₹8,499",
    description: "Enhance your driving skills with advanced road training and real-time scenarios.",
    duration: "6 Weeks",
    features: ["Defensive driving", "Night driving", "Highway & expressway", "Emergency handling"],
    image: "https://source.unsplash.com/400x250/?highway,driving",
  },
  {
    id: 3,
    name: "License Test Preparation",
    price: "₹3,999",
    description: "Pass your driving test with confidence with expert coaching and practice tests.",
    duration: "2 Weeks",
    features: ["Mock driving tests", "Traffic sign training", "Theory + practical", "Expert evaluation"],
    image: "https://source.unsplash.com/400x250/?test,driving",
  },
  {
    id: 4,
    name: "Defensive Driving Course",
    price: "₹6,999",
    description: "A must for every driver. Learn safety techniques and how to handle tough situations.",
    duration: "5 Weeks",
    features: ["Accident prevention", "Skid recovery", "Adverse weather driving", "Braking techniques"],
    image: "https://source.unsplash.com/400x250/?safety,driving",
  },
];

const openWhatsApp = (courseName) => {
  const phoneNumber = "918625884615"; // Replace with your number
  const message = encodeURIComponent(`Hello, I want to know more about the "${courseName}" course.`);
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
    {/* Course Image */}
    <img
      src={course.image}
      alt={course.name}
      className="w-full h-48 object-cover"
      loading="lazy"
    />

    {/* Course Content */}
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <BsFillCarFrontFill className="text-blue-600" />
        {course.name}
      </h3>
      <p className="text-gray-500 text-sm mt-2">{course.description}</p>
      <div className="text-lg font-bold mt-3 text-blue-600">{course.price}</div>
      <p className="text-gray-400 text-sm mt-1">Duration: {course.duration}</p>

      {/* Features List */}
      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
        {course.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="mt-auto flex gap-4 pt-4">
        <button
          onClick={() => openWhatsApp(course.name)}
          className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2">
          <IoLogoWhatsapp className="text-lg" />
          Buy Now
        </button>
        <button className="w-1/2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const CoursesPage = () => (
  <section className="pt-24 py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
        <BsFillCarFrontFill className="text-blue-600 text-4xl" />
        Master the Road with Our Driving Courses
      </h2>
      <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
        Choose the perfect course and become a confident driver with professional training.
      </p>
    </div>

    {/* Courses Grid */}
    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {coursesData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </section>
);

export default CoursesPage;
