"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import { FaBell } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const Navbar = () => {
  const { user } = useUser();
  const userName = user?.fullName;

  return (
    <nav className="flex items-center justify-between p-4 bg-black shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <span className="font-bold text-[#2563EB] text-xl tracking-wide">
            Ace Your Interview with AI
          </span>
          <span className="text-sm text-gray-300">Powered by Advanced AI</span>
        </div>
      </div>

      {/* Right Section: Notifications and User Profile */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">
          <FaBell size={20} />
        </button>
        <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-white">{userName}</span>
          <UserButton />
        </div>
      </div>
      <ProgressBar />
    </nav>
  );
};

export default Navbar;
