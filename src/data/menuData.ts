export interface MenuItem {
  key: string;
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { key: "home", label: "首页", path: "/" },
  { key: "about", label: "简介", path: "/about" },
  { key: "projects", label: "项目", path: "/projects" },
  { key: "resume", label: "简历", path: "/resume" },
  { key: "avatar", label: "头像", path: "/avatar" },
  { key: "filter", label: "滤镜", path: "/filter" },
  { key: "3d", label: "3d", path: "/3d" },

  // { key: "popstar", label: "消消乐", path: "/popstar" },
];
