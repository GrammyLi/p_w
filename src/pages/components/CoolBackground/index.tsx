import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "react-router-dom"; // 导入 useLocation 钩子
import { Spin, ColorPicker } from "antd";
import "./index.less";
import Stars from "./componets/Stars";
import { Color } from "antd/es/color-picker";

const CoolBackground: React.FC = () => {
  const [color, setColor] = useState<string>("#ffa0e0"); // 状态管理颜色

  // 使用 useLocation 获取当前 URL 的查询参数
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isDebugMode = searchParams.get("debug") === "true";

  // 处理颜色变化
  const handleColorChange = (newColor: Color) => {
    setColor(newColor.toHexString());
  };

  return (
    <>
      {/* 仅当 debug 为 true 时显示 ColorPicker */}
      {isDebugMode && (
        <ColorPicker
          value={color}
          onChange={handleColorChange}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        />
      )}
      <Suspense fallback={<Spin />}>
        <Canvas camera={{ position: [0, 0, 1] }} className="background-canvas">
          <Stars color={color} /> {/* 将颜色传递给 Stars 组件 */}
        </Canvas>
      </Suspense>
    </>
  );
};

export default CoolBackground;
