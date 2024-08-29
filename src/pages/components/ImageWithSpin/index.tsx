import React, { useState } from "react";
import { Spin } from "antd";
import "./index.less";

interface ImageWithSpinProps {
  url: string;
  alt?: string;
  className?: string;
}

const ImageWithSpin: React.FC<ImageWithSpinProps> = ({
  url,
  alt,
  className,
}) => {
  const [loading, setLoading] = useState(true);

  // 当图片加载完成时，将 loading 状态设置为 false
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
      <img
        src={url}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        style={{
          display: loading ? "none" : "block",
          minHeight: 100,
          minWidth: 100,
        }} // 加载时隐藏图片
      />
    </Spin>
  );
};

export default ImageWithSpin;
