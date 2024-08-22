import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";

const SlideIcon: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`slide-indicator  ${visible ? "visible" : "hidden"}`}>
      <span>滑动</span>
      <DownOutlined />
    </div>
  );
};

export default SlideIcon;
