import React, { useState } from "react";
import { randomInSphere } from "../../../../../utils";
import RotatingPoints from "../RotatingPoints";

const Stars: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const [sphere] = useState<Float32Array>(() =>
    randomInSphere(new Float32Array(5000), { radius: 1.5 })
  );

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <RotatingPoints positions={sphere} color="#007acc" size={0.005} />
    </group>
  );
};

export default Stars;
