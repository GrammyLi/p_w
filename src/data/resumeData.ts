// src/data/resume.ts
export interface Skill {
  category: string;
  details: string[];
}

export interface Job {
  companyName: string;
  position: string;
  time: string;
  projects: Project[];
}

export interface Project {
  name: string;
  cover?: string;
  link?: string;
  details: string[];
}

export interface Education {
  institution: string;
  period: string;
  major: string;
}

export interface Resume {
  name: string;
  phone: string;
  email: string;
  wechat: string;
  website: string;
  objective: string;
  skills: Skill[];
  jobs: Job[];
  education: Education[];
}

export const resumeData: Resume = {
  name: "李朝",
  phone: "15927762230",
  email: "grammyli@outlook.com",
  wechat: "grammyli",
  website: "https://grammyli.com/",
  objective:
    "21届毕业，全日制本科，计算机科学与技术专业，校招在腾讯 CSIG Wecity 团队，负责会议和 TDGV 模板页面框架前端开发。如今在北京一览 AI 团队，从事 AIGC 产品前端开发,负责 AI 绘图、海报、数字人、视频、混剪等重要模块的开发与重构。",
  skills: [
    {
      category: "个人技能",
      details: [
        "熟练掌握 JavaScript (ES6+)、TypeScript、HTML5 和 CSS3",
        "熟练掌握流行框架如 React/React-Router/Redux、 Vue/Vue-Router/Vuex、Taro",
        "深入理解框架核心原理 ，如 JSX 编译、Fibers、Diff 等",
        "熟练掌握 BOM、DOM、AJAX、HTTP、Canvas 动画等 Web 开发技术",
        "熟练使用 jQuery、Lodash、Echarts 等常用第三方库，以及Element UI、Ant Design 等前端 UI库",
        "理解模块化开发 ，熟练掌握 Babel、Gulp、Webpack等工具链",
        "熟悉 Webpack 配置，能够编写自定义的 loader、 plugin，理解并实现 Gulp 插件",
        "掌握编译原理在前端的实践方法 ，熟悉词法分析、语法分析、AST 构造和代码生成的流程",
        "能够基于编译原理独立实现 JSON 解析、JS 代码格式化",
        "熟练使用 GPT 来写需求代码，例如封装组件、优化代码、封装 hook 或者定位问题等",
        "熟悉 Node.js 常用模块， 能够使用 Node.js 结合 Express 框架，实现网络请求与网页分析",
        "熟练掌握 Python Flask Web 开发，掌握 Flask 中模板渲染、蓝图注册等功能的使用",
        "熟悉 Websocket 协议，对接云小微实现语音字幕显示功能, 并且实现多人聊天室",
        "掌握 Git 的提交、拉取、合并、推送等操作，能熟练使用 Git 工具进行版 本控制或项目管理",
        "已通过 CET 4，并有海外项目开发经验，查阅全英文档无障碍",
      ],
    },
    // {
    //   category: "后端技能",
    //   details: [
    //     // "熟悉 Node.js 常用模块， 能够使用 Node.js 结合 Express 框架，实现网络请求与网页分析",
    //     "熟练掌握 Python Flask Web 开发，掌握 Flask 中模板渲染、蓝图注册等功能的使用",
    //     "熟悉 Websocket 协议，对接云小微实现语音字幕显示功能, 并且自己实现聊天室",
    //     "深入理解 MVC 原理，掌握 MVC 模式的 Web 架构的工作原理",
    //     "具备基本的 Web 安全知识（SQL 注入等）",
    //   ],
    // },
  ],
  jobs: [
    {
      companyName: "北京一览科技",
      position: "AI研发部 - 前端开发工程师",
      time: "2022-02-至今",
      projects: [
        {
          name: "企业版运营宝 (React + Typescript + Ant + Less)",
          details: [
            "参与 AIGC 产品的迭代开发，负责开发产品的 Ai 绘图、编剧、海报、数字人、混剪、视频和官网等模块, 以及企业版本的重点功能图文模块，对文章内容洗稿、图片洗图、图生文、OCR、制作海报等操作",
            "对系统进⾏功能分析和组件设计，二次封装多个 React 基础组件、业务组件多个通⽤组件、hook以及⼯具函数，帮助团队提⾼效率",
            "独⽴完成质量模型核⼼功能的架构设计，通过参数化配置实现⼀套代码满⾜多种场景",
            "承担多个模块的重构⼯作，包括⽅法提取、组件抽离、算法优化等，有效提⾼代码质量",
          ],
        },
        {
          name: "Ai 一览绘图、运营宝小程序 (React + Typescript + Taro + Less)",
          details: [
            "负责开发产品的画廊、绘图活动运营位、文生图、图生图、百宝箱、订单广场等模块",
            "完成 PC、H5、小程序各端开发任务，能够对已有 UI组件库，工具库进行模块化设计开发",
            "对系统进⾏功能分析和组件设计，封装了多个通⽤组件和多个⼯具函数，缩短工期",
          ],
        },
      ],
    },
    {
      companyName: "北京蒸汽记忆科技有限公司",
      position: "应用集成 - 前端开发工程师",
      time: "2021.06 – 2022.01",
      projects: [
        // {
        //   name: "Authing 控制台 （React + Ant + TypeScript + Less + Webpack）",
        //   details: [
        //     "独立开发并维护 Authing 控制台的核心模块，包括多租户控制台、管理员控制台，应用外显和计量计费功能的开发等",
        //     "负责应用外显和计量计费功能的开发，有效降低用户使用集成应用的成本",
        //     "实现管理员权限管理功能，包括菜单配置、应用选择、管理员详情管理等",
        //     "参与多租户控制台的配置管理，完成批量导入租户、批量通知管理员等功能开发",
        //   ],
        // },
      ],
    },
    {
      companyName: "重庆腾讯信息技术有限公司",
      position: "CSIG Wecity - 前端开发工程师",
      time: "2021.06 – 2022.06",
      projects: [
        {
          name: "融合通信（Vue + Vuex + Td + Scss + Webpack + WeDa）",
          details: [
            "独立负责腾讯会议模块的前端开发，包括会议预定、人员邀请、电话短信通知等功能",
            "完成PC端会议预定模块的开发，包括会议创建、显示、编辑、取消等功能，并确保与腾讯会议的无缝集成",
            "基于 WeDa（low-code）平台开发移动端会议管理模块，实现会议首页、记录、会议详情等功能",
            // "参与短信和电话通知模块的开发，优化会议通知流程.",
            // "解决多端适配问题，保证大屏、中屏和移动端的一致性，并提升产品的跨平台兼容性。",
          ],
        },
        {
          name: "税务框架组件 TDGV (Vue + Vuex + Td + Less)",
          details: [
            "解决 IE 浏览器兼容性问题、优化 Mock 文件的生成流程，并输出详细的说明文档",
            // "抽取并优化结果反馈页面中的常用组件，提升组件的可维护性和复用性",
            // "优化 Mock 文件的生成流程，通过约定式配置提高业务开发效率，并输出详细的说明文档",
            "使用此框架完成一网统管项目中的站内信模块开发，实现站内信的配置、预览、筛选等功能",
          ],
        },
      ],
    },
    {
      companyName: "ponyCody",
      position: "远程实习-Web 前端开发工程师",
      time: "2020.07 – 2021.05",
      projects: [
        {
          name: "家校教室管理系统、艺术馆系统平台 (React + Redux + Ant + Less)",
          details: [
            "独立完成班级管理、考试、作业、签到、课程表、成绩单等模块的开发",
            // "通过创新的业务逻辑解决方案，与美国团队远程合作，确保项目按时交付并符合需求",
            // "解决系统的自适应问题，支持横屏、悬浮弹窗等功能",
            "经历整个研发周期，负责艺术馆系统平台约 100% 的前端开发⼯作",
            // "使用 Echarts 实现复杂的可视化图表，满足多种业务场景的需求",
            "对 Axios 进行二次封装，优化请求和响应拦截器，实现统一的异常处理，提高系统的健壮性",
          ],
        },
        // {
        //   name: "艺术馆系统平台 (React + Redux + Ant + Axios + Less)",
        //   details: [
        //     "经历整个研发周期，负责约 100% 的前端开发⼯作，如首页、展览、管理员等核心模块",
        //     "实现视频、图片、音频等文件的上传、显示、删除和在线下载功能",
        //     "对 Axios 进行二次封装，优化请求和响应拦截器，实现统一的异常处理，提高系统的健壮性",
        //     "封装并优化 Ant 组件，提高公共业务组件的复用率，确保系统的一致性和可维护性",
        //   ],
        // },
      ],
    },
  ],

  education: [
    {
      institution: "文华学院",
      period: "2017.09 - 2021.06",
      major: "计算机科学与技术 全日制本科",
    },
  ],
};

