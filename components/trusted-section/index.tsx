/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AnimatedTitle } from "../common-animations/title-animation";

export default function Logos() {

  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimatedTitle
          title=" logistics networks we are affiliated with
        
        "
          titleClassName="font-semibold text-lg my-4 text-primary uppercase text-center"
          subtitle=""
          subtitleClassName=""
        />
        <div className="mt-6"></div>
        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex py-4 space-x-16 animate-loop-scroll group-hover:paused">
            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-1.jpg"
            />

            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-2.jpg"
            />

            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-3.png"
            />

            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-4.png"
            />
          </div>
          <div
            className="flex space-x-16 py-4 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {" "}
            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-1.jpg"
            />
            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-2.jpg"
            />
            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-3.png"
            />
            <img
              className=" h-20 px-4  hover:scale-110  duration-100"
              alt=""
              src="/assets/logo-4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
