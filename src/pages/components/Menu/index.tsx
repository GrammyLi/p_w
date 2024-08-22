import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs } from "antd";
import { LOGO } from "../../../data/logo";
import { menuItems } from "../../../data/menuData"; // 引入菜单数据
import "./index.less";

const AppMenu: React.FC = () => {
  const location = useLocation(); // 获取当前的路由信息
  const [activeKey, setActiveKey] = useState<string>(
    window.location.hash || "home"
  );
  console.log("activeKey", activeKey);

  useEffect(() => {
    // 获取当前的 hash 值，并去除开头的 # 符号
    const hashPath = window.location.hash.split("/")[1];
    setActiveKey(hashPath || "home");
  }, [location.hash]);

  const handleTabChange = (key: string) => {
    setActiveKey(key);
    const newPath = menuItems.find((item) => item.key === key)?.path || "/";
    window.location.hash = newPath; // 使用 hash 更新 URL
  };

  const OperationsSlot = {
    left: (
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
