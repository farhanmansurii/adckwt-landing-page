import React from "react";
import { Button } from "../ui/button";
import { MdBackupTable, MdMap, MdTimer } from "react-icons/md";
import { GiAirplane } from "react-icons/gi";

export default function Features() {
  const features = [
    {
      icon: <MdBackupTable className="w-full h-full text-inherit" />,
      title: "Sea Freight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
    {
      icon: <MdMap className="w-full h-full text-inherit" />,
      title: "Air Freight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
    {
      icon: <MdTimer className="w-full h-full text-inherit" />,
      title: "Warehouse",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
    {
      icon: <GiAirplane className="w-full h-full text-inherit" />,
      title: "LCL",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl min-h-[75vh] flex flex-col md:flex-row items-center gap-10 mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="w-11/12 mx-auto flex  p-6 font-light flex-wrap flex-col gap-4 text-center md:text-left ">
          <div className="uppercase text-primary text-xs ">why choose us</div>
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-5xl">
            Why should you choose our services, here are the advantages we offer
          </h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius, enim ex faucibus purus.
          </p>
          <Button className="md:w-fit md:mx-auto">Get A Free Quote</Button>
        </div>
        <div className="md:mt-12 flex  p-6 w-11/12 mx-auto">
          <div className="flex gap-10  text-left flex-col">
            {features.map((item, idx) => (
              <div key={idx} className="gap-6 flex   flex-row  items-center">
                <div className="w-24 text-primary p-2 h-24">{item.icon}</div>
                <div className="flex gap-2 my-2 flex-col">
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
