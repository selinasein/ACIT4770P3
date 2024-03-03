"use client";

import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function BrowseItem() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRadius, setSelectedRadius] = useState(0);

  const menuItems = [
    {
      name: "Category",
      content: [
        {
          name: "Agricultural Equipment and Supplies(6)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=10&advanced=true",
        },
        {
          name: "Aircraft and Aircraft Parts(15)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=20&advanced=true",
        },
        {
          name: "Artifacts, Jewelry and Exotic Collectibles(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=130&advanced=true",
        },
        {
          name: "Boats and Marine Equipment(11)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=40&advanced=true",
        },
        {
          name: "Communication Equipment(11)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=50&advanced=true",
        },
        {
          name: "Computer Equipment and Accessories(50)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=60&advanced=true",
        },
        {
          name: "Construction Equipment(18)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=70&advanced=true",
        },
        {
          name: "Electrical and Electronic Equipment and Components(14)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=80&advanced=true",
        },
        {
          name: "Fire Trucks and Fire Fighting Equipment(1)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=90&advanced=true",
        },
        {
          name: "Furniture(159)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=100&advanced=true",
        },
        {
          name: "Hand Tools & Shop Equipment(11)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=110&advanced=true",
        },
        {
          name: "Household/Personal(28)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=120&advanced=true",
        },
        {
          name: "Industrial Machinery(28)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=140&advanced=true",
        },
        {
          name: "Lab Equipment(39)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=150&advanced=true",
        },
        {
          name: "Medical, Dental, and Veterinary Equipment and Supplies(44)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=160&advanced=true",
        },
        {
          name: "Miscellaneous(121)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=170&advanced=true",
        },
        {
          name: "Motorcycles & Bicycles(3)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=180&advanced=true",
        },
        {
          name: "Office Equipment and Supplies(8)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=190&advanced=true",
        },
        {
          name: "Photographic Equipment(5)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=200&advanced=true",
        },
        {
          name: "Trailers, Tractors and Manufactured Housing(30)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&categoryCodes=210&advanced=true",
        },
      ],
    },
    {
      name: "Location",
      content: [
        {
          name: "Albama(20)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=AL&advanced=true",
        },
        {
          name: "Alaska(13)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=AK&advanced=true",
        },
        {
          name: "American Samoa(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=AS&advanced=true",
        },
        {
          name: "Arizona(12)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=AZ&advanced=true",
        },
        {
          name: "Arkansas(3)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=AR&advanced=true",
        },
        {
          name: "California(35)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=CA&advanced=true",
        },
        {
          name: "Colorado(17)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=CO&advanced=true",
        },
        {
          name: "Connecticut(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=CT&advanced=true",
        },
        {
          name: "Delaware(1)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=DE&advanced=true",
        },
        {
          name: "District of Columbia(4)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=DC&advanced=true",
        },
        {
          name: "Florida(18)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=FL&advanced=true",
        },
        {
          name: "Georgia(41)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=GA&advanced=true",
        },
        {
          name: "Guam(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=GU&advanced=true",
        },
        {
          name: "Hawaii(2)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=HI&advanced=true",
        },
        {
          name: "Idaho(1)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=ID&advanced=true",
        },
        {
          name: "Illinois(56)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=IL&advanced=true",
        },
        {
          name: "Indiana(12)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=IN&advanced=true",
        },
        {
          name: "Iowa(21)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=IA&advanced=true",
        },
        {
          name: "Kansas(9)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=KS&advanced=true",
        },
        {
          name: "Kentucky(23)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=KY&advanced=true",
        },
        {
          name: "Louisiana(85)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=LA&advanced=true",
        },
        {
          name: "Maine(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=ME&advanced=true",
        },
        {
          name: "Maryland(41)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MD&advanced=true",
        },
        {
          name: "Massachusetts(25)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MA&advanced=true",
        },
        {
          name: "Michigan(2)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MI&advanced=true",
        },
        {
          name: "Minnesota(5)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MN&advanced=true",
        },
        {
          name: "Mississippi(17)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MS&advanced=true",
        },
        {
          name: "Missouri(32)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MO&advanced=true",
        },
        {
          name: "Montana(15)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MT&advanced=true",
        },
        {
          name: "Nebraska(11)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NE&advanced=true",
        },
        {
          name: "Nevada(3)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NV&advanced=true",
        },
        {
          name: "New Hampshire(10)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NH&advanced=true",
        },
        {
          name: "New Jersey(6)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NJ&advanced=true",
        },
        {
          name: "New Mexico(6)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NM&advanced=true",
        },
        {
          name: "New York(17)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NY&advanced=true",
        },
        {
          name: "North Carolina(8)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=NC&advanced=true",
        },
        {
          name: "North Dakota(8)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=ND&advanced=true",
        },
        {
          name: "Northern Marianas(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=MP&advanced=true",
        },
        {
          name: "Ohio(7)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=OH&advanced=true",
        },
        {
          name: "Oklahoma(36)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=OK&advanced=true",
        },
        {
          name: "Oregon(9)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=OR&advanced=true",
        },
        {
          name: "Pennsylvania(3)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=PA&advanced=true",
        },
        {
          name: "Puerto Rico(3)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=PR&advanced=true",
        },
        {
          name: "Rhode Island(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=RI&advanced=true",
        },
        {
          name: "South Carolina(27)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=SC&advanced=true",
        },
        {
          name: "South Dakota(10)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=SD&advanced=true",
        },
        {
          name: "Tennessee(6)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=TN&advanced=true",
        },
        {
          name: "Texas(44)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=TX&advanced=true",
        },
        {
          name: "Utah(11)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=UT&advanced=true",
        },
        {
          name: "Vermont(2)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=VT&advanced=true",
        },
        {
          name: "Virgin Islands(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=VI&advanced=true",
        },
        {
          name: "Virginia(17)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=VA&advanced=true",
        },
        {
          name: "Washington(2)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=WA&advanced=true",
        },
        {
          name: "West Virginia(0)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=WV&advanced=true",
        },
        {
          name: "Wisconsin(7)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=WI&advanced=true",
        },
        {
          name: "Wyoming(9)",
          link: "https://gsaauctions.gov/auctions/auctions-list?page=1&size=50&searchType=ALL_WORDS&status=active&states=WY&advanced=true",
        },
      ],
    },
    { name: "Radius", content: "" },
  ];

  const radius = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 30, value: 30 },
    { label: 40, value: 40 },
    { label: 50, value: 50 },
    { label: 60, value: 60 },
    { label: 70, value: 70 },
    { label: 80, value: 80 },
    { label: 90, value: 90 },
    { label: 100, value: 100 },
    { label: 150, value: 150 },
    { label: 200, value: 200 },
    { label: 250, value: 250 },
    { label: 300, value: 300 },
    { label: 350, value: 350 },
    { label: 400, value: 400 },
    { label: 450, value: 450 },
    { label: 500, value: 500 },
  ];

  const renderContent = () => {
    if (selectedItem !== null) {
      const itemContent = menuItems[selectedItem].content;

      return (
        <div className="flex justify-center items-center mx-10 my-5">
          <Card className="w-full p-5">
            <CardBody>
              {Array.isArray(itemContent) && itemContent.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {itemContent.map((content, index) => (
                    <div key={index} className="break-words">
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900"
                      >
                        {content.name}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="gap-5 p-3 ">
                  <div className="mb-5">
                    <p className="font-bold">Search For</p>
                    <div
                      key="radius"
                      className="flex w-full md:w-2/4 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                    >
                      <Input
                        size="md"
                        type="text"
                        label="Lot Name or Description"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="font-bold">New Zip Code</p>
                    <div
                      key="radius"
                      className="flex w-full md:w-2/4 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                    >
                      <Input size="md" type="number" label="e.g. 75063" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="font-bold">Radius</p>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select
                        variant="flat"
                        label="Select Radius"
                        className="w-full md:w-2/4"
                      >
                        {radius.map((animal) => (
                          <SelectItem key={animal.value} value={animal.value}>
                            {animal.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <Button
                    className="w-1/5"
                    style={{
                      backgroundColor: "#1a4480",
                      borderColor: "#1a4480",
                      color: "#fff",
                    }}
                  >
                    Search
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <ul
        className="menu menu-horizontal rounded-box"
        style={{ backgroundColor: "#3b6ba5" }}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                setSelectedItem(index); // Set the clicked item as selected
              }}
              style={{
                color: selectedItem === index ? "#000080" : "white", // Dark navy if item is selected, white otherwise
                cursor: "pointer",
                textDecoration: "none", // Optional: removes the underline from links
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {renderContent()}
    </>
  );
}
