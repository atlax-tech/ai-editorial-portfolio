import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons.jsx";

const twoDigits = (index) => String(index + 1).padStart(2, "0");

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

function EngineeringMiniature({ work }) {
  return (
    <div className="work-visual work-visual--agentdock" aria-label={`${work.title} 工程链路示意`}>
      <header><span><b>AI</b> {work.title}</span><nav>ENGINEERING MAP</nav><em>ARCHITECTURE</em></header>
      <div className="work-dock__flow">{work.screens.map((screen) => <span className="is-active" key={screen.id}><i>{screen.id}</i>{screen.name}</span>)}</div>
      <div className="work-dock__map">
        <svg viewBox="0 0 660 280" preserveAspectRatio="none" aria-hidden="true"><path d="M330 140C230 130 210 55 110 50M330 140C430 130 455 55 555 50M330 140C220 165 205 235 105 235M330 140C440 165 460 235 560 235" /></svg>
        <main><small>ENGINEERING</small><strong>{work.categoryEn}</strong><span>Design · Code · Verify</span></main>
        {work.screens.map((screen, index) => <button type="button" tabIndex={-1} aria-disabled="true" className={`node-${["one", "two", "three", "four"][index]}`} key={screen.id}><small>{screen.id}</small><strong>{screen.name}</strong></button>)}
      </div>
      <footer><span>{work.role}</span><strong>CASE STUDY →</strong></footer>
    </div>
  );
}

export function WorkIndex({ data }) {
  const [activeSlug, setActiveSlug] = useState(data.items[0]?.slug);
  const activeIndex = Math.max(0, data.items.findIndex((item) => item.slug === activeSlug));
  const activeItem = data.items[activeIndex];
  const Miniature = activeItem.slug === "harness-armor" ? HarnessMiniature : EngineeringMiniature;

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
        <div className="case-index__stage"><Miniature work={activeItem} /></div>
      </article>

      <footer className="case-index__progress">
        <span>{twoDigits(activeIndex)} / {String(data.items.length).padStart(2, "0")}</span>
        <i><b style={{ width: `${((activeIndex + 1) / data.items.length) * 100}%` }} /></i>
        <button type="button" onClick={() => setActiveSlug(data.items[(activeIndex + 1) % data.items.length].slug)}>下一个：{data.items[(activeIndex + 1) % data.items.length].title}<ArrowIcon /></button>
      </footer>
    </section>
  );
}
