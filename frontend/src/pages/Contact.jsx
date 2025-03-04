import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Contact details data
const contactDetails = [
  { icon: <FaPhoneAlt className="text-indigo-600 text-2xl" />, text: "484.324.2400" },
  { icon: <FaEnvelope className="text-indigo-600 text-2xl" />, text: "info@drivingschool.com" },
  { icon: <FaMapMarkerAlt className="text-indigo-600 text-2xl" />, text: "15 West 3rd St, Media, PA 19063" },
];

// Form input fields data
const formFields = [
  { type: "text", placeholder: "First Name", required: true },
  { type: "text", placeholder: "Last Name", required: true },
  { type: "email", placeholder: "example@email.com", required: true },
  { type: "tel", placeholder: "xxx-xxx-xxxx (Optional)", required: false },
  { type: "textarea", placeholder: "Your message...", required: true },
];

// FAQ data
const faqs = [
  {
    question: "How do I book a driving lesson?",
    answer: "You can book a lesson through our website or call us directly at 484.324.2400.",
  },
  {
    question: "What documents do I need to start driving lessons?",
    answer: "You'll need a valid learner’s permit and a form of identification.",
  },
  {
    question: "Do you offer weekend lessons?",
    answer: "Yes! We offer flexible scheduling, including weekends and evenings.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations must be made at least 24 hours in advance to avoid charges.",
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-6 py-24">
      
      {/* Contact Card */}
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row gap-12 transition-all duration-300">
        
        {/* Left - Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-[#1A73E8]">Get in Touch</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Have questions or need assistance? Contact us, and we’ll be happy to help!
          </p>

          <div className="mt-6 space-y-6">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {item.icon}
                <span className="text-gray-800 text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="md:w-1/2 bg-[#F9FAFB] p-6 rounded-xl shadow-inner">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {formFields.slice(0, 2).map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] outline-none transition-all duration-300"
                />
              ))}
            </div>

            {formFields.slice(2, 4).map((field, index) => (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] outline-none transition-all duration-300"
              />
            ))}

            <textarea
              placeholder={formFields[4].placeholder}
              rows="4"
              required={formFields[4].required}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] outline-none transition-all duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0F57B3] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full mt-16">
        <h2 className="text-4xl font-semibold text-[#1A73E8] text-center mb-8">FAQs</h2>
        <div className="bg-white shadow-xl rounded-2xl p-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-5">
              <button
                className="flex justify-between items-center w-full text-lg font-medium text-gray-900 focus:outline-none transition-all duration-300"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question}
                {openFAQ === index ? <FiChevronUp className="text-[#1A73E8]" /> : <FiChevronDown className="text-[#1A73E8]" />}
              </button>
              {openFAQ === index && (
                <p className="mt-3 text-gray-600 text-md">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
