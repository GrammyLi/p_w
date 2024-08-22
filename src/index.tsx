import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 渲染前移除初始加载指示器
const removeLoadingSpinner = () => {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) {
    spinner?.parentElement?.removeChild(spinner);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
  removeLoadingSpinner // 移除加载指示器
);
