import { useTexture } from '@react-three/drei';
import { GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';

const Earth: React.FC = () => {
  const texture = useTexture("images/2k_earth_daymap.jpg");
  const planet: MeshProps = useRef<MeshProps>();
  const group: GroupProps = useRef<GroupProps>();
  useFrame(() => {
    planet.current.rotation.y += 0.01;
    group.current.rotation.z += 0.01
  })

  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, 0]}>
        <mesh position={[75, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[4, 32, 32]} />
          <meshPhongMaterial map={texture} />
        </mesh>
      </group>
      <Ecliptic x={75} y={75.5} />

    </React.Fragment>
  )
}
export default Earth;