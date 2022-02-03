import { useTexture } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Sun: React.FC = () => {
  const texture = useTexture("images/2k_sun.jpg");
  const planet: MeshProps = useRef<MeshProps>();
  useFrame(() => {
    planet.current.rotation.y += 0.01;
  })

  return (
    <React.Fragment>
      <LightSource />
      <mesh position={[0, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
    </React.Fragment>
  )
}
export default Sun;

const LightSource: React.FC = () => {
  return <React.Fragment>
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
  </React.Fragment>
}