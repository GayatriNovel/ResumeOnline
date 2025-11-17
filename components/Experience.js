// components_Experience.js

const roles = [
  {
    title: "AI Product Owner",
    company: "Data & Knowledge Enterprise (DKE)",
    period: "2025 – Present · Brisbane",
    summary:
      "Own product strategy and delivery for AI automation products including demand forecasting, CRM augmentation agents and data intelligence tools. Lead discovery, requirements and UX flows in close collaboration with engineering, data and design teams."
  },
  {
    title: "Product Owner – Customer Data (Digital Insurer Program)",
    company: "Suncorp",
    period: "2024 – 2025 · Brisbane",
    summary:
      "Defined the product vision and roadmap for customer data governance. Partnered with cloud and data teams to deliver scalable integration, reporting and data quality capabilities that underpinned new digital insurance experiences."
  },
  {
    title: "Lead Business Analyst – PCI-DSS Security & Compliance",
    company: "Suncorp",
    period: "2023 – 2024 · Brisbane",
    summary:
      "Led the PCI-DSS uplift across 20+ business, cyber, infrastructure and engineering teams. Translated compliance controls into actionable system requirements, redesigned AS-IS/TO-BE workflows and delivered the program one month ahead of schedule."
  },
  {
    title: "Product Implementation Consultant – Regulatory SaaS",
    company: "Wolters Kluwer",
    period: "2019 – 2023 · Brisbane",
    summary:
      "Implemented APRA and global regulatory reporting SaaS solutions for major banks. Defined configuration and data transformation rules, improved product usability and led training for analysts to lift delivery quality across reporting projects."
  },
  {
    title: "Lead Business Analyst – Vendor Pricing & Risk Platform",
    company: "Citi Bank",
    period: "2015 – 2018 · India",
    summary:
      "Led product-facing analysis for a global vendor management and pricing platform used in trading operations. Automated pricing workflows (saving two FTEs), designed performance dashboards and managed a team of four analysts."
  }
];

const Experience = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
          Experience
        </h2>
        <p className="text-sm text-slate-400">
          Senior Product Manager · AI &amp; Data – shaping products across finance,
          insurance and AI automation.
        </p>
      </header>

      <div className="space-y-4">
        {roles.map((role) => (
          <article
            key={`${role.title}-${role.company}`}
            className="rounded-xl border border-slate-800/80 bg-slate-900/80 p-4 md:p-5 shadow-sm shadow-slate-950/40 transition hover:-translate-y-[1px] hover:border-slate-600/80 hover:shadow-md"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-base md:text-lg font-semibold text-slate-50">
                {role.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 md:text-right">
                {role.period}
              </p>
            </div>

            <p className="text-sm text-slate-400 mt-0.5">
              {role.company}
            </p>

            <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-slate-300">
              {role.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
