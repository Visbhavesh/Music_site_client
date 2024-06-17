
"use client";

import React, { useEffect, useState } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-card";





export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={schoolTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const schoolTestimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];



function SchoolTestimonials(){
     return(
        <div className="h-[40rem] w-full ddark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2 relative flex flex-col item-center justify-center overflow-hidden ">
           <h1 className="text-3xl font-bold text-center mb-8">Hear Our Harmony :Voices of Success</h1> 
           <div className="mt-10 flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl">
                <InfiniteMovingCards
                items={schoolTestimonials}
                direction="right"
                speed="normal"/>
            </div>
           </div>
        </div>
     )
}
export default SchoolTestimonials
