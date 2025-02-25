import React from "react";

const integrations = [
  { name: "Shopify", logo: "/shopify.png" },
  { name: "Slack", logo: "/slack.png" },
  { name: "Mailchimp", logo: "/mailchimp.png" },
  { name: "Google Analytics", logo: "/google-analytics.png" },
  { name: "Zapier", logo: "/zapier.png" },
  { name: "Salesforce", logo: "/salesforce.png" },
  { name: "Zendesk", logo: "/zendesk.png" },
  { name: "PayPal", logo: "/paypal.png" },
  { name: "Notion", logo: "/notion.png" },
];

const Integrations = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-50 rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Expand Your Reach <br className="hidden md:block" /> with Integrations
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Discover tools and platforms that integrate seamlessly with our dashboard.
            Simplify workflows and boost efficiency.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
            Full Integrations List
          </button>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-3 gap-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-lg shadow-md p-3"
            >
              <img src={item.logo} alt={item.name} className="h-6" />
            </div>
          ))}
          <div className="flex items-center justify-center bg-black text-white rounded-lg shadow-md p-3 font-medium">
            +14 more
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
