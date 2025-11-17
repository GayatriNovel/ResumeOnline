const Skills = () => {
  const skills = [
    "Product strategy & roadmapping",
    "Discovery, problem framing & user research",
    "AI product workflows & LLM-based POCs",
    "SaaS & data products",
    "Figma & Whimsical (wireframes, user flows, prototypes)",
    "APIs & integrations",
    "SQL, ETL & data pipelines",
    "Data governance & operational reporting",
    "PCI-DSS & APRA-aligned compliance",
    "Stakeholder & executive communication",
    "Experimentation, KPIs & product analytics",
    "Jira, Confluence, Power BI & QlikView",
    "BPMN & process modelling",
    "Agile delivery & cross-functional leadership"
  ];

  return (
    <section id="skills" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full whitespace-nowrap"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
