import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { WorkIndex } from "./components/WorkIndex.jsx";
import { NotesTimeline } from "./components/NotesTimeline.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { portfolio } from "./data/portfolio.js";

export default function App() {
  return (
    <>
      <Header meta={portfolio.meta} navItems={portfolio.navItems} />
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
