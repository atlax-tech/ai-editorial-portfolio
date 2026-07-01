import { useParams, Link } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";
import { BackLink } from "../components/BackLink.jsx";
import { NotFoundState } from "../components/NotFoundState.jsx";

export function WorkDetailPage() {
  const { slug } = useParams();
  const work = portfolio.work.items.find((item) => item.slug === slug);

  if (!work) {
    return (
      <main className="page-shell">
        <section className="detail-page section-shell section-divider">
          <NotFoundState />
        </section>
      </main>
    );
  }

  const relatedNotes = portfolio.notes.items.filter((note) =>
    work.relatedNoteSlugs?.includes(note.slug),
  );

  return (
    <main className="page-shell">
      <article className="detail-page section-shell section-divider">
        <BackLink>Back to archive</BackLink>

        <header className="detail-header">
          <p className="detail-header__id">{work.id}</p>
          <h1>{work.title}</h1>
          <p className="detail-header__subtitle">{work.subtitle}</p>
          <dl className="detail-meta">
            <div>
              <dt>Category</dt>
              <dd>
                {work.categoryEn} / {work.category}
              </dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{work.time}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{work.status}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{work.role}</dd>
            </div>
          </dl>
        </header>

        <section className="detail-section related-section">
          <h2>Related notes</h2>
          {relatedNotes.length > 0 ? (
            <ul className="related-list">
              {relatedNotes.map((note) => (
                <li key={note.slug}>
                  <Link to={`/notes/${note.slug}`}>{note.title}</Link>
                  <span>{note.summary}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="related-empty">暂无相关笔记。</p>
          )}
        </section>

        <footer className="detail-footer">
          <BackLink>Back to archive</BackLink>
        </footer>
      </article>
    </main>
  );
}
