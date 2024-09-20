import React from "react";
import CanvasRenderer from "./components/CanvasRenderer";
import "./index.less";

const Home: React.FC = () => {
  return (
    <div className="three-render">
      <h1 className="three-render__title">3D Triangle Rendering</h1>
      <CanvasRenderer />
    </div>
  );
};

export default Home;
