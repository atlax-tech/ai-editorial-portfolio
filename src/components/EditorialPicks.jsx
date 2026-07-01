import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons.jsx";

export function EditorialPicks({ data, notes }) {
  const picks = data.items
    .map((pick) => ({
      ...pick,
      note: notes.find((note) => note.slug === pick.slug),
    }))
    .filter((pick) => pick.note);

  return (
    <section className="editorial-picks section-shell section-divider" aria-labelledby="editorial-picks-title">
      <header className="editorial-picks__heading">
        <div>
          <span>{data.label}</span>
          <h2 id="editorial-picks-title">{data.title}</h2>
        </div>
        <p>{data.description}</p>
      </header>

      <div className="editorial-picks__list">
        {picks.map((pick, index) => (
          <Link className="editorial-pick" to={`/notes/${pick.slug}`} key={pick.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <em>{pick.note.type}</em>
              <h3>{pick.note.title}</h3>
              <p>{pick.reason}</p>
            </div>
            <ArrowIcon />
          </Link>
        ))}
      </div>
    </section>
  );
}
