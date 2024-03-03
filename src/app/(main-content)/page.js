import Searchbox from "@/components/Searchbox";
import React from "react";
import Carousel from "@/components/Carousel";
import ImageCards from "@/components/ImageCards";
import { Chip } from "@nextui-org/react";
import BrowseItem from "@/components/BrowseItem";

const newAuctions = [
  {
    src: "/images/new/1.jpg",
    alt: "Description of Image 1",
    link: "https://gsaauctions.gov/auctions/preview/273744",
  },
  {
    src: "/images/new/2.jpg",
    alt: "Description of Image 2",
    link: "https://gsaauctions.gov/auctions/preview/273745",
  },
  {
    src: "/images/new/3.jpg",
    alt: "Description of Image 3",
    link: "https://gsaauctions.gov/auctions/preview/273752",
  },
  {
    src: "/images/new/4.jpg",
    alt: "Description of Image 4",
    link: "https://gsaauctions.gov/auctions/preview/273754",
  },
];

const closingAuctions = [
  {
    src: "/images/closing/2.jpg",
    alt: "Description of Image 2",
    link: "https://gsaauctions.gov/auctions/preview/274527",
  },
  {
    src: "/images/closing/3.jpg",
    alt: "Description of Image 3",
    link: "https://gsaauctions.gov/auctions/preview/275217",
  },
];

const activeAuctions = [
  {
    src: "/images/active/1.jpg",
    alt: "Description of Image 1",
    link: "https://gsaauctions.gov/auctions/preview/274618",
  },

  {
    src: "/images/active/3.jpg",
    alt: "Description of Image 3",
    link: "https://gsaauctions.gov/auctions/preview/274619",
  },

  {
    src: "/images/active/5.jpg",
    alt: "Description of Image 4",
    link: "https://gsaauctions.gov/auctions/preview/274547",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col m-5 justify-center items-center">
      <div className="flex flex-col gap-1 w-full">
        <Searchbox />
      </div>
      <div className="m-5">
        <h1 className="text-2xl md:text-4xl mt-5 md:mt-3 mb-10 font-semibold text-[#1a4480] divider">
          Featured Items
        </h1>
        <ImageCards />
      </div>
      <div className="divider">
        <div className="bg-gray-200 rounded-xl flex justify-end items-center w-auto h-10 px-5 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            />
          </svg>

          <p>Click the image to see the details</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3 md:px-10 mb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex m-5 items-center">
            <h2 className="text-2xl font-semibold text-[#1a4480]">New Today</h2>
            <Chip
              style={{ backgroundColor: "#1a4480", color: "white" }}
              className="ml-2 animate-pulse"
            >
              New
            </Chip>
          </div>

          <Carousel images={newAuctions} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col m-5 items-center">
            <h2 className="text-2xl font-semibold text-[#1a4480]">
              Closing Today
            </h2>
          </div>
          <Carousel images={closingAuctions} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col m-5 items-center">
            <h2 className="text-2xl font-semibold text-[#1a4480]">
              Active Auctions
            </h2>
          </div>
          <Carousel images={activeAuctions} />
        </div>
      </div>

      <div className="bg-slate-100 w-screen p-10">
        <div className="justify-center items-center text-center">
          <h1 className="text-2xl md:text-4xl mt-5 md:mt- mb-5 font-semibold text-[#1a4480]">
            Browse Items
          </h1>
          <BrowseItem />
        </div>
      </div>
    </main>
  );
}
