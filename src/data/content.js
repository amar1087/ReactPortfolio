// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit everything on this page to update your portfolio's text.
// To swap the photo or résumé file, see public/assets/ instead (README.md).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Amarjeet Kaur",
  firstName: "Amarjeet",
  lastName: "Kaur",
  role: "Senior Full Stack Developer / Tech Lead — building the AI agents that run inside the products",
  pitch:
    "13+ years shipping web and mobile products at scale — the last two spent going deep on AI agents: RAG pipelines, multi-agent research workflows, and the infrastructure that keeps them reliable. AWS Certified Solutions Architect.",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  email: "amar1087@gmail.com",
  linkedin: "https://www.linkedin.com/in/amarjeet-kaur-1087/",
  linkedinLabel: "linkedin.com/in/amarjeet-kaur-1087",
  resumeFile: "/assets/resume.pdf",
  photoFile: "/assets/photo.jpg",
  openToRoles: "Open to new roles",
};

export const marqueeTags = [
  "LangGraph",
  "CrewAI",
  "RAG",
  "Angular",
  "AWS",
  "Semantic Kernel",
  "React Native",
  "OpenAI SDK",
  "Pinecone",
  "TypeScript",
];

export const about = {
  paragraphs: [
    "I've spent 13+ years designing, building, and leading full-stack teams — most recently as Tech Lead at Forwood Enterprises, and for a decade before that as a mobile application developer at IBM, shipping apps used by retail chains and city governments alike.",
    "In late 2024 I stepped back for a few months to focus on health and family. I used the time deliberately: going deep on AI agent architecture — CrewAI, LangGraph, LangChain, and Azure AI Foundry — and building working systems rather than just reading about them, including a multi-agent research assistant and a chatbot proof of concept for a parenting product.",
    "I'm now looking for a role where I can bring that combination — production full-stack experience plus hands-on agent-building — to a team solving real problems.",
  ],
  stats: [
    { num: "13+", label: "Years experience" },
    { num: "4", label: "Companies" },
    { num: "30%", label: "Load time cut, latest role" },
    { num: "AWS", label: "Certified architect" },
  ],
};

export const experience = [
  {
    dates: "Nov 2024 — Present",
    role: "Independent AI Systems Development",
    company: "Self-directed build, Delhi, India",
    highlights: [
      "Built an <strong>AI-driven service</strong> across <strong>OpenAI, Anthropic and Ollama</strong>.",
      "<strong>Semantic Kernel + RAG</strong> over a <strong>Pinecone</strong> vector store.",
      "<strong>Multi-agent research workflow</strong> in <strong>LangGraph</strong> with a reviewer/correction agent.",
      "<strong>AI chatbot POC</strong> for parenting.ai — 6 week build.",
    ],
  },
  {
    dates: "Jan 2023 — Oct 2024",
    role: "Senior Full Stack Developer / Tech Lead",
    company: "Forwood Enterprises, Hyderabad",
    highlights: [
      "Built a <strong>checklist platform on the OpenAI SDK</strong> with RAG + multi-language support.",
      "<strong>Cut load times 30%</strong> and shipped a fully automated CI/CD pipeline.",
      "Reusable component libraries &rarr; <strong>40% faster rollouts</strong>, 5+ new markets.",
      "Mentored the team on <strong>Agile, NgRx</strong>, and test coverage with Jest/Cypress.",
    ],
  },
  {
    dates: "Jul 2012 — Dec 2022",
    role: "Mobile Application Developer",
    company: "IBM India Pvt Ltd, Noida",
    highlights: [
      "Shipped the <strong>Food Lion</strong> and <strong>Hannaford</strong> mobile apps.",
      "Built barcode scanning, a <strong>Dialogflow</strong> chatbot, and <strong>TensorFlow</strong> object detection.",
      "Led modules for <strong>Lodha Smarter City</strong> and <strong>Surat Municipal Corporation</strong>.",
      "Drove testing with <strong>Jasmine/Karma</strong> and frontend performance work.",
    ],
  },
  {
    dates: "Jan 2011 — Jun 2012",
    role: "Software Developer",
    company: "Sify Software Ltd, Delhi",
    highlights: [
      "Built core modules for the <strong>Electronic Product Distribution System</strong> using <strong>Java and PostgreSQL</strong>.",
      "Worked across the full SDLC, delivering updates aligned with client goals.",
    ],
  },
];

export const work = [
  {
    tag: "01 · Independent",
    title: "Multi-agent deep research assistant",
    description:
      "A LangGraph workflow that researches any topic: retrieval over embeddings, a drafting agent, and a reviewer/correction agent that checks output before it's returned.",
    stack: ["LangGraph", "RAG", "Vector stores"],
  },
  {
    tag: "02 · POC, 6 weeks",
    title: "Parenting.ai chatbot",
    description:
      "OpenAI, Anthropic and Ollama models orchestrated with Semantic Kernel and grounded with Pinecone-backed RAG for accurate, sourced answers.",
    stack: ["Semantic Kernel", "Pinecone"],
  },
  {
    tag: "03 · Forwood Enterprises",
    title: "AI-powered checklist platform",
    description:
      "Enterprise tool on the OpenAI SDK with RAG-backed content, multi-language support and live dashboards — built as a micro-frontend.",
    stack: ["Angular", "Node.js", "AWS"],
  },
  {
    tag: "04 · IBM India",
    title: "Food Lion & Hannaford apps",
    description:
      "Retail apps with barcode scanning, a Dialogflow chatbot, TensorFlow object detection and Google Maps, shipped for two grocery chains.",
    stack: ["React Native", "TensorFlow", "Dialogflow"],
  },
];

export const skillGroups = [
  {
    icon: "◧",
    name: "Frontend & mobile",
    items: ["Angular", "React Native", "Ionic", "RxJs", "NgRx", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: "◈",
    name: "AI & agents",
    items: ["CrewAI", "LangGraph", "LangChain", "Azure AI Foundry", "OpenAI SDK", "Semantic Kernel", "RAG", "Pinecone", "TensorFlow"],
  },
  {
    icon: "◫",
    name: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Lambda", "DynamoDB", "Jenkins", "CI/CD", "Micro-frontends"],
  },
  {
    icon: "◩",
    name: "Testing & quality",
    items: ["Jest", "Jasmine", "Cypress", "Karma"],
  },
];

export const education = [
  {
    when: "2004 — 2008",
    what: "B.Tech, Computer Science",
    where: "Uttar Pradesh Technical University, Lucknow",
  },
  {
    when: "Apr 2025",
    what: "AWS Certified Solutions Architect – Associate",
    where: "",
  },
];

export const languages = [
  { name: "English", level: "Advanced (C1)" },
  { name: "Hindi", level: "Advanced (C1)" },
  { name: "Punjabi", level: "Advanced (C1)" },
  { name: "German", level: "Beginner (A1)" },
];
