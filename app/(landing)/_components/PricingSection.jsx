import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-6" id="pricing">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Choose Your Plan
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Get started with our affordable pricing plans tailored to your needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-gray-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$19/mo</p>
            <ul className="mb-6 text-left">
              <li className="mb-2 flex items-center">
                <span className="text-green-400 mr-2">✔️</span>
                10 Mock Interviews
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-green-400 mr-2">✔️</span>
                Personalized Feedback
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-green-400 mr-2">✔️</span>
                Access to Resources
              </li>
            </ul>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold transition duration-300 hover:bg-green-400">
              Choose Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border border-gray-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">$39/mo</p>
            <ul className="mb-6 text-left">
              <li className="mb-2 flex items-center">
                <span className="text-yellow-400 mr-2">✔️</span>
                25 Mock Interviews
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-yellow-400 mr-2">✔️</span>
                Detailed Feedback
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-yellow-400 mr-2">✔️</span>
                Resume Review
              </li>
            </ul>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md font-semibold transition duration-300 hover:bg-yellow-400">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">$59/mo</p>
            <ul className="mb-6 text-left">
              <li className="mb-2 flex items-center">
                <span className="text-purple-400 mr-2">✔️</span>
                Unlimited Mock Interviews
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-purple-400 mr-2">✔️</span>
                Comprehensive Feedback
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-purple-400 mr-2">✔️</span>
                Interview Coaching
              </li>
            </ul>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md font-semibold transition duration-300 hover:bg-purple-400">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
