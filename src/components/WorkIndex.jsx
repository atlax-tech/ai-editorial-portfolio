import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons.jsx";

const twoDigits = (index) => String(index + 1).padStart(2, "0");

function MindDockMiniature() {
  return (
    <div className="work-visual work-visual--minddock" aria-label="MindDock 原生知识编辑器预览">
      <header><span><i /><i /><i /></span><strong>MindDock</strong><em><i /> Local Vault</em></header>
      <div className="work-visual__mind-app">
        <aside><b>MD</b><small>WORKSPACE</small><span>⌕ Search</span><span>◇ Mind View</span><small>VAULT</small><strong>MindDock PRD</strong><span>AI Mentor Pipeline</span></aside>
        <main><nav><span>MindDock Rebuild v2 PRD.md</span><em>Saved locally</em></nav><small># PRODUCT PRINCIPLE</small><h3>AI Mentor 不是 chatbot</h3><p>它在写作上下文的正确位置给出轻量、可执行、可拒绝的建议。</p><div className="work-visual__inline"><i /><span><small>MENTOR · DECISION SIGNAL</small><strong>这是一条可复用的产品原则</strong></span><button type="button">提取</button></div></main>
        <section><span>PLATTER</span><strong>Context Pack</strong><p>3 sources · local only</p><i /><i /><i /></section>
      </div>
    </div>
  );
}

function HarnessMiniature() {
  return (
    <div className="work-visual work-visual--harness" aria-label="Harness Armor 纳米装甲预览">
      <div className="work-armor__particles" aria-hidden="true">{Array.from({ length: 30 }, (_, index) => <i style={{ "--i": index }} key={index} />)}</div>
      <header><span>HA / REPOSITORY DEFENSE</span><em><i /> ARMOR v0.1.2</em></header>
      <div className="work-armor__orbit">
        {["MAP", "BUILD", "RETROFIT", "DRIFT", "HEALTH", "EXEC", "VERIFY"].map((item, index) => <span className={`work-armor__plate work-armor__plate--${index + 1}`} key={item}><i>{twoDigits(index)}</i><strong>{item}</strong></span>)}
        <main><span>TARGET</span><strong>harness-armor</strong><em>PROTECTED</em><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 16h19l6 7h29v31H8z" /></svg></main>
        <section><span>EVIDENCE</span><strong>55 / 55</strong><i /><span>CI MATRIX</span><strong>12 / 12</strong></section>
      </div>
      <footer><span>Seven Skills assembled around repository truth.</span><em>SELF-ITERATING →</em></footer>
    </div>
  );
}

function AgentDockMiniature() {
  return (
    <div className="work-visual work-visual--agentdock" aria-label="AgentDock 本地运行时控制拓扑预览">
      <header><span><b>AD</b> AgentDock</span><nav>CONTROL ROOM</nav><em><i /> LOCAL ONLY</em></header>
      <div className="work-dock__flow">{["DETECT", "RESOLVE", "PERMISSION", "APPLY"].map((item, index) => <span className={index < 3 ? "is-active" : ""} key={item}><i>{twoDigits(index)}</i>{item}</span>)}</div>
      <div className="work-dock__map">
        <svg viewBox="0 0 660 280" preserveAspectRatio="none" aria-hidden="true"><path d="M330 140C230 130 210 55 110 50M330 140C430 130 455 55 555 50M330 140C220 165 205 235 105 235M330 140C440 165 460 235 560 235" /></svg>
        <main><small>THIS MAC</small><strong>Local Control</strong><span>Scanned now</span></main>
        <button type="button" className="node-one"><small>RUNTIME</small><strong>OpenClaw</strong></button>
        <button type="button" className="node-two"><small>RUNTIME</small><strong>Hermes</strong></button>
        <button type="button" className="node-three"><small>AGENT</small><strong>main</strong></button>
        <button type="button" className="node-four"><small>MODEL</small><strong>qwen3:32b</strong></button>
      </div>
      <footer><span>Plan hash locked · Backup ready</span><strong>REVIEW DIFF →</strong></footer>
    </div>
  );
}

const miniatures = {
  minddock: MindDockMiniature,
  "harness-armor": HarnessMiniature,
  "agent-dock": AgentDockMiniature,
};

export function WorkIndex({ data }) {
  const [activeSlug, setActiveSlug] = useState(data.items[0]?.slug);
  const activeIndex = Math.max(0, data.items.findIndex((item) => item.slug === activeSlug));
  const activeItem = data.items[activeIndex];
  const Miniature = miniatures[activeItem.slug];

  return (
    <section className="work case-index section-shell section-divider" id="work">
      <header className="section-heading case-index__intro">
        <div><p className="section-count">{data.count}</p><h2>项目案例</h2></div>
        <div className="case-index__intro-copy"><strong>AI 不是一个孤立功能，而是一条可执行、可验证、可恢复的工作流</strong><p>{data.description}</p></div>
      </header>

      <div className="case-index__selector" role="tablist" aria-label="项目案例">
        {data.items.map((item, index) => (
          <button type="button" role="tab" aria-selected={activeSlug === item.slug} className={activeSlug === item.slug ? "is-active" : ""} onClick={() => setActiveSlug(item.slug)} key={item.slug}>
            <span>{twoDigits(index)}</span><strong>{item.title}</strong><em>{item.categoryEn}</em>
          </button>
        ))}
      </div>

      <article className={`case-index__chapter case-index__chapter--${activeItem.slug} case-accent--${activeItem.accent}`} aria-live="polite">
        <div className="case-index__copy">
          <div className="case-index__meta"><span>{activeItem.id}</span><span>{activeItem.status}</span></div>
          <h3>{activeItem.title}</h3>
          <p className="case-index__subtitle">{activeItem.subtitle}</p>
          <p className="case-index__thesis">{activeItem.memorableLine}</p>
          <ol className="case-index__points">{activeItem.homePoints.map((point, index) => <li key={point}><span>{twoDigits(index)}</span>{point}</li>)}</ol>
          <div className="case-index__actions">
            <Link to={`/work/${activeItem.slug}`}>查看完整案例 <ArrowIcon /></Link>
            {activeItem.repoUrl ? <a href={activeItem.repoUrl} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a> : null}
          </div>
        </div>
        <div className="case-index__stage"><Miniature /></div>
      </article>

      <footer className="case-index__progress">
        <span>{twoDigits(activeIndex)} / {String(data.items.length).padStart(2, "0")}</span>
        <i><b style={{ width: `${((activeIndex + 1) / data.items.length) * 100}%` }} /></i>
        <button type="button" onClick={() => setActiveSlug(data.items[(activeIndex + 1) % data.items.length].slug)}>下一个：{data.items[(activeIndex + 1) % data.items.length].title}<ArrowIcon /></button>
      </footer>
    </section>
  );
}
