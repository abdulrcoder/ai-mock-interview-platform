"use client";
import React from "react";

const QuestionBubble = ({ question, isCurrent }) => (
  <div
    className={`p-6 rounded-2xl text-left transition-all duration-300 transform ${
      isCurrent
        ? "bg-gradient-to-r from-teal-500 to-blue-500 shadow-2xl  ring-4 ring-blue-300"
        : "bg-gray-700 shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-gray-400"
    }`}
  >
    <h3 className="text-xl font-semibold text-white mb-3">
      {isCurrent ? "🔹 Current Question" : "Question"}
    </h3>
    <p className="text-gray-100 text-lg leading-relaxed tracking-wide">
      {question}
    </p>
  </div>
);

export default QuestionBubble;
