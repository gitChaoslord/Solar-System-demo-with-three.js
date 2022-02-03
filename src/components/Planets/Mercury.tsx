import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Mercury: React.FC = () => {
  const texture = useTexture("images/2k_mercury.jpg");

  return (
    <React.Fragment>
      <mesh position={[25, 0, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={25} y={25.5} />
    </React.Fragment>
  )
}
export default Mercury;
