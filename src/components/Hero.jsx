import { ArrowIcon } from "./icons.jsx";

export function Hero({ data, navItems }) {
  return (
    <section className="hero section-shell" id="index">
      <aside className="side-index" aria-label="档案索引">
        <span className="side-index__label">INDEX</span>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="side-index__item">
            <span>{item.number}</span>
            <strong>{item.title}</strong>
            <em>{item.label}</em>
          </a>
        ))}
      </aside>

      <div className="hero__main">
        <p className="section-count">{data.count}</p>
        <h1>{data.title}</h1>
        <p className="hero__lead">{data.lead}</p>
        <div className="rule" />
        <p className="hero__body">{data.body}</p>

        <div className="hero__table" aria-label="精选条目">
          <div className="hero__table-head">
            <span>#</span>
            <span>条目 / TITLE</span>
            <span>类型 / TYPE</span>
            <span>时间 / TIME</span>
          </div>
          {data.entries.map((entry) => (
            <a className="hero__table-row" href="#work" key={entry.id}>
              <span>{entry.id}</span>
              <strong>{entry.title}</strong>
              <span>{entry.type}</span>
              <time>{entry.time}</time>
            </a>
          ))}
        </div>

        <a className="text-link" href="#work">
          查看全部条目
          <ArrowIcon />
        </a>
      </div>

      <aside className="signal-figure" aria-label="非交互方法摘要">
        <div className="signal-figure__header">
          <span>FIELD MAP</span>
          <strong>非交互 · 方法摘要</strong>
        </div>
        <div className="signal-figure__map" aria-hidden="true">
          <img src="/assets/signal-field.png" alt="" />
        </div>
        <p>
          这里不是按钮或工具，只是用来概括作品集的观察方法：从产品信号出发，转译技术语境，最后沉淀为可执行的选题判断。
        </p>
        <ol className="signal-steps">
          {(data.signalSteps ?? []).map((step) => (
            <li key={step.id}>
              <span>{step.id}</span>
              <strong>{step.title}</strong>
              <em>{step.label}</em>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
