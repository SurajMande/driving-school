import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with the essentials to manage your e-commerce operations efficiently.",
    buttonText: "Sign Up Now",
    buttonStyle: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    features: [
      "Access to basic features",
      "Manage up to 50 products",
      "Track up to 100 orders monthly",
      "Limited reporting and analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Unlock advanced tools and insights to scale your business and optimize workflows.",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    features: [
      "Access to all advanced features",
      "Manage unlimited products",
      "Track unlimited orders",
      "Advanced reporting and analytics",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions designed for large-scale operations with dedicated support.",
    buttonText: "Contact Us",
    buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    features: [
      "All from Pro plan",
      "Fully customizable features",
      "Dedicated account manager",
      "API access and integrations",
      "Team-wide user management",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Flexible Plans for Every Need
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Whether starting small or scaling up,
          our pricing supports individuals, teams, and organizations.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-lg p-8 shadow-md bg-white transition-all duration-300 ${
              plan.highlight ? "border-blue-500 shadow-lg scale-105" : "hover:shadow-lg"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="text-gray-500 mt-2">{plan.description}</p>
            <div className="text-4xl font-bold mt-6">{plan.price} <span className="text-gray-500 text-sm">per month</span></div>
            <button
              className={`mt-6 w-full py-3 rounded-lg font-medium transition ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
            <ul className="mt-6 space-y-3 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
