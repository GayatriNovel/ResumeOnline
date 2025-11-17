const Contact = () => (
  <section id="contact" className="my-2">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <p className="text-sm leading-relaxed mb-2">
      I&apos;m based in Brisbane and open to opportunities in product management,
      AI product ownership and data-driven digital transformation.
    </p>
    <p className="text-sm">
      Email:{" "}
      <a
        className="text-cyan-300 underline"
        href="mailto:gayatri.mane88@gmail.com"
      >
        gayatri.mane88@gmail.com
      </a>
    </p>
    <p className="text-sm mt-1">
      LinkedIn:{" "}
      <a
        className="text-cyan-300 underline"
        href="https://www.linkedin.com/in/gayatri-m-28b78834"
        target="_blank"
        rel="noopener noreferrer"
      >
        in/gayatri-m-28b78834
      </a>
    </p>

    {/* Download Resume button */}
    <div className="mt-4">
      <a
        href="/Gayatri_Mane_Resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 hover:shadow-cyan-400/40 transition-colors"
      >
        <span>Download Resume</span>
        <span className="text-xs uppercase tracking-wide bg-slate-900/10 px-2 py-0.5 rounded-full">
          PDF
        </span>
      </a>
    </div>
  </section>
);

export default Contact;
