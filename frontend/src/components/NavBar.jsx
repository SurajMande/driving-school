import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navbarData = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold flex items-center text-gray-900">
          ShopWave
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[17px] font-medium text-gray-800">
          {navbarData.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-blue-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons with Link */}
        <div className="hidden md:flex space-x-5">
          <Link
            to="/contact-sales"
            className="border border-gray-300 px-5 py-2 rounded-lg shadow-md font-medium text-gray-800 hover:bg-gray-100 transition-all duration-300"
          >
            Contact Sales
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar Menu (Mobile) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white shadow-2xl w-3/4 max-w-sm h-full p-6 flex flex-col">
          <button className="self-end text-2xl text-gray-800" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>
          <ul className="mt-10 space-y-6 text-lg font-medium text-gray-800">
            {navbarData.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block hover:text-blue-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link
              to="/contact-sales"
              className="w-full block text-center border border-gray-300 py-3 rounded-lg shadow-md mb-3 font-medium text-gray-800 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Sales
            </Link>
            <Link
              to="/signup"
              className="w-full block text-center bg-blue-600 text-white py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
