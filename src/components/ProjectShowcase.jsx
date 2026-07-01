import { useState } from "react";

const StatusLamp = ({ tone = "neutral" }) => (
  <span className={`ui-lamp ui-lamp--${tone}`} aria-hidden="true" />
);

export function InterfacePanel({ label, meta, children, className = "" }) {
  return (
    <section className={`interface-panel ${className}`}>
      <header className="interface-panel__bar">
        <div>
          <StatusLamp tone="active" />
          <strong>{label}</strong>
        </div>
        <span>{meta}</span>
      </header>
      {children}
    </section>
  );
}

function CaptureDock() {
  return (
    <div className="ui-shell ui-shell--three">
      <aside className="ui-sidebar">
        <strong>MINDDOCK</strong>
        <nav>
          <span className="is-active">Quick capture</span>
          <span>Inbox</span>
          <span>Projects</span>
          <span>Archive</span>
        </nav>
        <small>LOCAL VAULT · SYNCED</small>
      </aside>
      <main className="capture-canvas">
        <div className="capture-canvas__date">TUE · JUL 01</div>
        <h4>What should not be lost?</h4>
        <p>Agent 可控性不是限制自主，而是在越界前把决定权还给人。</p>
        <div className="capture-canvas__actions">
          <span>NOTE</span><span>LINK</span><span>VOICE</span><strong>SAVE →</strong>
        </div>
        <div className="capture-stack">
          <article><span>09:42</span><p>把产品更新翻译成工作流变化。</p></article>
          <article><span>08:16</span><p>知识库的输出潜力比节点数量更重要。</p></article>
        </div>
      </main>
      <InterfacePanel label="MENTOR" meta="CONTEXT" className="mentor-rail">
        <h5>Suggested structure</h5>
        <dl><dt>TYPE</dt><dd>Product thesis</dd><dt>PROJECT</dt><dd>Agentarium</dd><dt>RELATED</dt><dd>Human checkpoint</dd></dl>
        <button type="button">Accept suggestions</button>
      </InterfacePanel>
    </div>
  );
}

function KnowledgeGraph() {
  return (
    <div className="ui-shell ui-shell--graph">
      <aside className="ui-sidebar">
        <strong>MINDVIEW</strong>
        <nav><span className="is-active">Graph</span><span>Documents</span><span>Health</span></nav>
        <div className="graph-legend"><i /> Thesis <i /> Note <i /> Output</div>
      </aside>
      <div className="graph-canvas" aria-label="知识图谱示意">
        <svg viewBox="0 0 680 330" role="img" aria-label="从产品判断到输出的关联图">
          <path d="M102 168 250 76 390 164 560 72M250 76 302 272 390 164 555 264M102 168 302 272" />
          <circle cx="102" cy="168" r="31" /><circle cx="250" cy="76" r="38" />
          <circle cx="390" cy="164" r="47" className="is-selected" />
          <circle cx="560" cy="72" r="31" /><circle cx="302" cy="272" r="32" /><circle cx="555" cy="264" r="36" />
          <text x="72" y="171">INPUT</text><text x="216" y="80">WORKFLOW</text>
          <text x="350" y="168">JUDGMENT</text><text x="531" y="76">AGENT</text>
          <text x="271" y="276">EVIDENCE</text><text x="521" y="268">OUTPUT</text>
        </svg>
        <div className="graph-toolbar"><span>6 NODES</span><span>7 LINKS</span><strong>GENERATE CONTEXT →</strong></div>
      </div>
      <aside className="graph-inspector"><span>SELECTED NODE</span><h5>Editorial judgment</h5><p>3 documents · 2 outputs · updated today</p><strong>Review connection</strong><strong>Generate brief</strong></aside>
    </div>
  );
}

