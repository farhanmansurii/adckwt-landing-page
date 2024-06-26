import { useRouter, useSearchParams } from "next/navigation";
import {
  MdFlight as Flight,
  MdLocalShipping as Warehouse,
} from "react-icons/md";
import { GiCargoShip as Ship } from "react-icons/gi";
import React from "react";
import { FaTruck, FaMapMarkerAlt, FaWarehouse } from "react-icons/fa";
import Link from "next/link";

const items = [
  {
    icon: <Ship className="w-full h-full text-inherit" />,
    text: "Freight Services",
    id: "freight",
  },
  {
    icon: <FaMapMarkerAlt className="w-full h-full text-inherit" />,
    text: "Relocation Services",
    id: "relocation",
  },
  {
    icon: <FaWarehouse className="w-full h-full text-inherit" />,
    text: "Warehousing Services",
    id: "warehouse",
  },
];

export default function TypeButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { type } = Object.fromEntries(searchParams);

  const handleClick = (val: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("type", val);
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-row z-20 justify-evenly items-center relative top-[-2rem] md:top-[-4rem]">
      {items.map((item, index) => (
        <Link
          key={index}
          scroll={true}
          href={`/?type=${item.id}#quote`}
        >
          <div
            className={`flex w-fit flex-row group hover:bg-primary duration-150 md:w-fit   md:p-3 lg:p-4 text-center items-center shadow-lg gap-4 space-x-2 ${
              type === item.id
                ? "bg-primary text-white border-0"
                : "bg-white text-primary md:border"
            }`}
          >
            <div
              className={`bg-primary w-16 md:w-18 lg:w-24 text-white group-hover:text-primary group-hover:bg-white duration-150 p-4 group-hover:p-3 aspect-square ${
                type === item.id ? "text-white" : "text-primary"
              }`}
            >
              {item.icon}
            </div>
            <div
              className={`text-lg hidden md:flex group-hover:text-white text-left text-wrap ${
                type === item.id ? "text-white" : "text-primary"
              }`}
            >
              {item.text}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
