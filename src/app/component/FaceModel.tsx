// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import { Group } from "three";

// function FaceModel() {
//   const modelRef = useRef<Group>(null);

//   // Track mouse movement and update model rotation
//   const handleMouseMove = (event: MouseEvent) => {
//     if (!modelRef.current) return;

//     const { innerWidth, innerHeight } = window;
//     const x = (event.clientX / innerWidth) * 2 - 1;
//     const y = -(event.clientY / innerHeight) * 2 + 1;

//     modelRef.current.rotation.y = x * 0.5;
//     modelRef.current.rotation.x = y * 0.3;
//   };

//   // Add event listener
//   useFrame(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("mousemove", handleMouseMove);
//     }
//   });

//   const { scene } = useGLTF("/sample1.glb");

//   return <primitive ref={modelRef} object={scene} scale={[3, 3, 3]} />; // Increased size
// }

// export default function Scene() {
//   return (
//     <Canvas
//       style={{ width: "50vw", height: "50vh" }} // Full screen width and height
//       camera={{ position: [0, 0, 5], fov: 100 }}
//     >
//       <ambientLight intensity={1} />
//       <directionalLight position={[0, 5, 5]} intensity={1.5} />
//       <FaceModel />
//     </Canvas>
//   );
// }

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

function FaceModel({
  modelSrc,
  scale = [3, 3, 3],
}: {
  modelSrc: string;
  scale?: [number, number, number];
}) {
  const modelRef = useRef<Group>(null);

  // Track mouse movement and update model rotation
  const handleMouseMove = (event: MouseEvent) => {
    if (!modelRef.current) return;

    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth) * 2 - 1;
    const y = -(event.clientY / innerHeight) * 2 + 1;

    modelRef.current.rotation.y = x * 0.5;
    modelRef.current.rotation.x = y * 0.3;
  };

  // Add event listener
  useFrame(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
  });

  const { scene } = useGLTF(modelSrc);

  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

export default function Scene({
  modelSrc,
  scale,
  canvasStyle,
}: {
  modelSrc: string;
  scale?: [number, number, number];
  canvasStyle?: React.CSSProperties;
}) {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", ...canvasStyle }}
      camera={{ position: [0, 0, 5], fov: 70 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={1.5} />
      <FaceModel modelSrc={modelSrc} scale={scale} />
    </Canvas>
  );
}
