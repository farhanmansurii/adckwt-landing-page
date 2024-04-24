'use client'
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import RelocationForm from "./relocation-form";
import { AnimatedTitle } from "../common-animations/title-animation";
import { NormalForm } from "./freight-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { FaMobile } from "react-icons/fa6";
export default function ContactForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "freight";
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "marketing@adckwt.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+965 22493957 Ext. 450",
    },
    {
      icon: <FaMobile />, 
      contact: "+965 97123536",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: (
        <div>
          ADC Shipping & Forwarding Services Co. <br />
          Suhair Commercial Center Opp. Sharq Fire Station 1st Floor Al Hilali
          Street Kuwait
        </div>
      ),
    },
  ];
   const router = useRouter();

   const handleClick = (val: string) => {
     const currentParams = new URLSearchParams(searchParams.toString());
     currentParams.set("type", val);
     router.push(`?${currentParams.toString()}`, { scroll: false });
   };
  return (
    <main id="quote" className="py-14 bg-[#031225] min-h-[90vh]">
      <div className="max-w-screen-xl mx-auto px-4 text-white/80 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg w-11/12 mx-auto space-y-3">
            <AnimatedTitle
              wrapperClassName="space-y-3 flex flex-col"
              additionalHeading="Contact"
              additionalHeadingClassName="text-primary uppercase font-semibold"
              titleClassName="text-3xl text-white font-semibold sm:text-4xl"
              title="Let us know how we can help"
              subtitle="We are here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form or contact us"
              subtitleClassName=""
            />
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 w-11/12 mx-auto sm:max-w-lg lg:max-w-md">
            <Select value={type} onValueChange={handleClick}>
              <SelectTrigger className="w-[280px] rounded-none mb-4">
                <SelectValue placeholder="Select A Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Services</SelectLabel>
                  <SelectItem value="freight">Freight Service</SelectItem>
                  <SelectItem value="relocation">Relocation Service</SelectItem>
                  <SelectItem value="warehouse">Warehouse Services</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {type === "relocation" ? (
              <RelocationForm />
            ) : (
              <NormalForm type={type} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
