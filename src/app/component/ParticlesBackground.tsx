// "use client";

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import type { Engine } from "tsparticles-engine";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: { color: "transparent" },
//         particles: {
//           number: { value: 100, density: { enable: true, value_area: 800 } },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: 3, random: true },
//           move: { enable: true, speed: 2 },
//           links: {
//             enable: true,
//             color: "#ffffff",
//             opacity: 0.3,
//             distance: 150,
//           },
//         },
//         interactivity: {
//           events: { onHover: { enable: true, mode: "repulse" } },
//         },
//       }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//       }} // Ensure it covers the whole screen
//     />
//   );
// };

// export default ParticlesBackground;

"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 2 },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.3,
            distance: 150,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
