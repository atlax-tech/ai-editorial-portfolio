import { Link } from "react-router-dom";

export function BackLink({ to = "/archive", children }) {
  return (
    <Link className="back-link" to={to}>
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  );
}