function AIWorkspace() {
  return (
    <div className="ui-shell ui-shell--workspace">
      <aside className="workspace-context">
        <span>CONTEXT PACK / 04</span>
        <strong>Agent control problem</strong><strong>Harness engineering</strong><strong>Human-in-the-loop</strong><strong>Rollback design</strong>
      </aside>
      <main className="workspace-editor">
        <div className="workspace-editor__top"><span>EDITORIAL BRIEF.md</span><span>LOCAL · SAVED</span></div>
        <h4>Agent 越能做事，为什么越需要控制？</h4>
        <p>不是把每一步都交还给人，而是定义哪些动作可以自主，哪些决定必须停下。</p>
        <blockquote>真正的问题不是 AI 会不会做，而是人能不能验收它做得对不对。</blockquote>
        <div className="text-lines"><i/><i/><i/><i/></div>
      </main>
      <aside className="mentor-rail mentor-rail--active"><span>AI MENTOR</span><h5>Output check</h5><p>观点明确，但需要补充失败案例与证据来源。</p><dl><dt>GROUNDING</dt><dd>4 / 4 sources</dd><dt>UNCERTAINTY</dt><dd>1 claim</dd></dl><button type="button">Insert review note</button></aside>
    </div>
  );
}

function AgentMap() {
  return (
    <div className="console-shell">
      <header><strong>AGENTARIUM / AGENT MAP</strong><span>RUN 0427 · OBSERVING</span></header>
      <div className="agent-canvas">
        <svg viewBox="0 0 820 350" role="img" aria-label="多 Agent 职责和 handoff 地图">
          <path d="M110 177H260M365 177H510M620 177H747M312 125V56H564V125M564 228V295H312V228" />
          <g transform="translate(54 126)"><rect width="112" height="102"/><circle cx="18" cy="20" r="4"/><text x="30" y="24">PLANNER</text><text x="16" y="54">Scope</text><text x="16" y="74">Decompose</text></g>
          <g transform="translate(256 126)" className="active"><rect width="112" height="102"/><circle cx="18" cy="20" r="4"/><text x="30" y="24">RESEARCH</text><text x="16" y="54">Sources · 08</text><text x="16" y="74">Running</text></g>
          <g transform="translate(508 126)"><rect width="112" height="102"/><circle cx="18" cy="20" r="4"/><text x="30" y="24">SYNTHESIS</text><text x="16" y="54">Waiting</text><text x="16" y="74">Evidence gate</text></g>
          <g transform="translate(700 126)" className="risk"><rect width="112" height="102"/><circle cx="18" cy="20" r="4"/><text x="30" y="24">PUBLISH</text><text x="16" y="54">Locked</text><text x="16" y="74">Human only</text></g>
        </svg>
      </div>
      <footer><span><StatusLamp tone="active"/> 1 RUNNING</span><span><StatusLamp/> 2 WAITING</span><span><StatusLamp tone="risk"/> 1 CHECKPOINT</span><strong>BOUNDARIES VISIBLE</strong></footer>
    </div>
  );
}

function TaskTrace() {
  const rows = [
    ["09:41:02", "Planner", "Task decomposed", "4 steps", "DONE"],
    ["09:41:12", "Research", "Source retrieved", "OpenAI docs", "VERIFIED"],
    ["09:41:18", "Research", "Source retrieved", "Community post", "UNVERIFIED"],
    ["09:41:29", "Synthesis", "Claim drafted", "evidence: 2", "REVIEW"],
    ["09:41:33", "System", "Risk boundary", "publish action", "PAUSED"],
  ];
  return (
    <div className="trace-shell">
      <header><strong>TASK TRACE / 0427</strong><span>INPUT → OUTPUT · 00:31</span></header>
      <div className="trace-summary"><p>Compare two agent-control approaches and prepare an evidence-based brief.</p><dl><div><dt>TOOLS</dt><dd>03</dd></div><div><dt>SOURCES</dt><dd>08</dd></div><div><dt>HANDOFFS</dt><dd>02</dd></div><div><dt>RISK</dt><dd>MEDIUM</dd></div></dl></div>
      <div className="trace-table">
        {rows.map((row, index) => <div key={row[0]} className={index === 4 ? "is-risk" : ""}>{row.map((cell, i) => <span key={cell} className={i === 4 ? "trace-status" : ""}>{cell}</span>)}</div>)}
      </div>
      <footer><span>Evidence coverage 82%</span><i><b /></i><strong>Inspect 1 uncertain claim →</strong></footer>
    </div>
  );
}

