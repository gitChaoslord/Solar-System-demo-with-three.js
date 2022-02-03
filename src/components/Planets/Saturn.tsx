import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Saturn: React.FC = () => {
  const texture = useTexture("images/2k_saturn.jpg");

  return (
    <React.Fragment>
      <mesh position={[150, 0, 0]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={150} y={150.5} />
    </React.Fragment>
  )
}
export default Saturn;