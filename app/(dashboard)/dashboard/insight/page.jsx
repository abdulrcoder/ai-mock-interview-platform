import React from "react";

// Sample user performance data
const performanceData = [
  {
    id: 1,
    interviewType: "Technical Interview 💻",
    score: 85,
    feedback:
      "Great job solving the coding problems! Focus on time management.",
  },
  {
    id: 2,
    interviewType: "Behavioral Interview 🧠",
    score: 40,
    feedback:
      "Well done on demonstrating your soft skills. Practice more STAR responses.",
  },
  {
    id: 3,
    interviewType: "HR Interview 💼",
    score: 59,
    feedback:
      "You answered questions well but could improve on discussing your salary expectations.",
  },
  {
    id: 4,
    interviewType: "Case Study Interview 📊",
    score: 75,
    feedback:
      "Good approach to the case. Try to provide clearer solutions in future interviews.",
  },
  // Add more performance data as needed
];

const ProgressBar = ({ score }) => {
  let barColor = "bg-green-500";

  if (score <= 40) {
    barColor = "bg-red-500";
  } else if (score <= 60) {
    barColor = "bg-yellow-500";
  }

  return (
    <div className="bg-gray-700 rounded-full h-2 mt-2">
      <div
        className={`${barColor} h-2 rounded-full`}
        style={{ width: `${score}%` }}
      />
    </div>
  );
};

const InsightPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🌟 Your Performance Overview 🌟
      </h1>
      <p className="mb-8 text-center text-gray-300">
        Review your recent interview performance and feedback to level up your
        skills! 📈
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center">
        📊 Performance Metrics
      </h2>
      <ul className="space-y-6">
        {performanceData.map((performance) => {
          let scoreColor = "text-green-500";

          if (performance.score <= 40) {
            scoreColor = "text-red-500";
          } else if (performance.score <= 60) {
            scoreColor = "text-yellow-500";
          }

          return (
            <li
              key={performance.id}
              className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {performance.interviewType}
                </h3>
                <span className={`text-lg font-semibold ${scoreColor}`}>
                  {performance.score}/100 🌟
                </span>
              </div>
              <ProgressBar score={performance.score} />
              <p className="text-gray-400 mt-2">📝 {performance.feedback}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InsightPage;
