"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "@mui/material";
import MobileLayout from "./MobileLayout";
import TabletLayout from "./TabletLayout";
import DesktopLayout from "./DesktopLayout";

// Utility debounce function (defined outside the component)
const debounce = (func: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

const ResponsivePage = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Memoized resize handler
  const handleResize = useCallback(
    debounce(() => {
      const mobile = window.matchMedia(theme.breakpoints.down("sm")).matches;
      const tablet = window.matchMedia(theme.breakpoints.between("sm", "lg")).matches;

      setIsMobile(mobile);
      setIsTablet(tablet);
    }, 200), // Adjust the debounce delay here
    [theme] // Dependencies for useCallback
  );

  // Initialize and listen to resize events
  useEffect(() => {
    setIsMounted(true); // Mount the component

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // Add handleResize as a dependency

  return (
    <>
      {isMobile && <MobileLayout isMounted={isMounted} />}
      {isTablet && <TabletLayout isMounted={isMounted} />}
      {!isMobile && !isTablet && <DesktopLayout isMounted={isMounted} />}
    </>
  );
};

export default ResponsivePage;
