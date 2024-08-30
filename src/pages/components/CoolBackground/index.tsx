import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.less";
import Stars from "./componets/Stars";
import { Spin } from "antd";

const CoolBackground: React.FC = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Canvas camera={{ position: [0, 0, 1] }} className="background-canvas">
        <Stars />
      </Canvas>
    </Suspense>
  );
};

export default CoolBackground;
