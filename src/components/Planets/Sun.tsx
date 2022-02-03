import { useTexture } from '@react-three/drei';
import React from 'react';

const Sun: React.FC = () => {
  const texture = useTexture("images/2k_sun.jpg");

  return (
    <React.Fragment>
      <LightSource />
      <mesh position={[0, 0, 0]}>
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