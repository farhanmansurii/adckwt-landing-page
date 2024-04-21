"use client";
import { Suspense, useEffect, useState } from "react";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { GetAQuote } from "../get-a-quote";
import { NavSideBar } from "./navigation-sidebar";
import TypeButtons from "./type-buttons";
import { Input } from "../ui/input";
export default function HeroSection() {
  const navigation = [
    {
      title: "Request Quote",
      href: "#quote",
    },
    {
      title: "Our Services",
      href: "#services",
    },

    {
      title: "Our Features",
      href: "#features",
    },
    {
      title: "Contact us",
      href: "#contact",
    },
  ];

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <img width={150} height={60} alt="logo" src="/assets/light-logo.png" />
      <div className="md:hidden">
        <NavSideBar links={navigation} />
      </div>
    </div>
  );

  return (
    <>
      <div className="relative h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 h-[900px]  bg-top bg-no-repeat bg-cover"
          style={{
            zIndex: 0,
            backgroundImage: `url("/assets/boat.jpg")`,
          }}
        ></div>

        <div className="relative z-10">
          <header>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div className={`flex-1 items-center hidden mt-0 md:flex `}>
                <ul className="flex-1 justify-center items-center space-y-6 flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx} className=" text-white">
                        <Link scroll={true} href={item.href} className="block">
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <GetAQuote text="Get A Quote" />
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
              <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                  Get Ready For a wider expansion of your business
                </h2>
               
                <div className="justify-center items-center gap-x-3 w-1/2 mx-auto flex gap-2 flex-col">
                  <Input
                    id="phoneNumber"
                    type="number"
                    placeholder="Phone Number"
                    className="bg-white text-primary "
                  />
                  <Input
                    id="email"
                    type="text"
                    placeholder="E-Mail"
                    className="bg-white text-primary "
                  />

                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Suspense>
        <TypeButtons />
      </Suspense>
    </>
  );
}
