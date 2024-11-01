"use client";
import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const InterviewStart = ({ params }) => {
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  const sampleQuestions = [
    {
      aiQuestion:
        "Can you explain the difference between SQL and NoSQL databases?",
    },
    { aiQuestion: "What are some of the key principles of RESTful APIs?" },
    { aiQuestion: "How do you manage state in a React application?" },
    { aiQuestion: "What is the purpose of middleware in Express?" },
    { aiQuestion: "How do you ensure the security of a web application?" },
  ];

  useEffect(() => {
    const fetchInterview = async () => {
      if (!params?.id) return console.error("Interview ID is required");
      if (!user?.id) return console.error("User ID is required");

      try {
        const response = await axios.get(`/api/interviews/${params.id}`, {
          headers: {
            "Content-Type": "application/json",
            "user-id": user.id,
          },
        });
        setInterview(response.data);
      } catch (error) {
        setError(error.response?.data?.error || error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) fetchInterview();
  }, [params?.id, user?.id]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-black to-gray-900 min-h-screen p-4 md:p-8 text-white">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <AiOutlineLoading3Quarters className="text-4xl text-white animate-spin" />
        </div>
      ) : (
        interview && (
          <div className="mb-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 tracking-wide">
                {interview.role}
              </h2>
              <p className="text-sm md:text-base font-medium text-gray-300 bg-gray-700 px-4 py-2 rounded-full">
                {`Experience: ${interview.experience} years`}
              </p>
            </div>
          </div>
        )
      )}
      <div className="flex flex-col h-[300px] md:h-[400px] w-full gap-4 rounded-2xl">
        {interview && <QuestionSection questions={sampleQuestions} />}
      </div>
    </div>
  );
};

export default InterviewStart;
