"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component from next/image

const Carousel = () => {
  const images = ["/g1.jpg", "/g2.webp", "/g3.jpg", "/g4.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to move to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  

  // Set interval for auto-scroll when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextImage, 3000); // Set interval of 3 seconds to change images
      return () => clearInterval(interval); // Clean up the interval when component unmounts or when hovered
    }
  }, [isHovered]);

  return (
    <div className="grid py-8 items-center justify-center ">
      <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)} // Stop auto-scroll when hovered
          onMouseLeave={() => setIsHovered(false)} // Resume auto-scroll when not hovered
        >
          {/* Image slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Slide images based on the index
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
