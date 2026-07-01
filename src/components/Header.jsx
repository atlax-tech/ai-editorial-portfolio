import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header({ meta, navItems, theme, onToggleTheme }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const nextTheme = theme === "light" ? "dark" : "light";

  const [activeNavId, setActiveNavId] = useState(() => {
    if (!isHome) {
      if (
        location.pathname === "/archive" ||
        location.pathname.startsWith("/work/") ||
        location.pathname.startsWith("/notes/")
      ) {
        return "archive";
      }
      return null;
    }
    return location.hash.slice(1) || "index";
  });

  useEffect(() => {
    if (!isHome) {
      if (
        location.pathname === "/archive" ||
        location.pathname.startsWith("/work/") ||
        location.pathname.startsWith("/notes/")
      ) {
        setActiveNavId("archive");
      } else {
        setActiveNavId(null);
      }
      return;
    }

    const sectionIds = navItems.map((item) => item.id);
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = sectionIds[0];
        let bestRatio = ratios.get(bestId) || 0;

        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActiveNavId(bestId);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHome, location.pathname, navItems]);

  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.slice(1);
      if (navItems.some((item) => item.id === id)) {
        setActiveNavId(id);
      }
    }
  }, [location.hash, isHome, navItems]);

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
        </span>
      </Link>

      <nav className="top-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <Link
            key={item.id}
            className={activeNavId === item.id ? "is-active" : undefined}
            to={`/#${item.id}`}
          >
            <span>{item.number}</span>
            {item.label}
          </Link>
        ))}
        <Link
          className={activeNavId === "archive" ? "is-active" : undefined}
          to="/archive"
        >
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
