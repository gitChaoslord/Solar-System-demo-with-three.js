import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';

const Uranus: React.FC = () => {
  const texture: THREE.Texture = useTexture<string>("images/2k_uranus.jpg");
  const planet = useRef<THREE.Mesh>();
  const group = useRef<THREE.Group>();
  const startPos: number = Math.round(Math.random() * 100);

  useFrame(() => {
    planet.current!.rotation.y += 0.01;
    group.current!.rotation.z += 0.000119
  })
  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, startPos]}>
        <mesh position={[175, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[5.5, 32, 32]} />
          <meshPhongMaterial map={texture} />
        </mesh>
      </group>
      <Ecliptic x={175} y={175.5} />
    </React.Fragment>
  )
}
export default Uranus;