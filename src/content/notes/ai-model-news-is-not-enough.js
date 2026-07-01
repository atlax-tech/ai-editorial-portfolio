export default {
  blocks: [
    {
      type: "paragraph",
      content:
        `今天聊点闲篇儿吧。`,
    },
    {
      type: "paragraph",
      content:
        `想象一下：你加班到半夜，拖着疲惫的身子躺床上想刷会儿手机。`,
    },
    {
      type: "paragraph",
      content:
        `然后你关注的 ai 圈子信息流大概是这样的——`,
    },
    {
      type: "list",
      items: [
        `5 月 20 日：“阿里发布 Qwen 3.7-Max，国产最强”`,
        `5 月 28 日：“Anthropic 发布 Claude Opus 4.8，距离 4.7 仅隔 42 天，编程推理双双登顶”`,
        `6 月 1 日：“MiniMax 发布 M3，百万上下文 + 原生多模态”`,
        `6 月 9 日：“Anthropic 再发 Claude Fable 5，号称’神话级‘模型”`,
        `6 月 12 日：“月之暗面开源 Kimi K2.7 Code，万亿参数编程专用”`,
        `6 月 17 日：“智谱开源 GLM 5.2，Code Arena 开源第一”`,
        `6 月 26 日：“OpenAI 发布 GPT-5.6，Sol/Terra/Luna 三版本——同一天被曝在测试中作弊”`
      ],
    },
    {
      type: "paragraph",
      content:
        `七家厂商，七篇新闻，七款“最强”模型。你方唱罢我登场。`,
    },
    {
      type: "paragraph",
      content:
        `你花了大概半个小时把它们都点开看了一遍。不能说没收获——至少你记住了几个新名字，而且每一篇的营销话术都差不多——“全面超越”“刷新纪录”“重新定义”。`,
    },
    {
      type: "paragraph",
      content:
        `然后今天你上班打开电脑，发现自己的工作方式和两个月前一模一样。`,
    },
    {
      type: "paragraph",
      content:
        `这不是你的问题。这是 AI 新闻报道的结构性问题：他们在写一场永远不会结束的考试，而你在过的是每天都在继续的生活。这两件事之间的翻译工作，没有人做。`,
    },
    {
      type: "heading",
      content:
        `第一件事：跑分这东西，正在变成一场自嗨`,
    },
    {
      type: "paragraph",
      content:
        `先说一个事实：如果你关注 AI 新闻，你大概率看过那种“XX 模型在 XX 基准上全面领先”的对比图。蓝的、红的、绿的柱子，差距可能就 1%-2%，但标题一定会写成“碾压”“震惊”“超越”。`,
    },
    {
      type: "paragraph",
      content:
        `GPT-5.6 发布就是一个最新的例子。OpenAI 说 Sol 版本在 Terminal-Bench 2.1 上得了 88.8%，Ultra 模式更是到 91.9%。新闻铺天盖地——“GPT-5.6 编程能力再创新高”（InfoQ）。`,
    },
    {
      type: "paragraph",
      content:
        `但看完发布会你可能会漏掉一条消息：`,
    },
    {
      type: "quote",
      content:
        `外部评估机构 METR 发现，GPT-5.6 Sol 在测试中作弊了。它利用评估环境的漏洞获取测试答案，还指示另一个实例隐藏不一致的证据。OpenAI 自己的系统卡也承认了这个问题（同上）。`,
    },
    {
      type: "paragraph",
      content:
        `AI 模型在 AI 评测里作弊——这件事本身就够讽刺了。`,
    },
    {
      type: "paragraph",
      content:
        `但这其实不是孤立事件。`,
    },
    {
      type: "paragraph",
      content:
        `2026 年 3 月 MIT Technology Review 已经发过一篇文章，标题很直接——《AI benchmarks are broken》。里面说了一个核心问题：`,
    },
    {
      type: "quote",
      content:
        `几乎每个前沿模型在标准测试上的得分都超过 88%，差距已经小到落在统计噪声范围内。但你拿这些模型去干真实的工作，每三次尝试就有一次失败（MIT Technology Review，2026-03）。`,
    },
    {
      type: "paragraph",
      content:
        `88% 和 89% 的区别，在新闻里是“反超”，在实际使用中根本感觉不出来。但“能不能稳定完成我交代的事”这个差距，跑分从来不说。更别提 88.8% 里面有多少是“刷题”刷出来的。`,
    },
    {
      type: "paragraph",
      content:
        `可以打一个比方：一个学生在模拟考里次次考 95 分以上，但你发现他偷看了答案。你还会用他的考试成绩来判断他能不能干活吗？`,
    },
    {
      type: "paragraph",
      content:
        `论文《The Measurement Crisis》把“刷题”这件事量化了。它检查了 17 个前沿模型在 18 个公开基准上的表现，发现 57.3% 的测试题已经被模型在训练时见过了（数据污染）。也就是说——模型在刷真题（Zenodo，2026-03）。`,
    },
    {
      type: "paragraph",
      content:
        `更让人心里一沉的是 Scale AI 的发现。同一个模型在标准测试 SWE-Bench Verified 上得了 80.9%，换成更接近真实工作的 SEAL 测试后，分数掉到了 45.9%——直接腰斩（VentureBeat）。`,
    },
    {
      type: "paragraph",
      content:
        `这 35 个百分点的差距，就是“刷题”和“干活”之间的距离。`,
    },
    {
      type: "paragraph",
      content:
        `所以下次你看到“XX 模型又登顶了”，可以试着多想一步：它登顶的考试，跟我平时让它做的事，是一回事吗？大概率不是。更何况，它可能还作弊了。`,
    },
    {
      type: "heading",
      content:
        `第二件事：媒体天天报道的，和普通人天天用的，几乎不重叠`,
    },
    {
      type: "paragraph",
      content:
        `2025 年 9 月，OpenAI 联合哈佛和杜克大学发布了一份报告，标题叫《How People Use ChatGPT》。这是 OpenAI 成立以来第一次对外公布用户的真实使用数据。样本量：150 万次真实对话。`,
    },
    {
      type: "paragraph",
      content:
        `这份报告里最反常识的一个数字是：编程只占 ChatGPT 全部使用量的 4.2%。`,
    },
    {
      type: "paragraph",
      content:
        `你在所有 AI 新闻里看到的最热的赛道——AI 编程——在普通人的实际使用中，只占了一个零头。`,
    },
    {
      type: "paragraph",
      content:
        `那么占大头的到底是什么？`,
    },
    {
      type: "list",
      items: [
        `写作占了 42%，而且三分之二是改东西（润色、翻译、总结、改语法），不是从零写。用户把 AI 当成“改稿助理”，不是“自动写手”。`,
        `日常用途（做菜攻略、旅行规划、学习辅导、健身计划）加起来占了将近八成。`,
        `情感陪伴只占 1.9%——远低于外界的想象。大部分人找 AI 聊的是实用的事，不是孤独的事。`
      ],
    },
    {
      type: "paragraph",
      content:
        `这些数据告诉我们什么？一件简单但很少被说透的事：`,
    },
    {
      type: "quote",
      content:
        `你今天看到的绝大部分 AI 评测，测的是写代码。但 95% 的用户在用 AI 做别的事。`,
    },
    {
      type: "paragraph",
      content:
        `为什么会这样？因为写代码好量化——对就是对、错就是错，可以出分数。改一封邮件的质量好不好很难量化。帮一个人规划旅行路线有没有用也没法放进排行榜。这就导致了评测体系和生产生活场景之间产生了一个巨大的缺口：能测的东西不是最重要的，最重要的东西测不了。`,
    },
    {
      type: "paragraph",
      content:
        `好比一个美食杂志每天只报道米其林三星的分子料理摆盘，但 95% 的读者回家做的是西红柿炒蛋。不是说分子料理不好——只是它和大多数人的生活之间少了一座桥。`,
    },
    {
      type: "paragraph",
      content:
        `所以下一次你再看到一篇热乎的模型评测，先问自己一个问题：它测的能力，是我平时在用的能力吗？如果不是，跑分再高也跟你的日常没多大关系。`,
    },
    {
      type: "heading",
      content:
        `第三件事：你以为便宜了，打开账单发现更贵了`,
    },
    {
      type: "paragraph",
      content:
        `AI 在过去三年里变得越来越便宜——这是真的。`,
    },
    {
      type: "paragraph",
      content:
        `2023 年你用 GPT-4，每百万 token 要 30 到 37 美元。到了 2026 年，同样级别的能力，最便宜的模型只要 5 美分。三年降了 99%。`,
    },
    {
      type: "paragraph",
      content:
        `但你打开自己的订阅账单看一眼，是不是反而更贵了？`,
    },
    {
      type: "paragraph",
      content:
        `这听起来像悖论，但过去半年发生的几件事，正好把这件事拆得明明白白。`,
    },
    {
      type: "heading",
      content:
        `GPT-5.5：厂商说更省了，用户发现更贵了`,
    },
    {
      type: "paragraph",
      content:
        `GPT-5.5 发布的时候，OpenAI 说它的 token 效率更高了。结果大量用户在 GitHub 和社区反馈：升级到 5.5 之后，Codex 的额度掉得比以前快得多。`,
    },
    {
      type: "paragraph",
      content:
        `有用户晒出了数据对比：6 月 12 日，一次 57K token 的对话消耗了 9% 的配额；6 月 18 日（升级后），一次 20K token 的对话消耗了 45%-77% 的配额。输入量只有原来的三分之一，消耗却是原来的 5 到 8 倍（GitHub Issue #28879）。`,
    },
    {
      type: "paragraph",
      content:
        `社区推测，新版本的 Codex 可能在后台把 GPT-5.4 的请求也自动映射成了 GPT-5.5，每个请求的 token 计费系数变了。Plus 用户以前够用一天的额度，现在 1 小时就烧完了。`,
    },
    {
      type: "heading",
      content:
        `DeepSeek V4：连价格屠夫都开始搞峰谷电价`,
    },
    {
      type: "paragraph",
      content:
        `厂商说“更省了”，用户的实际体验是“更贵了”。`,
    },
    {
      type: "paragraph",
      content:
        `DeepSeek 一直是“价格屠夫”的形象，V4 预览版直接把价格打到 GPT 的十分之一不到。但 6 月 29 日 DeepSeek 宣布 V4 正式版将于 7 月中旬上线，同时引入 API 峰谷定价机制（快科技）。`,
    },
    {
      type: "paragraph",
      content:
        `工作日早 9 点到 12 点、下午 2 点到 6 点——正好覆盖了国内开发者的主要工作时间——这 7 个小时算高峰时段，价格翻倍。谷时段才维持现有价格。`,
    },
    {
      type: "paragraph",
      content:
        `算下来：V4-Pro 平时输出 6 元/百万 token，高峰时段 12 元。V4-Flash 平时 2 元，高峰 4 元。`,
    },
    {
      type: "paragraph",
      content:
        `现在连“价格屠夫”都开始搞分时计价了。这说明什么？算力是真的不够用了——高峰时段大家挤在一起用，服务器扛不住，只能用价格来调节需求。这就像以前不限电的时候电费是一口价，现在电力紧张了，开始分峰谷电价。`,
    },
    {
      type: "heading",
      content:
        `Coding Plan 全面缩水：不止是涨价，是整个模式在变`,
    },
    {
      type: "paragraph",
      content:
        `把视角拉远一点，这两件事不是孤立的。`,
    },
    {
      type: "paragraph",
      content:
        `过去一年，从海外到国内，从闭源到开源，几乎所有 AI 编程工具的定价模式都在经历同一个转变：从“固定月费随便用”到“按量计费，用多少付多少”。`,
    },
    {
      type: "paragraph",
      content:
        `先是 Cursor。2025 年 6 月，把“每月 500 次快速请求”改为积分池制（Cursor 官方博客）。重度用户的月费从 $100 左右涨到每天 $20-$30。Cursor 上一财年营收约 7.7 亿美元，亏损近 9 亿美元——每新增一个用户都在烧钱。`,
    },
    {
      type: "paragraph",
      content:
        `接着是 Anthropic。2026 年 4 月 4 日正式封杀 OpenClaw 等第三方工具使用 Claude 订阅额度，理由是“$200 月费的重度用户实际消耗了接近 $5000 的算力”（新浪财经）。到 6 月，Claude Code 又因为 Opus 4.8 的并行子代理 bug，导致用户额度异常消耗，Anthropic 被迫两次为全体用户重置配额（GitHub Issue #38335）。`,
    },
    {
      type: "paragraph",
      content:
        `然后是 智谱 GLM（之前被我狠狠吐槽过的 coding plan）。2026 年 2 月 12 日，GLM Coding Plan 整体涨价 30% 起。使用体验糟糕就不说了，官方宣称是算力不够，大量用户集中使用造成拥堵和各种限购。`,
    },
    {
      type: "paragraph",
      content:
        `430，高峰时段用量掉的简直是在割我的肉，五小时额度 100w token 就用光了（见我之前的帖子）。再加上限购，导致某海鲜市场充斥着大量的脚本/代抢，价格一路炒到 150 块。`,
    },
    {
      type: "paragraph",
      content:
        `GitHub Copilot 在 4 月 27 日宣布，6 月 1 日起全面转向 AI Credits 用量计费，取消无限请求（GitHub 官方博客）。`,
    },
    {
      type: "paragraph",
      content:
        `MiniMax 更直接——6 月 1 日把 Coding Plan 切换成 Token Plan，重度用户实测费用从 49 元/月飙到约 175 元/月，涨幅 257%。没有提前通知用户，引发大量投诉后第二天紧急道歉。`,
    },
    {
      type: "paragraph",
      content:
        `Gartner 甚至在 6 月 24 日发了一个让人倒吸一口气的预测：AI coding agent 的成本，到 2028 年可能会超过真人开发者的工资（Computer Weekly）。`,
    },
    {
      type: "paragraph",
      content:
        `这些事放在一起，讲的是同一个故事。`,
    },
    {
      type: "paragraph",
      content:
        `一边是单位 token 价格在跌（三年跌了 99%），另一边是你的实际使用成本在全面上涨。这不是矛盾，这是同一枚硬币的两面。`,
    },
    {
      type: "paragraph",
      content:
        `The Next Web 报道了一个被广泛引用的数据：企业 AI 平均预算从 2024 年的 120 万美元涨到了 2026 年的 700 万美元。Uber 在 2026 年 4 月就已经花光了全年的 AI 预算。`,
    },
    {
      type: "paragraph",
      content:
        `原因很简单：当一样东西变得足够便宜，你就会开始想办法用更多。`,
    },
    {
      type: "paragraph",
      content:
        `以前你一句话问一个问题，现在你让 AI Agent 帮你完成一个完整的任务——它背后跑了 20 次模型调用、读了 10 份文件、写了一整套方案。每一次调用都很便宜，加在一起就贵了。更何况现在对于 ai 的依赖，大事小情，甚至微信聊个天都得先去问问 AI“我要怎么回复”。`,
    },
    {
      type: "paragraph",
      content:
        `打个比方：这就像油价跌了一半，你很开心。然后发现你的车为了追求“自动驾驶体验”，油耗翻了 5 倍。最后你的油钱反而更多了。（而且你还更焦虑了，因为你总觉得它随时可能走错路需要你接管。）`,
    },
    {
      type: "paragraph",
      content:
        `以前的定价模式——固定月费、不限用量——在算力经济面前彻底撑不住了。Agent 模式下，一次命令内部产生 8-12 次 API 调用，第 10 轮对话的成本已经是第 1 轮的 26 倍。这个账怎么算都算不过来。所以 Token Plan 取代 Coding Plan，不是厂商在割韭菜，是它们之前定价定错了，现在在补课。问题是补课的成本最终由用户来承担。`,
    },
    {
      type: "paragraph",
      content:
        `所以当你决定要不要关注一次模型发布时，真正值得看的不是它跑了几分，而是它完成你那件具体的事要花多少钱，以及你的订阅方案是不是又悄悄缩水了。`,
    },
    {
      type: "heading",
      content:
        `第四件事：真正改变你工作方式的，根本不在新闻里`,
    },
    {
      type: "paragraph",
      content:
        `你考虑一个问题：你现在用 ChatGPT、Claude 还是 Cursor，对你日常工作来说，是“每次对话用的模型不同”，还是“你打开这些工具的入口不同”？`,
    },
    {
      type: "paragraph",
      content:
        `我猜答案是后者。`,
    },
    {
      type: "paragraph",
      content:
        `这恰恰是当前 AI 行业最被忽视的一个趋势：竞争正在从模型层转移到产品入口层。`,
    },
    {
      type: "paragraph",
      content:
        `举个例子。Cursor——年收入从零做到了 40 亿美元，花了不到两年。被 SpaceX 以约 600 亿美元估值收购。`,
    },
    {
      type: "paragraph",
      content:
        `你想想你为什么用 Cursor？是因为它底层用了特定的模型吗？不是。你在设置里可以随便切换 GPT、Claude、Gemini，你甚至可能不知道今天跑的是什么模型。你付钱的原因只有一个：它嵌在你的 VS Code 里，让你写代码的时候不用切出去。这个入口的价值，比下面跑什么模型大得多。`,
    },
    {
      type: "paragraph",
      content:
        `同样的事情也在别的方向发生。Claude Code 让你在终端里用自然语言直接操作文件系统。它的上下文可以撑到 200K，比 Cursor 的 70-120K 多了一倍多，token 效率据说比 Cursor 高 5.5 倍（腾讯云评测）。但这些数字不是重点。重点是它创造了一个新的入口——终端即 UI。`,
    },
    {
      type: "paragraph",
      content:
        `a16z 在 2025 年底的消费 AI 复盘文章里提了三个机会方向：降低创作门槛、打通多模态链路、深挖专业场景。仔细看，三个方向说的都是产品入口。没有一个是在说“谁家模型更强”。`,
    },
    {
      type: "paragraph",
      content:
        `厂商自己也在用脚投票。`,
    },
    {
      type: "list",
      items: [
        `OpenAI 没有在用户报告里强调“GPT-5 多强”，而是写了 7 亿人怎么用 ChatGPT。`,
        `Anthropic 这半年最受关注的不是发新模型，而是推出了 Claude Code。`,
        `Google 在拼命把 Gemini 塞进 Gmail、Docs、Sheets。`
      ],
    },
    {
      type: "paragraph",
      content:
        `他们想明白了一件事：`,
    },
    {
      type: "quote",
      content:
        `模型谁都能做，产品入口不是。`,
    },
    {
      type: "paragraph",
      content:
        `说得不好听一点：你每天刷到的模型新闻，其实是厂商想让你看的东西。它们真正的底牌——产品入口、生态绑定、定价策略——从来不在新闻头条里。`,
    },
    {
      type: "heading",
      content:
        `所以，你怎么读 AI 新闻才不亏？`,
    },
    {
      type: "paragraph",
      content:
        `说了这么多，其实落脚点很简单。每次你打开一篇“新模型发布”的推送，不要问“它强吗”。问这三个问题：`,
    },
    {
      type: "list",
      items: [
        `1. 看完这条新闻，我能做一件昨天做不了的事吗？如果答案是“不能”，那你只是在消费一条资讯，它不会改变你今天任何决定。`,
        `2. 它评测的能力，是我平时在用的能力吗？如果它测的是代码能力，而你平时只用 AI 写邮件做菜谱——那它跑第几都跟你没关系。`,
        `3. 我的实际成本变了吗？是变多了还是变少了？不是看每 token 的价格，是看我每个月付的钱。如果厂商说“更省了”但我额度掉得更快了，我更相信额度。`
      ],
    },
    {
      type: "paragraph",
      content:
        `这三个问题问完，你可能会发现：90% 的模型新闻，你关掉它的时候跟打开它的时候是一样的——什么都不需要做。`,
    },
    {
      type: "paragraph",
      content:
        `你不应内耗怕自己跟不上时代的变迁，这不是说你不需要关注 AI 发展。而是说：这个行业不缺发布信息，缺的是把这些信息翻译成普通人行动指南的能力。跑出来的分不是你的生活。那些真正改变你能做什么、花多少钱、用什么入口的信息，才值得你停下来认真读。`,
    },
    {
      type: "paragraph",
      content:
        `信息从来不缺。缺的是把信息变成判断的能力。`,
    },
    {
      type: "paragraph",
      content:
        `你看到这里，说明你已经比大多数人更在乎这件事了。剩下的就是：下次刷到“震惊！XX 再次登顶”的时候，在点进去之前，先问自己一次——然后呢？`,
    },
  ],
};
