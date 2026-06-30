import { useMemo, useState } from "react";
import { ArrowIcon } from "./icons.jsx";

export function WorkIndex({ data }) {
  const [activeFilter, setActiveFilter] = useState("全部");

  const visibleItems = useMemo(() => {
    if (activeFilter === "全部") {
      return data.items;
    }

    return data.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, data.items]);

  return (
    <section className="work section-shell section-divider" id="work">
      <div className="section-heading">
        <p className="section-count">{data.count}</p>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="filter-row" aria-label="作品筛选">
        <div className="filter-row__group">
          {data.filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={filter === activeFilter ? "is-active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <span>{visibleItems.length} entries</span>
      </div>

      <div className="archive-list" aria-live="polite">
        <div className="archive-list__head">
          <span>项目 / 标题</span>
          <span>分类 / 角色</span>
          <span>时间</span>
          <span>摘要</span>
        </div>

        {visibleItems.map((item) => (
          <article
            className={item.featured ? "archive-row is-featured" : "archive-row"}
            key={item.id}
          >
            <div className="archive-row__title">
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            <div>
              <strong>{item.categoryEn}</strong>
              <span>{item.category}</span>
            </div>
            <time>{item.time}</time>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>

      <a className="text-link section-link" href="#notes">
        进入观察笔记
        <ArrowIcon />
      </a>
    </section>
  );
}
