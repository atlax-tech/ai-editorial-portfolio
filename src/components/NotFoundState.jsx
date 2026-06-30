import { Link } from "react-router-dom";

export function NotFoundState({ message = "This entry is not available." }) {
  return (
    <div className="not-found-state">
      <p>{message}</p>
      <Link className="text-link" to="/archive">
        Back to archive
      </Link>
    </div>
  );
}
