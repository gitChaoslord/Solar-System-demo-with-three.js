import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import './app.css';
import SolarSystem from './components/System';

const App: React.FC = () => {

  return <Canvas camera={{ position: [-50, -225, 100], fov: 45 }}>
    <Stats />
    <SolarSystem />
    <OrbitControls />
  </Canvas>
}
export default App;