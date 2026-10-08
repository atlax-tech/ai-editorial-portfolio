export const portfolio = {
  "meta": {
    "name": "ATLAX-TECH / AI Agent 工程",
    "owner": "Qilong Lu / 路启隆",
    "role": "AI Agent 应用工程师",
    "year": "2026",
    "language": "CN"
  },
  "navItems": [
    {
      "id": "about",
      "number": "01",
      "label": "ABOUT",
      "title": "关于我"
    },
    {
      "id": "index",
      "number": "02",
      "label": "O-VIEW",
      "title": "AI 工作流"
    },
    {
      "id": "notes",
      "number": "03",
      "label": "NOTES",
      "title": "观察笔记"
    },
    {
      "id": "work",
      "number": "04",
      "label": "WORK",
      "title": "作品索引"
    }
  ],
  "hero": {
    "count": "02 / 04",
    "identity": "路启隆 / AI AGENT ENGINEER",
    "title": "AI Agent 工程档案",
    "lead": "把模型能力接入真实业务，交付可执行、可验证、可恢复的 Agent 工作流。",
    "body": "专注 Agent 编排、上下文工程与运行可靠性。从企业 ERP 交付经验出发，把业务目标落到工具调用、审批执行与结果验收。",
    "entries": [
      {
        "id": "01",
        "slug": "synora-agentic-erp",
        "title": "Synora-Agentic-ERP",
        "type": "Enterprise Agent",
        "time": "独立项目"
      },
      {
        "id": "02",
        "slug": "harness-armor",
        "title": "Harness Armor",
        "type": "Agent Skills",
        "time": "独立项目"
      },
      {
        "id": "03",
        "slug": "codex-with-chatgpt",
        "title": "codex-with-chatgpt",
        "type": "Agent Infrastructure",
        "time": "开源贡献"
      },
      {
        "id": "04",
        "slug": "dsh-desktop",
        "title": "dsh-desktop",
        "type": "Model Integration",
        "time": "开源贡献"
      }
    ],
    "theses": [
      {
        "id": "01",
        "label": "PRODUCT",
        "statement": "AI 降低的是做出来的门槛，不是想清楚的门槛。"
      },
      {
        "id": "02",
        "label": "AGENT",
        "statement": "真正的问题不是 AI 会不会做，而是人能不能验收它做得对不对。"
      },
      {
        "id": "03",
        "label": "ENGINEERING",
        "statement": "上下文、执行边界与验收证据，决定 Agent 能承接多复杂的工作。"
      }
    ]
  },
  "archive": {
    "title": "Archive",
    "subtitle": "Agent engineering, open-source contributions and technical notes."
  },
  "editorialPicks": {
    "title": "Agent 技术思考",
    "label": "ENGINEERING NOTES",
    "description": "从 Agent 控制、工程上下文与检索边界，理解我做架构决策的出发点。",
    "items": [
      {
        "slug": "ai-agent-control-problem",
        "reason": "从目标、权限、状态与失败出口，理解 Synora 的审批和执行可靠性设计。"
      },
      {
        "slug": "harness-engineering-is-not-prompt-template",
        "reason": "把 Coding Agent 的上下文、变更边界和验收规则落实为 Harness Armor。"
      },
      {
        "slug": "rag-is-not-a-magic-memory",
        "reason": "检索价值来自来源、版本和权限，而不是让模型声称它记得。"
      }
    ]
  },
  "work": {
    "count": "04 / 04",
    "title": "我不把 AI 当成一个功能。",
    "statement": "我把它设计成可执行、可验证、可恢复的工作流。",
    "description": "两个独立工程项目与两项开源贡献，覆盖企业 Agent、上下文工程、运行状态机与模型集成。",
    "filters": [
      "全部"
    ],
    "items": [
      {
        "id": "PC—01",
        "slug": "synora-agentic-erp",
        "title": "Synora-Agentic-ERP",
        "subtitle": "企业采购运营 Agent",
        "positioning": "独立设计并交付 Agent Runtime 与 ERP 控制层，把自然语言采购目标推进为实际业务结果。",
        "categoryEn": "Enterprise Agent",
        "category": "Enterprise Agent",
        "status": "真实 ERPNext 开发环境采购闭环已验收 · 持续迭代",
        "time": "2026",
        "role": "独立项目负责人",
        "repoUrl": "https://github.com/atlax-tech/Synora-Agentic-ERP",
        "accent": "amber",
        "summary": "独立设计并交付 Agent Runtime 与 ERP 控制层，把自然语言采购目标推进为实际业务结果。",
        "memorableLine": "Agent 的完成标准，应该是业务状态闭环，而不是一段“已完成”的回答。",
        "homePoints": [
          "模型编排与事务执行分离",
          "可中断、可恢复的任务执行",
          "审批、幂等与未知结果对账"
        ],
        "whyBuilt": [
          "企业采购包含订单、收货、开票和付款，单次工具调用成功无法证明整个业务目标完成。",
          "我独立负责架构、阶段规划、工程约束和验收标准，将模型规划与 ERP 事务执行分离，并用 AI 编程工具加速实现、测试与方案讨论。"
        ],
        "productHypothesis": "Agent 的完成标准，应该是业务状态闭环，而不是一段“已完成”的回答。",
        "interfaceConcept": "选择四个工程节点，查看设计边界、实现链路与结果证据。",
        "editorialAngle": "企业 Agent 的价值，是把模型规划接入企业系统已有的权限、审批与事务规则。",
        "designDecisions": [
          {
            "title": "模型编排与事务执行分离",
            "description": "Python / FastAPI / Pydantic 强类型网关连接模型与 Frappe / ERPNext；自然语言目标转为数据查询、计划与动作提议，保留企业权限、审批和事务规则。"
          },
          {
            "title": "可中断、可恢复的任务执行",
            "description": "有工具白名单、参数校验与步数/时间预算的 ReAct 内核；Plan-and-Execute 通过 checkpoint、状态版本和调用记录支持澄清、中断及重启恢复。"
          },
          {
            "title": "审批、幂等与未知结果对账",
            "description": "动作状态机串联审批、执行前复验、幂等键和回执；响应丢失时避免重复建单，未知结果暂停执行并进入对账。"
          }
        ],
        "systemFlow": [
          "采购目标与现状查询",
          "计划与动作提议",
          "人工审批及状态复验",
          "ERP 执行与回执",
          "业务结果核验与关闭"
        ],
        "engineeringProof": [
          "真实 ERPNext 开发环境完成采购订单提交、两次部分收货、两张发票及三次付款，覆盖 15 个独立审批动作。",
          "对响应丢失、事务已提交但回执缺失开展故障注入，验证重放不重复建单，以及未知结果暂停和对账路径。",
          "FTS5 / BM25 检索保留来源、版本与权限范围；对向量、混合检索和 Rerank 做对照评估，以质量与资源开销选择方案。"
        ],
        "learned": [
          "企业 Agent 的价值，是把模型规划接入企业系统已有的权限、审批与事务规则。",
          "失败恢复需要明确状态、幂等执行与结果对账，不能只靠重试。",
          "采购任务是否关闭，应由实际收货、开票与未结金额驱动。"
        ],
        "currentStatus": "真实 ERPNext 开发环境采购闭环已验收 · 持续迭代",
        "relatedNoteSlugs": [
          "ai-agent-control-problem",
          "rag-is-not-a-magic-memory",
          "demo-is-not-product"
        ],
        "screens": [
          {
            "id": "01",
            "name": "目标与计划",
            "type": "engineering",
            "description": "自然语言目标 → 查询 → 动作提议"
          },
          {
            "id": "02",
            "name": "审批与执行",
            "type": "engineering",
            "description": "人工审批 → 状态复验 → 幂等执行"
          },
          {
            "id": "03",
            "name": "异常与恢复",
            "type": "engineering",
            "description": "未知结果暂停 → ERP 对账 → 恢复"
          },
          {
            "id": "04",
            "name": "结果与验收",
            "type": "engineering",
            "description": "收货、开票与未结金额共同驱动关闭"
          }
        ],
        "evidenceLinks": []
      },
      {
        "id": "PC—02",
        "slug": "harness-armor",
        "title": "Harness Armor",
        "subtitle": "AI 编程工作流与 Agent Skills",
        "positioning": "设计 7 个 Agent Skills，将仓库上下文、变更边界与验收流程组织为可复用工作流。",
        "categoryEn": "Agent Skills",
        "category": "Agent Skills",
        "status": "开源 v0.1.2 · 55/55 本地测试 · 12/12 CI 矩阵",
        "time": "2026",
        "role": "项目设计与开发",
        "repoUrl": "https://github.com/atlax-tech/harness-armor",
        "accent": "lime",
        "summary": "设计 7 个 Agent Skills，将仓库上下文、变更边界与验收流程组织为可复用工作流。",
        "memorableLine": "让 Agent 从仓库事实开始，在明确边界内交付，用独立验证结束。",
        "homePoints": [
          "7 个 Skills 组织工作流",
          "语义理解与确定性校验分工",
          "内容所有权与验证边界"
        ],
        "whyBuilt": [
          "Coding Agent 反复探索仓库、使用过期上下文，容易在缺少统一工程约束和验收标准时偏离目标。",
          "我把仓库地图、上下文建设、健康检查、更新与执行提示生成组织成 7 个 Skills，让 Agent 从同一份工程事实开始工作。"
        ],
        "productHypothesis": "让 Agent 从仓库事实开始，在明确边界内交付，用独立验证结束。",
        "interfaceConcept": "选择四个工程节点，查看设计边界、实现链路与结果证据。",
        "editorialAngle": "工程上下文应当能更新、能校验，而不是一次生成后永久信任。",
        "designDecisions": [
          {
            "title": "7 个 Skills 组织工作流",
            "description": "覆盖仓库地图、文档建立、补建、漂移更新、健康检查、执行提示与验证，把工程上下文和完成标准连接起来。"
          },
          {
            "title": "语义理解与确定性校验分工",
            "description": "Agent 理解语义，Python / Node.js 工具负责清点与校验；用文件指纹检测文档漂移，生成文件级更新计划。"
          },
          {
            "title": "内容所有权与验证边界",
            "description": "通过内容所有权和冲突保护控制自动修改，拆分执行、测试与评审角色，保留可检查的交付证据。"
          }
        ],
        "systemFlow": [
          "仓库事实清点",
          "工程上下文建立",
          "漂移与健康检查",
          "约束内执行",
          "独立测试与评审"
        ],
        "engineeringProof": [
          "v0.1.2 完成 55/55 本地测试。",
          "12/12 GitHub Actions 跨平台矩阵任务通过，覆盖 Ubuntu、macOS、Windows 与 Node.js 18/22、Python 3.9/3.12。",
          "提供 Claude Code、Codex 等客户端的 Skills 安装布局。"
        ],
        "learned": [
          "工程上下文应当能更新、能校验，而不是一次生成后永久信任。",
          "语义任务交给 Agent，清点与校验交给确定性工具。",
          "执行、测试和评审分离，让完成有独立证据。"
        ],
        "currentStatus": "开源 v0.1.2 · 55/55 本地测试 · 12/12 CI 矩阵",
        "relatedNoteSlugs": [
          "harness-engineering-is-not-prompt-template",
          "codex-and-claude-code-are-not-ides"
        ],
        "screens": [
          {
            "id": "01",
            "name": "Repository Map",
            "type": "engineering",
            "description": "从仓库事实建立上下文"
          },
          {
            "id": "02",
            "name": "Skills Assembly",
            "type": "engineering",
            "description": "7 个 Skills 组织工程流程"
          },
          {
            "id": "03",
            "name": "Execution Boundary",
            "type": "engineering",
            "description": "内容所有权与冲突保护"
          },
          {
            "id": "04",
            "name": "Verification",
            "type": "engineering",
            "description": "独立执行、测试与评审"
          }
        ],
        "evidenceLinks": []
      },
      {
        "id": "PC—03",
        "slug": "codex-with-chatgpt",
        "title": "codex-with-chatgpt",
        "subtitle": "项目级会话架构与 Bridge 运行状态机",
        "positioning": "贡献分层会话架构和运行状态机代码，改善长期任务上下文组织与连接稳定性。",
        "categoryEn": "Agent Infrastructure",
        "category": "Agent Infrastructure",
        "status": "架构与状态机改进进入上游 · v0.1.0 / v0.1.2 特别感谢",
        "time": "2026",
        "role": "会话架构与代码贡献 · 状态机设计与修复",
        "repoUrl": "https://github.com/XiaoDuoYa/codex-with-chatgpt",
        "accent": "cobalt",
        "summary": "贡献分层会话架构和运行状态机代码，改善长期任务上下文组织与连接稳定性。",
        "memorableLine": "上下文需要按任务组织，恢复动作需要由明确状态驱动。",
        "homePoints": [
          "项目级会话架构与代码",
          "healthy / stopped / unknown 三态",
          "恢复控制保护既有连接"
        ],
        "whyBuilt": [
          "单一长对话难以承载多个项目和持续任务，需要明确项目绑定、会话生命周期及上下文交接。",
          "Bridge 健康探测失败被等同于进程停止，会触发重复启动与不必要的连接器重建，让自动恢复反而中断工作流。"
        ],
        "productHypothesis": "上下文需要按任务组织，恢复动作需要由明确状态驱动。",
        "interfaceConcept": "选择四个工程节点，查看设计边界、实现链路与结果证据。",
        "editorialAngle": "项目上下文与会话生命周期是 Agent 基础设施的架构问题。",
        "designDecisions": [
          {
            "title": "项目级会话架构与代码",
            "description": "设计并贡献 Workspace → ChatGPT Project → Session Chat 分层会话架构，覆盖状态持久化、CLI 接入、会话切换和旧模式兼容。"
          },
          {
            "title": "healthy / stopped / unknown 三态",
            "description": "定位探测误判根因，设计并提交三态诊断与恢复控制代码，区分暂时不可探测与进程退出。"
          },
          {
            "title": "恢复控制保护既有连接",
            "description": "修复误判触发的重复 Bridge 启动与连接器重建问题，保留既有连接，避免恢复过程扩大故障。"
          }
        ],
        "systemFlow": [
          "Workspace 项目边界",
          "ChatGPT Project 绑定",
          "Session Chat 生命周期",
          "Bridge 三态诊断",
          "按状态恢复与上下文交接"
        ],
        "engineeringProof": [
          "会话架构与代码贡献进入上游实现；架构提交 81673ef 记录相关协作。",
          "PR #43 提交状态机修复，上游提交 d6d0dd4 吸收诊断与恢复控制改进。",
          "在相关提交中列为共同作者，并在 v0.1.0 与 v0.1.2 发布说明中获特别感谢。"
        ],
        "learned": [
          "项目上下文与会话生命周期是 Agent 基础设施的架构问题。",
          "探测失败不是进程停止；未知状态应保留连接并继续诊断。",
          "自动恢复的首要目标是维持可用性，避免重复连接与不必要重建。"
        ],
        "currentStatus": "架构与状态机改进进入上游 · v0.1.0 / v0.1.2 特别感谢",
        "relatedNoteSlugs": [
          "ai-agent-control-problem",
          "codex-and-claude-code-are-not-ides"
        ],
        "screens": [
          {
            "id": "01",
            "name": "会话分层",
            "type": "engineering",
            "description": "Workspace → Project → Session"
          },
          {
            "id": "02",
            "name": "上下文交接",
            "type": "engineering",
            "description": "持久化、切换与旧模式兼容"
          },
          {
            "id": "03",
            "name": "三态诊断",
            "type": "engineering",
            "description": "healthy / stopped / unknown"
          },
          {
            "id": "04",
            "name": "恢复控制",
            "type": "engineering",
            "description": "防止重复启动与连接器重建"
          }
        ],
        "evidenceLinks": [
          {
            "label": "会话架构提交",
            "url": "https://github.com/XiaoDuoYa/codex-with-chatgpt/commit/81673ef9dfedf7681595cf3a34b713fe7db80dab"
          },
          {
            "label": "状态机 PR #43",
            "url": "https://github.com/XiaoDuoYa/codex-with-chatgpt/pull/43"
          },
          {
            "label": "上游状态机实现",
            "url": "https://github.com/XiaoDuoYa/codex-with-chatgpt/commit/d6d0dd4e866fd9253572fcf84d8414132838d6f9"
          },
          {
            "label": "v0.1.0 发布说明",
            "url": "https://github.com/XiaoDuoYa/codex-with-chatgpt/releases/tag/v0.1.0"
          },
          {
            "label": "v0.1.2 发布说明",
            "url": "https://github.com/XiaoDuoYa/codex-with-chatgpt/releases/tag/v0.1.2"
          }
        ]
      },
      {
        "id": "PC—04",
        "slug": "dsh-desktop",
        "title": "dsh-desktop",
        "subtitle": "自定义模型推理强度配置兼容性修复",
        "positioning": "修复推理强度配置从保存到模型选择器的传递链路，完成上游合并。",
        "categoryEn": "Model Integration",
        "category": "Model Integration",
        "status": "PR #291 已合并",
        "time": "2026",
        "role": "代码贡献 · 回归验证",
        "repoUrl": "https://github.com/dataelement/dsh-desktop/pull/291",
        "accent": "amber",
        "summary": "修复推理强度配置从保存到模型选择器的传递链路，完成上游合并。",
        "memorableLine": "配置保存只是起点，正确进入实际调用链路才是完成。",
        "homePoints": [
          "统一适配器规范字段",
          "兼容旧配置与级别别名",
          "回归与真实调用验证"
        ],
        "whyBuilt": [
          "自定义模型的推理强度配置保存后，未能正确进入模型选择器，导致配置值与可使用能力不一致。",
          "我沿配置字段、旧数据迁移、级别别名和模型对象传递链路定位并修复兼容性问题。"
        ],
        "productHypothesis": "配置保存只是起点，正确进入实际调用链路才是完成。",
        "interfaceConcept": "选择四个工程节点，查看设计边界、实现链路与结果证据。",
        "editorialAngle": "模型集成需要贯通配置、UI 选择与 Provider 调用。",
        "designDecisions": [
          {
            "title": "统一适配器规范字段",
            "description": "统一为 reasoningEfforts，让自定义模型配置与适配器契约保持一致。"
          },
          {
            "title": "兼容旧配置与级别别名",
            "description": "处理旧配置迁移和级别别名，保留完整模型配置传递。"
          },
          {
            "title": "回归与真实调用验证",
            "description": "补充 9 项针对性回归测试，完成类型检查、构建与 Ollama 自定义 Provider 真实调用验证。"
          }
        ],
        "systemFlow": [
          "自定义模型配置",
          "字段规范与迁移",
          "级别别名归一",
          "模型选择器传递",
          "Provider 调用验证"
        ],
        "engineeringProof": [
          "PR #291 已合入上游主分支。",
          "补充 9 项针对性回归测试，覆盖配置兼容与传递路径。",
          "完成类型检查、构建与 Ollama 自定义 Provider 真实调用验证。"
        ],
        "learned": [
          "模型集成需要贯通配置、UI 选择与 Provider 调用。",
          "迁移和别名兼容应在字段契约中解决。",
          "针对性回归与真实调用共同验证修复结果。"
        ],
        "currentStatus": "PR #291 已合并",
        "relatedNoteSlugs": [
          "codex-and-claude-code-are-not-ides"
        ],
        "screens": [
          {
            "id": "01",
            "name": "配置契约",
            "type": "engineering",
            "description": "reasoningEfforts 规范字段"
          },
          {
            "id": "02",
            "name": "兼容迁移",
            "type": "engineering",
            "description": "旧配置与级别别名"
          },
          {
            "id": "03",
            "name": "链路传递",
            "type": "engineering",
            "description": "完整模型配置进入选择器"
          },
          {
            "id": "04",
            "name": "验证与合并",
            "type": "engineering",
            "description": "9 项回归与真实 Provider 调用"
          }
        ],
        "evidenceLinks": [
          {
            "label": "已合并 PR #291",
            "url": "https://github.com/dataelement/dsh-desktop/pull/291"
          }
        ]
      }
    ]
  },
  "notes": {
    "count": "03 / 04",
    "title": "Agent 工程笔记",
    "description": "围绕控制边界、上下文、检索与验收，记录从产品判断到工程实践的思考。",
    "months": [
      {
        "value": "2026 / 07",
        "count": "00"
      },
      {
        "value": "2026 / 06",
        "count": "01"
      },
      {
        "value": "2026 / 05",
        "count": "01"
      },
      {
        "value": "2026 / 04",
        "count": "00"
      },
      {
        "value": "2026 / 03",
        "count": "01"
      },
      {
        "value": "2026 / 02",
        "count": "02"
      },
      {
        "value": "2026 / 01",
        "count": "01"
      }
    ],
    "items": [
      {
        "id": "note-01",
        "slug": "demo-is-not-product",
        "month": "2026 / 06",
        "researchWindow": "2026 / 06",
        "publishedAt": "2026-06-29",
        "title": "产品还是多巴胺？要看你怎么定义",
        "summary": "Vibe Coding 等工具虽能快速将想法转化为 demo，但真正挑战在于如何精准定位用户、包装产品并验证市场。",
        "type": "Observation",
        "status": "技术笔记",
        "tags": [
          "vibe coding",
          "产品思维",
          "AI 工具",
          "独立开发"
        ],
        "method": "产品观察 · 概念验证",
        "signal": "demo 完成度不等于市场匹配度",
        "question": "如何从「做出来了」走向「有人愿意用」？",
        "sourceLink": null,
        "relatedWorkSlugs": [
          "synora-agentic-erp"
        ]
      },
      {
        "id": "note-03",
        "slug": "codex-and-claude-code-are-not-ides",
        "month": "2026 / 05",
        "researchWindow": "2026 / 05",
        "plannedPublish": "Ready for editorial review",
        "title": "Codex 和 Claude Code 不是新版 IDE，它们在重写“开发者的工作边界”",
        "summary": "AI 编程工具的变化不只是补全更强，而是把任务定义、上下文组织、测试与验收推到开发工作的中心。",
        "type": "Agentic Coding",
        "status": "技术笔记",
        "tags": [
          "Codex",
          "Claude Code",
          "AI IDE",
          "Agentic Coding"
        ],
        "method": "产品对比 · 工作流拆解",
        "signal": "开发者从代码生产者转向任务定义者与验收者",
        "question": "当 AI 可以执行任务，开发者最稀缺的能力还是什么？",
        "sourceLink": "https://openai.com/index/harness-engineering/",
        "relatedWorkSlugs": [
          "harness-armor",
          "codex-with-chatgpt",
          "dsh-desktop"
        ]
      },
      {
        "id": "note-06",
        "slug": "ai-agent-control-problem",
        "month": "2026 / 03",
        "researchWindow": "2026 / 03",
        "plannedPublish": "Ready for editorial review",
        "title": "AI Agent 真正难的不是智能，而是可控",
        "summary": "Agent 的瓶颈不是能不能行动，而是用户能否看见过程、设置边界、验收结果，并在出错时及时叫停。",
        "type": "Agent Workflow",
        "status": "技术笔记",
        "tags": [
          "AI Agent",
          "Workflow",
          "Trust",
          "Human in the loop"
        ],
        "method": "实践复盘 · 控制点拆解",
        "signal": "自主性越高，状态可见与失败回滚越重要",
        "question": "一个 Agent 在什么节点必须把决定权还给人？",
        "sourceLink": "https://www.anthropic.com/engineering/claude-code-auto-mode",
        "relatedWorkSlugs": [
          "synora-agentic-erp",
          "codex-with-chatgpt"
        ]
      },
      {
        "id": "note-09",
        "slug": "harness-engineering-is-not-prompt-template",
        "month": "2026 / 02",
        "researchWindow": "2026 / 02",
        "plannedPublish": "Ready for editorial review",
        "title": "Harness Engineering 不是提示词模板，而是给 AI 上安全带",
        "summary": "Prompt 负责说明任务，Harness 负责组织权限、工具、数据、评估、反馈与回滚，让 Agent 的能力落在可控轨道上。",
        "type": "Technical Translation",
        "status": "技术笔记",
        "tags": [
          "Harness Engineering",
          "AI Agent",
          "Workflow",
          "安全约束"
        ],
        "method": "概念转译 · 系统边界拆解",
        "signal": "Agent 能力开始取决于模型之外的运行环境",
        "question": "当 AI 更能行动时，谁来规定它不能做什么？",
        "sourceLink": "https://openai.com/index/harness-engineering/",
        "relatedWorkSlugs": [
          "harness-armor"
        ]
      },
      {
        "id": "note-10",
        "slug": "prompt-engineering-after-ai-gets-smarter",
        "month": "2026 / 02",
        "researchWindow": "2026 / 02",
        "plannedPublish": "Ready for editorial review",
        "title": "模型越聪明，Prompt Engineering 越不像咒语",
        "summary": "Prompt Engineering 不是背诵万能句式，而是把任务、上下文、约束和验收标准写成可执行的说明书。",
        "type": "Method Note",
        "status": "技术笔记",
        "tags": [
          "Prompt Engineering",
          "Workflow",
          "Thinking",
          "Prompt Graveyard"
        ],
        "method": "反例复盘 · 任务说明拆解",
        "signal": "提示词技巧正在回归清晰表达与验收设计",
        "question": "如果结果无法验收，再漂亮的提示词有什么用？",
        "sourceLink": "",
        "relatedWorkSlugs": [
          "harness-armor"
        ]
      },
      {
        "id": "note-11",
        "slug": "rag-is-not-a-magic-memory",
        "month": "2026 / 01",
        "researchWindow": "2026 / 01",
        "plannedPublish": "Ready for editorial review",
        "title": "RAG 不是给 AI 装记忆，它更像给 AI 建资料室",
        "summary": "RAG 的价值不是让模型凭空记住更多，而是让它在可追溯、可更新、可验证的资料环境里寻找依据。",
        "type": "Technical Translation",
        "status": "技术笔记",
        "tags": [
          "RAG",
          "Knowledge Base",
          "AI Memory",
          "Context Engineering"
        ],
        "method": "概念辨析 · 失败链路拆解",
        "signal": "知识系统的质量由资料治理与检索链路共同决定",
        "question": "AI 找到了资料，为什么仍然可能答错？",
        "sourceLink": "",
        "relatedWorkSlugs": [
          "synora-agentic-erp"
        ]
      }
    ]
  },
  "about": {
    "count": "01 / 04",
    "title": "关于我",
    "label": "ABOUT ME",
    "lead": "Hi ：》我是路启隆。欢迎来看我的主页。",
    "bio": [
      "我毕业于阿德莱德大学计算机科学专业，获得学士学位。",
      "我曾在华为从事 ERP 后端与系统交付，在 ThoughtWorks 参与软件开发与敏捷交付。现在在 AtlaxTech 专注 AI Agent 应用工程。",
      "我的工作重点是 Agent 编排、上下文工程与运行可靠性，把模型能力接入企业业务和开发者工作流。"
    ],
    "philosophy": {
      "quote": "我认为最好的技术应该具有人的温度。科技的发展，应该让用户感受不到科技的存在。",
      "emphasis": "我关心 Agent 能否承接真实工作：权限是否明确、状态是否可见、失败能否恢复、结果能否验收。"
    },
    "approach": [
      "我独立负责 Synora-Agentic-ERP 的架构、阶段规划与交付验收，将采购目标拆成模型规划、工具调用、人工审批和 ERP 结果验证。",
      "我设计 Harness Armor，并向 codex-with-chatgpt 贡献项目级会话架构及状态机代码，向 dsh-desktop 贡献模型配置兼容性修复。",
      "我的优势是把企业系统经验转化为 Agent 工程能力：既能设计业务与接口边界，也能实现上下文、执行和恢复链路。",
      "花径不曾缘客扫，蓬门今始为君开",
      "欢迎继续阅读我的项目、代码贡献与技术思考。"
    ],
    "capabilities": [
      {
        "id": "01",
        "title": "Agent 编排",
        "description": "LLM API、Tool Calling、ReAct 与可恢复的 Plan-and-Execute"
      },
      {
        "id": "02",
        "title": "上下文工程",
        "description": "项目级会话组织、仓库上下文与保留来源和权限的检索"
      },
      {
        "id": "03",
        "title": "执行可靠性",
        "description": "审批、状态复验、幂等、回执与异常对账"
      },
      {
        "id": "04",
        "title": "企业系统集成",
        "description": "Python / FastAPI / Pydantic，Frappe / ERPNext 与 HTTP API"
      },
      {
        "id": "05",
        "title": "工程交付",
        "description": "Agent Skills、故障注入、回归测试与跨平台 CI"
      }
    ],
    "methods": [
      {
        "id": "01",
        "title": "定义目标",
        "description": "从业务目标明确范围、约束和验收标准。"
      },
      {
        "id": "02",
        "title": "设计边界",
        "description": "拆分模型规划、工具权限与事务执行。"
      },
      {
        "id": "03",
        "title": "实现链路",
        "description": "借助 AI 编程工具推进代码、测试与联调。"
      },
      {
        "id": "04",
        "title": "证据验收",
        "description": "检查实际业务状态，覆盖异常与恢复路径。"
      }
    ],
    "contact": {
      "email": "atlax-tech@outlook.com",
      "phone": "+86 199 0373 3819",
      "social": "@AtlaxTech",
      "socialMark": "GH",
      "socialUrl": "https://github.com/AtlaxTech",
      "location": "Xi'an, China"
    }
  }
};

