import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const contact = useGLTF("./earth/scene.gltf");

  return (
    <primitive
      object={contact.scene}
      scale={2.0}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      color="blue"
      camera={{
        fov: 50,
        near: 0.04,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={500} color="blue" />
        <directionalLight position={[5, 5, 7]} color="blue" intensity={300} />
        <pointLight color="blue" position={[5, 5, 7]} intensity={500} />
        <spotLight color="black" position={[5, 5, 7]} intensity={600} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
