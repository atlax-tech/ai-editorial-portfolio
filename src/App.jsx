import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { WorkIndex } from "./components/WorkIndex.jsx";
import { NotesTimeline } from "./components/NotesTimeline.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { portfolio } from "./data/portfolio.js";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem("portfolio-theme") ?? "light";
};

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
      <Header
        meta={portfolio.meta}
        navItems={portfolio.navItems}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero data={portfolio.hero} navItems={portfolio.navItems} />
        <WorkIndex data={portfolio.work} />
        <NotesTimeline data={portfolio.notes} />
        <AboutSection data={portfolio.about} />
      </main>
      <Footer meta={portfolio.meta} />
    </>
  );
}
