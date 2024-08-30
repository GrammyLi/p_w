import React, { useState } from "react";
import { randomInSphere } from "../../../../../utils";
import RotatingPoints from "../RotatingPoints";

type StarsProps = JSX.IntrinsicElements["group"] & {
  color: string;
};

const Stars: React.FC<StarsProps> = ({ color, ...props }) => {
  const [sphere] = useState<Float32Array>(() =>
    randomInSphere(new Float32Array(5000), { radius: 1.5 })
  );

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <RotatingPoints positions={sphere} color={color} size={0.005} />
    </group>
  );
};

export default Stars;
