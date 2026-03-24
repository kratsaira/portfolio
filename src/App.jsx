import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Design from "./sections/Design";
import FadeInSection from "./components/FadeInSection";

const SECTION_THEMES = [
  { id: "hero",     className: "theme-hero" },
  { id: "about",    className: "theme-about" },
  { id: "skills",   className: "theme-skills" },
  { id: "projects", className: "theme-projects" },
  { id: "design",   className: "theme-design" },
  { id: "contact",  className: "theme-contact" },
];

function App() {
  const blobsRef = useRef(null);
  const currentTheme = useRef("theme-hero");

  useEffect(() => {
    const blobs = blobsRef.current;
    if (!blobs) return;

    const applyTheme = (themeClass) => {
      if (themeClass === currentTheme.current) return;
      currentTheme.current = themeClass;
      SECTION_THEMES.forEach(({ className }) => blobs.classList.remove(className));
      blobs.classList.add(themeClass);
    };

    const getActiveTheme = () => {
      const mid = window.innerHeight * 0.5;

      let best = SECTION_THEMES[0];
      let bestTop = -Infinity;

      for (const theme of SECTION_THEMES) {
        const el = document.getElementById(theme.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid && rect.top > bestTop) {
          bestTop = rect.top;
          best = theme;
        }
      }
      return best.className;
    };

    applyTheme(getActiveTheme());

    const onScroll = () => applyTheme(getActiveTheme());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />

      <div className="blob-canvas theme-hero" ref={blobsRef} aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="blur-vignette" aria-hidden="true" />

      <Navbar />

      <main>
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Projects /></FadeInSection>
        <FadeInSection><Design /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
      </main>

      <Footer />
    </>
  );
}

export default App;