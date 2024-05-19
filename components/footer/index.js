import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-center text-neutral-600 lg:text-left">
      {/* Main container div */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-3">
          {/* <!-- Climate-Chronicles section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Climate Chronicles
            </h6>
            <p>
              Explore &apos;The Climate Chronicles&apos; for impactful stories
              on environmental origins and effects. Discover tales of change,
              resilience, and innovation in our fight for a sustainable planet.
            </p>
          </div>
          {/* <!-- Pages section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Pages
            </h6>
            <div className="flex flex-row flex-wrap justify-center md:flex-col md:items-start gap-x-5">
              <Link href="/">
                <p className="text-neutral-600 dark:text-neutral-200 mb-4">
                  Home
                </p>
              </Link>
              <Link href="/status">
                <p className="text-neutral-600 dark:text-neutral-200 mb-4">
                  Weather
                </p>
              </Link>
              <Link href="/aboutus">
                <p className="text-neutral-600 dark:text-neutral-200 mb-4">
                  About Us
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-neutral-600 dark:text-neutral-200 mb-4">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              climatechrons@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          Climate Chronicles
        </a>
      </div>
    </footer>
  );
}