//   利用 Vue2、Vue3、Node.js、TypeScript 等技术完成 PC、H5、小程序各端开发任务，能够对已有 UI
// 组件库，工具库进行模块化设计开发
// 经历整个研发周期，负责约 50% 的前端开发⼯作，如复杂图表和表单设计、公式编译⼯具、报 告⽣成与打印、复杂树形数据处理等等；
//  对系统进⾏功能分析和组件设计，封装了 8 个通⽤组件和多个⼯具函数，帮助团队提⾼效率；
//  独⽴完成质量模型核⼼功能的架构设计，通过参数化配置实现⼀套代码满⾜ 10 多种场景；
// 承担 4 个模块的重构⼯作，包括⽅法提取、组件抽离、算法优化等，有效提⾼代码质量；

/**
   * 
   * 经历整个研发周期，负责约 80% 的前端开发⼯作，如⾃定义模块、⽆限轮播、动画交互等； 
   * 对系统进⾏功能分析和组件设计，封装了 20 多个通⽤组件和多个⼯具函数，⼯期缩短 1 周；
   *  独⽴完成基于 Three.js 的 3D 模块开发，并与后端制定数据规范，满⾜ 3D 展示和交互需求；
   *  独⽴完成图表定制化模块的架构设计，并与后端制定数据规范和配置⽅法，实现⼀套代码配置
  20 多个详情⻚⾯的样式布局；
   */
