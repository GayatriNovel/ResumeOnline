const Experience = () => {
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

  return (
    <section id="experience" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {roles.map((role) => (
          <div key={`${role.title}-${role.company}`}>
            <h3 className="font-semibold">
              {role.title} – {role.company}
            </h3>
            <p className="text-sm text-gray-500">{role.period}</p>
            <p className="mt-1 text-sm leading-relaxed">{role.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
