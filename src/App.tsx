import { Spin } from "antd";
import React, { Suspense, lazy, useMemo } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.less";
import CoolBackground from "./pages/components/CoolBackground";
import FooterComponent from "./pages/components/Footer";
import AppMenu from "./pages/components/Menu";

// 懒加载组件
const Home = lazy(() => import("./pages"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Filter = lazy(() => import("./pages/Image/Filter"));
const Avatar = lazy(() => import("./pages/Image/Avatar"));

const App: React.FC = () => {
  const isCv = useMemo(() => {
    return window.location.hash.split("/")[1] === "cv";
  }, [location.hash]);

  const showFooter = useMemo(() => {
    let h = window.location.hash.split("/")[1];
    let notValidhashs = ["cv"];
    return !notValidhashs.includes(h);
  }, [location.hash]);

  return (
    <Router>
      <div className="App">
        <CoolBackground /> {/* 使用 CoolBackground 组件作为背景 */}
        {!isCv && <AppMenu />}
        <div className="content">
          <Suspense fallback={<Spin className="App__spin" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume isCv={false} />} />
              <Route path="/cv" element={<Resume isCv={true} />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/avatar" element={<Avatar />} />
            </Routes>
          </Suspense>
        </div>
        {showFooter && <FooterComponent />}
      </div>
    </Router>
  );
};

export default App;
