import React from "react";
import { FaUsers, FaRegLightbulb, FaShieldAlt, FaClock } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-6" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Key <span className="text-blue-500">Features</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover the powerful features that set our platform apart and help
          you ace your interviews with confidence.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Expert Feedback</h3>
            <p className="text-gray-300">
              Receive personalized feedback from experienced interviewers to
              improve your performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Tailored Questions</h3>
            <p className="text-gray-300">
              Get customized interview questions based on your industry, role,
              and experience level.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-300">
              We prioritize your privacy and ensure that your data is kept
              secure and confidential.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaClock />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-300">
              Choose the timing that works best for you to practice and improve
              your interview skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
