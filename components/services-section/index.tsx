"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  MdFlight,
  MdLocalShipping,
  MdAssignmentTurnedIn,
  MdStore,
  MdHome,
  MdBusinessCenter,
} from "react-icons/md";
import { AnimatedTitle } from "../common-animations/title-animation";
const features = [
  {
    icon: <MdLocalShipping />,
    title: "LCL Consolidation from/to Most Ports",
    description:
      "Efficient consolidation for shipments to/from major ports worldwide.",
  },
  {
    icon: <MdFlight />,
    title: "International Moving",
    description: "Seamless moving services for international relocations.",
  },
  {
    icon: <MdLocalShipping />,
    title: "Courier Services",
    description:
      "Fast and reliable courier services for local and international deliveries.",
  },
  {
    icon: <MdAssignmentTurnedIn />,
    title: "Custom Clearance",
    description: "Comprehensive customs clearance for import/export processes.",
  },
  {
    icon: <MdStore />,
    title: "Cross-Border Logistics",
    description: "Integrated solutions for smooth cross-border transportation.",
  },
  {
    icon: <MdHome />,
    title: "Warehousing Solutions",
    description: "Flexible and secure warehousing tailored to your needs.",
  },
  {
    icon: <MdBusinessCenter />,
    title: "Relocation Services",
    description:
      "Reliable services facilitating seamless transitions to new locations.",
  },
  {
    icon: <MdBusinessCenter />,
    title: "Mobility Services",
    description: "Comprehensive mobility support for diverse needs.",
  },
  {
    icon: <MdBusinessCenter />,
    title: "Project Logistics",
    description: "Comprehensive mobility support for diverse needs.",
  },
{
    icon: <MdBusinessCenter />,
    title: "Pharma Logistics",
    description: "Comprehensive mobility support for diverse needs.",
  },
{
    icon: <MdBusinessCenter />,
    title: "Pet Relocation",
    description: "",
  },
{
    icon: <MdBusinessCenter />,
    title: "Industrial Location",
    description: "Comprehensive mobility support for diverse needs.",
  },
];

const AnimatedFeature = ({ item, index }:{item:any,index:number}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: !isInView ? 0 : 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.25 + 0.25 }}
      key={index}
      className="flex items-center gap-x-6"
    >
      <div className="flex-none w-12 h-12 bg-primary text-white flex items-center justify-center">
        {item.icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
        <p className="text-xs">{item.description}</p>
      </div>
    </motion.div>
  );
};



export default function Services() {
  return (
    <AnimatePresence>
      <section id="services" className="py-14 mb-24 ">
        <div className="max-w-screen-xl min-h-[75vh] flex flex-col   gap-10 mx-auto px-4  text-gray-600 md:px-8">
          <div className="w-11/12 mx-auto px-6 space-y-3">
            <AnimatedTitle
              additionalHeading="Services"
              wrapperClassName="space-y-3 flex max-w-xl flex-col"
              additionalHeadingClassName="text-primary  uppercase font-semibold"
              title="Simple solutions for complex issues"
              subtitle="Explore our range of services tailored to meet your logistics and shipping needs."
              titleClassName="text-gray-800 text-3xl font-semibold sm:text-4xl"
              subtitleClassName=""
            />
          </div>
          <div className="md:mt-12 flex  px-6 pb-6 w-11/12 mx-auto">
            <ul className="grid gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <AnimatedFeature key={idx} item={item} index={idx} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
