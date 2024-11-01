import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
