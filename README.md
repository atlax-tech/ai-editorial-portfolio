# 路启隆｜AI Agent 工程作品集

聚焦企业 Agent 交付、上下文工程与运行可靠性。保留原有单栏编辑式布局、索引、时间线、项目切换和明暗主题，内容与中文简历保持一致。

## 本地运行

```bash
npm install
npm run dev
npm run build
```

Vite 的站点前缀为 `/ai-editorial-portfolio/`。构建结果输出到 `dist/`，构建后复制 `index.html` 为 `404.html` 以支持 GitHub Pages 的详情页入口。

## 当前项目与贡献

- **Synora-Agentic-ERP**：独立项目负责人；Agent 编排、ERP 审批执行、幂等与异常对账，真实 ERPNext 开发环境采购闭环验收。
- **Harness Armor**：项目设计与开发；7 个 Agent Skills，v0.1.2 的 55/55 本地测试及 12/12 跨平台 CI 矩阵。
- **codex-with-chatgpt**：项目级会话架构与代码贡献、Bridge 三态诊断和恢复控制；详情页链接架构提交、PR、上游实现和两次发布说明。
- **dsh-desktop**：模型配置兼容性修复；PR #291 已合并，9 项针对性回归及真实 Provider 调用验证。

项目内的交互视图是工程链路示意。交付结果以详情页的工程证据、代码、PR 和发布说明为依据。

## 内容维护

- `src/data/portfolio.js`：身份、联系方式、项目、贡献、技术笔记的元数据与项目详情。`portfolio.notes.items` 是当前对外展示的工程笔记；`historicalNotes` 保留旧文章的原地址，不进入首页和归档索引。
- `src/content/notes/`：笔记正文。`src/content/index.js` 按 slug 注册正文；三篇精选笔记附有 2026 年 10 月工程实践补记，原研究窗口保留。
- `src/components/WorkIndex.jsx`：首页项目选择与缩略工程视图。
- `src/components/ProjectShowcase.jsx`：详情页的工程链路示意与键盘可操作标签。
- `src/styles/main.css`：原有样式、主题与响应式规则。
- `index.html`：搜索摘要、页面标题和站点图标。

新增项目时同步更新 `portfolio.work.items`、`portfolio.hero.entries`、关联笔记 slug；每个项目的 `screens` 使用四个节点，以匹配现有项目展示布局。`evidenceLinks` 放可直接追溯的 GitHub 提交、PR 或发布说明。

## 路由

- `/`：关于我、工作流、精选笔记、工程笔记时间线、项目案例及联系方式。
- `/archive`：当前工程项目与笔记索引。
- `/work/:slug`：项目或开源贡献详情。
- `/notes/:slug`：当前及历史笔记详情。

未知 slug 显示 Not Found。被替换的 MindDock、AgentDock 不再作为当前项目展示；历史文章正文保留。

## 发布

仓库使用 GitHub Pages 工作流，在推送 `main` 后自动构建和部署。发布后检查线上首页和详情页，再将主页链接加入简历。
