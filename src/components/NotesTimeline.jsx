import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons.jsx";

export function NotesTimeline({ data }) {
  const validMonths = useMemo(
    () => data.months.filter((month) => Number(month.count) > 0),
    [data.months],
  );

  const [activeMonth, setActiveMonth] = useState(() => validMonths[0]?.value);

  useEffect(() => {
    if (!validMonths.some((month) => month.value === activeMonth)) {
      setActiveMonth(validMonths[0]?.value);
    }
  }, [validMonths, activeMonth]);

  const visibleNotes = useMemo(
    () => data.items.filter((item) => item.month === activeMonth),
    [activeMonth, data.items],
  );

  return (
    <section className="notes section-shell section-divider" id="notes">
      <aside className="notes__rail">
        <p className="section-count">{data.count}</p>
        <h2>{data.title}</h2>
        <p className="label-stack">
          <span>PRODUCT NOTES</span>
          <span>FIELD OBSERVATION</span>
        </p>
        <p>{data.description}</p>

        {validMonths.length > 0 && (
          <div className="month-index" aria-label="月份索引">
            {validMonths.map((month) => (
              <button
                type="button"
                key={month.value}
                className={month.value === activeMonth ? "is-active" : ""}
                onClick={() => setActiveMonth(month.value)}
              >
                <span>{month.value}</span>
                <em>{month.count}</em>
              </button>
            ))}
          </div>
        )}
      </aside>

      <div className="notes__main">
        <div className="notes__topline">
          <strong>{activeMonth}</strong>
          <span>Research Window · {visibleNotes.length} 条记录</span>
        </div>

        <div className="timeline-list">
          {visibleNotes.map((note) => (
            <article className="timeline-item" key={note.id}>
              <div className="timeline-item__date">
                <strong>{note.researchWindow.split("/").at(-1).trim()}</strong>
                <span>RESEARCH</span>
              </div>
              <div className="timeline-item__dot" aria-hidden="true" />
              <div className="timeline-item__content">
                <h3>
                  <Link to={`/notes/${note.slug}`}>{note.title}</Link>
                </h3>
                <p>{note.summary}</p>
                <span>{note.status} · {note.tags.join(" · ")}</span>
              </div>
              <dl className="timeline-item__annotation">
                <dt>METHOD</dt>
                <dd>{note.method}</dd>
                <dt>SIGNAL</dt>
                <dd>{note.signal}</dd>
                <dt>QUESTION</dt>
                <dd>{note.question}</dd>
              </dl>
              <Link to={`/notes/${note.slug}`} aria-label={`查看 ${note.title}`}>
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
