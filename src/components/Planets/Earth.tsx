import { Html } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';
import { TextureLoader } from 'three';
interface PlanetProps {
  displayName?: boolean
}

const startPos = Math.round(Math.random() * 100);

const Earth: React.FC<PlanetProps> = ({ displayName }) => {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    ['images/2k_earth_daymap.jpg', 'images/2k_earth_normal_map.jpg', 'images/2k_earth_specular_map.jpg', 'images/2k_earth_clouds.jpg']);

  const planet = useRef<THREE.Mesh>();
  const clouds = useRef<THREE.Group>();
  const group = useRef<THREE.Group>();

  useFrame(() => {
    planet.current!.rotation.y += 0.01;
    group.current!.rotation.z += 0.01;
    clouds.current!.rotation.y += 0.005;
  });

  return (
    <React.Fragment>
      <group ref={group} rotation={[0, 0, startPos]}>

        <mesh position={[75, 0, 0]} rotation={[90, 0, 0]} ref={clouds}>
          <sphereGeometry args={[4.1, 32, 32]} />
          <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} />
        </mesh>
        <mesh position={[75, 0, 0]} rotation={[90, 0, 0]} ref={planet}>
          <sphereGeometry args={[4, 32, 32]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial map={colorMap} normalMap={normalMap} />
          <Html distanceFactor={15}>
            <div className="tooltip" style={{ display: displayName ? 'block' : 'none' }}>Earth</div>
          </Html>
          {/* <HtmlContent portal={domContent} /> */}
        </mesh>
      </group>
      <Ecliptic x={75} y={75.2} />
    </React.Fragment>
  )
}
export default Earth;