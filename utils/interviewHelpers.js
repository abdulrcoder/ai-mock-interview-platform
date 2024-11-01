import axios from "axios";
import { chatSession } from "../lib/gemini-ai";

// Fetch an AI-generated question
export const fetchAIQuestion = async (experience, role, setQuestions) => {
  try {
    const result = await chatSession.sendMessage(
      `Generate a short, one-line interview question for a candidate with ${experience} years of experience applying for a ${role} role.`
    );
    const questionText = await result.response.text();
    if (questionText) {
      setQuestions((prevQuestions) => [...prevQuestions, questionText]);
    }
  } catch (error) {
    console.error("Failed to fetch AI-generated question:", error);
  }
};

// API call to create a new question and answer in the backend
export const createQuestion = async (
  id,
  currentQuestion,
  userAnswer,
  aiAnswer,
  feedback,
  score
) => {
  try {
    await axios.post("/api/questions", {
      interviewId: id,
      text: currentQuestion,
      userAnswer,
      aiAnswer,
      feedback,
      score,
    });
  } catch (error) {
    console.error("Failed to create question:", error);
  }
};

// Function to fetch AI-generated feedback and score based on user's answer
export const fetchAIImprovedAnswer = async (answerText) => {
  try {
    const feedbackResult = await chatSession.sendMessage(
      `Evaluate the following answer: "${answerText}" and provide constructive feedback along with an improved answer and a score out of 100 based on its quality.`
    );
    const feedbackText = await feedbackResult.response.text();
    return feedbackText; // Process feedbackText as per requirements
  } catch (error) {
    console.error("Failed to fetch AI feedback:", error);
    return { improvedAnswer: "", feedback: "", score: 0 };
  }
};