function HumanCheckpoint() {
  return (
    <div className="checkpoint-shell">
      <aside><span>CHECKPOINT / 03</span><h4>Publish external brief?</h4><p>The agent has prepared a draft and is requesting permission to publish.</p><dl><dt>ACTION</dt><dd>External write</dd><dt>DESTINATION</dt><dd>Public workspace</dd><dt>REVERSIBLE</dt><dd>Yes · 30 days</dd></dl></aside>
      <main>
        <div className="risk-strip"><StatusLamp tone="risk"/><div><strong>2 items require judgment</strong><span>One source is unverified. Headline contains an absolute claim.</span></div></div>
        <section><span>EVIDENCE</span><p>7 verified sources</p><p className="is-warning">1 community source · unverified</p></section>
        <section><span>CHANGES</span><p>1 document created</p><p>0 existing files modified</p></section>
        <div className="checkpoint-actions"><button type="button">Return for revision</button><button type="button">Approve once</button></div>
      </main>
      <aside className="rollback-rail"><span>ROLLBACK</span><div className="rollback-line"><i/><p><strong>Now</strong>Awaiting approval</p><i/><p><strong>09:41</strong>Draft generated</p><i/><p><strong>09:40</strong>Clean state</p></div><button type="button">Restore clean state</button></aside>
    </div>
  );
}

function SignalFeed() {
  const signals = [
    ["MODEL", "OpenAI releases a new reasoning model", "HIGH", "+42"],
    ["PRODUCT", "Claude changes tool-use permissions", "RISING", "+18"],
    ["COMMUNITY", "Developers report agent rollback failures", "HIGH", "+31"],
    ["QUESTION", "What changes for non-technical users?", "NEW", "+09"],
  ];
  return (
    <div className="signal-desk-shell">
      <header><strong>SIGNAL DESK / FEED</strong><nav><span className="is-active">ALL</span><span>MODEL</span><span>PRODUCT</span><span>QUESTIONS</span></nav><span>LIVE · 14:32</span></header>
      <main><div className="signal-feed-head"><span>SOURCE</span><span>SIGNAL</span><span>HEAT</span><span>DELTA</span></div>{signals.map((signal, index) => <article key={signal[1]} className={index === 2 ? "is-selected" : ""}><span>{signal[0]}</span><strong>{signal[1]}</strong><span><i style={{"--heat": `${82 - index * 14}%`}}/></span><em>{signal[2]} · {signal[3]}</em></article>)}</main>
      <aside><span>SELECTED SIGNAL</span><h5>Agent rollback failures</h5><p>14 discussions across developer communities in 6 hours.</p><dl><dt>USER IMPACT</dt><dd>High</dd><dt>NOVELTY</dt><dd>Medium</dd><dt>EVIDENCE</dt><dd>Needs verification</dd></dl><button type="button">Map questions →</button></aside>
    </div>
  );
}

function QuestionMap() {
  return (
    <div className="question-shell">
      <header><strong>QUESTION MAP / CLUSTER 07</strong><span>48 QUESTIONS · 3 AUDIENCES</span></header>
      <div className="question-cluster">
        <section className="cluster cluster--user"><span>ORDINARY USERS / 22</span><p>它会不会擅自发布？</p><p>出错后能恢复吗？</p><p>我怎么知道答案可靠？</p></section>
        <section className="cluster cluster--dev"><span>DEVELOPERS / 17</span><p>如何定义停止条件？</p><p>handoff 后如何追踪来源？</p><p>幂等与重试怎么设计？</p></section>
        <section className="cluster cluster--industry"><span>INDUSTRY / 09</span><p>自主性是否等于竞争力？</p><p>谁对 Agent 的动作负责？</p></section>
        <div className="cluster-axis cluster-axis--x">TECHNICAL → HUMAN</div><div className="cluster-axis cluster-axis--y">IMMEDIATE → SYSTEMIC</div>
      </div>
      <aside><span>EDITORIAL OPENING</span><h5>普通用户并不关心 Agent 有几个，他们关心它做错后谁负责。</h5><p>Recommended: explainer + product comparison</p></aside>
    </div>
  );
}

