import { Link, useLocation } from "react-router-dom";

export function Header({ meta, navItems, theme, onToggleTheme }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="site-header">
      <Link className="brand" to={isHome ? "#index" : "/"} aria-label="返回首页">
        <span className="brand-mark" aria-hidden="true">
          <span className="brand-mark__letters">QL</span>
          <span className="brand-mark__scan" />
          <span className="brand-mark__dot brand-mark__dot--a" />
          <span className="brand-mark__dot brand-mark__dot--b" />
        </span>
        <span>
          <strong>{meta.name}</strong>
          <small>{meta.role}</small>
        </span>
      </Link>

      <nav className="top-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <Link key={item.id} to={`/#${item.id}`}>
            <span>{item.number}</span>
            {item.label}
          </Link>
        ))}
        <Link to="/archive">
          <span>05</span>
          ARCHIVE
        </Link>
      </nav>

      <div className="header-meta" aria-label="站点信息">
        <span>{meta.year}</span>
        <span>{meta.language}</span>
      </div>

      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`切换到 ${nextTheme} mode`}
        aria-pressed={theme === "dark"}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          <span />
        </span>
        <span>{theme === "light" ? "LIGHT" : "DARK"}</span>
      </button>
    </header>
  );
}
