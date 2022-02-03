import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Venus: React.FC = () => {
  const texture = useTexture("images/2k_venus_atmosphere.jpg");

  return (
    <React.Fragment>
      <mesh position={[50, 0, 0]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={50} y={50.5} />
    </React.Fragment>
  )
}
export default Venus;