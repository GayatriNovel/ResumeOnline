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
   <div className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* TOP NAV */}
     <header className="sticky top-0 z-20 border-b border-slate-900 bg-slate-800/95 backdrop-blur">
  <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
    {/* Left: avatar + name + title */}
    <div className="flex items-center gap-3">
      {PROFILE.avatarSrc && (
        <div className="relative h-11 w-11">
          {/* Animated gradient glow behind the avatar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-amber-300 opacity-60 blur-md animate-pulse" />
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-900 bg-slate-900 shadow-md">
            <Image
              src={PROFILE.avatarSrc}
              alt={PROFILE.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col leading-tight">
        {/* Name with soft gradient text */}
        <span className="text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
          {PROFILE.name}
        </span>

        {/* Title with higher contrast */}
        <span className="text-xs md:text-sm text-slate-200/90">
          {PROFILE.title}
        </span>
      </div>
    </div>

    {/* Right: nav buttons (keep whatever version you have now) */}
    <nav className="flex flex-wrap gap-2 text-sm">
      {[
        ["about", "About"],
        ["experience", "Experience"],
        ["projects", "Projects"],
        ["skills", "Skills"],
        ["contact", "Contact"],
      ].map(([key, label]) => (
        <button
          key={key}
          type="button"
          onClick={() => scrollTo(key)}
          className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-700 shadow-sm transition hover:bg-gray-100 hover:border-gray-400"
        >
          {label}
        </button>
      ))}
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
