import { Html, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import Ecliptic from '../Ecliptic';
import { TextureLoader } from 'three';
interface PlanetProps {
  displayName?: boolean
}

const Earth: React.FC<PlanetProps> = ({ displayName = false }) => {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    ['images/2k_earth_daymap.jpg', 'images/2k_earth_normal_map.jpg', 'images/2k_earth_specular_map.jpg', 'images/2k_earth_clouds.jpg']);

  const planet = useRef<THREE.Mesh>();
  const clouds = useRef<THREE.Group>();
  const group = useRef<THREE.Group>();
  const [startPos, setStartpos] = React.useState<number>(Math.round(Math.random() * 100));

  const [hovered, setHover] = React.useState<boolean>(false);

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
        <mesh position={[75, 0, 0]} rotation={[90, 0, 0]} ref={planet} onClick={() => setHover(!hovered)} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
          <sphereGeometry args={[4, 32, 32]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial map={colorMap} normalMap={normalMap} />
          <Html distanceFactor={15}>
            <div className="tooltip" style={{ display: hovered || displayName ? 'block' : 'none' }}>Earth</div>
          </Html>
          {/* <HtmlContent portal={domContent} /> */}
        </mesh>
      </group>
      <Ecliptic x={75} y={75.5} />
    </React.Fragment>
  )
}
export default Earth;