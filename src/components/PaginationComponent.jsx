"use client";

import React, { useState } from "react";

export default function PaginationComponent({ images }) {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  // Calculate the indices of the first and last image to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="images-container">
        {currentImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(images.length / imagesPerPage) },
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
