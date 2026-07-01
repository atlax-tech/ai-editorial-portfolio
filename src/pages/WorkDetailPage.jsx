import { useParams, Link } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";
import { BackLink } from "../components/BackLink.jsx";
import { NotFoundState } from "../components/NotFoundState.jsx";
import {
  EditorialAngleBlock,
  ProductThesis,
  ProjectShowcase,
} from "../components/ProjectShowcase.jsx";

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
        <BackLink to="/#work">Back to Product Concepts</BackLink>

        <header className="project-hero">
          <div className="project-hero__title">
            <p className="detail-header__id">{work.id} / PRODUCT CONCEPT</p>
            <h1>{work.title}</h1>
            <div className="project-hero__positioning">
              <span>ONE-LINE POSITIONING</span>
              <p>{work.subtitle}</p>
              <p>{work.positioning}</p>
            </div>
          </div>
          <dl className="detail-meta">
            <div>
              <dt>Category</dt>
              <dd>{work.categoryEn}</dd>
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
          <ProductThesis>{work.memorableLine}</ProductThesis>
        </header>

        <section className="project-narrative detail-section">
          <div className="project-section-title"><span>01</span><h2>Why I Built This</h2></div>
          <div className="project-narrative__copy">
            {work.whyBuilt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="project-narrative detail-section">
          <div className="project-section-title"><span>02</span><h2>Product Hypothesis</h2></div>
          <p className="project-hypothesis">{work.productHypothesis}</p>
        </section>

        <ProjectShowcase work={work} />

        <section className="walkthrough detail-section">
          <div className="project-section-title"><span>04</span><h2>Demo Walkthrough</h2></div>
          <ol>
            {work.screens.map((screen) => (
              <li key={screen.id}>
                <span>{screen.id}</span>
                <div><strong>{screen.name}</strong><p>{screen.description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="learning-section detail-section">
          <div className="project-section-title"><span>05</span><h2>What I Learned</h2></div>
          <div className="learning-list">
            {work.learned.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
          </div>
        </section>

        <EditorialAngleBlock>{work.editorialAngle}</EditorialAngleBlock>

        <section className="current-status detail-section">
          <div className="project-section-title"><span>07</span><h2>Current Status</h2></div>
          <p>{work.currentStatus}</p>
        </section>

        <section className="detail-section related-section">
          <div className="project-section-title"><span>08</span><h2>Related Notes</h2></div>
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
          <BackLink to="/#work">Back to Product Concepts</BackLink>
        </footer>
      </article>
    </main>
  );
}
