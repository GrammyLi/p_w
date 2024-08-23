import { Spin } from "antd";
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.less";
import FooterComponent from "./pages/components/Footer";
import AppMenu from "./pages/components/Menu";

// 懒加载组件
const Home = lazy(() => import("./pages"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppMenu />
        <div className="content">
          <Suspense
            fallback={<Spin className="App__spin"/>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
