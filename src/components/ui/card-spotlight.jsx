//"Hello World"(print)
"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/util-background";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div className = 'flex justify-center '>
      <div
        className={cn(
          "group/spotlight p-10 rounded-2xl relative border-5 lg:border border-transparent border-l-white/30 border-t-white/30 border-r-white/10 border-b-white/10 lg:backdrop-brightness-100 backdrop-brightness-150 backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}>
        <motion.div
          className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
          style={{
            backgroundColor: color,
            maskImage: useMotionTemplate`
              radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                white,
                transparent 20%
              )
            `,
          }}>
          {isHovering && (
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName=" absolute inset-0 pointer-events-none"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3} />
          )}
        </motion.div>
        {children}
      </div>
    </div>
  );
};
