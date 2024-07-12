"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Slide() {
  return (
    <div id="reviews" className="h-[20rem] w-full  rounded-md flex flex-col antialiased bg-black-100 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "`Adding`",
    name: "Dhoryan Rizo",
    title: "VCRC Valley Communiity Recreational Center",
  },
  {
    quote:
      "`Adding`",
    name: "Nomagcwanini Gracia Nokwe",
    title: "Sinomlando",
  },
];
