# AI 产品观察档案作品集

一个克制、编辑型的个人作品集网站骨架，方向是 AI 产品观察 / 技术转译 / 选题策划。当前内容均为 placeholder，便于后续替换成真实项目与笔记。

## 文件结构

```txt
.
├── index.html
├── package.json
├── vercel.json
├── public/
│   ├── assets/
│   │   └── signal-field.png
│   └── content-assets/       # 内容附件（图片、PDF 等）
│       ├── works/
│       └── notes/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── BackLink.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── NotFoundState.jsx
│   │   ├── NotesTimeline.jsx
│   │   ├── ScreenshotPlaceholder.jsx
│   │   ├── TagList.jsx
│   │   ├── TextBlockRenderer.jsx
│   │   ├── WorkIndex.jsx
│   │   └── icons.jsx
│   ├── content/              # 正文内容目录
│   │   ├── index.js          # 内容索引
│   │   ├── works/            # 作品正文
│   │   │   ├── minddock.js
│   │   │   ├── vibedoc.js
│   │   │   └── ...
│   │   └── notes/            # 笔记正文
│   │       ├── demo-is-not-product.js
│   │       └── ...
│   ├── data/
│   │   └── portfolio.js      # 元数据与内部链接
│   ├── main.jsx
│   ├── pages/
│   │   ├── ArchivePage.jsx
│   │   ├── NoteDetailPage.jsx
│   │   └── WorkDetailPage.jsx
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

## 路由

站点使用 `react-router-dom`，路由如下：

- `/` — 首页（Index / Work / Notes / About）
- `/archive` — 归档页，列出所有 Work 和 Notes
- `/work/:slug` — 作品详情页
- `/notes/:slug` — 笔记详情页

未知 slug 会显示 Not Found 状态。

## 如何更新站内信息

内容分成两层维护：

1. **元数据层**：`src/data/portfolio.js` —— 只放标题、摘要、分类、状态、关联关系等。
2. **正文层**：`src/content/works/` 和 `src/content/notes/` —— 放详情页正文、截图 label、附件引用等。

两者通过 `slug` 进行内部关联。详情页会根据 slug 自动从 `src/content/index.js` 中读取对应正文。

### 1. 站点元信息

```js
portfolio.meta
```

- `name`：站点名称
- `owner`：页脚显示的姓名
- `role`：副标题 / 身份定位
- `year`、`language`：头部右侧信息

### 2. 首页

```js
portfolio.hero
```

- `title`、`lead`、`body`：首页大标题、导语、个人定位
- `entries`：首页精选条目列表
- `signalSteps`：右侧方法步骤

### 3. 作品索引（元数据）

```js
portfolio.work
```

- `filters`：筛选按钮标签
- `items`：作品列表，每个条目只包含元数据：
  - `id`：显示编号，如 `PROJECT 01`
  - `slug`：URL 标识，如 `minddock`，对应 `/work/minddock`
  - `title`、`subtitle`、`summary`：标题、副标题、摘要
  - `category`、`categoryEn`：中文分类与英文分类
  - `time`：时间
  - `status`：项目状态，如 `Shipped` / `Prototype` / `Archived`
  - `role`：你在项目中的角色
  - `featured`：设为 `true` 会在首页左侧显示高亮竖线
  - `relatedNoteSlugs`：关联笔记的 slug 数组

### 4. 作品正文

对应文件：`src/content/works/<slug>.js`

例如 `src/content/works/minddock.js`：

```js
export default {
  detailSections: [
    {
      title: "背景",
      paragraphs: [
        "这里是项目背景占位文本。后续可替换为真实的产品观察背景、研究动机与问题定义。",
      ],
    },
  ],
  screenshots: ["概览", "流程", "细节"],
};
```

**新增或修改作品：**

1. 在 `portfolio.work.items` 中新增/修改元数据对象，确保 `slug` 唯一。
2. 在 `src/content/works/<slug>.js` 中创建同名文件，写入 `detailSections` 和 `screenshots`。
3. 在 `src/content/index.js` 中导入并注册到 `workContent`。
4. 如需关联笔记，把笔记的 `slug` 写入 `portfolio.work.items[].relatedNoteSlugs`。

### 5. 观察笔记（元数据）

```js
portfolio.notes
```

- `months`：左侧月份索引
- `items`：笔记列表，每个条目只包含元数据：
  - `id`：内部编号
  - `slug`：URL 标识，如 `demo-is-not-product`
  - `month`、`day`、`weekday`：时间信息
  - `title`、`summary`：标题与摘要
  - `type`：笔记类型，如 `Observation` / `Translation` / `Analysis`
  - `status`：状态，如 `Published` / `Draft`
  - `tags`：标签数组
  - `method`、`signal`、`question`：方法、信号、问题
  - `sourceLink`：可选原文/来源链接
  - `relatedWorkSlugs`：关联作品的 slug 数组

### 6. 笔记正文

对应文件：`src/content/notes/<slug>.js`

例如 `src/content/notes/demo-is-not-product.js`：

```js
export default {
  blocks: [
    { type: "paragraph", content: "..." },
    { type: "heading", content: "观察要点" },
    { type: "quote", content: "..." },
    { type: "list", items: ["...", "..."] },
    { type: "divider" },
  ],
};
```

支持的 block 类型：

- `paragraph`
- `heading`
- `quote`
- `list`（需配合 `items` 数组）
- `divider`

**新增或修改笔记：**

1. 在 `portfolio.notes.items` 中新增/修改元数据对象，确保 `slug` 唯一。
2. 把时间归入已有的某个月份，或在 `portfolio.notes.months` 中新增月份。
3. 在 `src/content/notes/<slug>.js` 中创建同名文件，写入 `blocks`。
4. 在 `src/content/index.js` 中导入并注册到 `noteContent`。
5. 如需关联作品，把作品的 `slug` 写入 `portfolio.notes.items[].relatedWorkSlugs`。

### 7. 归档页

```js
portfolio.archive
```

- `title`、`subtitle`：归档页标题与副标题

归档页会自动读取 `portfolio.work.items` 和 `portfolio.notes.items` 渲染，无需单独维护列表。

### 8. 关于与联系方式

```js
portfolio.about
```

- `paragraphs`：关于我段落
- `capabilities`：能力索引
- `methods`：工作方法
- `contact`：邮箱、电话、社交账号、位置

小红书主页修改 `portfolio.about.contact.social` 和 `portfolio.about.contact.socialUrl`。

### 9. 附件

图片、PDF 等附件建议放在 `public/content-assets/` 下：

```txt
public/content-assets/
├── works/
│   └── minddock/
│       └── screenshot-1.png
└── notes/
    └── demo-is-not-product/
        └── reference.pdf
```

正文中引用时使用绝对路径：

```js
{
  type: "paragraph",
  content: "见附图：",
}
// 或在 content 模块中导出附件列表，后续组件扩展渲染
```

目前 `screenshots` 仍使用线框占位图 label，后续如需真实图片，可以把图片放入 `public/content-assets/works/<slug>/`，并在对应 content 模块中扩展 `attachments` 字段。

### 10. 视觉与样式

- 全局样式集中在 `src/styles/main.css`，可从 `:root` 调整背景、文字、分割线和 accent 色。
- 视觉占位图在 `public/assets/signal-field.png`，可以替换为自己的研究图、内容地图或项目视觉。
- 头部 logo 在 `src/components/Header.jsx`，hover 小动效由 `.brand-mark` 系列样式控制，动效被限制在 logo 方框内。

## 设计约束

- 页面使用细线、留白、索引、列表和时间线建立层级。
- 不依赖 shadcn，不使用大卡片网格、厚重阴影、玻璃拟态或 SaaS landing page 结构。
- 详情页保持线性阅读体验，图片先用线框占位，后续再替换真实截图。
