import { Inter } from "next/font/google";
import "@/app/globals.css";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const content = (
    <PopoverContent>
      <div className="px-4 py-6 mx-auto max-w-[64rem] bg-transparent text-base overflow-hidden pt-1 pr-4 pb-4 pl-2 w-full">
        <div className="m-3 grid md:grid-cols-2 gap-5">
          <div class="flex items-start max-w-[64rem]">
            <img
              class="w-16 h-16 mr-4"
              src="/icons/courthouse.png"
              alt="Courthouse"
            />
            <div className="flex-grow flex-shrink">
              <p>
                <strong>The .gov means it's official.</strong>
                <br />
                "Federal government websites often end in .gov or .mil. Before
                sharing sensitive information, make sure you're on a federal
                government site."
              </p>
            </div>
          </div>
          <div class="flex items-start max-w-[64rem]">
            <img
              class="w-16 h-16 mr-4"
              src="/icons/security.png"
              alt="Courthouse"
            />
            <div className="flex-grow flex-shrink">
              <p>
                <strong>The site is secure.</strong>
                <br />
                "The <strong>https://</strong> ensures that you are connecting
                to the official website and that any information you provide is
                encrypted and transmitted securely."
              </p>
            </div>
          </div>
        </div>
      </div>
    </PopoverContent>
  );
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white	h-screen`}>
        <div className="mx-auto pl-4 flex p-2 flex-wrap items-start pr-0 bg-[#f0f0f0] text-xs md:text-sm gap-4">
          <span className="flex items-center pt-2">
            An <span className="font-bold mx-1">official</span> website of the
            United States government
          </span>
          <Popover
            key="success"
            placement="top"
            backdrop="blur"
            className="flex items-center md:flex-row"
          >
            <PopoverTrigger>
              <Button className="capitalize h-8 md:py-1 text-xs bg-green-200 text-black hover:bg-green-300 focus:ring-green-500">
                How to know
              </Button>
            </PopoverTrigger>
            {content}
          </Popover>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
