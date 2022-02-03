import { useTexture } from '@react-three/drei';
import React from 'react';
import Ecliptic from '../Ecliptic';

const Mars: React.FC = () => {
  const texture = useTexture("images/2k_mars.jpg");

  return (
    <React.Fragment>
      <mesh position={[100, 0, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshPhongMaterial map={texture} />
      </mesh>
      <Ecliptic x={100} y={100.5} />
    </React.Fragment>
  )
}
export default Mars;