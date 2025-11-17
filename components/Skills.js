const Skills = () => {
  const skills = [
    "Product Strategy & Roadmapping",
    "AI Product Workflows & LLM Prototyping",
    "SaaS & Data Platform Design",
    "Discovery & User Research",
    "Figma & Whimsical (UX + Flows)",
    "APIs, Integrations & System Mapping",
    "SQL, ETL & Data Pipelines",
    "Data Governance & Reporting",
    "PCI-DSS, APRA & Compliance Delivery",
    "Analytics & KPI Definition",
    "Stakeholder Management",
    "BPMN & Process Modelling",
    "Jira, Confluence, Power BI, QlikView",
    "Agile Delivery & Cross-Functional Leadership"
  ];

  return (
    <section id="skills" className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-1.5 rounded-full
                       text-sm text-slate-200
                       bg-white/10 backdrop-blur-sm
                       border border-white/20
                       hover:bg-cyan-500/20 hover:border-cyan-400/50
                       transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
