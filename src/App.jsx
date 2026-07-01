import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { WorkIndex } from "./components/WorkIndex.jsx";
import { EditorialPicks } from "./components/EditorialPicks.jsx";
import { NotesTimeline } from "./components/NotesTimeline.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { ArchivePage } from "./pages/ArchivePage.jsx";
import { WorkDetailPage } from "./pages/WorkDetailPage.jsx";
import { NoteDetailPage } from "./pages/NoteDetailPage.jsx";
import { portfolio } from "./data/portfolio.js";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem("portfolio-theme") ?? "light";
};

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let observer;
    const frame = window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll(
        ".section-divider, .detail-section, .editorial-angle-block",
      );
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );

      sections.forEach((section) => {
        section.classList.add("reveal-section");
        observer.observe(section);
      });

    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero data={portfolio.hero} navItems={portfolio.navItems} />
      <WorkIndex data={portfolio.work} />
      <EditorialPicks data={portfolio.editorialPicks} notes={portfolio.notes.items} />
      <NotesTimeline data={portfolio.notes} />
      <AboutSection data={portfolio.about} />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ScrollToHash />
      <ScrollReveal />
      <Header
        meta={portfolio.meta}
        navItems={portfolio.navItems}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
        <Route path="/notes/:slug" element={<NoteDetailPage />} />
      </Routes>
      <Footer meta={portfolio.meta} />
    </>
  );
}
