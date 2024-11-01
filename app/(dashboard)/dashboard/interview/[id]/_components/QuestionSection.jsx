"use client";
import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import { useUser } from "@clerk/nextjs";
import useSpeechToText from "react-hook-speech-to-text";

const QuestionSection = ({ questions }) => {
  const { user } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    questions.map(() => "") // Initialize with an empty string for each question
  );

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  const handleStartRecording = () => {
    startSpeechToText();
  };

  const handleStopRecording = () => {
    stopSpeechToText();
    const finalTranscript = results
      .map((result) => result.transcript)
      .join(" ");

    // Update userAnswers with the answer for the current question
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = finalTranscript;
      console.log("Updated Answers Array:", updatedAnswers); // Log to verify answers are saved
      return updatedAnswers;
    });

    // Move to the next question after a delay
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 1000);
  };

  return (
    <div className="flex flex-col space-y-4 bg-gray-900 p-6 h-full w-full rounded-lg overflow-y-scroll">
      {currentQuestionIndex < questions.length ? (
        <div>
          <MessageBubble
            message={questions[currentQuestionIndex].aiQuestion}
            time={new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            isUser={false}
            isAI={true}
            aiImage={"/ai-profile.jpeg"}
          />

          <div className="flex flex-col items-start">
            {userAnswers[currentQuestionIndex] ? (
              <MessageBubble
                message={userAnswers[currentQuestionIndex]}
                time={new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                isUser={true}
                isAI={false}
                userImage={user?.imageUrl}
              />
            ) : (
              <p className="text-gray-400 italic">
                Your answer will appear here...
              </p>
            )}
            <button
              onClick={isRecording ? handleStopRecording : handleStartRecording}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
          </div>
          {interimResult && <p className="text-gray-300">{interimResult}</p>}
        </div>
      ) : (
        <p className="text-green-400">
          Interview complete! Thank you for your responses.
        </p>
      )}
    </div>
  );
};

export default QuestionSection;
