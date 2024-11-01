import React from "react";
import {
  FaQuestionCircle,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

const HowItWorkSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          How It <span className="text-blue-500">Works</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Our platform makes preparing for interviews simple and effective.
          Follow these easy steps to boost your confidence and improve your
          interview skills.
        </p>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-6">
              <FaQuestionCircle />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Get Custom Questions
            </h3>
            <p className="text-gray-400">
              Receive personalized questions tailored to your specific role and
              experience level to simulate real interview scenarios.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-6">
              <FaClipboardCheck />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Practice with AI</h3>
            <p className="text-gray-400">
              Answer questions and get instant AI-generated feedback to help
              improve your responses and build confidence.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-6">
              <FaChartLine />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Track Your Progress</h3>
            <p className="text-gray-400">
              Monitor your improvement over time with detailed insights and
              prepare yourself for success in every interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
