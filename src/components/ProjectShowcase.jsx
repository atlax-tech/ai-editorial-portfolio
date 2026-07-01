import { useEffect, useState } from "react";

const number = (value) => String(value + 1).padStart(2, "0");

function NextAction({ children, onClick, testId, quiet = false }) {
  return (
    <button
      className={`concept-action ${quiet ? "concept-action--quiet" : ""}`}
      type="button"
      onClick={onClick}
      data-testid={testId}
    >
      <span>{children}</span><strong>NEXT</strong>
    </button>
  );
}

function MindDockChrome({ children }) {
  return (
    <div className="md-product-window">
      <div className="md-titlebar">
        <span className="md-traffic"><i /><i /><i /></span>
        <strong>Mind Dock</strong>
        <span>LOCAL-FIRST KNOWLEDGE IDE</span>
      </div>
      {children}
    </div>
  );
}

function MindDockSidebar({ activeDoc, setActiveDoc, onCapture }) {
  return (
    <aside className="md-sidebar-real">
      <header><strong>MINDDOCK</strong><span>◐</span></header>
      <button className="md-command" type="button"><span>⌕</span> 全局命令… <kbd>⌘K</kbd></button>
      <button className="md-capture-button" type="button" onClick={onCapture}>极速捕获灵感</button>
      <button className="md-inbox-button" type="button">查看捕获 Inbox</button>
      <div className="md-new">＋ 新建…</div>
      <section>
        <div className="md-tree-title"><span>物理主库</span><span>↻</span></div>
        <p>⌄ documents</p>
        {[
          "MindDock Rebuild v2 PRD",
          "RB-P4.5 技术方案",
          "AI Mentor Pipeline",
          "README",
        ].map((doc) => (
          <button type="button" className={activeDoc === doc ? "is-active" : ""} onClick={() => setActiveDoc(doc)} key={doc}>▧ {doc}</button>
        ))}
        <p>› notes</p><p>› outputs</p>
      </section>
      <footer><span>/Users/qilong.lu/WorkDir/MindDock</span><strong>15 md files · Local</strong></footer>
    </aside>
  );
}

function MindDockPlatter({ view, setView, generated }) {
  return (
    <aside className="md-platter-real">
      <header><strong>PLATTER</strong><span>×</span></header>
      <nav>
        {[["mentor", "Mentor"], ["context", "Context"], ["inbox", "Inbox"]].map(([id, label]) => (
          <button type="button" className={view === id ? "is-active" : ""} onClick={() => setView(id)} key={id}>{label}</button>
        ))}
      </nav>
      {view === "mentor" ? (
        <div className="md-platter-body">
          <p className="md-runtime"><i /> AI 助手已连接</p>
          <details open><summary>当前建议</summary><article><span>OUTPUT READY</span><strong>这篇 PRD 已有足够内容，可以生成产品摘要。</strong><button type="button" onClick={() => setView("context")}>加入 Context Pack</button></article></details>
          <details><summary>待判断</summary></details><details><summary>可用动作</summary></details><details><summary>相关材料</summary></details>
        </div>
      ) : null}
      {view === "context" ? (
        <div className="md-context-pack">
          <span>CONTEXT PACK / ACTIVE</span>
          <h4>MindDock product brief</h4>
          <p>4 selected sources · 2,438 tokens</p>
          {["MindDock Rebuild v2 PRD", "AI Mentor Pipeline", "Quick Capture spec", "Editorial notes"].map((item, index) => <button type="button" key={item}><b>{number(index)}</b><span>{item}</span><em>×</em></button>)}
          <div className="md-pack-intent"><span>OUTPUT INTENT</span><strong>Product analysis</strong></div>
          <p className={`md-generated-state ${generated ? "is-ready" : ""}`}>{generated ? "Draft ready in outputs/" : "Ready to generate"}</p>
        </div>
      ) : null}
      {view === "inbox" ? <div className="md-empty"><span>INBOX</span><strong>暂无捕获内容</strong><p>使用极速捕获记录灵感</p></div> : null}
    </aside>
  );
}

