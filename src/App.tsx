import { Stars, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import './app.css';
import Controls from './components/Controls';
import SolarSystem from './components/System';

const App: React.FC = () => {
  return (
    <Canvas>
      <Stats />
      <SolarSystem />
      <Controls />
      <Stars radius={100} depth={100} count={5000} factor={4} saturation={0} fade />
    </Canvas>
  )
}
export default App;