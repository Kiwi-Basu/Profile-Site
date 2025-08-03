//"Hello World"(print)

import Discord_Card from "./components/Discord_Card";
import { CardSpotlight } from "./components/ui/card-spotlight";
import React, { useState, useEffect } from "react";

export function CardSpotlightDemo() {
  const names = ["Sunish Suresh", "Kiwi Basu"];
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === names[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 3000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % names.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setTypedText(names[index].substring(0, subIndex));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="flex gap-25">
      <CardSpotlight className="h-150 w-200 mb-5">
      <p className="text-xl font-bold relative z-20 mt-2 mb-5 text-white">
        Hello There Stranger I am{" "}
        <span className="text-red-300">
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
      </p>

      <div className="text-[20px] font-semibold relative z-20 mt-2 text-lime-400">
        I'm currently in my second year pursing Bachelor of Computer Application with little bit of knowledge of Programming and Logic Building. Born a Technophile.
      </div>
      <div className="text-[20px]  relative z-20 mt-4 py-3 text-purple-400">
        Fond of the art of learning everything like GeoPolitics, Psychology, History etc... 
      </div>
      <div className="text-[20px]  relative z-20  py-3 text-blue-400">
        Usually all I do is play games, watch a series or read something 
      </div>
      <div className="text-[20px] relative z-20 mt-2 py-3 text-white">
        Overall, I’m just someone who’s always curious and up for learning something new, whether it’s in tech or just about life. I like to keep things chill but stay motivated to grow, both personally and academically.
      </div>
      <div className="text-[20px] relative z-20 mt-2 text-white">
        I have ran out of idea what else should I write so I am just randomly typing something.
      </div>
      <div className="text-[20px] relative font-bold z-20 mt-2">
        <span className="text-rose-300 ">Have Fun Stranger</span>
      </div>
      </CardSpotlight>
      <Discord_Card/>
    </div>
  );
}

const Step = ({
  title
}) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0" />
    </svg>
  );
};
