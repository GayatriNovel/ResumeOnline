// components_Experience.js

const roles = [
  {
    title: "AI Product Owner",
    company: "Data & Knowledge Enterprise (DKE)",
    period: "2025 – Present · Brisbane",
    summary:
      "Own product strategy and delivery for AI automation products including demand forecasting, CRM augmentation agents and data intelligence tools. Lead discovery, requirements and UX flows in close collaboration with engineering, data and design teams.",
    skills: [
      "Product strategy & roadmapping",
      "AI product workflows & LLM-based POCs",
      "SaaS & data products",
      "Discovery, problem framing & user research",
      "Figma & Whimsical (wireframes, user flows, prototypes)",
      "Stakeholder & executive communication",
      "Agile delivery & cross-functional leadership",
    ],
  },
  {
    title: "Product Owner – Customer Data (Digital Insurer Program)",
    company: "Suncorp",
    period: "2024 – 2025 · Brisbane",
    summary:
      "Defined the product vision and roadmap for customer data governance. Partnered with cloud and data teams to deliver scalable integration, reporting and data quality capabilities that underpinned new digital insurance experiences.",
    skills: [
      "Product strategy & roadmapping",
      "Data governance & operational reporting",
      "SQL, ETL & data pipelines",
      "Stakeholder & executive communication",
      "Agile delivery & cross-functional leadership",
      "Jira, Confluence, Power BI & QlikView",
    ],
  },
  {
    title: "Lead Business Analyst – PCI-DSS Security & Compliance",
    company: "Suncorp",
    period: "2023 – 2024 · Brisbane",
    summary:
      "Led the PCI-DSS uplift across 20+ business, cyber, infrastructure and engineering teams. Translated compliance controls into actionable system requirements, redesigned AS-IS/TO-BE workflows and delivered the program one month ahead of schedule.",
    skills: [
      "PCI-DSS & APRA-aligned compliance",
      "BPMN & process modelling",
      "Discovery, problem framing & user research",
      "Stakeholder & executive communication",
      "Agile delivery & cross-functional leadership",
    ],
  },
  {
    title: "Product Implementation Consultant – Regulatory SaaS",
    company: "Wolters Kluwer",
    period: "2019 – 2023 · Brisbane",
    summary:
      "Implemented APRA and global regulatory reporting SaaS solutions for major banks. Defined configuration and data transformation rules, improved product usability and led training for analysts to lift delivery quality across reporting projects.",
    skills: [
      "SaaS & data products",
      "PCI-DSS & APRA-aligned compliance",
      "SQL, ETL & data pipelines",
      "Data governance & operational reporting",
      "Stakeholder & executive communication",
      "Jira, Confluence, Power BI & QlikView",
    ],
  },
  {
    title: "Lead Business Analyst – Vendor Pricing & Risk Platform",
    company: "Citi Bank",
    period: "2015 – 2018 · India",
    summary:
      "Led product-facing analysis for a global vendor management and pricing platform used in trading operations. Automated pricing workflows (saving two FTEs), designed performance dashboards and managed a team of four analysts.",
    skills: [
      "Product strategy & roadmapping",
      "Experimentation, KPIs & product analytics",
      "Stakeholder & executive communication",
      "SQL, ETL & data pipelines",
    ],
  },
];

export default function Experience({ selectedSkill, onClearSkill }) {
  const highlightedRoles =
    selectedSkill != null
      ? roles.filter((role) => role.skills?.includes(selectedSkill))
      : roles;

  const highlightCount =
    selectedSkill != null ? highlightedRoles.length : null;

  const countLabel =
    highlightCount == null
