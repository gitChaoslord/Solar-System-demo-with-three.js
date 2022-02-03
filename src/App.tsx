import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './app.css'
import SolarSystem from './components/System';

const App: React.FC = () => {

  return <Canvas camera={{ position: [-50, -225, 100], fov: 45 }}>

    <SolarSystem />
    <OrbitControls />
  </Canvas>
}
export default App;