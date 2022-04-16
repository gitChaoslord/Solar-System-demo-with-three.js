import React, { useRef } from 'react';
import * as THREE from 'three';

interface EclipticProps {
  x: number;
  y: number;
}

const Ecliptic: React.FC<EclipticProps> = ({ x, y }) => {
  const mesh = useRef<THREE.Mesh>();
  return (
    <React.Fragment>
      <mesh ref={mesh}>
        <ringGeometry attach="geometry" args={[x, y, 64]} />
        <meshBasicMaterial side={THREE.DoubleSide} transparent attach="material" color={'#ADAEAD'} />
      </mesh>
    </React.Fragment>
  )
}
export default Ecliptic;