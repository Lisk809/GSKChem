<div align="center">
  
# 🧪 GSKChem · 化竞幻想乡

**现代化化学竞赛研习平台 | 联考测评 · 社刊阅览 · 学术社区**

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/lisk809/GSKChem?style=social)](https://github.com/lisk809/GSKChem/stargazers)
[![Forks](https://img.shields.io/github/forks/lisk809/GSKChem?style=social)](https://github.com/lisk809/GSKChem/network/members)
[![Issues](https://img.shields.io/github/issues/lisk809/GSKChem)](https://github.com/lisk809/GSKChem/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/lisk809/GSKChem/pulls)

</div>

---

## 📖 简介

**GSKChem** 是一个专为化学竞赛生与爱好者打造的一站式学术平台。提供高质量联考模拟、社刊《燕石博物志》在线阅读、答题卡收集系统，以及优雅的社区登录注册体验。采用 **Vue 3 + TypeScript + Vite** 构建，风格融合 **拟态风格 + Material Design**，支持**深色/浅色主题**切换。

> “冀以尘雾之微，补益山海；萤烛末光，增辉日月。” —— 铃奈庵命题组

![项目预览](https://socialify.git.ci/lisk809/GSKChem/image?language=1&owner=1&name=1&stargazers=1&theme=Light)  

---

## ✨ 核心功能

- 🧪 **GSKChem联考** – 定期发布高质量化学模拟试题，支持答题卡上传（开发中）
- 📘 **燕石博物志** – 社刊 PDF 在线预览与下载，优雅衬线字体阅读体验
- 🌓 **深色/浅色主题** – 跟随系统或手动切换，保护眼睛
- 🔐 **用户系统** – 邮箱/QQ 注册登录，记住我功能（前端演示，后端待接入）
- 🎨 **拟态风格 UI** – 柔和光影、毛玻璃导航栏、圆润卡片
- 📱 **完全响应式** – 手机、平板、桌面自适应

---

## 🛠️ 技术栈

| 类别               | 技术                                                         |
| ------------------ | ------------------------------------------------------------ |
| **前端框架**       | Vue 3 (Composition API + `<script setup>`)                   |
| **语言**           | TypeScript                                                   |
| **构建工具**       | Vite                                                         |
| **路由**           | Vue Router 4                                                 |
| **样式**           | CSS 变量 + 拟态设计 + CSS Grid / Flexbox                     |
| **图标**           | Font Awesome 6                                               |
| **字体**           | Inter (无衬线) + Georgia (衬线标题)                          |
| **代码规范**       | ESLint + Prettier (推荐)                                     |

---

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18
- npm 或 pnpm

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/lisk809/GSKChem.git
cd GSKChem

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

访问 http://localhost:5173 即可体验。

---

📂 项目结构

```
GSKChem/
├── public/               # 静态资源（favicon、社刊PDF）
├── src/
│   ├── views/            # 页面组件（Home, Exam, Login, Bowuzhi）
│   ├── router/           # Vue Router 配置
│   ├── App.vue           # 根组件（含顶栏菜单、主题切换）
│   ├── main.ts           # 入口文件
│   └── style.css         # 全局主题变量与拟态样式
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

🎨 设计亮点

· Claude 风格衬线标题 + 无衬线正文，兼具优雅与可读性。
· 拟态元素：按钮采用内阴影 + 外阴影，模拟轻微凹凸质感。
· 动态菜单：顶栏仅一个按钮，点击展开下拉面板，带旋转 SVG 动画。
· 主题切换：CSS 变量驱动，无闪烁过渡，持久化存储用户偏好。
· SEO 优化：动态标题、meta 描述、Open Graph 标签、sitemap 自动生成脚本。

---

📄 社刊预览

《燕石博物志》创刊号现已发布，可在网站内直接预览 PDF：

https://via.placeholder.com/600x300?text=Journal+Preview

---

🤝 贡献指南

欢迎参与铃奈庵命题组！你可以通过以下方式贡献：

1. Fork 本仓库
2. 创建特性分支 (git checkout -b feature/amazing-feature)
3. 提交更改 (git commit -m 'Add some amazing feature')
4. 推送到分支 (git push origin feature/amazing-feature)
5. 开启 Pull Request

详见 CONTRIBUTING.md（待补充）。

---

📜 开源协议

本项目采用 MIT 许可证。详情见 LICENSE 文件。

---

🌟 致谢

· 铃奈庵命题组全体成员
· 所有化学竞赛爱好者与贡献者

<div align="center">

如果觉得这个项目对你有帮助，请给一个 ⭐️ 支持我们！

报告 Bug · 请求功能 · 加入讨论

</div>