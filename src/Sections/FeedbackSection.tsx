"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Slide() {
  return (
    <div id="reviews" className="h-[20rem] w-full h-auto  rounded-md flex flex-col antialiased bg-black-100 items-center justify-center relative overflow-hidden">
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
    title: "Director of Advancement VCRC Valley Communiity Recreational Center",
  },
  {
    quote:
      "Ajmal started by conducting a meticulous and exhaustive review of our organization’s website design and content, followed by a commendable enhancement that significantly improved both its functionality and user experience. He not only addressed critical areas needing improvement but also demonstrated a profound understanding of the platform’s core objectives, resulting in a remarkable outcome. The final product highlights both the quality of the assessment and the subsequent advancements, emphasizing the depth of effort and its positive impact. Words cannot express how grateful we are for Ajmal’s wonderful contribution to our organization. Also went through all non-profit content documentation from over the years and refined our mission throughout the website according to what our new website needed.  Even though just a developer he was able to help with written content, design and trouble shooting our donation system and fixed or built anything asked for. I highly recommend him for any website development and design projects.",
    name: "Nomagcwanini Gracia Nokwe",
    title: "Sinomlando Director",
  },
  {
    quote:
      "`Adding`",
    name: "Mohammad Rasti",
    title: "Hybrid Battery Solutions Owner",
  },
];
