import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons.jsx";

export function WorkIndex({ data }) {
  return (
    <section className="work section-shell section-divider" id="work">
      <header className="section-heading">
        <div>
          <p className="section-count">{data.count}</p>
          <h2>{data.title}</h2>
        </div>
        <p>{data.description}</p>
      </header>

      <div className="concepts-topline">
        <span>SELECTED / 03</span>
      </div>

      <div className="concept-list">
        <div className="concept-list__head">
          <span>项目 / PROJECT</span>
          <span>类型与状态 / TYPE</span>
          <span>产品定位 / POSITIONING</span>
          <span>编辑角度 / EDITORIAL ANGLE</span>
        </div>

        {data.items.map((item) => (
          <Link
            to={`/work/${item.slug}`}
            className="concept-row"
            key={item.id}
          >
            <div className="concept-row__title">
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            <div className="concept-row__meta">
              <strong>{item.categoryEn}</strong>
              <span>{item.status}</span>
            </div>
            <p className="concept-row__positioning">{item.positioning}</p>
            <p className="concept-row__angle">{item.editorialAngle}</p>
            <span className="concept-row__arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>

      <a className="text-link section-link" href="#notes">
        进入观察笔记
        <ArrowIcon />
      </a>
    </section>
  );
}
