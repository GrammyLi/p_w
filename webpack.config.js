const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// 你可以使用一些 Webpack 插件和配置选项来进一步优化打包输出：
// TerserPlugin：用于最小化 JavaScript。
// SplitChunksPlugin：用于提取公共代码块，减少重复代码。

module.exports = {
  entry: "./src/index.tsx", // 入口文件
  output: {
    // filename: "bundle.js",
    filename: "js/[name].[contenthash].js", // 使用内容哈希，并将 JS 文件输出到 js/ 目录
    path: path.resolve(__dirname, "build"),
  },

  optimization: {
    splitChunks: {
      chunks: "all", // 提取公共代码块
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 解析扩展名
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      // 你还可以添加其他别名
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/models",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/, // 匹配 .ts 和 .tsx 文件
        use: [
          {
            loader: "ts-loader",
            // options: {
            //   transpileOnly: true, // 只进行转译，跳过类型检查以加速编译
            // },
          },
        ],
        exclude: /node_modules/, // 排除 node_modules 目录
      },
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          //   使用过多或复杂的插件和 loader 会拖慢打包速度。
          //   减少不必要的插件和 loader：只保留必要的，禁用开发模式下不需要的插件。
          //   使用 babel-loader 的缓存：启用缓存可以加速 Babel 编译。

          options: {
            cacheDirectory: true, // 启用缓存
          },
        },
      },
      {
        test: /\.less$/, // 匹配 Less 文件
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true, // 启用 JavaScript
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // 添加对 .glb 文件的支持
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    // new CompressionWebpackPlugin({
    //   filename: "[path][base].gz",
    //   algorithm: "gzip",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    // new BundleAnalyzerPlugin(), // 添加这个插件来分析包的大小
    new CleanWebpackPlugin(), // 在每次构建前清理 /build 文件夹
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ], // 过滤掉可能的 false 值

  //   mode: "development",

  //   确保在生产环境中构建你的应用时，React 是以生产模式运行的。生产模式去除了开发中的警告和调试信息，并进行了许多性能优化。
  mode: "production", // 根据环境设置模式

  devServer: {
    static: {
      directory: path.join(__dirname, "build"), // 使用 'static' 属性来指定静态文件目录
    },
    compress: true,
    port: 9000,
    open: true, // 自动打开浏览器
    hot: true, // 启用热加载
  },
  performance: {
    maxAssetSize: 1024000 * 5, // 1 MB，设置每个资源的大小限制
    maxEntrypointSize: 1024000 * 5, // 1 MB，设置入口点的大小限制
  },
  // performance: {
  //   hints: false, // 关闭性能提示
  // },
};

// 解释：

// [name].[contenthash].js：在文件名中加入内容哈希值，确保文件在内容不变时不会重新缓存。
// splitChunks：将公共代码提取到单独的文件中，减少冗余。
// TerserPlugin：压缩和最小化 JavaScript 文件。
// CleanWebpackPlugin：在每次构建前清理旧的构建文件，确保生成的文件始终是最新的。

// 启用 Gzip 或 Brotli 压缩可以显著减少传输时的文件大小，特别是对于较大的 JavaScript 文件。这可以在 Webpack 中通过插件实现，也可以在服务器配置中启用。
// 使用 compression-webpack-plugin 来启用 Gzip 压缩：
