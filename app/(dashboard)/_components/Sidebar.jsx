"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaClipboardList,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard, MdInsights, MdSettings } from "react-icons/md";

const menuItems = [
  {
    section: "Main Menu",
    items: [
      { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
      {
        name: "Interview",
        icon: <FaClipboardList />,
        path: "/dashboard/interview",
      },
      { name: "Insight", icon: <MdInsights />, path: "/dashboard/insight" },
    ],
  },
  {
    section: "General",
    items: [
      { name: "FAQ", icon: <FaQuestionCircle />, path: "/dashboard/faq" },
      { name: "Setting", icon: <MdSettings />, path: "/dashboard/settings" },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-gradient-to-b hidden md:flex from-black to-gray-900 w-64 fixed left-0 top-0 h-screen  text-white  flex-col items-center py-6">
      {/* Logo */}
      <div className="text-2xl font-semibold text-[#2563EB] mb-8">
        <div className="flex items-center space-x-2">
          <span>InterviewAI</span>
          <span className="text-3xl">🎙️</span> {/* Placeholder for logo icon */}
        </div>
      </div>

      {/* Menu Sections */}
      {menuItems.map((section, index) => (
        <div key={index} className="w-full px-4 mt-8">
          <h2 className="text-gray-500 text-sm mb-4 uppercase">
            {section.section}
          </h2>
          <ul className="space-y-4">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} passHref>
                  <div
                    className={`flex items-center transition-all space-x-2 text-lg px-4 py-2 rounded cursor-pointer ${
                      pathname === item.path
                        ? "bg-[#2563EB] text-white"
                        : "hover:bg-[#2563EB] text-white"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Log Out Button */}
      <div className="w-full px-4 mt-auto mb-4">
        <button className="flex items-center space-x-2 text-lg text-gray-300 hover:text-[#2563EB] cursor-pointer w-full">
          <FaSignOutAlt />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
