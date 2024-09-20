import React, { useEffect, useRef } from "react";
import { CanvasObject } from "./CanvasObject";
import "./index.less";

const CanvasRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasObject = new CanvasObject(canvasRef.current);
      canvasObject.initialize();
    }
  }, []);

  return (
    <div className="canvas-renderer">
      <canvas id="id-canvas" ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};

export default CanvasRenderer;
