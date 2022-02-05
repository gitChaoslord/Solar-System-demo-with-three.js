import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';

const Saturn: React.FC = () => {
  const texture: THREE.Texture = useTexture<string>("images/2k_saturn.jpg");
  const planet = useRef<THREE.Mesh>();
  const group = useRef<THREE.Group>();
  const startPos: number = Math.round(Math.random() * 100);

  useFrame(() => {
    planet.current!.rotation.y += 0.01;
    group.current!.rotation.z += 0.000339
  })

  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, startPos]}>
        <mesh position={[150, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[6, 32, 32]} />
          <meshPhongMaterial map={texture} />
        </mesh>
      </group>
      <Ecliptic x={150} y={150.5} />
    </React.Fragment>
  )
}
export default Saturn;