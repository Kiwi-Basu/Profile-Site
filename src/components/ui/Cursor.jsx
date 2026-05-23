import { useEffect, useRef, useState } from "react";

const Cursor = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [trail, setTrail] = useState({
    x: 0,
    y: 0
  });

  const requestRef = useRef();

  // Mouse Position
  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  // Smooth Trail Animation
  useEffect(() => {

    const animate = () => {

      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.08,
        y: prev.y + (position.y - prev.y) * 0.08
      }));

      requestRef.current = requestAnimationFrame(animate);

    };

    animate();

    return () => cancelAnimationFrame(requestRef.current);

  }, [position]);

  return (
    <>

      {/* Outer Trail */}
      <div
        className="
          hidden md:block
          fixed
          top-0
          left-0
          w-10
          h-10
          rounded-full
          pointer-events-none
          z-[9998]
          border
          border-black/30
          backdrop-blur-[2px]
          bg-black/5
          transition-transform
          duration-75
        "
        style={{
          transform: `
            translate(
              ${trail.x - 20}px,
              ${trail.y - 20}px
            )
          `
        }}
      />

      {/* Glow Layer */}
      <div
        className="
          hidden md:block
          fixed
          top-0
          left-0
          w-16
          h-16
          rounded-full
          pointer-events-none
          z-[9997]
          bg-black/5
          blur-xl
        "
        style={{
          transform: `
            translate(
              ${trail.x - 32}px,
              ${trail.y - 32}px
            )
          `
        }}
      />

      {/* Main Dot */}
      <div
        className="
          hidden md:block
          fixed
          top-0
          left-0
          w-2.5
          h-2.5
          rounded-full
          bg-black
          pointer-events-none
          z-[9999]
        "
        style={{
          transform: `
            translate(
              ${position.x - 5}px,
              ${position.y - 5}px
            )
          `
        }}
      />

    </>
  );
};

export default Cursor;