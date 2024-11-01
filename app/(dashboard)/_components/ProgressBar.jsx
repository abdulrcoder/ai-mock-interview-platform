"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const ProgressBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.done();

    return () => {
      NProgress.done(); // Ensure progress bar stops on component unmount
    };
  }, [pathname]); // Track pathname changes

  return null;
};

export default ProgressBar;
