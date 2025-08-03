//"Hello Word"(print)

"use client";
import { cn } from "../../lib/util-background";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]], // Neon cyan
  containerClassName,
  dotSize,
  showGradient = true,
  darkTheme = true,
}) => {
  return (
    <div
      className={cn(
        "h-full relative w-full rounded-lg overflow-hidden",
        darkTheme
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 border border-cyan-500 shadow-cyan-700/50 shadow-lg"
          : "bg-white",
        containerClassName
      )}
    >
      <div className="absolute inset-0 z-0">
        <LeafMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 6}
          opacities={
            opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
          }
          animationSpeed={animationSpeed}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      )}
    </div>
  );
};

const LeafMatrix = ({
  colors = [[0, 255, 255]],
  opacities = [0.2, 0.4, 0.6, 0.8, 1],
  totalSize = 12,
  dotSize = 6,
  animationSpeed = 0.4,
  center = ["x", "y"],
}) => {
  const uniforms = React.useMemo(() => {
    return {
      u_colors: {
        value: colors.map((color) => [
          color[0] / 255,
          color[1] / 255,
          color[2] / 255,
        ]),
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
      u_animation_speed: { value: animationSpeed, type: "uniform1f" },
    };
  }, [colors, opacities, totalSize, dotSize, animationSpeed]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[5];
        uniform vec3 u_colors[1];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform float u_animation_speed;
        uniform vec2 u_resolution;
        out vec4 fragColor;

        // Simple hash function for randomness
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
        }

        // Draw ellipse shape (leaf-like)
        float ellipse(vec2 p, vec2 radius) {
          return smoothstep(1.0, 0.95, length(p / radius));
        }

        void main() {
          vec2 st = fragCoord.xy;

          ${
            center.includes("x")
              ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }
          ${
            center.includes("y")
              ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }

          vec2 gridPos = floor(st / u_total_size);
          vec2 localPos = mod(st, u_total_size) - u_total_size * 0.5;

          // Create drifting effect by offsetting leaf position with sin wave and randomness
          float driftX = sin(u_time * u_animation_speed + gridPos.y * 1.5) * 3.0;
          float driftY = cos(u_time * u_animation_speed + gridPos.x * 1.7) * 2.0;

          vec2 leafPos = localPos - vec2(driftX, driftY);

          // Leaf shape: ellipse elongated vertically
          float leaf = ellipse(leafPos, vec2(u_dot_size * 0.5, u_dot_size * 1.5));

          // Soft edges for leaf shape
          leaf = 1.0 - leaf;

          // Add a subtle flicker with sine wave per leaf for opacity
          float flickerPhase = hash(gridPos) * 6.2831;
          float flicker = 0.5 + 0.5 * sin(u_time * 5.0 + flickerPhase);

          float alpha = leaf * flicker * u_opacities[int(flicker * 4.0)];

          vec3 color = u_colors[0];

          fragColor = vec4(color, alpha);
          fragColor.rgb *= fragColor.a;
        }
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

const ShaderMaterial = ({ source, uniforms, maxFps = 60 }) => {
  const { size } = useThree();
  const ref = useRef();
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) {
      return;
    }
    lastFrameTime = timestamp;

    const material = ref.current.material;
    const timeLocation = material.uniforms.u_time;
    timeLocation.value = timestamp;
  });

  const getUniforms = () => {
    const preparedUniforms = {};

    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];

      switch (uniform.type) {
        case "uniform1f":
          preparedUniforms[uniformName] = { value: uniform.value, type: "1f" };
          break;
        case "uniform3f":
          preparedUniforms[uniformName] = {
            value: new THREE.Vector3().fromArray(uniform.value),
            type: "3f",
          };
          break;
        case "uniform1fv":
          preparedUniforms[uniformName] = { value: uniform.value, type: "1fv" };
          break;
        case "uniform3fv":
          preparedUniforms[uniformName] = {
            value: uniform.value.map((v) =>
              new THREE.Vector3().fromArray(v)
            ),
            type: "3fv",
          };
          break;
        case "uniform2f":
          preparedUniforms[uniformName] = {
            value: new THREE.Vector2().fromArray(uniform.value),
            type: "2f",
          };
          break;
        default:
          console.error(`Invalid uniform type for '${uniformName}'.`);
          break;
      }
    }

    preparedUniforms["u_time"] = { value: 0, type: "1f" };
    preparedUniforms["u_resolution"] = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
    };
    return preparedUniforms;
  };

  const material = useMemo(() => {
    const materialObject = new THREE.ShaderMaterial({
      vertexShader: `
      precision mediump float;
      in vec2 coordinates;
      uniform vec2 u_resolution;
      out vec2 fragCoord;
      void main(){
        float x = position.x;
        float y = position.y;
        gl_Position = vec4(x, y, 0.0, 1.0);
        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        fragCoord.y = u_resolution.y - fragCoord.y;
      }
      `,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });

    return materialObject;
  }, [size.width, size.height, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};
