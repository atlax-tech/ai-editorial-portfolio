# AI 产品观察档案作品集

一个克制、编辑型的个人作品集网站骨架，方向是 AI 产品观察 / 技术转译 / 选题策划。当前内容均为 placeholder，便于后续替换成真实项目与笔记。

## 文件结构

```txt
.
├── index.html
├── package.json
├── public/
│   └── assets/
│       └── signal-field.png
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── NotesTimeline.jsx
│   │   ├── WorkIndex.jsx
│   │   └── icons.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── main.jsx
│   └── styles/
│       └── main.css
└── vite.config.js
```

## 运行方式

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 如何替换内容

- 主要文案和列表都在 `src/data/portfolio.js`。优先改这里，不需要先动组件。
- 首页标题、定位句、精选条目：修改 `portfolio.hero`。
- 作品索引、筛选分类、项目摘要：修改 `portfolio.work.filters` 和 `portfolio.work.items`。
- 观察笔记、月份索引、方法 / 信号 / 问题：修改 `portfolio.notes.months` 和 `portfolio.notes.items`。
- 关于、能力索引、工作方法、联系方式：修改 `portfolio.about`。
- 页脚姓名：修改 `portfolio.meta.owner`。
- 小红书主页：修改 `portfolio.about.contact.social` 和 `portfolio.about.contact.socialUrl`。
- 视觉占位图在 `public/assets/signal-field.png`，可以替换为你自己的研究图、内容地图或项目视觉。
- 头部 logo 在 `src/components/Header.jsx`，hover 小动效由 `src/styles/main.css` 中的 `.brand-mark` 系列样式控制，动效被限制在 logo 方框内。

## 设计约束

- 页面使用细线、留白、索引、列表和时间线建立层级。
- 不依赖 shadcn，不使用大卡片网格、厚重阴影、玻璃拟态或 SaaS landing page 结构。
- 全局样式集中在 `src/styles/main.css`，可从 `:root` 中调整背景、文字、分割线和蓝色 accent。
