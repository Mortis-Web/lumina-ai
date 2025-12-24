'use client';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <Canvas className="absolute inset-0 h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
        />
      </Canvas>
      {showGradient && (
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-84%" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const uniforms = useMemo(() => {
    const colorsArray = (() => {
      if (colors.length === 1) return Array(6).fill(colors[0]);
      if (colors.length === 2) return [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
      if (colors.length === 3) return [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
      return Array(6).fill(colors[0]);
    })();

    return {
      u_colors: { value: colorsArray.map(c => c.map(v => v / 255)), type: "uniform3fv" },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return <Shader source={generateShader(shader, center)} uniforms={uniforms} />;
};

const Shader: React.FC<{ source: string; uniforms: any }> = ({ source, uniforms }) => {
  return <ShaderMaterial source={source} uniforms={uniforms} />;
};

const ShaderMaterial: React.FC<{ source: string; uniforms: any }> = ({ source, uniforms }) => {
  const { size } = useThree();
  const meshRef = useRef<THREE.Mesh>(null!);

  // Prepare Three.js uniforms
  const preparedUniforms = useMemo(() => {
    const u: any = { ...uniforms };
    u.u_time = { value: 0 };
    u.u_resolution = { value: new THREE.Vector2(size.width * 2, size.height * 2) };
    return u;
  }, [uniforms, size.width, size.height]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: source,
      uniforms: preparedUniforms,
      glslVersion: THREE.GLSL3,
    });
  }, [source, preparedUniforms]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

// Simple helper to generate shader with centering (x/y)
const generateShader = (shader: string, center: ("x" | "y")[]) => `
precision mediump float;
in vec2 fragCoord;
uniform float u_time;
uniform vec3 u_colors[6];
uniform float u_opacities[10];
uniform float u_total_size;
uniform float u_dot_size;
uniform vec2 u_resolution;
out vec4 fragColor;

float PHI = 1.61803398874989484820459;
float random(vec2 xy) {
  return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
}

void main() {
  vec2 st = fragCoord.xy;
  ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size)-u_dot_size)*0.5));" : ""}
  ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size)-u_dot_size)*0.5));" : ""}
  float opacity = step(0.0, st.x) * step(0.0, st.y);
  vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
  float frequency = 5.0;
  float show_offset = random(st2);
  float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
  opacity *= u_opacities[int(rand * 10.0)];
  opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
  opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
  vec3 color = u_colors[int(show_offset*6.0)];
  ${shader}
  fragColor = vec4(color, opacity);
  fragColor.rgb *= fragColor.a;
}
`;

export default CanvasRevealEffect;
