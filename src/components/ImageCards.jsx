"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import ImageContainer from "./ImageContainer";

const itemsData = [
  {
    title: "2004 HMMWV",
    images: [
      { src: "/images/option1/1.JPG", alt: "Description of Item 1 Image 1" },
      { src: "/images/option1/2.JPG", alt: "Description of Item 1 Image 2" },
      { src: "/images/option1/3.JPG", alt: "Description of Item 1 Image 3" },
      { src: "/images/option1/4.JPG", alt: "Description of Item 1 Image 4" },
    ],
    price: "$7,520",
    Bidder: 6,
    link: "https://gsaauctions.gov/auctions/preview/274553",
  },
  {
    title: "2017 RAM 2500",
    images: [
      { src: "/images/option2/1.jpg", alt: "Description of Item 2 Image 1" },
      { src: "/images/option2/2.jpg", alt: "Description of Item 2 Image 2" },
      { src: "/images/option2/3.jpg", alt: "Description of Item 2 Image 3" },
    ],
    price: "$8,000",
    Bidder: 0,
    link: "https://gsaauctions.gov/auctions/preview/274788",
  },
  {
    title: "25 Foot Barrier Boat",
    images: [
      { src: "/images/option3/1.jpg", alt: "Description of Item 3 Image 1" },
      { src: "/images/option3/2.jpg", alt: "Description of Item 3 Image 2" },
      { src: "/images/option3/3.jpg", alt: "Description of Item 3 Image 3" },
      { src: "/images/option3/4.jpg", alt: "Description of Item 3 Image 4" },
    ],
    price: "$17,010",
    Bidder: 2,
    link: "https://gsaauctions.gov/auctions/preview/274065",
  },
  {
    title: "Compact Abrasive Cutting Machine",
    images: [
      { src: "/images/option4/1.jpg", alt: "Description of Image 1" },
      { src: "/images/option4/2.jpg", alt: "Description of Image 2" },
      { src: "/images/option4/3.jpg", alt: "Description of Image 3" },
    ],
    price: "$250",
    Bidder: 0,
    link: "https://gsaauctions.gov/auctions/preview/274593",
  },
  {
    title: "1991 White Diesel Autocar Crane Truck",
    images: [
      { src: "/images/option5/1.JPG", alt: "Description of Option 5 Image 1" },
      { src: "/images/option5/2.JPG", alt: "Description of Option 5 Image 2" },
      { src: "/images/option5/3.JPG", alt: "Description of Option 5 Image 3" },
    ],
    price: "$700",
    Bidder: 3,
    link: "https://gsaauctions.gov/auctions/preview/275147",
  },
  {
    title: "Conference Table",
    images: [
      { src: "/images/option6/1.jpg", alt: "Description of Option 6 Image 1" },
      { src: "/images/option6/2.jpg", alt: "Description of Option 6 Image 2" },
    ],
    price: "$40",
    Bidder: 0,
    link: "https://gsaauctions.gov/auctions/preview/274414",
  },
  {
    title: "Executive Reception Guest Chairs",
    images: [
      { src: "/images/option7/1.jpg", alt: "Description of Option 7 Image 1" },
      { src: "/images/option7/2.jpg", alt: "Description of Option 7 Image 2" },
    ],
    price: "$10",
    Bidder: 0,
    link: "https://gsaauctions.gov/auctions/preview/274420",
  },
  {
    title: "EUROCOPTER AS350",
    images: [
      { src: "/images/option8/1.jpg", alt: "Description of Option 8 Image 1" },
      { src: "/images/option8/2.jpg", alt: "Description of Option 8 Image 2" },
      { src: "/images/option8/3.jpg", alt: "Description of Option 8 Image 3" },
    ],
    price: "$201,000",
    Bidder: 4,
    link: "https://gsaauctions.gov/auctions/preview/273943",
  },
];

export default function App() {
  return (
    <div className="gap-2 grid w-full h-auto m-1 md:m-3 grid-cols-2 sm:grid-cols-4">
      {itemsData.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <a href={item.link}>
            <CardBody
              className="overflow-visible p-0"
              style={{ width: "400px", height: "240px" }}
            >
              <ImageContainer images={item.images} />
            </CardBody>
          </a>

          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
