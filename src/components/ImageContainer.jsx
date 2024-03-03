"use client";
import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";

export default function ImageContainer({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Switch image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  const fixedWidth = "240px";

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        shadow="sm"
        radius="lg"
        alt={images[currentIndex].alt || "Image"}
        src={images[currentIndex].src}
        className="object-fill"
        css={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
