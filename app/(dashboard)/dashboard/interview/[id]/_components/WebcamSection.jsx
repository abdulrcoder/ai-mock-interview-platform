"use client";
import React, { useState } from "react";
import { FaVideo, FaMicrophoneSlash } from "react-icons/fa";
import Webcam from "react-webcam";

const WebcamSection = () => {
  const [isWebcamEnabled, setIsWebcamEnabled] = useState(false);

  const handleWebcamToggle = () => {
    setIsWebcamEnabled(!isWebcamEnabled);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-4 w-full sm:w-3/4 md:w-1/2 gap-4">
      {/* Laptop Frame */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-video border-8 border-gray-700 rounded-t-2xl rounded-lg overflow-hidden shadow-xl bg-gray-900">
        {/* Top Bar for the Laptop Screen */}
        <div className="absolute top-0 left-0 right-0 h-4 sm:h-5 bg-gray-700 flex items-center justify-center">
          {/* Webcam Indicator Light */}
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        </div>

        {/* Laptop Screen */}
        <div className="flex flex-col items-center justify-center h-full bg-gray-900">
          {isWebcamEnabled ? (
            <Webcam className="w-full h-full object-cover" />
          ) : (
            <>
              <FaMicrophoneSlash
                size={40}
                className="text-red-400 mb-2 sm:mb-4"
              />
              <p className="text-base sm:text-lg text-white">
                🚫 Webcam Disabled
              </p>
            </>
          )}
        </div>
      </div>

      <button
        onClick={handleWebcamToggle}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold w-full sm:w-auto transition-all duration-200"
      >
        {isWebcamEnabled ? "🔌 Disable Webcam" : "🔋 Enable Webcam"}
      </button>
    </div>
  );
};

export default WebcamSection;
