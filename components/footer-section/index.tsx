/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetAQuote } from "../get-a-quote";

export default function FooterSection() {
  const footerNavs = [
    {
      href: "#",
      name: "Home",
    },
    
    {
      href: "#services",
      name: "Our Services",
    },
   
    {
      href: "#features",
      name: "Our Features",
    },
    {
      href: "#quote",
      name: "Contact Us",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full px-10 lg:w-1/3 flex justify-evenly flex-col mb-8 lg:mb-0">
          <img src="/assets/footer-logo.png" className="w-92" alt="" />

          <div className="font-inter font-light my-6 text-white">
            Established in 2003, ADC Shipping & Forwarding Services is renowned
            for its Quality Service, combined with competitive pricing.
          </div>
          <GetAQuote text="Get A Quote" />
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="flex flex-col space-y-5">
            <h2 className="font-inter text-primary font-medium">NAVIGATION</h2>
            {footerNavs.map((nav, index) => (
              <a
                key={index}
                href={nav.href}
                className="font-inter font-light text-white"
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="flex flex-col space-y-5">
            <h2 className="font-inter text-primary font-medium">CONTACT US</h2>
            <div className="font-inter font-light text-white">
              ADC Shipping & Forwarding Services Co. W.L.L Suhair Commercial
              Center Opp. Sharq Fire Station 1st Floor Al Hilali Street Kuwait
            </div>
            <div className="font-inter font-light text-white">
              Phone: +965 22493957 Ext. 450
            </div>
            <div className="font-inter font-light text-white">
              Email: info@adckwt.com
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          {/* Social media icons */}
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="font-inter font-light text-white">
          &copy; Copyright ADC Shipping & Forwarding Co. W.L.L 2024 - All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}
