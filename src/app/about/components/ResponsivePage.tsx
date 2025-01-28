"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import MobileLayout from "./MobileLayout";
import TabletLayout from "./TabletLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsivePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMobile && <MobileLayout isMounted={isMounted} />}
      {isTablet && <TabletLayout isMounted={isMounted} />}
      {!isMobile && !isTablet && <DesktopLayout isMounted={isMounted} />}
    </>
  );
};

export default ResponsivePage;