import React, { useEffect, useState } from "react";
import { Tabs, Drawer, Menu } from "antd";
import { MenuOutlined, BulbOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { LOGO } from "../../../data/logo";
import { menuItems } from "../../../data/menuData"; // 引入菜单数据
import "./index.less";

const AppMenu: React.FC = () => {
  const location = useLocation(); // 获取当前的路由信息
  const [activeKey, setActiveKey] = useState<string>(
    window.location.hash.replace("#", "") || "home"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 控制移动端菜单抽屉的状态

  useEffect(() => {
    // 获取当前的 hash 值，并去除开头的 # 符号
    const hashPath = window.location.hash.replace("#", "") || "home";
    setActiveKey(hashPath);
  }, [location.hash]);

  const handleTabChange = (key: string) => {
    setActiveKey(key);
    const newPath = menuItems.find((item) => item.key === key)?.path || "/";
    window.location.hash = newPath; // 使用 hash 更新 URL
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDrawerClose = () => {
    setIsMobileMenuOpen(false);
  };

  const onTabClick = (key: string) => {
    handleTabChange(key);
  };

  const OperationsSlot = {
    left: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={LOGO}
          style={{
            width: 25,
          }}
          alt="logo"
        />
      </div>
    ),
  };

  return (
    <div className="app-menu">
      {/* 移动端菜单按钮 */}
      <MenuOutlined
        className="header__icon header__icon--menu"
        onClick={handleMenuToggle}
      />

      {/* 桌面端 Tabs 导航 */}
      <Tabs
        tabBarExtraContent={OperationsSlot}
        activeKey={activeKey}
        onChange={handleTabChange}
        className="menu-container"
      >
        {menuItems.slice(0, 4).map((item) => (
          <Tabs.TabPane tab={item.label} key={item.key}></Tabs.TabPane>
        ))}
      </Tabs>

      {/* 移动端 Drawer 菜单 */}
      <Drawer
        title="导航菜单"
        placement="top"
        closable={false}
        onClose={handleDrawerClose}
        open={isMobileMenuOpen}
        key="top"
        extra={
          <div onClick={handleDrawerClose}>
            <BulbOutlined className="m-header-nav__close-icon" />
          </div>
        }
      >
        <Menu
          onClick={(e) => {
            onTabClick(e.key);
            handleDrawerClose();
          }}
          selectedKeys={[activeKey]}
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <div key={item.path} className="m-header-nav__link">
                {item.label}
              </div>
            ),
          }))}
        />
      </Drawer>
    </div>
  );
};

export default AppMenu;
