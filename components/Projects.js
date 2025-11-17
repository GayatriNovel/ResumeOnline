const Projects = () => {
  const projects = [
    {
      name: "AI Demand Forecasting Tool",
      context: "Multinational Manufacturer",
      description:
        "Designed an AI-driven demand forecasting product to improve planning accuracy. Led discovery, gathered business and functional requirements, mapped data workflows and defined KPI-driven MVP success criteria in collaboration with engineering and data teams."
    },
    {
      name: "AI Adoption Roadmap",
      context: "Manufacturing Client · DKE",
      description:
        "Worked with executive stakeholders to define an AI roadmap, prioritise automation use cases and align initiatives with commercial goals. Produced requirements, benefits cases and future-state process artefacts to guide investment and delivery sequencing."
    },
    {
      name: "AI CRM Agent – HubSpot Augmentation",
      context: "DKE Internal Product",
      description:
        "Product-owned an AI agent that integrates with HubSpot via two-way sync to enrich leads, automate manual updates and perform secondary research on companies. Defined user stories, success metrics and UX flows in Figma and Whimsical."
    },
    {
      name: "PCI-DSS Security Uplift",
      context: "Suncorp Insurance AU Merchant",
      description:
        "Led a large-scale compliance uplift program, translating PCI-DSS controls into system changes, orchestrating 30+ workshops and redesigning critical workflows. Delivered ahead of schedule with strengthened security posture and audit readiness."
    }
  ];

  return (
    <section id="projects" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name} className="border rounded-lg p-4 bg-white/60">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.context}</p>
            <p className="mt-1 text-sm leading-relaxed">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
