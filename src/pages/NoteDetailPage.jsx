import { useParams, Link } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";
import { noteContent } from "../content/index.js";
import { BackLink } from "../components/BackLink.jsx";
import { TagList } from "../components/TagList.jsx";
import { TextBlockRenderer } from "../components/TextBlockRenderer.jsx";
import { NotFoundState } from "../components/NotFoundState.jsx";

export function NoteDetailPage() {
  const { slug } = useParams();
  const note = portfolio.notes.items.find((item) => item.slug === slug);
  const content = noteContent[slug];

  if (!note || !content) {
    return (
      <main className="page-shell">
        <section className="detail-page section-shell section-divider">
          <NotFoundState />
        </section>
      </main>
    );
  }

  const relatedWork = portfolio.work.items.filter((work) =>
    note.relatedWorkSlugs?.includes(work.slug),
  );

  return (
    <main className="page-shell">
      <article className="detail-page section-shell section-divider">
        <BackLink>Back to archive</BackLink>

        <header className="detail-header">
          <p className="detail-header__id">
            {note.month} · {note.day}
          </p>
          <h1>{note.title}</h1>
          <p className="detail-header__subtitle">{note.summary}</p>
          <dl className="detail-meta detail-meta--note">
            <div>
              <dt>Type</dt>
              <dd>{note.type}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{note.status}</dd>
            </div>
            <div>
              <dt>Method</dt>
              <dd>{note.method}</dd>
            </div>
            <div>
              <dt>Signal</dt>
              <dd>{note.signal}</dd>
            </div>
            <div>
              <dt>Question</dt>
              <dd>{note.question}</dd>
            </div>
          </dl>
          <TagList tags={note.tags} />
          {note.sourceLink && (
            <a
              className="text-link detail-source"
              href={note.sourceLink}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </header>

        <div className="detail-body">
          <TextBlockRenderer blocks={content.blocks} />
        </div>

        <section className="detail-section related-section">
          <h2>Related work</h2>
          {relatedWork.length > 0 ? (
            <ul className="related-list">
              {relatedWork.map((work) => (
                <li key={work.slug}>
                  <Link to={`/work/${work.slug}`}>{work.title}</Link>
                  <span>{work.summary}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="related-empty">Related work will be added.</p>
          )}
        </section>

        <footer className="detail-footer">
          <BackLink>Back to archive</BackLink>
        </footer>
      </article>
    </main>
  );
}
