"use client";
import Link from "next/link";
import { Link as NextUiLink } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import React from "react";
import AsideNav from "./AsideNav";

const InformationHub = [
  {
    label: "Terms and Conditions",
    href: "https://gsaauctions.gov/auctions/terms-conditions",
  },
  {
    label: "User Guide",
    href: "https://gsaauctions.gov/auctions/auction-user-guide",
  },
  {
    label: "Payment Options",
    href: "https://gsaauctions.gov/auctions/payment-options",
  },
  { label: "Help Desk", href: "https://gsaauctions.gov/auctions/help-desk" },
  { label: "FAQs", href: "https://gsaauctions.gov/auctions/auction-faq" },
  {
    label: "Subscribe",
    href: "https://service.govdelivery.com/accounts/USGSAAUCTIONS/subscriber/new",
  },
];

const Navigation = [
  { label: "Home", href: "/" },
  { label: "GSA Real Estate", href: "https://realestatesales.gov" },
  { label: "GSA Fleet Vehicle", href: "https://autoauctions.gsa.gov" },
  { label: "Login", href: "https://gsaauctions.gov/auctions/login" },
  { label: "Register", href: "https://gsaauctions.gov/auctions/register" },
];

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <header className="top-0 left-0 z-10 flex flex-row items-center justify-between px-4 py-3 w-full h-40 relative">
        <div className="flex flex-none justify-start">
          <Link
            href="/"
            className="flex items-center left-1/2 -translate-x-1/2 relative gap-2 md:mr-32"
          >
            <img
              src="/icons/logo.png"
              alt="Dotori TV"
              className="h-20 w-auto"
            />
            <div className="pt-8 flex">
              <p className="text-red-800 text-2xl pb-1 font-normal ">
                Auctions
              </p>
              <sup className="text-xs text-red-800 font-bold">SM</sup>
            </div>
          </Link>
        </div>
        <div className="h-full w-full relative">
          <ul className="hidden lg:flex absolute bottom-0 w-full mb-1 justify-end gap-3">
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://gsaauctions.gov/auctions/terms-conditions"
              >
                Terms and Conditions
              </NextUiLink>
            </li>
            <span className="text-gray-600">|</span>
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://gsaauctions.gov/auctions/auction-user-guide"
              >
                User Guide
              </NextUiLink>
            </li>
            <span className="text-gray-600">|</span>
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://gsaauctions.gov/auctions/payment-options"
              >
                Payment Options
              </NextUiLink>
            </li>
            <span className="text-gray-600">|</span>
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://gsaauctions.gov/auctions/help-desk"
              >
                Help Desk
              </NextUiLink>
            </li>
            <span className="text-gray-600">|</span>
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://gsaauctions.gov/auctions/auction-faq"
              >
                FAQs
              </NextUiLink>
            </li>
            <span className="text-gray-600">|</span>
            <li>
              <NextUiLink
                color="primary"
                style={{ color: "#1a4480", fontSize: "0.9rem" }} // Adjusted font size
                href="https://service.govdelivery.com/accounts/USGSAAUCTIONS/subscriber/new"
              >
                Subscribe
              </NextUiLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <div className="absolute top-2 right-2">
            <AsideNav name="Information Hub" menuItems={InformationHub} />
          </div>
          <div className="absolute top-14 right-2">
            <AsideNav name="Navigation" menuItems={Navigation} />
          </div>
        </div>
      </header>

      <nav className="bg-gray-200 border-t border-b border-gray-300">
        <div className="hidden lg:flex justify-between items-center mx-20">
          <div className="h-12 flex items-center">
            <a href="/" className="flex items-center pr-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                role="img"
                aria-hidden="true"
                aria-label="home"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
              Home
            </a>
            <Button
              onPress={onOpen}
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0" // Corrected from stroke-width to strokeWidth for JSX syntax
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="navbar-icon" // Corrected from class to className for JSX syntax
                aria-label="GSA Real Estate"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M1 22h4V11H1v11zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2zM14 1.5l-7 5V9h2l8.14 3.26C18.26 12.71 19 13.79 19 15h2V6.5l-7-5zm-.5 8.5h-1V9h1v1zm0-2h-1V7h1v1zm2 2h-1V9h1v1zm0-2h-1V7h1v1z"></path>
              </svg>
              GSA Real Estate
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Confirmation
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        You are leaving www.gsaauctions.gov. To bid on auctions
                        available on realestatesales.gov (GSA secured website),
                        login using your GSA Auctions account information.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Okay
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            <Button
              onPress={onOpen}
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                aria-label="Truck Icon"
                role="graphics-symbol"
                aria-hidden="true"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
              </svg>
              GSA Fleet Vehicle
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Confirmation
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        You are leaving www.gsaauctions.gov. To bid on auctions
                        available on realestatesales.gov (GSA secured website),
                        login using your GSA Auctions account information.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Okay
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>

          <div className="h-12 flex items-center">
            <a
              href="https://gsaauctions.gov/auctions/login"
              className="flex items-center pr-10"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                role="img"
                aria-hidden="true"
                aria-label="login"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
              </svg>
              Login
            </a>
            <a
              href="https://gsaauctions.gov/auctions/register"
              className="flex items-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                role="img"
                aria-hidden="true"
                aria-label="register"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
