import React from "react";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";

const footerData = {
  brand: {
    name: "DrivePro Academy",
    tagline: "Master the road with expert driving lessons.",
  },
  quickLinks: ["Home", "About Us", "Courses", "Instructors", "Testimonials", "Contact"],
  services: ["Beginner Driving", "Advanced Training", "Defensive Driving", "License Test Prep"],
  contact: [
    { icon: <FaPhoneAlt />, text: "+91 98765 43210" },
    { icon: <FaEnvelope />, text: "info@drivepro.com" },
    { icon: <FaMapMarkerAlt />, text: "123, Main Street, New Delhi, India" },
  ],
  socialLinks: [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-white text-3xl font-bold">{footerData.brand.name}</h2>
          <p className="text-gray-400 text-sm">{footerData.brand.tagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.quickLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {footerData.services.map((service, index) => (
              <li key={index} className="text-gray-400 hover:text-blue-400 transition duration-300">{service}</li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            {footerData.contact.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-400">
                <span className="text-xl text-blue-500">{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {footerData.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">

        {/* Newsletter */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
          <p className="text-gray-400 text-sm mt-2">Subscribe for driving tips & offers.</p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-l-md bg-gray-800 border border-gray-700 text-gray-300 
              focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-md transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right mt-6 md:mt-0">
          © {new Date().getFullYear()} DrivePro Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