function EditorialDecision() {
  return (
    <div className="decision-shell">
      <header><strong>EDITORIAL DECISION / SD-071</strong><span>REVIEWING · 3/4</span></header>
      <main>
        <section className="decision-verdict"><span>FOLLOW?</span><strong>YES — WITH A NARROWER ANGLE</strong><p>不要写“Agent 安全问题”，写“为什么回滚能力决定 Agent 能不能进入真实工作”。</p></section>
        <div className="decision-grid"><section><span>RECOMMENDED FORMAT</span><strong>Product analysis</strong><p>1,800–2,400 words</p></section><section><span>PRIMARY AUDIENCE</span><strong>AI product users</strong><p>Non-expert, high intent</p></section><section><span>NEWS VALUE</span><strong>07 / 10</strong><p>Rising, not saturated</p></section><section><span>UTILITY VALUE</span><strong>09 / 10</strong><p>Clear user consequence</p></section></div>
        <section className="decision-angle"><span>ANGLE</span><h5>真正的问题不是 AI 会不会做，而是人能不能验收它做得对不对。</h5></section>
      </main>
      <aside><span>RISK NOTES</span><ul><li>Avoid equating anecdotal failures with system-wide rates.</li><li>Verify product permission defaults.</li><li>Separate model limits from product design.</li></ul><button type="button">Create editorial brief →</button></aside>
    </div>
  );
}

const screens = {
  capture: CaptureDock,
  graph: KnowledgeGraph,
  workspace: AIWorkspace,
  "agent-map": AgentMap,
  "task-trace": TaskTrace,
  checkpoint: HumanCheckpoint,
  "signal-feed": SignalFeed,
  "question-map": QuestionMap,
  "editorial-decision": EditorialDecision,
};

export function MockScreen({ screen, index, total, projectSlug }) {
  const Screen = screens[screen.type];
  return (
    <figure
      className="mock-screen"
      id={`${projectSlug}-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${projectSlug}-tab-${index}`}
    >
      <figcaption>
        <div><span>{screen.id}</span><h3>{screen.name}</h3></div>
        <p>{screen.description}</p>
        <em>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</em>
      </figcaption>
      <div className="mock-screen__viewport"><Screen /></div>
    </figure>
  );
}

export function ProductThesis({ children }) {
  return <blockquote className="product-thesis"><span>PRODUCT THESIS</span><p>{children}</p></blockquote>;
}

export function EditorialAngleBlock({ children }) {
  return <section className="editorial-angle-block"><span>EDITORIAL ANGLE</span><h2>{children}</h2><p>产品展示回答“它是什么”，编辑角度继续追问“它为什么值得被讨论”。</p></section>;
}

export function ProjectShowcase({ work }) {
  const [activeScreen, setActiveScreen] = useState(0);
  return (
    <section className="project-showcase detail-section" aria-labelledby="interface-concept-title">
      <div className="project-showcase__heading">
        <div><span>03</span><h2 id="interface-concept-title">Interface Concept</h2></div>
        <p>{work.interfaceConcept}</p>
      </div>
      <div className="project-showcase__tabs" role="tablist" aria-label="Mock interface screens">
        {work.screens.map((screen, index) => (
          <button
            type="button"
            role="tab"
            id={`${work.slug}-tab-${index}`}
            aria-controls={`${work.slug}-panel-${index}`}
            aria-selected={activeScreen === index}
            tabIndex={activeScreen === index ? 0 : -1}
            className={activeScreen === index ? "is-active" : ""}
            key={screen.id}
            onClick={() => setActiveScreen(index)}
          >
            <span>{screen.id}</span>{screen.name}
          </button>
        ))}
      </div>
      <MockScreen
        screen={work.screens[activeScreen]}
        index={activeScreen}
        total={work.screens.length}
        projectSlug={work.slug}
      />
    </section>
  );
}
