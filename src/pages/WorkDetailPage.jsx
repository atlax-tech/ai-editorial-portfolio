import { useParams, Link } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";
import { BackLink } from "../components/BackLink.jsx";
import { NotFoundState } from "../components/NotFoundState.jsx";
import { ArrowIcon } from "../components/icons.jsx";
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
    <main className={`page-shell case-page case-accent--${work.accent}`}>
      <article className="detail-page section-shell section-divider">
        <BackLink to="/#work">返回项目案例</BackLink>

        <header className="case-hero">
          <div className="case-hero__topline">
            <span>{work.id} / {work.categoryEn}</span>
            {work.repoUrl ? <a href={work.repoUrl} target="_blank" rel="noreferrer">查看 GitHub 仓库 <ArrowIcon /></a> : <span>PRODUCT CONCEPT · ACTIVE BUILD</span>}
          </div>
          <h1>{work.title}</h1>
          <p className="case-hero__subtitle">{work.subtitle}</p>
          <div className="case-hero__overview">
            <p>{work.positioning}</p>
            <dl>
              <div><dt>MY ROLE</dt><dd>{work.role}</dd></div>
              <div><dt>STATUS</dt><dd>{work.status}</dd></div>
              <div><dt>FOCUS</dt><dd>{work.category}</dd></div>
              <div><dt>TIME</dt><dd>{work.time}</dd></div>
            </dl>
          </div>
          <ProductThesis>{work.memorableLine}</ProductThesis>
        </header>

        <section className="case-narrative detail-section">
          <header><span>01 / THE PROBLEM</span><h2>我先重新定义了问题。</h2></header>
          <div className="case-narrative__copy">
            {work.whyBuilt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <blockquote><span>PRODUCT HYPOTHESIS</span><p>{work.productHypothesis}</p></blockquote>
          </div>
        </section>

        <section className="case-decisions detail-section">
          <header><span>02 / DESIGN DECISIONS</span><h2>不是加功能，而是划清 AI 与人的责任。</h2></header>
          <div className="case-decisions__list">
            {work.designDecisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </section>

        <ProjectShowcase work={work} />

        <section className="case-system detail-section">
          <header><span>04 / SYSTEM MODEL</span><h2>把智能能力拆成一条可执行链路。</h2></header>
          <ol>
            {work.systemFlow.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><i /></li>
            ))}
          </ol>
        </section>

        <section className="case-proof detail-section">
          <header><span>05 / ENGINEERING PROOF</span><h2>产品判断最终要落到工程证据。</h2></header>
          <div>
            {work.engineeringProof.map((proof, index) => (
              <article key={proof}><span>{String(index + 1).padStart(2, "0")}</span><p>{proof}</p></article>
            ))}
          </div>
        </section>

        <section className="case-learning detail-section">
          <header><span>06 / WHAT I LEARNED</span><h2>这次实践改变了我对 AI 产品的判断。</h2></header>
          <div>
            {work.learned.map((item, index) => (
              <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>
            ))}
          </div>
        </section>

        <EditorialAngleBlock>{work.editorialAngle}</EditorialAngleBlock>

        <section className="case-status detail-section">
          <header><span>08 / CURRENT MOMENT</span><h2>项目进展</h2></header>
          <p>{work.currentStatus}</p>
          {work.repoUrl ? <a href={work.repoUrl} target="_blank" rel="noreferrer">查看代码与产品文档 <ArrowIcon /></a> : null}
        </section>

        <section className="detail-section case-related">
          <header><span>09 / RELATED THINKING</span><h2>和项目一起沉淀的判断</h2></header>
          {relatedNotes.length > 0 ? (
            <ul>
              {relatedNotes.map((note) => (
                <li key={note.slug}>
                  <Link to={`/notes/${note.slug}`}><span>{note.type}</span><strong>{note.title}</strong><p>{note.summary}</p><ArrowIcon /></Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <footer className="detail-footer">
          <BackLink to="/#work">返回项目案例</BackLink>
        </footer>
      </article>
    </main>
  );
}
