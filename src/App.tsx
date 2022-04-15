import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import './app.css';
import SolarSystem from './components/System';
import { CubeTextureLoader, Vector3 } from 'three';

const App: React.FC = () => {
  return (
    <Canvas camera={{ position: [-50, -225, 100], fov: 45 }}>
      <Stats />
      <SolarSystem />
      <OrbitControls />
      <Skybox />
    </Canvas>
  )
}
export default App;

const Skybox: React.FC = () => {
  // const { scene } = useThree();
  // const skyboxLoader = new CubeTextureLoader();
  // const texture = skyboxLoader.load([
  //   "/images/2k_stars_cube.png",
  //   "/images/2k_stars_cube.png",
  //   "/images/2k_stars_cube.png",
  //   "/images/2k_stars_cube.png",
  //   "/images/2k_stars_cube.png",
  //   "/images/2k_stars_cube.png"
  // ]);
  // scene.background = texture;
  // return null;
  // <sphereGeometry args={[1000, 100, 50]} />
  const group = React.useRef();
  // useFrame(() => { });
  // ['', '', '', '', ''] // new
  const starNodes: any[] = [...Array(4000)];


  return (
    <group ref={group}>
      {starNodes.map((_, index: number) => (
        <Star key={`${index}-star`} />
      ))}
    </group>
  )
}


const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

const Star: React.FC = () => {
  const position: [number, number, number] = React.useMemo(() => {
    return [random(-250, 250), random(-250, 250), random(-250, 250)];
  }, []);

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.08, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color={'#ffffff'}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  )
}