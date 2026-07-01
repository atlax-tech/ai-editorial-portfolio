export function AboutSection({ data, navItems }) {
  return (
    <section className="about section-shell section-divider" id="about">
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

      <div className="about__intro">
        <p className="section-count">{data.count}</p>
        <h2>{data.title}</h2>
        <p className="label-stack">
          <span>ABOUT ME</span>
        </p>
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about__content">
        <section className="capability-index" aria-labelledby="capability-title">
          <h3 id="capability-title">能力索引</h3>
          <span>CAPABILITY INDEX</span>
          {data.capabilities.map((capability) => (
            <div className="capability-row" key={capability.id}>
              <span>{capability.id}</span>
              <strong>{capability.title}</strong>
              <p>{capability.description}</p>
            </div>
          ))}
        </section>

        <section className="method-line" aria-labelledby="method-title">
          <h3 id="method-title">工作方法</h3>
          <span>WORKING METHOD</span>
          <div className="method-line__track">
            {data.methods.map((method) => (
              <article key={method.id}>
                <span>{method.id}</span>
                <strong>{method.title}</strong>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}