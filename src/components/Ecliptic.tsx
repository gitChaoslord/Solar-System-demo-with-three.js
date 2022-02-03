import React, { useRef } from 'react';

interface EclipticProps {
  x: number;
  y: number;
}

const Ecliptic: React.FC<EclipticProps> = ({ x, y }) => {
  const mesh = useRef();
  return (
    <React.Fragment>
      <mesh ref={mesh}>
        <ringGeometry attach="geometry" args={[x, y, 64]} />
        <meshBasicMaterial castShadow transparent attach="material" color="white" args={[{ side: 'DoubleSide' }]} />
      </mesh>
    </React.Fragment>
  )
}
export default Ecliptic;