import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Uranus: React.FC = () => {
  const texture = useTexture("images/2k_uranus.jpg");

  return (
    <React.Fragment>
      <mesh position={[175, 0, 0]}>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={175} y={175.5} />
    </React.Fragment>
  )
}
export default Uranus;