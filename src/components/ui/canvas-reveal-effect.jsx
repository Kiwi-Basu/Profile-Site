//"Hello World"(print)
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Single glowing particle with random color
function Particle({ initialPos, speed, size, color }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const elapsed = clock.getElapsedTime();

    // Calculate current y position, falling down continuously
    // Use modulo to wrap smoothly from bottom back to top
    const fallRange = 6; // from +3 to -3
    let y =
      ((initialPos[1] - speed * elapsed + fallRange) % fallRange) - 3;

    // X oscillation for wind effect
    const windAmplitude = 0.3;
    const windFrequency = 1;
    let x = initialPos[0] + Math.sin(elapsed * windFrequency) * windAmplitude;

    mesh.current.position.set(x, y, 0);

    // Slow rotation for nice subtle effect
    mesh.current.rotation.z = elapsed * 0.5;
  });

  return (
    <mesh ref={mesh} position={initialPos}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={1} />
    </mesh>
  );
}

function InfiniteParticles({ count = 150 }) {
  const [particles, setParticles] = useState([]);

  // Array of colors for particles
  const colors = [
    "#aaf0ff", // light blue
    "#ffb347", // orange
    "#ffd700", // gold
    "#90ee90", // light green
    "#ff69b4", // pink
    "#87ceeb", // sky blue
  ];

  useEffect(() => {
    // Initialize particle data
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        pos: [(Math.random() - 0.5) * 4, 3 + Math.random() * 3, 0],
        speed: 0.5 + Math.random() * 0.5,
        size: 0.02 + Math.random() * 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(arr);
  }, [count]);

  return (
    <>
      {particles.map(({ id, pos, speed, size, color }) => (
        <Particle
          key={id}
          initialPos={pos}
          speed={speed}
          size={size}
          color={color}
        />
      ))}
    </>
  );
}

export const CanvasRevealEffect = ({
  containerClassName,
  showGradient = true,
}) => {
  React.useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <div
      className={`h-full relative w-full overflow-hidden ${containerClassName ?? ""}`}
      style={{ background: "#001022" }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 5], zoom: 150 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <InfiniteParticles count={70} />
      </Canvas>
      {showGradient && <div className="absolute inset-0 pointer-events-none" />}
    </div>
  );
};
