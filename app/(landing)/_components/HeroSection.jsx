import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6"
      id="home"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight shadow-md">
            Ace Your Next Interview with
            <span className="text-blue-500">AI-Powered</span> Mock Sessions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Prepare with curated questions and insightful feedback to
            confidently approach your next opportunity.
          </p>
          <div>
            <Link
              href={"/dashboard"}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition duration-300 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero.png"
            alt="AI Mock Interview Illustration"
            width={500} // Set width for optimization
            height={500} // Set height for optimization
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
