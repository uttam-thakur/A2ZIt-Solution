// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// // Define a functional component using TypeScript
// const ThreeDBackground: React.FC = () => {
//   // Use a ref to keep a reference to the DOM element where the canvas will be mounted
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Ensure the ref is not null
//     if (!mountRef.current) return;

//     // Create a Three.js scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Append the renderer DOM element to the referenced DOM node
//     mountRef.current.appendChild(renderer.domElement);

//     // Add a 3D object (cube example)
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup function to remove the renderer on unmount
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   // Render the component with a reference to the mounting div
//   return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
// };

// export default ThreeDBackground;



import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground: React.FC = () => {
  // Use a ref to keep a reference to the DOM element where the canvas will be mounted
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a camera with perspective projection
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 10; // Position the camera slightly away from the objects

    // Create a WebGL renderer with antialiasing for smooth edges
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Append renderer to DOM

    // Create laptop body (screen part)
    const laptopBodyGeometry = new THREE.BoxGeometry(6, 4, 0.2);
    const laptopBodyMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 100 });
    const laptopBody = new THREE.Mesh(laptopBodyGeometry, laptopBodyMaterial);
    laptopBody.position.y = 1;
    scene.add(laptopBody);

    // Create laptop screen (inner display)
    const laptopScreenGeometry = new THREE.PlaneGeometry(5.5, 3.5);
    const laptopScreenMaterial = new THREE.MeshBasicMaterial({ color: 0x2222ff, side: THREE.DoubleSide });
    const laptopScreen = new THREE.Mesh(laptopScreenGeometry, laptopScreenMaterial);
    laptopScreen.position.z = 0.11; // Slightly in front of the laptop body
    laptopBody.add(laptopScreen); // Attach the screen to the laptop body

    // Create laptop base (keyboard part)
    const laptopBaseGeometry = new THREE.BoxGeometry(6, 0.2, 4);
    const laptopBaseMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 100 });
    const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopBaseMaterial);
    laptopBase.position.y = -2;
    scene.add(laptopBase);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      laptopBody.rotation.y += 0.01; // Rotate the laptop body
      laptopBase.rotation.y += 0.01; // Rotate the base with the laptop body
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove renderer on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ThreeDBackground;

