import React, { useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type RotatingPointsProps = {
  positions: Float32Array;
  color: string;
  size: number;
};

const RotatingPoints: React.FC<RotatingPointsProps> = ({
  positions,
  color,
  size,
}) => {
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default RotatingPoints;
