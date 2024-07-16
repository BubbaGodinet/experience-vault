'use client';
import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Physics, useSphere } from '@react-three/cannon';
import * as THREE from 'three';

interface SphereProps {
  position: [number, number, number];
  color: string;
}

const SphereComponent: React.FC<{ sphere: SphereProps }> = ({ sphere }) => {
  const [hasCollided, setHasCollided] = useState(false);
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: sphere.position,
    onCollide: () => setHasCollided(true),
  }));

  const targetPoint = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (!hasCollided) {
      api.position.subscribe((position) => {
        const spherePosition = new THREE.Vector3(...position);
        const direction = targetPoint.clone().sub(spherePosition).normalize();
        const force = direction.multiplyScalar(5); // Adjust force as needed
        api.applyForce([force.x, force.y, force.z], [0, 0, 0]);
      });
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={sphere.position}>
      <meshStandardMaterial attach='material' color={sphere.color} />
    </Sphere>
  );
};

const SphereAttraction: React.FC = () => {
  const spheres: SphereProps[] = Array.from({ length: 20 }, () => ({
    position: [
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    ],
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  }));

  return (
    <Wrapper>
      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0.5} />
        <Physics>
          {spheres.map((sphere, index) => (
            <SphereComponent key={index} sphere={sphere} />
          ))}
        </Physics>
      </Canvas>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  [width: 100vw;]
  [height: 100vh;]
`;

export default SphereAttraction;




