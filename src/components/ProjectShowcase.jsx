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
        <em><i /> {"ARMOR v0.1.2"}</em>
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
        <h3>{stage === 0 ? "Repository exposed" : stage === 1 ? "Evidence lattice forming" : stage === 2 ? "Write perimeter locked" : evolved ? "Update plan ready" : "Independent proof online"}</h3>
        <div className="armor-repo">
          <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 16h19l6 7h23v29H8z" /><path d="M8 23h48" /></svg>
          <strong>harness-armor</strong><span>{stage === 0 ? "UNMAPPED" : "PROTECTED"}</span>
        </div>
        <dl>
          <div><dt>EVIDENCE</dt><dd>{stage >= 1 ? "7 Skills mapped" : "Scanning…"}</dd></div>
          <div><dt>BOUNDARY</dt><dd>{stage >= 2 ? "Ownership checked" : "Not armed"}</dd></div>
          <div><dt>PROOF</dt><dd>{stage >= 3 ? "55 local · 12 CI" : "Awaiting verifier"}</dd></div>
        </dl>
      </main>

      <aside className="armor-telemetry">
        <span>{number(activeScreen)} / 04</span>
        <strong>{activeScreen === 0 ? "Map the unknown" : activeScreen === 1 ? "Assemble from evidence" : activeScreen === 2 ? "Authorize the exact perimeter" : "Detect drift. Upgrade safely."}</strong>
        <p>{activeScreen === 0 ? "只读扫描把仓库事实暴露出来。" : activeScreen === 1 ? "七个 Skills 像纳米装甲片一样围绕仓库形成可执行环境。" : activeScreen === 2 ? "人类维护内容被锁定，Agent 只在授权范围内行动。" : evolved ? "检测到结构漂移后，文件级更新计划已展示。" : "独立执行、测试与评审，让完成有证据。"}</p>
        <div className="armor-signal"><i /><i /><i /><i /><i /></div>
      </aside>

      <footer className="armor-command">
        <div><span>SYSTEM TRACE</span><p>{stage === 0 ? "repo.scan --readonly" : stage === 1 ? "skills.assemble --evidence-ledger" : stage === 2 ? "perimeter.lock --human-owned" : evolved ? "drift.check → update plan" : "verify.run --independent"}</p></div>
        <DemoAction onClick={next} testId={stage === 3 ? "harness-evolve" : "harness-suit-up"}>{stage === 0 ? "为仓库穿上 Armor" : stage === 1 ? "锁定执行边界" : stage === 2 ? "运行独立验证" : evolved ? "更新计划已展示 · 再次检测" : "查看漂移更新流程"}</DemoAction>
      </footer>
    </div>
  );
}

function EngineeringDemo({ work, activeScreen, onNavigate }) {
  const screen = work.screens[activeScreen];
  const nodes = ["openclaw", "hermes", "agent", "model"];
  return (
    <div className={`dock-control-room dock-flow-${activeScreen}`}>
      <header className="dock-control__bar">
        <div><span>AI</span><strong>{work.title}</strong><em>Engineering walkthrough</em></div>
        <span>DESIGN · IMPLEMENTATION · EVIDENCE</span>
        <p>架构链路示意</p>
      </header>
      <ol className="dock-flow-rail">{work.screens.map((item, index) => <li className={index === activeScreen ? "is-active" : ""} key={item.id}><i>{item.id}</i><span>{item.name}</span></li>)}</ol>
      <main className="dock-control__canvas">
        <section className="dock-topology" aria-label="工程架构示意">
          <svg viewBox="0 0 760 470" preserveAspectRatio="none" aria-hidden="true"><path className="dock-link dock-link--runtime" d="M380 232C280 210 245 120 150 110M380 232C480 210 515 120 610 110M380 232C280 255 230 340 138 354M380 232C480 255 535 340 630 354" /></svg>
          <div className="dock-node dock-node--machine"><small>ENGINEERING</small><strong>{work.categoryEn}</strong><span>{work.role}</span></div>
          {work.screens.map((item, index) => <button type="button" className={`dock-node dock-node--${nodes[index]} ${activeScreen === index ? "is-selected" : ""}`} onClick={() => onNavigate(index)} key={item.id}><small>{item.id} / DESIGN NODE</small><strong>{item.name}</strong><span>{item.description}</span></button>)}
        </section>
        <aside className="dock-detail-panel">
          <div className="dock-detect-panel">
            <span>{screen.id} / ENGINEERING DETAIL</span><h3>{screen.name}</h3><p>{screen.description}</p>
            <dl>{work.designDecisions.map((decision) => <div key={decision.title}><dt>{decision.title}</dt><dd>{decision.description}</dd></div>)}</dl>
            <DemoAction onClick={() => onNavigate((activeScreen + 1) % work.screens.length)}>查看下一节点</DemoAction>
          </div>
        </aside>
      </main>
      <footer className="dock-event-stream"><span>DELIVERY EVIDENCE</span><p>{work.engineeringProof[Math.min(activeScreen, work.engineeringProof.length - 1)]}</p></footer>
    </div>
  );
}

export function MockScreen({ work, activeScreen, onNavigate }) {
  const Demo = work.slug === "harness-armor" ? HarnessArmorDemo : EngineeringDemo;

  return (
    <figure className={`concept-demo concept-demo--${work.slug === "harness-armor" ? "harness-armor" : "agent-dock"}`} id={`${work.slug}-panel-${activeScreen}`} role="tabpanel" aria-labelledby={`${work.slug}-tab-${activeScreen}`}>
      <Demo work={work} activeScreen={activeScreen} onNavigate={onNavigate} />
      <p className="concept-demo__note"><span>ENGINEERING WALKTHROUGH</span> 交互式工程示意；实现与验收证据见下方及仓库。</p>
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
    const next = (activeScreen + direction + work.screens.length) % work.screens.length;
    setActiveScreen(next);
    document.getElementById(`${work.slug}-tab-${next}`)?.focus();
  };

  return (
    <section className={`project-showcase project-showcase--${work.slug === "harness-armor" ? "harness-armor" : "agent-dock"} case-accent--${work.accent} detail-section`} aria-labelledby="interface-concept-title">
      <div className="project-showcase__heading">
        <div><span>03 / ENGINEERING WALKTHROUGH</span><h2 id="interface-concept-title">架构、执行边界与验证链路</h2></div>
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
