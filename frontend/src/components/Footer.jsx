import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// Footer Data JSON
const footerData = {
  brand: {
    name: "ShopWave",
    tagline: "Empowering e-commerce growth, one dashboard at a time.",
    socialIcons: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaYoutube />, link: "#" },
    ],
  },
  links: [
    {
      title: "Product",
      items: ["Dashboard", "Features", "Pricing", "Support"],
    },
    {
      title: "Resources",
      items: ["Documentation", "FAQs", "Tutorial", "Case Studies"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Contact Us"],
    },
    {
      title: "Community",
      items: ["Forum", "Events", "Ambassador Program", "Partner Network"],
    },
  ],
  policies: ["Privacy Policy", "Terms of Service", "Cookies Settings"],
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Brand & Socials */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{footerData.brand.name}</h2>
            <p className="text-gray-500 mt-2 max-w-sm">{footerData.brand.tagline}</p>
            <div className="flex gap-3 justify-center md:justify-start mt-4">
              {footerData.brand.socialIcons.map((item, index) => (
                <a key={index} href={item.link} className="text-gray-600 hover:text-gray-900 text-xl">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:mt-0 text-center md:text-left">
            {footerData.links.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{section.title}</h4>
                <ul className="mt-3 space-y-2 text-gray-600">
                  {section.items.map((item, i) => (
                    <li key={i} className="hover:text-gray-900 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-gray-500 text-sm border-t pt-6">
          <p>© 2024 {footerData.brand.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            {footerData.policies.map((policy, index) => (
              <p key={index} className="hover:text-gray-700 cursor-pointer">
                {policy}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
