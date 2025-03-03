import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEyeOff, IoEye } from "react-icons/io5";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900">Welcome Back!</h2>
        <p className="text-gray-500 text-center mt-2">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Username Input */}
          <div className="mb-5">
            <label className="text-gray-700 font-medium">Username</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="w-full outline-none px-3 text-gray-900 bg-transparent"
                required
                aria-label="Username"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="text-gray-700 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none px-3 text-gray-900 bg-transparent"
                required
                aria-label="Password"
              />
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password + Submit */}
          <div className="flex items-center justify-between text-sm text-blue-600">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mt-6 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
