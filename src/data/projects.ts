// src/data/projects.ts
export interface Project {
  name: string;
  cover: string;
  preveiwLink: string;
  codeLink: string;
  details: string[];
  isResume?: boolean;
}

export const projects: Project[] = [
  {
    name: "论坛",
    cover:
      "https://images.qiecdn.com/news-aHR0cDovL2luZXdzLmd0aW1nLmNvbS9uZXdzYXBwX21hdGNoLzAvMTEwNjY1Nzk1NTAvMA",
    preveiwLink: "",
    codeLink: "https://github.com/GrammyLi/bbs",
    details: [
      "前端：TypeScript + React + umi4 + Ant + Redux, 后端：Python + Flask + sqlite3 ",
      "实现普通用户的注册、登录，发帖、评论，管理员可以删除帖子，添加模块、修改用户信息等",
      "通过密码加盐处理保护用户密码安全，利用 Token 防范 XSRF 攻击",
    ],
    isResume: true,
  },
  {
    name: "实现 webpack 核心功能",
    cover:
      "https://images.qiecdn.com/news-aHR0cDovL2luZXdzLmd0aW1nLmNvbS9uZXdzYXBwX21hdGNoLzAvMTEwNjY1Nzk1NTAvMA",
    preveiwLink: "",
    codeLink: "https://github.com/GrammyLi/g-webpack",
    details: [
      "根据主文件路径读取文件源码，利用 @babel/parser 将源码解析成 AST, 利用 @babel/core 将 AST 转成 ES5 代码",
      "对生成的 AST 进行遍历并解析出当前文件的依赖文件路径， 根据文件路径递归获取到所有文件路径 和文件内容 把每个文件的 ",
      "把每个文件的内容处理成模块形式，并将所有模块写入到一个 IIFE 形式的函数中，最后生成 bundle.js 文件",
    ],
    isResume: true,
  },
  {
    name: "Canvas Game framework",
    cover:
      "https://k.sinaimg.cn/n/sinakd20240517ac/64/w1024h640/20240517/bbdd-d43b78bc9ef6a3860d8b8367789d9266.jpg/w700d1q75cms.jpg?by=cms_fixed_width",
    preveiwLink: "https://grammyli.com/f/game/example/FlappyBird/index.html",
    codeLink: "https://github.com/GrammyLi/GrammyLi.github.io/tree/main/f/game",
    details: [
      "结合 Canvas 和 JavaScript , 基于此框架实现打砖块、飞机大战、flappy bird等游戏",
      "实现游戏资源预加载功能，程序运行前从资源管理器中预加载图片资源, 无需在运行过程中重复加载，提高游戏运行性能",
      "实现数据双向绑定、事件注册机制，支持在游戏运行中实时暂停游戏、修改游戏fps、角色运动速度、关卡编辑等效果",
      // "运用 OOP 思想，对冗余代码抽象化，便于管理各种游戏对象",
    ],
    isResume: true,
  },
  {
    name: "chatRoom",
    cover:
      "https://github.com/GrammyLi/chat-room/raw/main/screen/4371720094359_.pic.jpg",
    preveiwLink: "",
    codeLink: "https://github.com/GrammyLi/chat-room",
    details: [
      "后端：Python3、Flask；前端：TypeScript、React",
      "实现了基于 WebSocket 的实时聊天室，支持多人实时聊天",
      "支持多房间功能，用户可以创建、加入和离开多个聊天房间",
      "实现消息的发送和接收，并在房间内广播给所有用户",
      "前端采用 Ant Design 组件库进行界面设计，提供良好的用户体验",
      "使用 Flask-SocketIO 处理 WebSocket 连接，确保高效稳定的实时通信",
    ],
    isResume: false,
  },
  // 其他项目数据...
];

// Formattor - JS 代码格式化工具
// 基于编译原理实现的 JavaScript 代码格式化工具，支持 JSX、ES6+ 等；
// 使用 espree 工具完成源代码的语法和词法分析，编译生成抽象语法树 AST；
// 实现 AST 遍历器 traverse，通过深度遍历，访问 AST 树节点属性；
// 实现代码生成器 codeGen，根据格式化规则，把 AST 树转译成目标代码；

// 用户密码实现加盐加密、CSRF token 防御等多级手段提高安全性，保障用户数据的安全。
// 帖子发表、修改、删除、话题板块选择， Markdown 格式支持， 回复/阅读量显示。

// g-echart：自制可视化库，实现柱形图和折线图。
//  2. g-pinyin：简易拼音输入法。
//  3. g-formatter：在线 js 代码格式化工具。
//   4. g-game-framework：基于自制游戏引擎，实现 cxk basktetball、flappy bird 和stick hero 等游戏。
//   5. g-console：实现类似腾讯 vConsole 中控制台功能，可以打印数组、对象、字符串、数字、布尔值等。
//   6. g-avatar：用户可以直接上传或者拍照上传头像，然后点击相应的主题之后，选择相应的挂件或者滤 镜效果来装饰头像。
//   7. g-search：用户在输入框内填写搜索的内容，点击选择相应引擎，即可搜索相应内容，
//   支持相应主 题和模式切换切换，并且网址收藏，搜索历史关键字展示功能等功能。 
//   宝可梦乐园
//   1. Card: 纸牌能够一起被拖入另一列。
//   2. Sweeping： 用户右键可以标记雷，可以记录时间，第一次点击必不为雷。「像素扫雷」
//   3. Popstar: 用户选择的六只宝可梦，才能体验 Popstar 游戏。
//    4. Link: 用户点击两个相同的宝可梦，才能显示路径，同时消除宝可梦。
//     5. Puzzle: 用户用鼠标点击空白处，或者键盘按 wsad 来移动图块。
// 6. Fill: 用户点击宝可梦，来填充整个画布，同时可以设置主题或者画布的宽高。
