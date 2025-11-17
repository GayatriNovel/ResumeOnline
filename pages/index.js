// pages/index.js
import About from "../components/About";
import Experience from "../components_Experience";
import Projects from "../components_Projects";
import Skills from "../components_Skills";
import Contact from "../components_Contact";
import { useRef } from "react";
import Image from "next/image";

// 🔧 Edit these details to match you + your avatar in /public
const PROFILE = {
  name: "Gayatri Mane",
  title: "Product Owner | AI Enthusiast ",
  // Put your image file in /public (e.g. /public/avatar.jpg) and update this path:
  avatarSrc: "/avatar.jpg",
};

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
   <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 text-slate-100">
      {/* TOP NAV */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
          {/* Left: avatar + name + title */}
          <div className="flex items-center gap-3">
            {PROFILE.avatarSrc && (
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700/70 shadow-md shadow-slate-950/60">
                <Image
                  src={PROFILE.avatarSrc}
                  alt={PROFILE.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-wide">
                {PROFILE.name}
              </span>
              <span className="text-xs text-slate-400">
                {PROFILE.title}
              </span>
            </div>
          </div>

          {/* Right: nav buttons */}
          <nav className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 shadow-sm shadow-slate-950/50 transition hover:-translate-y-px hover:bg-slate-800/90"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo("experience")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 shadow-sm shadow-slate-950/50 transition hover:-translate-y-px hover:bg-slate-800/90"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 shadow-sm shadow-slate-950/50 transition hover:-translate-y-px hover:bg-slate-800/90"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollTo("skills")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 shadow-sm shadow-slate-950/50 transition hover:-translate-y-px hover:bg-slate-800/90"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 shadow-sm shadow-slate-950/50 transition hover:-translate-y-px hover:bg-slate-800/90"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT – SCROLLS NORMALLY */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-20">
        <section
          ref={sections.about}
          id="about"
          className="scroll-mt-24"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-xl shadow-slate-950/50 backdrop-blur">
            <About />
          </div>
        </section>

        <section
          ref={sections.experience}
          id="experience"
          className="scroll-mt-24"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-xl shadow-slate-950/50 backdrop-blur">
            <Experience />
          </div>
        </section>

        <section
          ref={sections.projects}
          id="projects"
          className="scroll-mt-24"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-xl shadow-slate-950/50 backdrop-blur">
            <Projects />
          </div>
        </section>

        <section
          ref={sections.skills}
          id="skills"
          className="scroll-mt-24"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-xl shadow-slate-950/50 backdrop-blur">
            <Skills />
          </div>
        </section>

        <section
          ref={sections.contact}
          id="contact"
          className="scroll-mt-24 pb-10"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 shadow-xl shadow-slate-950/50 backdrop-blur">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