export const historicalNotes = [
  {
    "id": "note-02",
    "slug": "agent-matrix-does-not-equal-company",
    "month": "2026 / 06",
    "researchWindow": "2026 / 06",
    "publishedAt": "2026-06-27",
    "title": "一人公司 + AI Agents 矩阵 = 自动赚钱？",
    "summary": "Agent 在个人生产力提升上确实有价值，但「多 Agent 自动赚钱」大概率是过度包装。",
    "type": "Field Note",
    "status": "Published",
    "tags": [
      "AI Agent",
      "一人公司",
      "独立开发",
      "AI 工作流"
    ],
    "method": "实践反思 · 概念澄清",
    "signal": "Agent 适合确定性流程，不适合商业闭环",
    "question": "哪些环节必须留给人做判断？",
    "sourceLink": "https://www.xiaohongshu.com/explore/6a3eb0000000000017008ab5?xsec_token=ABtK_DtGW4dM56i7cRiJO-5gW-whDYJztfxS8R6BG44Dc=&xsec_source=pc_user",
    "relatedWorkSlugs": [
      "harness-armor",
      "agent-dock"
    ]
  },
  {
    "id": "note-04",
    "slug": "openai-vs-anthropic-product-rhythm",
    "month": "2026 / 05",
    "researchWindow": "2026 / 05",
    "plannedPublish": "Pending final fact check",
    "title": "OpenAI 和 Anthropic 争的不是模型参数，而是谁先占住工作流",
    "summary": "模型新闻越来越密集，真正值得比较的不是参数榜单，而是产品正在接管写作、编程、研究与协作中的哪些入口。",
    "type": "News Analysis",
    "status": "Draft",
    "tags": [
      "OpenAI",
      "Anthropic",
      "ChatGPT",
      "Claude",
      "工作流"
    ],
    "method": "官方更新核对 · 工作流映射",
    "signal": "竞争焦点从单次回答迁移到持续任务",
    "question": "一次模型更新究竟改变了哪段真实工作流？",
    "sourceLink": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "relatedWorkSlugs": [
      "harness-armor"
    ]
  },
  {
    "id": "note-05",
    "slug": "ai-model-news-is-not-enough",
    "month": "2026 / 06",
    "researchWindow": "2026 / 06",
    "publishedAt": "2026-07-01",
    "title": "GPT-5.6发布了，然后呢？",
    "summary": "AI 模型新闻铺天盖地，但普通人真正该关心的是：跑分是否靠谱、报道的能力是不是自己用的能力、以及实际成本是涨了还是跌了。",
    "type": "News Analysis",
    "status": "Published",
    "tags": [
      "AI News",
      "模型发布",
      "产品入口",
      "技术转译"
    ],
    "method": "新闻拆解 · 用户影响评估",
    "signal": "参数叙事正在让位于使用方式与入口变化",
    "question": "这次更新让普通用户多做成了什么，还是只多记住了一个名字？",
    "sourceLink": "https://www.xiaohongshu.com/explore/6a43f9a5000000001700a63f?app_platform=ios&app_version=9.25&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBteAwjda3YQQ1_SrpUP8-Dv5zvyIwsyW1qkcRqBCmqEQ%3D&author_share=1&xhsshare=CopyLink&shareRedId=N0w4ODU3Nj82NzUyOTgwNjY0OTc9Njg-&apptime=1782841461&share_id=ff070fba9316435796edfaacd014d161",
    "relatedWorkSlugs": []
  },
  {
    "id": "note-07",
    "slug": "what-to-ask-after-ai-product-goes-viral",
    "month": "2026 / 04",
    "researchWindow": "2026 / 04",
    "title": "一个 AI 产品爆火后，我们到底应该问什么？",
    "summary": "热点不是选题本身。编辑真正要回答的是：它是否真实有用、是否改变工作流，以及普通人为什么需要关心。",
    "type": "APPSO Sample",
    "status": "Backlog",
    "tags": [
      "AI Product",
      "Editorial Judgment",
      "APPSO Sample",
      "热点分析"
    ],
    "method": "热点筛选 · 产品判断框架",
    "signal": "传播速度与产品价值正在被混为一谈",
    "question": "热度消失以后，用户还会留下什么？",
    "sourceLink": "",
    "relatedWorkSlugs": []
  },
  {
    "id": "note-08",
    "slug": "why-ai-tools-are-abandoned-after-two-days",
    "month": "2026 / 03",
    "researchWindow": "2026 / 03",
    "title": "为什么很多 AI 工具用两天就被放弃？",
    "summary": "很多 AI 工具并非能力不够，而是无法进入用户已有工作流，最终输给迁移成本、信任成本与结果整理成本。",
    "type": "Product Backlog",
    "status": "Backlog",
    "tags": [
      "AI Product",
      "Retention",
      "User Workflow",
      "产品判断"
    ],
    "method": "用户路径 · 留存摩擦拆解",
    "signal": "惊艳的首次体验没有转化为重复使用",
    "question": "用户第二天为什么还要回来？",
    "sourceLink": "",
    "relatedWorkSlugs": []
  },
  {
    "id": "note-12",
    "slug": "karpathy-llm-wiki-and-personal-knowledge-base",
    "month": "2026 / 04",
    "researchWindow": "2026 / 04",
    "plannedPublish": "Ready for editorial review",
    "title": "从 Karpathy 的 LLM Wiki 想到：个人知识库不是仓库，而是训练场",
    "summary": "个人知识库的重点不是收藏更多内容，而是让资料持续被整理、被提问、被关联，并再次进入人的思考。",
    "type": "Knowledge System",
    "status": "Ready to publish",
    "tags": [
      "Karpathy",
      "LLM Wiki",
      "Personal Knowledge Base",
      "MindDock"
    ],
    "method": "来源核对 · 个人系统复盘",
    "signal": "知识管理从存储转向持续编译与复用",
    "question": "被保存的内容，如何真正变成下一次判断的材料？",
    "sourceLink": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    "relatedWorkSlugs": [
      "minddock"
    ]
  },
  {
    "id": "note-13",
    "slug": "ai-bubble-us-debt-crisis-2008",
    "month": "2026 / 06",
    "researchWindow": "2026 / 06",
    "publishedAt": "2026-06-30",
    "title": "AI泡沫破裂+美债危机=比2008更惨？",
    "summary": "高志凯预言2026年底到2027年上半年可能爆发比2008更严重的金融危机。搜了三天数据后，发现美债、AI泡沫和私人信贷三个脆弱点确实在共振。",
    "type": "Economic Analysis",
    "status": "Draft",
    "tags": [
      "AI泡沫",
      "美债危机",
      "金融危机",
      "经济分析",
      "内容实验"
    ],
    "method": "数据核查 · 观点整理",
    "signal": "AI 投入产出失衡、美债利息压力与私人信贷违约率上升正在形成共振",
    "question": "如果高志凯的预言成真，普通人现在该做什么准备？",
    "sourceLink": "",
    "relatedWorkSlugs": []
  },
  {
    "id": "note-14",
    "slug": "knowledge-base-is-not-warehouse",
    "month": "2026 / 05",
    "researchWindow": "2026 / 05",
    "publishedAt": "2026-05-28",
    "title": "我花了半年才想明白的事——知识库不是仓库",
    "summary": "从 Obsidian 装修工到真正搭建自生长知识库的完整记录，围绕 Karpathy LLM Wiki 的三层架构反思个人实践中的三个错误与三根心脉。",
    "type": "Field Note",
    "status": "Published",
    "tags": [
      "知识管理",
      "LLM Wiki",
      "个人知识库",
      "MindDock"
    ],
    "method": "个人复盘 · 知识库实践",
    "signal": "知识库的价值从存储转向持续复用",
    "question": "收藏的东西，怎么才能重新进入思考？",
    "sourceLink": "",
    "relatedWorkSlugs": []
  },
  {
    "id": "note-15",
    "slug": "openclaw-control-and-asset-defense",
    "month": "2026 / 03",
    "researchWindow": "2026 / 03",
    "publishedAt": "2026-03-30",
    "title": "当AI开始替你做事——OpenClaw爆火背后的控制问题与资产保卫战",
    "summary": "从 OpenClaw 爆红看 Agent 时代控制权、安全边界与用户资产保护的真实挑战。",
    "type": "Agent Security",
    "status": "Published",
    "tags": [
      "AI Agent",
      "OpenClaw",
      "安全风险",
      "控制设计",
      "资产保护"
    ],
    "method": "事件追踪 · 风险框架拆解",
    "signal": "Agent 能力越底层，控制设计与资产保护越紧迫",
    "question": "当 AI 能真正替你做事时，谁来守住你的资产边界？",
    "sourceLink": "",
    "relatedWorkSlugs": []
  }
];
