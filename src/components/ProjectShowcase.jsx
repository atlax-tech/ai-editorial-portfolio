import { useEffect, useRef, useState } from "react";

const number = (value) => String(value + 1).padStart(2, "0");

function DemoAction({ children, onClick, tone = "primary", testId }) {
  return (
    <button className={`demo-action demo-action--${tone}`} type="button" onClick={onClick} data-testid={testId}>
      <span>{children}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
    </button>
  );
}

const mindDocuments = ["MindDock Rebuild v2 PRD", "AI Mentor Pipeline", "Context Pack Spec"];

function MindDockDemo({ activeScreen, onNavigate }) {
  const [captureText, setCaptureText] = useState("知识库不是仓库，而是让知识重新进入思考的接口。");
  const [mentorState, setMentorState] = useState("ready");
  const [sources, setSources] = useState(new Set([0, 1, 2]));
  const [generated, setGenerated] = useState(false);

  const toggleSource = (index) => {
    setSources((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="minddock-theatre" data-testid="minddock-product">
      <div className="md-product-window">
        <header className="md-titlebar">
          <span className="md-traffic" aria-hidden="true"><i /><i /><i /></span>
          <strong>MindDock</strong>
          <span>Workspace / Product Research</span>
          <em><i /> Local Vault</em>
        </header>

        <div className="md-app-real">
          <aside className="md-sidebar-real">
            <div className="md-brand"><span>MD</span><strong>MindDock</strong></div>
            <button type="button" className="md-capture-trigger" onClick={() => onNavigate(0)}>＋ 快速捕获 <kbd>⌘ N</kbd></button>
            <nav>
              <small>WORKSPACE</small>
              <button type="button">⌕ 全局搜索</button>
              <button type="button">◇ Mind View</button>
              <small>VAULT</small>
              <span>⌄ documents</span>
              {mindDocuments.map((item, index) => <button type="button" className={index === 0 ? "is-active" : ""} key={item}>{item}</button>)}
              <span>› outputs</span>
            </nav>
            <footer><span><i /> Vault healthy</span><em>24 documents</em></footer>
          </aside>

          <main className="md-workspace-real">
            <header className="md-workspace-header">
              <div><span>WORKSPACE</span><strong>MindDock Rebuild</strong></div>
              <nav><button type="button" className="is-active">Editor</button><button type="button">Mind View</button><button type="button">Health</button></nav>
              <button type="button">⌘ K</button>
            </header>
            <div className="md-tabbar"><span>MindDock Rebuild v2 PRD.md</span><i>×</i><button type="button">＋</button></div>
            <div className="md-editor-toolbar"><span>Markdown</span><i /> <button type="button" className="is-active">Edit</button><button type="button">Split</button><button type="button">Preview</button><em>Saved locally · just now</em></div>

            <div className={`md-document md-document--screen-${activeScreen}`}>
              <article className="md-source">
                <small># PRODUCT PRINCIPLE</small>
                <h3>AI Mentor 不是 chatbot</h3>
                <p>它在用户捕获灵感、写作卡住、整理知识和准备输出时，主动提供轻量引导与可执行建议。</p>

                {activeScreen === 1 ? (
                  <div className={`md-inline-mentor md-inline-mentor--${mentorState}`} data-testid="minddock-inline-mentor">
                    <span className="md-inline-anchor" aria-hidden="true" />
                    <header><span><i /> MENTOR · DECISION SIGNAL</span><button type="button" aria-label="关闭建议" onClick={() => setMentorState("dismissed")}>×</button></header>
                    {mentorState === "accepted" ? (
                      <><strong>已提取为产品原则</strong><p>来源和当前段落位置已经保留，可在 Context Pack 中继续使用。</p><button type="button" onClick={() => onNavigate(2)}>在 Platter 查看 →</button></>
                    ) : mentorState === "dismissed" ? (
                      <><strong>建议已暂时收起</strong><button type="button" onClick={() => setMentorState("ready")}>重新显示</button></>
                    ) : (
                      <><strong>这段内容已经形成一条可复用的产品原则。</strong><p>提取到 Context Pack，并保留当前文档为来源？</p><footer><button type="button" onClick={() => setMentorState("dismissed")}>稍后</button><button type="button" onClick={() => setMentorState("accepted")}>提取原则</button></footer></>
                    )}
                  </div>
                ) : null}

                <blockquote>让用户以最小主动维护成本，把零散输入组织成可复用的本地知识系统。</blockquote>
                <p>AI 可以判断候选结构，但不能替用户完成最终决策。建议权属于系统，决定权始终留给人。</p>
                {activeScreen === 3 && generated ? (
                  <section className="md-generated-inline"><span>OUTPUT · SAVED TO /outputs</span><h4>让知识重新进入下一次判断</h4><p>MindDock 把智能能力拆进捕获、写作、整理与输出节点，让每次 AI 介入都有来源、时机和明确动作。</p></section>
                ) : null}
              </article>
              <aside className="md-preview">
                <span>PREVIEW</span>
                <h3>AI Mentor 不是 chatbot</h3>
                <p>它不占据一个独立对话框，而是在当前任务的正确位置出现。</p>
                <hr />
                <strong>Product principle</strong>
                <p>让 AI 介入保持短、轻、可拒绝，并与原始材料建立可追溯关系。</p>
              </aside>
            </div>
          </main>

          <aside className={`md-platter-real ${activeScreen >= 2 ? "is-open" : ""}`}>
            <header><nav><button type="button" className="is-active">Mentor</button><button type="button">Inbox <i>2</i></button></nav><button type="button">×</button></header>
            {activeScreen < 2 ? (
              <div className="md-platter-empty"><span>AI MENTOR</span><strong>保持在写作上下文里</strong><p>短建议贴近正文出现；需要比较来源或执行复杂任务时，才进入 Platter。</p><dl><div><dt>本次文档</dt><dd>1 / 5</dd></div><div><dt>Vault / hour</dt><dd>3 / 20</dd></div></dl></div>
            ) : (
              <div className="md-context-pack">
                <span>ACTIVE CONTEXT PACK</span>
                <h3>MindDock 产品判断</h3>
                <p>{sources.size} sources · {sources.size * 812} tokens</p>
                <div>
                  {["Rebuild v2 PRD", "AI Mentor Pipeline", "Quick Capture Spec", "Knowledge Workflow Notes"].map((source, index) => (
                    <button type="button" className={sources.has(index) ? "is-selected" : ""} onClick={() => toggleSource(index)} key={source}><i /> <span><strong>{source}</strong><small>{index === 0 ? "产品定位与非目标" : index === 1 ? "信号与交付策略" : "本地来源"}</small></span></button>
                  ))}
                </div>
                <label><span>OUTPUT INTENT</span><select defaultValue="产品分析"><option>产品分析</option><option>PRD</option><option>研究摘要</option></select></label>
                <DemoAction onClick={() => { setGenerated(true); onNavigate(3); }} testId="mind-generate">{generated ? "重新生成" : "生成可编辑草稿"}</DemoAction>
              </div>
            )}
          </aside>
        </div>

        {activeScreen === 0 ? (
          <div className="md-capture-overlay" data-testid="minddock-capture">
            <button type="button" className="md-capture-scrim" aria-label="关闭快速捕获" onClick={() => onNavigate(1)} />
            <section className="md-capture-modal">
              <header><span>QUICK CAPTURE</span><em>先接住，再整理</em></header>
              <textarea aria-label="快速捕获内容" value={captureText} onChange={(event) => setCaptureText(event.target.value)} autoFocus />
              <div className="md-guided-step"><span>MENTOR · 1 / 3</span><strong>你希望这条判断之后帮助你产出什么？</strong><nav><button type="button">产品原则</button><button type="button">文章</button><button type="button">Prompt</button></nav></div>
              <footer><span>原文会先保存，不会被 AI 覆盖</span><DemoAction onClick={() => onNavigate(1)} testId="mind-capture-next">保存到 Inbox</DemoAction></footer>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const armorModules = [
  ["01", "Repository Map", "READ"],
  ["02", "Document Build", "ALIGN"],
  ["03", "Retrofit", "RECOVER"],
  ["04", "Drift Update", "EVOLVE"],
  ["05", "Health Check", "SCAN"],
  ["06", "Exec Prompt", "BOUND"],
  ["07", "Verify", "PROVE"],
];

function ArmorParticles({ stage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#8052ff", "#ffb829", "#28e39f", "#e8ebff", "#469bff"];
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };
    const particles = Array.from({ length: reduceMotion ? 90 : 230 }, (_, index) => ({
      x: Math.random(), y: Math.random(), vx: 0, vy: 0, size: 1 + Math.random() * 2.4,
      color: colors[index % colors.length], seed: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const targetFor = (index, time) => {
      const lane = index % 7;
      const row = Math.floor(index / 7);
      const angle = (lane / 7) * Math.PI * 2 - Math.PI / 2;
      const assembled = stage >= 1;
      const radiusX = width * (stage >= 2 ? 0.285 : 0.36);
      const radiusY = height * (stage >= 2 ? 0.34 : 0.42);
      if (!assembled) return { x: ((index * 61) % 997) / 997 * width, y: ((index * 37) % 991) / 991 * height };
      const jitter = (row % 10) * 3;
      return {
        x: width * 0.53 + Math.cos(angle) * (radiusX + jitter) + Math.sin(time + index) * 5,
        y: height * 0.52 + Math.sin(angle) * (radiusY + jitter * 0.45) + Math.cos(time * 0.8 + index) * 4,
      };
    };

    const draw = () => {
      frame += reduceMotion ? 0 : 1;
      const time = frame / 120;
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const target = targetFor(index, time + particle.seed);
        const currentX = particle.x * width;
        const currentY = particle.y * height;
        let ax = (target.x - currentX) * (stage ? 0.003 : 0.00045);
        let ay = (target.y - currentY) * (stage ? 0.003 : 0.00045);
        const dx = currentX - pointer.x;
        const dy = currentY - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          ax += (dx / Math.max(distance, 1)) * force * 0.32;
          ay += (dy / Math.max(distance, 1)) * force * 0.32;
        }
        particle.vx = (particle.vx + ax) * 0.94;
        particle.vy = (particle.vy + ay) * 0.94;
        particle.x = (currentX + particle.vx) / width;
        particle.y = (currentY + particle.vy) / height;
        const x = particle.x * width;
        const y = particle.y * height;
        context.save();
        context.translate(x, y);
        context.rotate(time + particle.seed);
        context.fillStyle = particle.color;
        context.globalAlpha = stage >= 1 ? 0.8 : 0.48;
        context.beginPath();
        context.moveTo(0, -particle.size * 1.6);
        context.lineTo(particle.size * 1.2, particle.size);
        context.lineTo(-particle.size * 1.2, particle.size);
        context.closePath();
        context.fill();
        context.restore();
      });
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onLeave = () => { pointer.x = -9999; pointer.y = -9999; };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    resize();
    draw();
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [stage]);

  return <canvas ref={canvasRef} className="armor-particles" aria-hidden="true" />;
}

function HarnessArmorDemo({ activeScreen, onNavigate }) {
  const [evolved, setEvolved] = useState(false);
  const [pulse, setPulse] = useState(0);
  const stage = activeScreen;
  const next = () => {
    if (activeScreen < 3) onNavigate(activeScreen + 1);
    else { setEvolved(true); setPulse((value) => value + 1); }
  };

  return (
    <div className={`armor-lab armor-stage-${stage} ${evolved ? "is-evolved" : ""}`} data-testid="harness-armor-lab">
      <ArmorParticles stage={stage} key={pulse} />
      <header className="armor-hud">
        <div><span>HA</span><strong>HARNESS / ARMOR</strong></div>
        <p>REPOSITORY DEFENSE SYSTEM</p>
        <em><i /> {evolved ? "ARMOR v0.1.3" : "ARMOR v0.1.2"}</em>
      </header>

      <div className="armor-orbit" aria-label="七个 Harness Skills 模块">
        {armorModules.map(([id, name, mode], index) => (
          <article className={`${index <= stage * 2 ? "is-online" : ""} armor-plate--${index + 1}`} key={name}>
            <span>{id}</span><div><strong>{name}</strong><em>{mode}</em></div><i />
          </article>
        ))}
      </div>

      <main className="armor-core">
        <div className="armor-core__halo" aria-hidden="true"><i /><i /><i /></div>
        <span className="armor-core__eyebrow">TARGET / atlax-tech</span>
        <h3>{stage === 0 ? "Repository exposed" : stage === 1 ? "Evidence lattice forming" : stage === 2 ? "Write perimeter locked" : evolved ? "Armor evolved" : "Independent proof online"}</h3>
        <div className="armor-repo">
          <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 16h19l6 7h23v29H8z" /><path d="M8 23h48" /></svg>
          <strong>harness-armor</strong><span>{stage === 0 ? "UNMAPPED" : "PROTECTED"}</span>
        </div>
        <dl>
          <div><dt>EVIDENCE</dt><dd>{stage >= 1 ? "47 claims mapped" : "Scanning…"}</dd></div>
          <div><dt>BOUNDARY</dt><dd>{stage >= 2 ? "3 managed / 1 protected" : "Not armed"}</dd></div>
          <div><dt>PROOF</dt><dd>{stage >= 3 ? "55 local · 12 CI" : "Awaiting verifier"}</dd></div>
        </dl>
      </main>

      <aside className="armor-telemetry">
        <span>{number(activeScreen)} / 04</span>
        <strong>{activeScreen === 0 ? "Map the unknown" : activeScreen === 1 ? "Assemble from evidence" : activeScreen === 2 ? "Authorize the exact perimeter" : "Detect drift. Upgrade safely."}</strong>
        <p>{activeScreen === 0 ? "只读扫描把仓库事实暴露出来。" : activeScreen === 1 ? "七个 Skills 像纳米装甲片一样围绕仓库形成可执行环境。" : activeScreen === 2 ? "人类维护内容被锁定，Agent 只在授权范围内行动。" : evolved ? "检测到结构漂移后，更新计划已验证并升级装甲。" : "独立执行、测试与评审，让完成有证据。"}</p>
        <div className="armor-signal"><i /><i /><i /><i /><i /></div>
      </aside>

      <footer className="armor-command">
        <div><span>SYSTEM TRACE</span><p>{stage === 0 ? "repo.scan --readonly" : stage === 1 ? "skills.assemble --evidence-ledger" : stage === 2 ? "perimeter.lock --human-owned" : evolved ? "drift.patch --verified → v0.1.3" : "verify.run --independent"}</p></div>
        <DemoAction onClick={next} testId={stage === 3 ? "harness-evolve" : "harness-suit-up"}>{stage === 0 ? "为仓库穿上 Armor" : stage === 1 ? "锁定执行边界" : stage === 2 ? "运行独立验证" : evolved ? "升级完成 · 再次检测" : "模拟漂移并自升级"}</DemoAction>
      </footer>
    </div>
  );
}

const dockFlow = ["Detect", "Resolve", "Permission", "Plan & Diff", "Apply / Rollback"];

function AgentDockDemo({ activeScreen, onNavigate }) {
  const [runtime, setRuntime] = useState("OpenClaw");
  const [agent, setAgent] = useState("main");
  const [permissions, setPermissions] = useState({ Files: true, Shell: true, Browser: false, Channel: false });
  const [mutation, setMutation] = useState("preview");
  const flowStep = activeScreen === 3 && mutation === "applied" ? 4 : activeScreen;

  const next = () => onNavigate(Math.min(3, activeScreen + 1));

  return (
    <div className={`dock-control-room dock-flow-${flowStep}`} data-testid="agentdock-control-room">
      <header className="dock-control__bar">
        <div><span>AD</span><strong>AgentDock</strong><em>Local runtime control</em></div>
        <nav><button type="button" className="is-active">Control Room</button><button type="button">Migration</button><button type="button">Audit</button></nav>
        <p><i /> LOCAL ONLY <span>No cloud · No telemetry</span></p>
      </header>

      <ol className="dock-flow-rail">
        {dockFlow.map((item, index) => <li className={index < flowStep ? "is-done" : index === flowStep ? "is-active" : ""} key={item}><i>{index < flowStep ? "✓" : number(index)}</i><span>{item}</span></li>)}
      </ol>

      <main className="dock-control__canvas">
        <section className="dock-topology" aria-label="本地 Agent 运行时拓扑">
          <svg viewBox="0 0 760 470" preserveAspectRatio="none" aria-hidden="true">
            <path className="dock-link dock-link--runtime" d="M380 232 C280 210 245 120 150 110" />
            <path className="dock-link dock-link--runtime" d="M380 232 C480 210 515 120 610 110" />
            <path className="dock-link dock-link--agent" d="M380 232 C280 255 230 340 138 354" />
            <path className="dock-link dock-link--model" d="M380 232 C480 255 535 340 630 354" />
            <path className="dock-link dock-link--safety" d="M380 232 L380 420" />
          </svg>
          <div className="dock-node dock-node--machine"><small>THIS MAC</small><strong>Local Control Plane</strong><span><i /> Scanned 2.4s ago</span></div>
          <button type="button" className={`dock-node dock-node--openclaw ${runtime === "OpenClaw" ? "is-selected" : ""}`} onClick={() => setRuntime("OpenClaw")}><small>RUNTIME / ACTIVE</small><strong>OpenClaw 1.4.2</strong><span>~/.openclaw</span></button>
          <button type="button" className={`dock-node dock-node--hermes ${runtime === "Hermes" ? "is-selected" : ""}`} onClick={() => setRuntime("Hermes")}><small>RUNTIME / READY</small><strong>Hermes 0.8.1</strong><span>~/.hermes</span></button>
          <button type="button" className="dock-node dock-node--agent"><small>{runtime === "OpenClaw" ? "AGENT" : "PROFILE"}</small><strong>{agent}</strong><span>08 skills · Persona loaded</span></button>
          <button type="button" className="dock-node dock-node--model"><small>EFFECTIVE MODEL</small><strong>qwen3:32b</strong><span>Ollama · Local</span></button>
          <button type="button" className="dock-node dock-node--backup"><small>RECOVERY POINT</small><strong>{mutation === "applied" ? "Backup #018" : "Ready before write"}</strong><span>{mutation === "rolledback" ? "Restored" : "Plan hash locked"}</span></button>
        </section>

        <aside className="dock-detail-panel">
          {activeScreen === 0 ? (
            <div className="dock-detect-panel">
              <span>01 / RUNTIME DETECTION</span><h3>先看清本机真实存在什么</h3>
              <div><button type="button" className={runtime === "OpenClaw" ? "is-active" : ""} onClick={() => setRuntime("OpenClaw")}><i />OpenClaw <em>HIGH CONFIDENCE</em></button><button type="button" className={runtime === "Hermes" ? "is-active" : ""} onClick={() => setRuntime("Hermes")}><i />Hermes <em>DETECTED</em></button></div>
              <dl><div><dt>PATH</dt><dd>{runtime === "OpenClaw" ? "~/.openclaw" : "~/.hermes"}</dd></div><div><dt>STATE</dt><dd>Gateway running</dd></div><div><dt>SOURCE</dt><dd>CLI + local files</dd></div></dl>
              <DemoAction onClick={next} testId="dock-flow-next">选择 Agent 并解析配置</DemoAction>
            </div>
          ) : null}

          {activeScreen === 1 ? (
            <div className="dock-resolve-panel">
              <span>02 / EFFECTIVE STATE</span><h3>配置表单不等于最终生效状态</h3>
              <label>SELECTED {runtime === "OpenClaw" ? "AGENT" : "PROFILE"}<select value={agent} onChange={(event) => setAgent(event.target.value)}><option>main</option><option>dev-agent</option><option>consulting-agent</option></select></label>
              <ol><li><i>1</i><span>Agent override</span><em>Not set</em></li><li><i>2</i><span>Provider default</span><em>Ollama</em></li><li className="is-active"><i>3</i><span>Resolved model</span><strong>qwen3:32b</strong></li></ol>
              <p><i /> Local only · No API cost · Secret references redacted</p>
              <DemoAction onClick={next} testId="dock-flow-next">检查能力与权限</DemoAction>
            </div>
          ) : null}

          {activeScreen === 2 ? (
            <div className="dock-permission-panel">
              <span>03 / CAPABILITY BOUNDARY</span><h3>把抽象权限翻译成真实能力</h3>
              <div>{Object.entries(permissions).map(([name, enabled]) => <label key={name}><span><strong>{name}</strong><small>{name === "Files" ? "Workspace read / write" : name === "Shell" ? "Execute local commands" : name === "Browser" ? "Control browser sessions" : "Send external messages"}</small></span><em>{name === "Channel" ? "CRITICAL" : name === "Files" ? "MEDIUM" : "HIGH"}</em><input type="checkbox" checked={enabled} onChange={() => setPermissions((current) => ({ ...current, [name]: !enabled }))} /><i /></label>)}</div>
              <DemoAction onClick={next} testId="dock-flow-next">生成变更计划</DemoAction>
            </div>
          ) : null}

          {activeScreen === 3 ? (
            <div className="dock-mutation-panel">
              <span>04 / SAFE MUTATION · MP—018</span><h3>{mutation === "rolledback" ? "配置已恢复" : mutation === "applied" ? "变更已安全应用" : "在写入前看清每一个字节"}</h3>
              <div className="dock-plan-meta"><span>TARGET <strong>{runtime} / {agent}</strong></span><span>FILES <strong>01</strong></span><span>BACKUP <strong>Required</strong></span></div>
              <div className="dock-live-diff"><header><span>{runtime === "OpenClaw" ? "~/.openclaw/agents/main/config.json" : "~/.hermes/profiles/main.yaml"}</span><em>UNIFIED DIFF</em></header><p><i>−</i> "model": "openrouter/auto"</p><p><b>+</b> "model": "ollama/qwen3:32b"</p><p><b>+</b> "shell": {String(permissions.Shell)}</p><p><b>+</b> "browser": {String(permissions.Browser)}</p></div>
              <div className="dock-confirm-line"><i>{mutation === "preview" ? "!" : "✓"}</i><span><strong>{mutation === "preview" ? "Plan hash locks this preview" : mutation === "rolledback" ? "Original bytes restored" : "Backup created before write"}</strong><small>任何变化都会使当前确认失效。</small></span></div>
              <footer>{mutation === "applied" ? <button type="button" data-testid="dock-rollback" onClick={() => setMutation("rolledback")}>回滚到 Backup #018</button> : <button type="button" onClick={() => setMutation("preview")}>取消</button>}<DemoAction onClick={() => setMutation("applied")} testId="dock-safe-apply">{mutation === "applied" ? "已应用 · 可回滚" : "确认并安全应用"}</DemoAction></footer>
            </div>
          ) : null}
        </aside>
      </main>

      <footer className="dock-event-stream"><span>LIVE EVENT STREAM</span><p><i /> {mutation === "rolledback" ? "rollback.complete · checksum matched" : mutation === "applied" ? "gateway.restart · effective state verified" : flowStep === 0 ? "runtime.detected · confidence 0.97" : flowStep === 1 ? "config.resolved · inherited provider default" : flowStep === 2 ? "capability.changed · mutation not applied" : "plan.created · awaiting explicit confirmation"}</p><em>Secrets redacted</em></footer>
    </div>
  );
}

const demos = {
  minddock: MindDockDemo,
  "harness-armor": HarnessArmorDemo,
  "agent-dock": AgentDockDemo,
};

export function MockScreen({ work, activeScreen, onNavigate }) {
  const Demo = demos[work.slug];

  return (
    <figure className={`concept-demo concept-demo--${work.slug}`} id={`${work.slug}-panel-${activeScreen}`} role="tabpanel" aria-labelledby={`${work.slug}-tab-${activeScreen}`}>
      <Demo activeScreen={activeScreen} onNavigate={onNavigate} />
      <p className="concept-demo__note"><span>LIVE PRODUCT CONCEPT</span> 可直接选择、切换与推进，体验这款产品真正的核心链路。</p>
    </figure>
  );
}

export function ProductThesis({ children }) {
  return <blockquote className="product-thesis"><span>THE PRODUCT JUDGMENT</span><p>{children}</p></blockquote>;
}

export function EditorialAngleBlock({ children }) {
  return <section className="editorial-angle-block"><span>WHY THIS MATTERS</span><h2>{children}</h2><p>我不仅描述 AI 能做什么，也把它转化为用户能理解、团队能实现、结果能验收的产品系统。</p></section>;
}

export function ProjectShowcase({ work }) {
  const [activeScreen, setActiveScreen] = useState(0);

  const handleTabKeyDown = (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    setActiveScreen((current) => (current + direction + work.screens.length) % work.screens.length);
  };

  return (
    <section className={`project-showcase project-showcase--${work.slug} case-accent--${work.accent} detail-section`} aria-labelledby="interface-concept-title">
      <div className="project-showcase__heading">
        <div><span>03 / INTERACTIVE PROTOTYPE</span><h2 id="interface-concept-title">把产品判断做成可操作界面</h2></div>
        <p>{work.interfaceConcept}</p>
      </div>
      <div className="project-showcase__tabs" role="tablist" aria-label="Interactive product screens" onKeyDown={handleTabKeyDown}>
        {work.screens.map((screen, index) => (
          <button type="button" role="tab" id={`${work.slug}-tab-${index}`} aria-controls={`${work.slug}-panel-${index}`} aria-selected={activeScreen === index} tabIndex={activeScreen === index ? 0 : -1} className={activeScreen === index ? "is-active" : ""} key={screen.id} onClick={() => setActiveScreen(index)}>
            <span>{screen.id}</span><strong>{screen.name}</strong><small>{screen.description}</small><i />
          </button>
        ))}
      </div>
      <MockScreen work={work} activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </section>
  );
}
