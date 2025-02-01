"use client";
import { useState, useEffect } from "react";

const Carousel = () => {
  const images = ["/g1.jpg", "/g2.webp", "/g3.jpg", "/g4.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function untuk berpindah gambar
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Set interval untuk auto-scroll saat tidak hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextImage, 3000); // Set interval 3 detik untuk berpindah gambar
      return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount atau saat hover
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
