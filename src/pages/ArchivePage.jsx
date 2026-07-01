import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/icons.jsx";
import { portfolio } from "../data/portfolio.js";

export function ArchivePage() {
  const { archive, work, notes } = portfolio;

  return (
    <main className="page-shell">
      <section className="archive-page section-shell section-divider">
        <div className="section-heading">
          <p className="section-count">05 / 05</p>
          <div>
            <h2>{archive.title}</h2>
            <p>{archive.subtitle}</p>
          </div>
        </div>

        <div className="archive-group">
          <h3 className="archive-group__title">Notes</h3>
          <div className="archive-list" aria-label="笔记归档">
            <div className="archive-list__head">
              <span>笔记 / 标题</span>
              <span>类型 / 状态</span>
              <span>研究窗口</span>
              <span>摘要</span>
            </div>
            {notes.items.map((item) => (
              <Link
                to={`/notes/${item.slug}`}
                className="archive-row"
                key={item.slug}
              >
                <div className="archive-row__title">
                  <span>{item.month}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <div>
                  <strong>{item.type}</strong>
                  <span>{item.status}</span>
                </div>
                <time>{item.researchWindow}</time>
                <p>{item.tags.join(" · ")}</p>
                <span className="archive-row__arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="archive-group">
          <h3 className="archive-group__title">Work</h3>
          <div className="archive-list" aria-label="作品归档">
            <div className="archive-list__head">
              <span>项目 / 标题</span>
              <span>分类 / 状态</span>
              <span>时间</span>
              <span>摘要</span>
            </div>
            {work.items.map((item) => (
              <Link
                to={`/work/${item.slug}`}
                className={item.featured ? "archive-row is-featured" : "archive-row"}
                key={item.slug}
              >
                <div className="archive-row__title">
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div>
                  <strong>{item.categoryEn}</strong>
                  <span>{item.status}</span>
                </div>
                <time>{item.time}</time>
                <p>{item.summary}</p>
                <span className="archive-row__arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
