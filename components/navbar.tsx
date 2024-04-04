/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { GetAQuote } from "./get-a-quote";

const navLinks = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Request Quote",
    href: "#services",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
export const Navbar = () => {
  return (
    // <section className="w-full px-8 text-gray-700 ">
    //   <div className="container flex   items-center justify-between py-5 mx-auto flex-row ">
    //     <div className="relative flex w-full items-center justify-between flex-row">
    //       <a
    //         href="#_"
    //         className="flex items-center  font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
    //       >
    //         <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
    //           Logo
    //           <span className="text-indigo-600" data-primary="indigo-600">
    //             .
    //           </span>
    //         </span>
    //       </a>
    //       <nav className=" hidden md:flex w-10/12 mx-auto gap-x-6    items-center  text-base md:mb-0 md:px-8  md:border-l ">
    //         {navLinks.map((nav, index) => (
    //           <div key={index}>
    //             <Link href={nav.href}>
    //               <Button className="px-2" variant={"link"}>
    //                 {nav.name}
    //               </Button>
    //             </Link>
    //           </div>
    //         ))}
    //       </nav>
    //     </div>

    //     <div className="inline-flex items-center  space-x-6 lg:justify-end">
    //       <Button size={"lg"}>Get a Quote</Button>
    //     </div>
    //   </div>
    // </section>
    <header className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 lg:mx-auto lg:flex-row lg:items-center">
        <img alt="logo" className="w-10 h-10" src="/assets/footer-logo.png"/>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          {navLinks.map((nav, index) => (
            <div className="lg:mr-12" key={index}>
              <Link
                className="rounded text-gray-700 transition focus:outline-none "
                href={nav.href}
              >
                {nav.name}
              </Link>
            </div>
          ))}
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <GetAQuote text="Get A Quote"/>
        </div>
      </nav>
    </header>
  );
};
