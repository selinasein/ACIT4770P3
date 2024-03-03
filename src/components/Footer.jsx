import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-gray-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a href="mailto:gsaauctionshelp@gsa.gov" className="link link-hover">
            GSA Auctions Helpdesk
          </a>
          <a
            href="https://www.gsa.gov/website-information/accessibility-statement"
            className="link link-hover"
          >
            Accessibility Support
          </a>
          <a href="https://www.usa.gov/t" className="link link-hover">
            U.S. government information and services
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal Compliance</h6>
          <a
            href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
            className="link link-hover"
          >
            FOIA (Freedom of Information Act)
          </a>
          <a
            href="https://www.gsa.gov/website-information/website-policies#privacy"
            className="link link-hover"
          >
            GSA Privacy Policy
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Specific to Auctions</h6>
          <a
            href="https://gsaauctions.gov/auctions/privacy"
            className="link link-hover"
          >
            GSA Auctions Privacy Policy
          </a>
        </nav>
      </footer>
      <Divider />
      <footer className="footer px-10 py-4 border-t bg-gray-200 text-base-content border-base-300">
        <a href="https://www.gsa.gov/about-us" className="flex items-center">
          <img
            src="/icons/logo.png"
            alt="Dotori TV"
            className="h-20 w-auto mr-2" // Added mr-2 for a little space between the logo and the text
          />
          <div>
            <p className="mb-4">About Us</p>
            <p>
              For further inquiry, please call us at{" "}
              <strong className="font-bold">(866)333-7472</strong>
            </p>
          </div>
        </a>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/gsaauctions">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer p-5 bg-gray-200">
        <p>Copyright © 2001 U.S. General Services Administration</p>
      </footer>
    </>
  );
}
