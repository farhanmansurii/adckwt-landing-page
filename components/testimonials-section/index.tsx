import React from "react";
import { AnimatedTitle } from "../common-animations/title-animation";
import { InfiniteMovingCards } from "../common-animations/animated-cards";

export default function Testimonials() {
 const testimonials = [
   {
     name: "Edwin James Mathew",
     title: "Asbar For Gen TRA & CONT",
     quote:
       "The expertise and dedication of ADC Shipping & Forwarding Services ensured our shipments arrived on time, every time. Highly recommended!",
   },
   {
     name: "Mohammad Khaled",
     title: "Luxuriant Co. for Gen Trad",
     quote:
       "Working with ADC Shipping & Forwarding Services was a game-changer for our business. They navigated complex logistics seamlessly, saving us time and money.",
   },
   {
     name: "Mahmoud Anwar",
     title: "Kuwait Games for Gen Trade",
     quote:
       "From customs clearance to last-mile delivery, ADC Shipping & Forwarding Services handled it all with professionalism and efficiency. A trusted partner for all our shipping needs.",
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
