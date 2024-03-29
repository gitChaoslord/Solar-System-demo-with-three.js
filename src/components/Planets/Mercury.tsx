import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';

const Mercury: React.FC = () => {
  const texture: THREE.Texture = useTexture<string>("images/2k_mercury.jpg");
  const planet = useRef<THREE.Mesh>();
  const group = useRef<THREE.Group>();
  useFrame(() => {
    planet.current!.rotation.y += 0.01;
    group.current!.rotation.z += 0.0414
  })

  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, 0]}>
        <mesh position={[25, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshPhongMaterial map={texture} />
        </mesh>
      </group>
      <Ecliptic x={25} y={25.2} />
    </React.Fragment>
  )
}
export default Mercury;
