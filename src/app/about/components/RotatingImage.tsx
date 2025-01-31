"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/profile_pic.jpg",
  "/home.jpg",
  "/curious_mockingbird_pic.jpg",
];

const RotatingImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // Control opacity transition

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Wait for fade-out to complete (500ms)

      setTimeout(() => {
        setFade(true); // Fade back in only AFTER image source updates
      }, 600); // Wait slightly longer (100ms buffer) to ensure smooth transition

    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-full relative">
      <Image
        className={`rounded-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        src={images[currentImageIndex]}
        width={300}
        height={300}
        alt="Profile"
        priority // Ensures images load fast
      />
    </div>
  );
};

export default RotatingImage;
