import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Earth: React.FC = () => {
  const texture = useTexture("images/2k_earth_daymap.jpg");

  return (
    <React.Fragment>
      <mesh position={[75, 0, 0]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={75} y={75.5} />
    </React.Fragment>
  )
}
export default Earth;