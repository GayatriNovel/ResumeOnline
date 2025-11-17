// components_Projects.js

const projects = [
  {
    name: "AI Demand Forecasting Tool",
    context: "Multinational Manufacturer",
    description:
      "Designed an AI-driven demand forecasting product to improve planning accuracy. Led discovery, gathered business and functional requirements, mapped data workflows and defined KPI-driven MVP success criteria in collaboration with engineering and data teams.",
  },
  {
    name: "AI Adoption Roadmap",
    context: "Manufacturing Client · DKE",
    description:
      "Worked with executive stakeholders to define an AI roadmap, prioritise automation use cases and align initiatives with commercial goals. Produced requirements, benefits cases and future-state process artefacts to guide investment and delivery sequencing.",
  },
  {
    name: "AI CRM Agent – HubSpot Augmentation",
    context: "DKE Internal Product",
    description:
      "Product-owned an AI agent that integrates with HubSpot via two-way sync to enrich leads, automate manual updates and perform secondary research on companies. Defined user stories, success metrics and UX flows in Figma and Whimsical.",
  },
  {
    name: "PCI-DSS Security Uplift",
    context: "Suncorp Insurance AU Merchant",
    description:
      "Led a large-scale compliance uplift program, translating PCI-DSS controls into system changes, orchestrating 30+ workshops and redesigning critical workflows. Delivered ahead of schedule with strengthened security posture and audit readiness.",
  },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
          Featured Projects
        </h2>
        <p className="text-sm text-slate-400">
          Selected work across AI, data, product strategy and delivery.
        </p>
      </header>

      <ul className="space-y-3">
        {projects.map((project) => (
         <li
  key={project.name}
  className="rounded-xl border border-slate-300/40 bg-slate-800/85 text-slate-100 shadow-lg shadow-slate-900/30 backdrop-blur-md p-4 md:p-5 transition hover:-translate-y-1 hover:shadow-2xl"
>
  <h3 className="text-base md:text-lg font-semibold text-white">
    {project.name}
  </h3>

  <p className="mt-1 text-xs md:text-sm text-slate-300">
    {project.context}
  </p>

  <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-slate-200">
    {project.description}
  </p>
</li>
