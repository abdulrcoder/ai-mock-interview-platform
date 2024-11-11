"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewInterviewModal from "../../_components/NewInterviewModal";
import InterviewCard from "../_components/InterviewCard";
import { useUser } from "@clerk/nextjs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const InterviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const userId = user?.id;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitNewInterview = (interviewData) => {
    console.log("New Interview Data:", interviewData);
    // Here you can send the data to your backend or update your state
  };

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get("/api/interviews", {
          headers: { "user-id": userId },
        });
        setInterviews(response.data);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        🚀 AI-Powered Mock Interviews
      </h1>
      <p className="text-gray-200 mt-5">
        Keep track of your recent interviews and see how you performed. Use the
        insights to prepare for upcoming opportunities. 🔍
      </p>
      <p className="text-gray-300 text-lg mt-2">
        Track your interview progress, analyze performance, and take your career
        to new heights. 📈
      </p>

      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          📋 All Interviews
        </h2>
        <button
          onClick={handleOpenModal}
          className="bg-green-500 mt-4 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg flex items-center gap-2"
        >
          Create New Interview
        </button>
      </div>

      <NewInterviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitNewInterview}
      />

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <AiOutlineLoading3Quarters className="text-4xl text-white animate-spin" />
        </div>
      ) : interviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-8">
          <p>No interviews available yet.</p>
          <p>
            Click &quot;Create New Interview&quot; to start your first mock
            interview!
          </p>
        </div>
      )}
    </div>
  );
};

export default InterviewPage;
