import React from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="md:ml-64 flex flex-col  w-full">
        <Navbar /> {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