function MindDockEditor({ activeDoc, previewMode, setPreviewMode }) {
  return (
    <main className="md-workspace-real">
      <header className="md-workspace-header"><span>编辑器</span><nav><button className="is-active" type="button">编辑器</button><button type="button">MindView <em>NEXT</em></button><button type="button">体检 <em>NEXT</em></button></nav><span>便笺　◫　◎</span></header>
      <div className="md-tabbar"><span>▧ {activeDoc}</span><span>×</span></div>
      <div className="md-editor-toolbar"><span>MARKDOWN</span><nav>{["edit", "split", "preview"].map((mode) => <button type="button" className={previewMode === mode ? "is-active" : ""} onClick={() => setPreviewMode(mode)} key={mode}>{mode === "edit" ? "编辑" : mode === "split" ? "分栏" : "预览"}</button>)}</nav></div>
      <div className={`md-document md-document--${previewMode}`}>
        {previewMode !== "preview" ? <section className="md-source"><span>1　---</span><span>2　title: {activeDoc}</span><span>3　---</span><h3>5　# {activeDoc}</h3><h4>7　## 0. 总结</h4><p>9　MindDock Rebuild v2 是一个本地优先、AI-native 的知识输出 IDE。它服务于从「快速捕获」到「智能落库」再到「高质量输出」的完整链路。</p><p>13　&gt; 让用户以最小主动维护成本，把零散想法、草稿、正式文档和输出动作组织成可复用的本地知识系统。</p><p>15　AI Mentor 不是 chatbot，而是产品内置私教。</p></section> : null}
        {previewMode !== "edit" ? <section className="md-preview"><h2>{activeDoc}</h2><h3>0. 总结</h3><p>MindDock Rebuild v2 是一个本地优先、AI-native 的知识输出 IDE。它服务于从「快速捕获」到「智能落库」再到「高质量输出」的完整链路。</p><blockquote>让用户以最小主动维护成本，把零散想法、草稿、正式文档和输出动作组织成可复用的本地知识系统。</blockquote><p>AI Mentor 不是 chatbot，而是产品内置私教。它在关键时刻提供建议、结构化整理和输出生成。</p><hr /><h3>1. 产品愿景</h3></section> : null}
      </div>
      <footer><span>/MindDock/documents/{activeDoc}.md</span><strong>已保存　7,683 字符</strong></footer>
    </main>
  );
}

const mindNodes = [
  { id: "prd", label: "MindDock Rebuild v2 PRD", kind: "document", x: 50, y: 48, size: "lg" },
  { id: "mentor", label: "AI Mentor", kind: "concept", x: 30, y: 25, size: "md" },
  { id: "capture", label: "Quick Capture", kind: "feature", x: 18, y: 58, size: "sm" },
  { id: "context", label: "Context Pack", kind: "feature", x: 72, y: 29, size: "md" },
  { id: "output", label: "Knowledge Output", kind: "concept", x: 80, y: 62, size: "sm" },
  { id: "local", label: "Local-first", kind: "principle", x: 55, y: 78, size: "sm" },
  { id: "pipeline", label: "Mentor Pipeline", kind: "document", x: 31, y: 78, size: "sm" },
  { id: "trust", label: "Trust Design", kind: "principle", x: 87, y: 40, size: "xs" },
];

const mindLinks = [["prd", "mentor"], ["prd", "capture"], ["prd", "context"], ["prd", "local"], ["mentor", "pipeline"], ["context", "output"], ["context", "trust"], ["output", "local"], ["capture", "pipeline"]];

function MindDockMindView() {
  const [selectedNode, setSelectedNode] = useState("prd");
  const [scope, setScope] = useState("All notes");
  const [focus, setFocus] = useState(false);
  const selected = mindNodes.find((node) => node.id === selectedNode);
  const point = Object.fromEntries(mindNodes.map((node) => [node.id, node]));

  return (
    <main className="md-mindview" data-testid="mindview-concept">
      <header>
        <div><strong>MindView</strong><span>NEXT-STAGE CONCEPT</span></div>
        <nav>{["All notes", "Documents", "Concepts"].map((item) => <button type="button" className={scope === item ? "is-active" : ""} onClick={() => setScope(item)} key={item}>{item}</button>)}</nav>
        <button type="button" className={focus ? "is-active" : ""} onClick={() => setFocus((value) => !value)}>{focus ? "Show all" : "Focus selected"}</button>
      </header>
      <section className={`md-graph-canvas ${focus ? "is-focused" : ""}`}>
        <div className="md-graph-legend"><span><i /> DOCUMENT</span><span><i /> CONCEPT</span><span><i /> FEATURE</span></div>
        <svg viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          {mindLinks.map(([from, to]) => <line key={`${from}-${to}`} x1={point[from].x} y1={point[from].y} x2={point[to].x} y2={point[to].y} className={selectedNode === from || selectedNode === to ? "is-related" : ""} />)}
        </svg>
        {mindNodes.map((node) => <button type="button" key={node.id} onClick={() => setSelectedNode(node.id)} className={`md-graph-node md-graph-node--${node.kind} md-graph-node--${node.size} ${selectedNode === node.id ? "is-active" : ""}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}><i /><span>{node.label}</span></button>)}
        <aside>
          <span>SELECTED / {selected.kind.toUpperCase()}</span>
          <h3>{selected.label}</h3>
          <p>{selected.id === "prd" ? "产品主文档连接了捕获、Mentor、上下文编排与本地优先原则。" : `与主题「MindDock Rebuild v2」存在 ${selected.id === "context" ? 4 : 2} 条可解释关联。`}</p>
          <dl><div><dt>BACKLINKS</dt><dd>{selected.id === "prd" ? "07" : "02"}</dd></div><div><dt>UPDATED</dt><dd>2h ago</dd></div></dl>
          <button type="button">Open source note</button>
          <button type="button">Add to Context Pack</button>
        </aside>
      </section>
      <footer><span>{scope} · 15 notes · 9 relations</span><strong>Concept based on current Vault model</strong></footer>
    </main>
  );
}

function MindDockDemo({ activeScreen, onNavigate }) {
  const [activeDoc, setActiveDoc] = useState("MindDock Rebuild v2 PRD");
  const [previewMode, setPreviewMode] = useState("split");
  const [platterView, setPlatterView] = useState(activeScreen === 2 ? "context" : "mentor");
  const [captureMode, setCaptureMode] = useState("fast");
  const [captureOpen, setCaptureOpen] = useState(activeScreen === 0);
  const [captureText, setCaptureText] = useState("知识库不是仓库，而是让知识重新进入思考的接口。");
  const [guided, setGuided] = useState(false);
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    setCaptureOpen(activeScreen === 0);
  }, [activeScreen]);

  const showCapture = captureOpen;
  const showMindView = activeScreen === 2;
  const showOutput = activeScreen === 3;

  return (
    <div className="minddock-theatre">
      <div className="minddock-theatre__claim"><span>{showMindView ? "NEXT-STAGE CONCEPT / MINDVIEW" : "ACTUAL PRODUCT / CURRENT BUILD"}</span><strong>{activeScreen === 0 ? "先接住，再整理。" : activeScreen === 1 ? "写作与预览，在同一张桌面。" : showMindView ? "关系不是装饰，而是回到材料的路径。" : "不是聊天，而是把知识编排成输出。"}</strong></div>
      <MindDockChrome>
        <div className="md-app-real">
          <MindDockSidebar activeDoc={activeDoc} setActiveDoc={setActiveDoc} onCapture={() => setCaptureOpen(true)} />
          {showMindView ? <MindDockMindView /> : <MindDockEditor activeDoc={activeDoc} previewMode={previewMode} setPreviewMode={setPreviewMode} />}
          <MindDockPlatter view={showOutput ? "context" : platterView} setView={setPlatterView} generated={generated} />
          {showCapture ? (
            <div className="md-capture-overlay" data-testid="mind-capture-real">
              <button className="md-capture-backdrop" type="button" aria-label="Close capture" onClick={() => setCaptureOpen(false)} />
              <section className="md-capture-modal">
                <header><nav><button type="button" className={captureMode === "fast" ? "is-active" : ""} onClick={() => { setCaptureMode("fast"); setGuided(false); }}>极速</button><button type="button" className={captureMode === "guided" ? "is-active" : ""} onClick={() => setCaptureMode("guided")}>引导</button></nav><button type="button" onClick={() => setCaptureOpen(false)}>×</button></header>
                {!guided ? <><textarea value={captureText} onChange={(event) => setCaptureText(event.target.value)} aria-label="记录灵感" /><footer><span>{captureMode === "guided" ? "AI 将追问 3 轮帮助理清思路" : "⌘ + Enter"}</span><button type="button" onClick={() => captureMode === "guided" ? setGuided(true) : onNavigate(1)}>{captureMode === "guided" ? "开始引导" : "捕获"}</button></footer></> : <div className="md-guided-step"><span>AI MENTOR · QUESTION 01 / 03</span><h4>这条判断准备解决谁的什么问题？</h4><div><button type="button">AI 产品用户</button><button type="button">知识工作者</button><button type="button">自定义回答</button></div><NextAction onClick={() => onNavigate(1)} testId="mind-to-editor">进入编辑工作区</NextAction></div>}
              </section>
            </div>
          ) : null}
        </div>
      </MindDockChrome>
      <div className="minddock-theatre__controls">
        {activeScreen === 0 ? <button type="button" onClick={() => { setCaptureMode("guided"); setGuided(true); }}>体验引导式捕获</button> : null}
        {activeScreen === 1 ? <NextAction onClick={() => onNavigate(2)} testId="mind-to-mindview">Explore MindView concept</NextAction> : null}
        {activeScreen === 2 ? <NextAction onClick={() => { setPlatterView("context"); onNavigate(3); }} testId="mind-to-output">Build context pack</NextAction> : null}
        {activeScreen === 3 ? <NextAction onClick={() => setGenerated(true)} testId="mind-generate-output">{generated ? "Draft generated" : "Generate product brief"}</NextAction> : null}
      </div>
    </div>
  );
}

const agentUnits = [
  ["Planner", "Scope locked", "complete"],
  ["Research", "8 sources · 1 uncertain", "running"],
  ["Synthesis", "Waiting for evidence", "waiting"],
  ["Publisher", "Human permission only", "locked"],
];

function AgentariumDemo({ activeScreen, onNavigate }) {
  const [selectedAgent, setSelectedAgent] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(3);
  const [decision, setDecision] = useState("pending");

  return (
    <div className="agentarium-stage">
      <header className="agentarium-masthead"><div><span>AGENTARIUM / RUN 0427</span><strong>Control is a product surface.</strong></div><p><i /> LIVE TRACE　00:31</p></header>
      {activeScreen === 0 ? (
        <div className="agentarium-map" data-testid="agent-map-real">
          <aside><span>ACTIVE RUN</span><strong>04</strong><p>Compare two agent-control approaches and prepare an evidence-based brief.</p><dl><div><dt>HANDOFFS</dt><dd>03</dd></div><div><dt>RISK</dt><dd>MEDIUM</dd></div></dl></aside>
          <main><div className="agent-path"><span>INPUT</span><i /><span>PLAN</span><i /><span>RESEARCH</span><i /><span>SYNTHESIS</span><i /><span>HUMAN</span></div>{agentUnits.map((unit, index) => <button type="button" className={`agent-ribbon agent-ribbon--${unit[2]} ${selectedAgent === index ? "is-active" : ""}`} onClick={() => setSelectedAgent(index)} key={unit[0]}><span>{number(index)}</span><strong>{unit[0]}</strong><p>{unit[1]}</p><em>{unit[2]}</em></button>)}</main>
          <aside className="agentarium-inspector"><span>AUTHORITY PROFILE</span><h3>{agentUnits[selectedAgent][0]}</h3><dl><div><dt>CAN</dt><dd>Read sources<br />Draft analysis</dd></div><div><dt>CANNOT</dt><dd>Publish externally<br />Change permissions</dd></div><div><dt>STOP WHEN</dt><dd>Evidence &lt; 80%</dd></div></dl><NextAction onClick={() => onNavigate(1)} testId="agent-to-trace-real">Open execution trace</NextAction></aside>
        </div>
      ) : null}
      {activeScreen === 1 ? (
        <div className="agentarium-trace" data-testid="agent-trace-real">
          <aside><span>TASK 0427</span><h3>Every answer should have a trace.</h3><p>The interface shows decisions and evidence, not private chain-of-thought.</p><strong>82%</strong><small>EVIDENCE COVERAGE</small></aside>
          <main><header><span>TIME</span><span>EVENT</span><span>PROOF</span><span>STATE</span></header>{[
            ["09:41:02", "Planner decomposed task", "4 steps", "DONE"],
            ["09:41:12", "Official source retrieved", "OpenAI docs", "VERIFIED"],
            ["09:41:18", "Community claim attached", "Single post", "UNCERTAIN"],
            ["09:41:29", "Synthesis drafted claim", "2 citations", "REVIEW"],
            ["09:41:33", "External publish requested", "Permission gate", "PAUSED"],
          ].map((row, index) => <button type="button" className={selectedEvent === index ? "is-active" : ""} onClick={() => setSelectedEvent(index)} key={row[0]}><time>{row[0]}</time><strong>{row[1]}</strong><span>{row[2]}</span><em>{row[3]}</em></button>)}</main>
          <aside className="agent-event-detail"><span>EVENT / {number(selectedEvent)}</span><h3>{selectedEvent === 4 ? "High-impact action paused." : "Evidence remains inspectable."}</h3><p>{selectedEvent === 4 ? "Publishing sits outside the agent’s authority boundary." : "Inputs, tools and resulting claims are linked to this event."}</p><NextAction onClick={() => onNavigate(2)} testId="agent-to-check-real">Review checkpoint</NextAction></aside>
        </div>
      ) : null}
      {activeScreen === 2 ? (
        <div className="agentarium-checkpoint" data-testid="agent-checkpoint-real">
          <section className="checkpoint-question"><span>HUMAN CHECKPOINT / 03</span><h2>Publish external brief?</h2><p>One source is unverified. The headline contains an absolute claim.</p><div className="checkpoint-risk"><strong>02</strong><span>items require judgment</span></div></section>
          <section className="checkpoint-proof"><article><span>01 / SOURCE QUALITY</span><strong>7 verified · 1 unverified</strong><button type="button">Exclude uncertain source</button></article><article><span>02 / CLAIM SCOPE</span><strong>“Always prevents silent failure”</strong><button type="button">Return claim for revision</button></article><div><button type="button" onClick={() => setDecision("revision")}>RETURN FOR REVISION</button><button type="button" onClick={() => setDecision("approved")} data-testid="agent-approve-real">APPROVE ONCE</button></div>{decision !== "pending" ? <p>{decision === "approved" ? "One-time permission granted. Action logged." : "Run returned to Synthesis with review notes."}</p> : null}</section>
          <aside><span>ROLLBACK TRAIL</span><ol><li><strong>NOW</strong><p>Awaiting decision</p></li><li><strong>09:41</strong><p>Draft generated</p></li><li><strong>09:40</strong><p>Clean state</p></li></ol></aside>
        </div>
      ) : null}
    </div>
  );
}

const deskSignals = [
  ["OPENAI", "MODEL", "New reasoning model changes tool-use limits", "92"],
  ["ANTHROPIC", "PRODUCT", "Claude revises computer-use permissions", "78"],
  ["GITHUB", "COMMUNITY", "Developers report silent rollback failures", "86"],
  ["REDDIT", "QUESTION", "Why did my agent publish without asking?", "66"],
];

function SignalDeskDemo({ activeScreen, onNavigate }) {
  const [selected, setSelected] = useState(2);
  const [audience, setAudience] = useState("ORDINARY USERS");
  const [format, setFormat] = useState("Product analysis");
  const [created, setCreated] = useState(false);

  return (
    <div className="signaldesk-stage">
      <header className="signaldesk-masthead"><strong>SIGNAL/DESK</strong><span>AI EDITORIAL INTELLIGENCE　·　WED 01 JUL 2026</span><em>127 LIVE SIGNALS</em></header>
      {activeScreen === 0 ? (
        <div className="signaldesk-feed" data-testid="signal-feed-real">
          <main><header><span>THE LIVE DESK</span><h2>What changed—<br />and who should care?</h2><p>Models, products, communities and public questions in one editorial stream.</p></header><div className="signaldesk-table"><div><span>SOURCE</span><span>SIGNAL</span><span>HEAT</span></div>{deskSignals.map((item, index) => <button type="button" className={selected === index ? "is-active" : ""} onClick={() => setSelected(index)} key={item[2]}><span><strong>{item[0]}</strong><em>{item[1]}</em></span><b>{item[2]}</b><span><i style={{ width: `${item[3]}%` }} /><small>{item[3]}</small></span></button>)}</div></main>
          <aside className="signal-clipping"><span>SELECTED SIGNAL</span><em>{deskSignals[selected][0]} / {deskSignals[selected][1]}</em><h3>{deskSignals[selected][2]}</h3><p>14 discussions across developer communities in 6 hours. Product impact is plausible; system-wide prevalence is unverified.</p><dl><div><dt>USER IMPACT</dt><dd>HIGH</dd></div><div><dt>NOVELTY</dt><dd>MEDIUM</dd></div><div><dt>EVIDENCE</dt><dd>NEEDS WORK</dd></div></dl><NextAction onClick={() => onNavigate(1)} testId="signal-to-question-real">Map public questions</NextAction></aside>
        </div>
      ) : null}
      {activeScreen === 1 ? (
        <div className="signaldesk-questions" data-testid="signal-question-real">
          <aside><span>AUDIENCE LENS</span>{["ORDINARY USERS", "DEVELOPERS", "INDUSTRY"].map((item, index) => <button type="button" className={audience === item ? "is-active" : ""} onClick={() => setAudience(item)} key={item}><span>{number(index)}</span><strong>{item}</strong><em>{[22,17,9][index]}</em></button>)}<p>48 questions clustered from 126 public discussions.</p></aside>
          <main><header><span>QUESTION MAP / CLUSTER 07</span><h2>{audience === "ORDINARY USERS" ? "They do not ask how many agents exist." : audience === "DEVELOPERS" ? "They ask where the system should stop." : "They ask who owns the outcome."}</h2></header><div className="question-editorial-grid"><section><span>IMMEDIATE</span><article><strong>{audience === "ORDINARY USERS" ? "它会不会擅自发布？" : audience === "DEVELOPERS" ? "如何定义停止条件？" : "谁对 Agent 动作负责？"}</strong><small>18 mentions · rising</small></article><article><strong>出错后能恢复吗？</strong><small>12 mentions</small></article></section><section><span>SYSTEMIC</span><article><strong>我怎么知道答案可靠？</strong><small>9 mentions · high utility</small></article><article><strong>权限边界应该由谁配置？</strong><small>7 mentions</small></article></section></div><blockquote>普通用户并不关心 Agent 有几个，他们关心它做错后谁负责。</blockquote></main>
          <aside className="editorial-opening"><span>EDITORIAL OPENING</span><h3>From feature update to user consequence.</h3><p>Recommended angle: why rollback determines whether agents can enter real work.</p><NextAction onClick={() => onNavigate(2)} testId="signal-to-decision-real">Make editorial decision</NextAction></aside>
        </div>
      ) : null}
      {activeScreen === 2 ? (
        <div className="signaldesk-decision" data-testid="signal-decision-real">
          <main><header><span>EDITORIAL DECISION / SD—071</span><em>REVIEW 03 / 04</em></header><section className="editorial-verdict"><span>FOLLOW?</span><strong>YES</strong><em>WITH A NARROWER ANGLE</em><p>不要写“Agent 安全问题”，写“为什么回滚能力决定 Agent 能不能进入真实工作”。</p></section><section className="editorial-scores"><article><span>NEWS VALUE</span><strong>07</strong><small>Rising, not saturated</small></article><article><span>UTILITY VALUE</span><strong>09</strong><small>Clear user consequence</small></article><article><span>EVIDENCE</span><strong>06</strong><small>One claim to verify</small></article></section><blockquote><span>MEMORABLE JUDGMENT</span>真正的问题不是 AI 会不会做，而是人能不能验收它做得对不对。</blockquote></main>
          <aside><span>BRIEF BUILDER</span><label>RECOMMENDED FORMAT</label>{["Product analysis", "Explainer", "News brief"].map((item) => <button type="button" className={format === item ? "is-active" : ""} onClick={() => setFormat(item)} key={item}>{item}<small>{format === item ? "SELECTED" : ""}</small></button>)}<dl><div><dt>PRIMARY AUDIENCE</dt><dd>AI product users</dd></div><div><dt>LENGTH</dt><dd>1,800–2,400 words</dd></div><div><dt>RISK</dt><dd>Anecdote ≠ prevalence</dd></div></dl><NextAction onClick={() => setCreated(true)} testId="signal-create-real">{created ? "Brief created" : "Create editorial brief"}</NextAction>{created ? <p>SD—071.md is ready for writing.</p> : null}</aside>
        </div>
      ) : null}
    </div>
  );
}

const demos = { minddock: MindDockDemo, agentarium: AgentariumDemo, "signal-desk": SignalDeskDemo };

export function MockScreen({ work, activeScreen, onNavigate }) {
  const Demo = demos[work.slug];
  const screen = work.screens[activeScreen];
  return (
    <figure className={`concept-demo concept-demo--${work.slug}`} id={`${work.slug}-panel-${activeScreen}`} role="tabpanel" aria-labelledby={`${work.slug}-tab-${activeScreen}`}>
      <figcaption><span>{screen.id}</span><div><h3>{screen.name}</h3><p>{screen.description}</p></div><em>{number(activeScreen)} / {String(work.screens.length).padStart(2, "0")}</em></figcaption>
      <Demo activeScreen={activeScreen} onNavigate={onNavigate} />
      <p className="concept-demo__note"><span>INTERACTIVE PRODUCT STORY</span> 界面内控件可操作；关键链路可连续推进。</p>
    </figure>
  );
}

export function InterfacePanel({ label, meta, children, className = "" }) {
  return <section className={`interface-panel ${className}`}><header className="interface-panel__bar"><strong>{label}</strong><span>{meta}</span></header>{children}</section>;
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
      <div className="project-showcase__heading"><div><span>03</span><h2 id="interface-concept-title">Interface Concept</h2></div><p>{work.interfaceConcept}</p></div>
      <div className="project-showcase__tabs" role="tablist" aria-label="Interactive product screens">
        {work.screens.map((screen, index) => <button type="button" role="tab" id={`${work.slug}-tab-${index}`} aria-controls={`${work.slug}-panel-${index}`} aria-selected={activeScreen === index} tabIndex={activeScreen === index ? 0 : -1} className={activeScreen === index ? "is-active" : ""} key={screen.id} onClick={() => setActiveScreen(index)}><span>{screen.id}</span>{screen.name}</button>)}
      </div>
      <MockScreen work={work} activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </section>
  );
}
