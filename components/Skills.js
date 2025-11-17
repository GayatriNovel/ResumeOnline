// components_Skills.js

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
  "Agile delivery & cross-functional leadership",
];

const Skills = ({ onSkillClick, selectedSkill }) => {
  const handleClick = (skill) => {
    if (onSkillClick) {
      onSkillClick(skill);
    }
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
          Skills
        </h2>
        <p className="text-sm text-slate-400">
          Click a skill to see which roles it connects to in your experience.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill) => {
          const isActive = selectedSkill === skill;
          return (
            <button
              key={skill}
              type="button"
              onClick={() => handleClick(skill)}
              className={[
                "text-xs md:text-sm rounded-full px-3 py-1.5 transition border",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-slate-800",
                isActive
                  ? "bg-indigo-500 text-white border-indigo-400 shadow-md shadow-indigo-500/40"
                  : "bg-slate-700/70 text-slate-100 border-slate-500 hover:bg-slate-600",
              ].join(" ")}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
