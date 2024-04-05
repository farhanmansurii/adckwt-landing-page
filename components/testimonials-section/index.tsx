import React from "react";
import { AnimatedTitle } from "../common-animations/title-animation";
import { InfiniteMovingCards } from "../common-animations/animated-cards";

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <section className="py-[6rem]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="w-11/12 mx-auto px-6 text-center space-y-3">
          <AnimatedTitle
            additionalHeading="Testimonials"
            wrapperClassName="space-y-3 flex flex-col"
            additionalHeadingClassName="  uppercase font-semibold"
            title="See what others are saying about us"
            subtitle="Discover why people love our services!"
            titleClassName="text-primary text-3xl font-semibold sm:text-4xl"
            subtitleClassName="mt-3 text-gray-600"
          />
        </div>
        <div className="my-12">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
