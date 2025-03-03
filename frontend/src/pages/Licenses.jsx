import React from "react";
import { FaMotorcycle, FaCarSide, FaTruckMoving, FaBusAlt, FaTractor } from "react-icons/fa";
import { MdOutlineLocalOffer, MdDriveEta } from "react-icons/md";

const licenseData = [
  {
    type: "Two-Wheeler License",
    description: "Ride with confidence – scooters & bikes covered!",
    price: "₹1,500",
    icon: <FaMotorcycle className="text-4xl text-blue-600" />,
  },
  {
    type: "Four-Wheeler License",
    description: "Drive your dream car legally and safely.",
    price: "₹2,500",
    icon: <FaCarSide className="text-4xl text-green-600" />,
  },
  {
    type: "Heavy Vehicle License",
    description: "For trucks, lorries & commercial transport.",
    price: "₹4,000",
    icon: <FaTruckMoving className="text-4xl text-orange-600" />,
  },
  {
    type: "Passenger Vehicle License",
    description: "Required for bus & public transport drivers.",
    price: "₹3,500",
    icon: <FaBusAlt className="text-4xl text-purple-600" />,
  },
  {
    type: "Agricultural Vehicle License",
    description: "For tractors & farm machinery operations.",
    price: "₹1,800",
    icon: <FaTractor className="text-4xl text-red-600" />,
  },
];

const LicenseList = () => {
  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Subtle Blur Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-64 h-64 bg-blue-400 opacity-20 blur-[100px] rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-gray-900 text-4xl font-bold mb-3 flex items-center justify-center gap-2">
          <MdDriveEta className="text-blue-600 text-5xl" />
          Drive with Confidence, Get Licensed Today!
        </h2>
        <p className="text-gray-600 text-lg">
          Choose your license type and apply easily online.
        </p>
      </div>

      {/* Discount Offer Box */}
      <div className="relative max-w-lg mx-auto mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 
            text-white px-5 py-3 rounded-lg shadow-lg">
        <MdOutlineLocalOffer className="text-3xl" />
        <p className="text-lg font-semibold text-center">
          Apply for <span className="font-bold">2 or more licenses</span> & grab **special discounts!**
        </p>
      </div>

      {/* Card Listing Section */}
      <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {licenseData.map((license, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 w-full h-72 rounded-xl bg-white shadow-md border border-gray-200 
              hover:shadow-lg transition-all text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full shadow-sm">
              {license.icon}
            </div>

            {/* License Title */}
            <h3 className="text-gray-900 text-lg font-semibold mt-4">{license.type}</h3>

            {/* Price */}
            <p className="text-blue-600 font-bold text-lg mt-1">{license.price}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">{license.description}</p>

            {/* Button */}
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md 
                hover:bg-blue-600 transition-all duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseList;
