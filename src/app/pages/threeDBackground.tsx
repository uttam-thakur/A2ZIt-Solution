import React, { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

interface ThreeDBackgroundProps {
  children?: ReactNode; // Accept children props
  className?: string;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ children }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const laptopBodyGeometry = new THREE.BoxGeometry(6, 4, 0.2);
    const laptopBodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      shininess: 100,
    });
    const laptopBody = new THREE.Mesh(laptopBodyGeometry, laptopBodyMaterial);
    laptopBody.position.y = 1;
    scene.add(laptopBody);

    // Load the custom image texture
    const textureLoader = new THREE.TextureLoader();
    const laptopScreenTexture = textureLoader.load(
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      () => renderer.render(scene, camera)
    );

    // Create the laptop screen material with the texture
    const laptopScreenMaterial = new THREE.MeshBasicMaterial({
      map: laptopScreenTexture,
      side: THREE.DoubleSide,
    });
    const laptopScreenGeometry = new THREE.PlaneGeometry(5.5, 3.5);
    const laptopScreen = new THREE.Mesh(
      laptopScreenGeometry,
      laptopScreenMaterial
    );
    laptopScreen.position.z = 0.11;
    laptopBody.add(laptopScreen);

    const laptopBaseGeometry = new THREE.BoxGeometry(6, 0.2, 4);
    const laptopBaseMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      shininess: 100,
    });
    const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopBaseMaterial);
    laptopBase.position.y = -2;
    scene.add(laptopBase);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      laptopBody.rotation.y += 0.01;
      laptopBase.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {children} {/* Render children inside the component */}
    </div>
  );
};

export default ThreeDBackground;
