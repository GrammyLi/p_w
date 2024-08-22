module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  ],

  //     7. 使用 Ant Design 的按需加载
  // Ant Design 提供了按需加载功能，确保只加载你使用的组件，而不是整个库。
};
