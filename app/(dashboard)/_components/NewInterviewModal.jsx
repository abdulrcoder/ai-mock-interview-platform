"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

// Sample roles for mock interviews
const roles = [
  "👩‍💻 Software Engineer",
  "🧑‍💻 Fullstack Developer",
  "🖥️ Frontend Developer",
  "⚙️ Backend Developer",
  "📊 Data Scientist",
  "📦 Product Manager",
  "🎨 UX/UI Designer",
  "⚙️ DevOps Engineer",
  "🖥️ Systems Analyst",
  "📈 Business Analyst",
  "🔍 Quality Assurance Engineer",
  "📣 Marketing Specialist",
  "💼 Sales Representative",
  "👥 HR Manager",
  "🌐 Network Administrator",
];

const NewInterviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const score = 90;

  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      await onSubmit({
        role,
        experience,
        description,
        userId: user?.id,
        score,
      });
      // Reset form fields
      setRole("");
      setExperience("");
      setDescription("");
      onClose();
    } catch (error) {
      console.error("Error submitting the interview:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md transition-transform transform scale-100 ">
          <h2 className="text-xl font-bold mb-4 text-white">
            🎤 Create New Interview
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="role">
                Role 👔
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              >
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((roleOption, index) => (
                  <option key={index} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="experience">
                Experience (in years) 📅
              </label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              >
                <option value="" disabled>
                  Select experience
                </option>
                {[...Array(61).keys()].map((exp) => (
                  <option key={exp} value={exp}>
                    {exp === 0 ? "Fresher" : exp}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="description">
                Description 📝
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="4"
                placeholder="e.g., Technical interview for a software engineer position..."
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default NewInterviewModal;
