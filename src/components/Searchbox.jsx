"use client";
import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import { Button } from "@nextui-org/react";

export default function Searchbox() {
  const [groupSelected, setGroupSelected] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const clearSearch = () => {
    setSearchValue(""); // Clear the input value state
  };

  return (
    <div className="mx-auto gap-3 flex flex-col sm:w-90 md:w-full md:p-5">
      <CheckboxGroup
        className="gap-1"
        label="Select Search Options"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        <CustomCheckbox value="New Today">New Today</CustomCheckbox>
        <CustomCheckbox value="Closing Today">Closing Today</CustomCheckbox>
        <CustomCheckbox value="Active Auctions">Active Auctions</CustomCheckbox>
        <CustomCheckbox value="Preview Auctions">
          Preview Auctions
        </CustomCheckbox>
        <CustomCheckbox value="Closed Auctions">Closed Auctions</CustomCheckbox>
      </CheckboxGroup>
      <form className="relative w-full">
        <div className="relative h-14 items-center rounded-12 border rounded-2xl backdrop-blur-[3.75rem] rounded-16 flex px-4 overflow-hidden bg-theme-float border-transparent cursor-text bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            placeholder="Search by Lot Name or Description"
            className="h-full flex-1 min-w-0 typo-body focus:outline-none bg-transparent text-black placeholder-black"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </div>
      </form>
      <div className="flex gap-3 justify-end">
        <a href="https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&advanced=false">
          <Button
            style={{
              backgroundColor: "#1a4480",
              borderColor: "#1a4480",
              color: "#fff",
            }}
          >
            Search
          </Button>
        </a>
        <Button
          onClick={clearSearch} // Attach the clear function to onClick
          style={{
            backgroundColor: "#1a4480",
            borderColor: "#1a4480",
            color: "#fff",
          }}
        >
          Clear All
        </Button>
        <a href="https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&advanced=true">
          <Button color="primary" variant="faded" style={{ color: "#1a4480" }}>
            Advanced Search
          </Button>
        </a>
      </div>
    </div>
  );
}
