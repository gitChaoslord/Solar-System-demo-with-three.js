import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react';

const Controls: React.FC = () => {
  const { camera } = useThree();
  const controlsRef = React.useRef<any>(null);

  camera.position.x = -50;
  camera.position.y = -125;
  camera.position.z = 150;

  return <OrbitControls ref={controlsRef} makeDefault camera={camera} minDistance={30} maxDistance={300} />;
}
export default Controls;