import { useTexture } from '@react-three/drei';
import { GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';

const Mars: React.FC = () => {
  const texture = useTexture("images/2k_mars.jpg");
  const planet: MeshProps = useRef<MeshProps>();
  const group: GroupProps = useRef<GroupProps>();
  useFrame(() => {
    planet.current.rotation.y += 0.01;
    group.current.rotation.z += 0.01
  })

  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, 0]}>
        <mesh position={[100, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshPhongMaterial map={texture} />
        </mesh>
      </group>
      <Ecliptic x={100} y={100.5} />
    </React.Fragment>
  )
}
export default Mars;