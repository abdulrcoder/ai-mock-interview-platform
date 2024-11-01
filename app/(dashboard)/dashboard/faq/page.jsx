"use client";
import React, { useState } from "react";

// Sample FAQ data with emojis for added flair
const faqData = [
  {
    question: "💡 What is the purpose of this platform?",
    answer:
      "This platform is designed to help users enhance their interview skills through mock interviews and feedback.",
  },
  {
    question: "📅 How can I book a mock interview?",
    answer:
      "You can book a mock interview by navigating to the booking section and selecting your preferred date and time.",
  },
  {
    question: "🎙️ What types of interviews are available?",
    answer:
      "We offer various types of interviews including technical, behavioral, and HR interviews.",
  },
  {
    question: "💸 Is there a fee for using this platform?",
    answer:
      "Currently, the platform is free to use for all users. However, premium features may be introduced in the future.",
  },
  {
    question: "📝 How do I provide feedback?",
    answer:
      "After your mock interview, you will have the opportunity to provide feedback through a short survey.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        ❓ Frequently Asked Questions
      </h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full p-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span
                className="text-xl transition-transform duration-300"
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0)",
                }}
              >
                {openIndex === index ? "➖" : "➕"}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-700 rounded-lg transition-all duration-300">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
