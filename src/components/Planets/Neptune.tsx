import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Neptune: React.FC = () => {
  const texture = useTexture("images/2k_neptune.jpg");

  return (
    <React.Fragment>
      <mesh position={[200, 0, 0]}>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={200} y={200.5} />
    </React.Fragment>
  )
}
export default Neptune;