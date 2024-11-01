import Link from "next/link";
import React from "react";

const InterviewCard = ({ interview }) => {
  // Format `createdAt` to a readable date format
  const formattedDate = interview.createdAt
    ? new Date(interview.createdAt).toLocaleDateString("en-GB")
    : "Date not available";

  return (
    <Link
      href={`/dashboard/interview/${interview.id}`}
      key={interview.id}
      className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-md p-5 hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-105"
    >
      <h4 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
        {interview.role}
      </h4>
      <p className="text-gray-300 mb-2">📝 {interview.description}</p>
      <span className="text-sm text-gray-400">📅 {formattedDate}</span>
    </Link>
  );
};

export default InterviewCard;
