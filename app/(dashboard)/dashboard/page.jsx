"use client";
import React, { useEffect, useState, useCallback } from "react";
import NewInterviewModal from "../_components/NewInterviewModal";
import InterviewCard from "./_components/InterviewCard";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DashboardPage = () => {
  const [interviews, setInterviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isLoaded, isSignedIn, user } = useUser();

  const createUserIfNotExists = useCallback(async () => {
    try {
      await axios.post(
        "/api/users",
        {
          clerkUserId: user.id,
          email: user?.primaryEmailAddress?.emailAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }, [user?.id, user?.primaryEmailAddress?.emailAddress]);

  const fetchRecentInterviews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/interviews", {
        headers: {
          "user-id": user.id,
        },
      });
      setInterviews(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching interviews:", error);
      setInterviews([]);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      createUserIfNotExists();
      fetchRecentInterviews();
    }
  }, [isLoaded, isSignedIn, createUserIfNotExists, fetchRecentInterviews]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitNewInterview = async (interviewData) => {
    try {
      const response = await axios.post("/api/interviews", interviewData);
      console.log("Interview created:", response.data);
      setInterviews((prev) => [response.data, ...prev].slice(0, 4));
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
      {/* Title and Create Button */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
          🎉 Welcome to Your Dashboard!
        </h1>
        <button
          onClick={handleOpenModal}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg flex items-center gap-2"
        >
          Create New Interview
        </button>
      </div>

      {/* Modal */}
      <NewInterviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitNewInterview}
      />

      {/* Interactive Card */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg rounded-lg p-6 mb-8 transition duration-300 transform">
        <p className="mb-8 text-lg">
          🌟 <span className="font-semibold">AI-Powered Mock Interviews</span>{" "}
          help you prepare with custom-tailored questions and feedback.
          Let&apos;s make your next interview a success! 💼
        </p>
      </div>

      {/* Recent Interviews List */}
      <div>
        <h3 className="text-2xl font-semibold text-[#2563EB] mb-6 flex items-center gap-2">
          📅 Recent Interviews
        </h3>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <AiOutlineLoading3Quarters className="text-4xl text-white animate-spin" />
          </div>
        ) : interviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {interviews.slice(0, 4).map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-8">
            <p>No recent interviews found.</p>
            <p>
              Click &quot;Create New Interview&quot; to start preparing for your
              next interview!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
