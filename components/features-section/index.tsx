import React from "react";
import { Button } from "../ui/button";
import { FaWarehouse } from "react-icons/fa6";
import { AnimatedTitle } from "../common-animations/title-animation";
import { GetAQuote } from "../get-a-quote";
import { GiCargoShip, GiAirplane, GiCargoCrate } from "react-icons/gi";
export default function Features() {
const features = [
  {
    icon: <GiCargoShip className="w-full h-full text-inherit" />,
    title: "Sea Freight",
    desc: "Experience efficient and reliable sea freight solutions tailored to meet your unique needs, ensuring your cargo reaches its destination safely and on time.",
  },
  {
    icon: <GiAirplane className="w-full h-full text-inherit" />,
    title: "Air Freight",
    desc: "Benefit from our dependable air freight services, guaranteeing swift and punctual delivery of your goods to any destination worldwide, with a focus on quality and efficiency.",
  },
  {
    icon: <FaWarehouse className="w-full h-full text-inherit" />,
    title: "Warehouse",
    desc: "Rely on our secure and spacious warehouses equipped with advanced facilities to store your possessions, providing peace of mind knowing your items are in safe hands until you need them.",
  },
  {
    icon: <GiCargoCrate className="w-full h-full text-inherit" />,
    title: "LCL",
    desc: "Optimize your shipping costs with our cost-effective Less than Container Load (LCL) services, ideal for smaller shipments, while still ensuring the same level of care and attention to detail.",
  },
];




  return (
    <section id="features" className="py-14">
      <div className="max-w-screen-xl min-h-[75vh] flex flex-col md:flex-row items-center gap-10 mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="w-11/12 mx-auto flex  p-6 font-light flex-wrap flex-col gap-4 text-center md:text-left ">
          <AnimatedTitle
            additionalHeading="why choose us"
            wrapperClassName="space-y-3 my-4 flex flex-col"
            additionalHeadingClassName=" text-primary uppercase font-semibold"
            title=" Discover the Advantages of Choosing Our Services"
            subtitle=" When you choose our services, you're selecting reliability,
            efficiency, and peace of mind. We prioritize your needs, ensuring
            seamless experiences every step of the way. From secure
            transportation to flexible storage solutions, we're dedicated to
            making your relocation journey as smooth as possible."
            titleClassName="text-gray-800 text-3xl font-semibold sm:text-5xl"
            subtitleClassName="my-3 text-gray-600"
          />
          <GetAQuote text="Get A Free Quote" />
        </div>
        <div className="md:mt-12 flex  p-6 w-11/12 mx-auto">
          <div className="flex gap-10  text-left flex-col">
            {features.map((item, idx) => (
              <div key={idx} className="gap-6 flex   flex-row  items-center">
              <div className="flex-none w-14 h-14 text-primary flex items-center justify-center">
        {item.icon}
      </div>
                <AnimatedTitle
                  wrapperClassName="flex gap-2 my-2 flex-col"
                  titleClassName="text-lg text-gray-800 font-semibold"
                  subtitleClassName="text-sm"
                  title={item.title}
                  subtitle={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
