import { ArrowIcon } from "./icons.jsx";
import { Link } from "react-router-dom";

export function Hero({ data }) {
  return (
    <section className="hero section-shell" id="index">
      <div className="hero__main">
        <div className="hero__eyeline">
          <p className="section-count">{data.count}</p>
        </div>
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
            <Link className="hero__table-row" to={`/work/${entry.slug}`} key={entry.id}>
              <span>{entry.id}</span>
              <strong>{entry.title}</strong>
              <span>{entry.type}</span>
              <time>{entry.time}</time>
            </Link>
          ))}
        </div>

        <div className="hero__actions" aria-label="主要阅读入口">
          <a className="hero-action hero-action--primary" href="#work">
            查看精选项目
            <ArrowIcon />
          </a>
          <Link className="hero-action" to="/notes/ai-model-news-is-not-enough">
            阅读最新文章
            <ArrowIcon />
          </Link>
          <Link className="hero-action" to="/archive">
            浏览全部档案
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <aside className="thesis-index" aria-label="个人判断索引">
        <div className="thesis-index__header">
          <span>WORKING THESES</span>
          <strong>判断索引</strong>
        </div>
        <p className="thesis-index__intro">
          我不把这些句子当结论。它们是每次体验产品、搭建 Demo 和选题时反复验证的工作假设。
        </p>
        <ol className="thesis-index__list">
          {(data.theses ?? []).map((thesis) => (
            <li key={thesis.id} tabIndex="0">
              <span>{thesis.id}</span>
              <div>
                <em>{thesis.label}</em>
                <strong>{thesis.statement}</strong>
              </div>
            </li>
          ))}
        </ol>
        <a className="thesis-index__link" href="#about">
          了解我的工作方法
          <ArrowIcon />
        </a>
      </aside>
    </section>
  );
}
