import React, { useEffect, useState } from "react";
import { Tabs, TabsProps } from "antd";
import { useLocation } from "react-router-dom";
import { LOGO } from "../../../data/logo";
import { menuItems } from "../../../data/menuData";
import "./index.less";

const AppMenu: React.FC = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string>(
    window.location.hash.replace("#", "") || "home"
  );

  useEffect(() => {
    // 获取当前的 hash 值，并去除开头的 # 符号
    const hashPath = window.location.hash.split("/")[1];
    setActiveKey(hashPath || "home");
  }, [location.hash]);

  const handleTabChange = (key: string) => {
    setActiveKey(key);
    const newPath = menuItems.find((item) => item.key === key)?.path || "/";
    window.location.hash = newPath;
  };

  const OperationsSlot = {
    right: (
      <img
        src={LOGO}
        style={{
          width: 25,
        }}
        alt="logo"
      />
    ),
  };

  return (
    <Tabs
      tabBarExtraContent={OperationsSlot}
      activeKey={activeKey}
      onChange={handleTabChange}
      className="menu-container"
    >
      {menuItems.map((item) => (
        <Tabs.TabPane tab={item.label} key={item.key}></Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default AppMenu;
