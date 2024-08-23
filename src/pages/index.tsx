import React from "react";
import { Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

import "./index.less";
import Projects from "./Projects";
import HomeIcon from "./components/HomeIcon";
import SlideIcon from "./components/SlideIcon";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate

const Home: React.FC = () => {
  const navigate = useNavigate(); // 初始化 useNavigate 钩子

  const handleLearnMoreClick = () => {
    navigate("/about"); // 跳转到简介页面
  };

  return (
    <>
      <div className="home">
        <div className="home__content">
          <div className="home__content--l">
            <h1>Hi, I'm Grammy Li</h1>
            <h2>
              欢迎来到我的主页，在这里你可以找到我的作品、想法、爱好和其他有趣的东西。
            </h2>
            <h3>明日的程序员是未来的魔法师</h3>
            <p>
              我是一个充满活力、对前端由衷热爱、善于发现问题的前端工程师。我目前正在寻找前端工程师岗位，希望借此机会为贵司献上我的一点绵薄之力
            </p>
            <p>请随意四处看看，了解更多关于我的信息。</p>
            <Button
              icon={<RightCircleOutlined />}
              style={{
                border: "1px solid #4096ff",
                color: "#4096ff",
              }}
              onClick={handleLearnMoreClick} // 绑定点击事件
            >
              了解更多
            </Button>
          </div>
          <div className="home__content--r">
            <HomeIcon className="chakra-icon" />
          </div>
        </div>
      </div>
      <SlideIcon />
      <div className="home__projects">
        <Projects />
      </div>
    </>
  );
};

export default Home;
