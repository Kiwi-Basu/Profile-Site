//"Hello World"(print)
import React, { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // start off-screen

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed z-90 w-3 h-3 bg-[#a99a9a89] bg-opacity-20 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default MouseTrail;
