// pages/index.js
import About from "../components/About";
import Experience from "../components_Experience";
import Projects from "../components_Projects";
import Skills from "../components_Skills";
import Contact from "../components_Contact";
import { useRef } from "react";

export default function Home() {
  const sections = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (key) => {
    sections[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* TOP NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-wide">
            {/* Your name goes here */}
            Your Name
          </div>
          <nav className="flex gap-4 text-sm">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT – SCROLLS NORMALLY */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <section ref={sections.about} id="about" className="scroll-mt-20">
          <About />
        </section>

        <section
          ref={sections.experience}
          id="experience"
          className="scroll-mt-20"
        >
          <Experience />
        </section>

        <section ref={sections.projects} id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section ref={sections.skills} id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section ref={sections.contact} id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
