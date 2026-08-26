"use client";

import { useState, useEffect } from "react";
import MobileNavbar from "../pages/mobileNavbar"; // Import Mobile Navbar

const MobileNavbarWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.2; // 20% of screen height
      setShowMobileNavbar(scrollPosition > threshold);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isMobile && showMobileNavbar ? <MobileNavbar /> : null;
};

export default MobileNavbarWrapper;
