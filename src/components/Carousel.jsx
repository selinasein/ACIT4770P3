"use client";

import React, { useState } from "react";

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  console.log(images);
  return (
    <>
      <div className="carousel w-full rounded-xl relative">
        {images.map((image, index) => (
          <a href={image.link} key={index}>
            <div
              id={`item${index + 1}`}
              className={`carousel-item w-full ${
                activeIndex === index ? "" : "hidden"
              }`}
            >
              <img
                src={image.src}
                className="w-full h-96 object-cover object-center"
                alt={image.alt}
              />
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images.map((_, index) => (
          <a
            key={index}
            href={`#item${index + 1}`}
            className={`btn btn-xs ${
              activeIndex === index ? "btn-active" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
}
