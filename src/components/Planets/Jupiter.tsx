import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Jupiter: React.FC = () => {
  const texture = useTexture("images/2k_jupiter.jpg");

  return (
    <React.Fragment>
      <mesh position={[125, 0, 0]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={125} y={125.5} />
    </React.Fragment>
  )
}
export default Jupiter;