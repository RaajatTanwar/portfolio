export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  summary: string;
  description: string;
  visual: "research" | "galaxy" | "receipts" | "uniwell";
  stack: string[];
  github?: string;
  live?: string;
  highlights: string[];
  problem: string;
  approach: string;
  architecture: string[];
  outcome: string;
  metric?: { value: string; label: string };
};

export const profile = {
  name: "Rajat Tanwar",
  shortName: "Rajat",
  headline: "AI/ML Engineer & AI Solutions Engineer",
  location: "Delhi, India",
  email: "rajatrajput8119@gmail.com",
  phone: "9267991335",
  linkedin: "https://www.linkedin.com/in/rajatttanwarr/",
  github: "https://github.com/RaajatTanwar",
  summary:
    "I build practical AI systems, intelligent workflows, and full-stack products. My interests sit at the intersection of machine learning, agentic AI, and software engineering — turning complex ideas into useful, dependable applications.",
};

export const experiences = [
  {
    company: "Fokel",
    role: "AI Solutions Engineer Intern",
    period: "Internship",
    description:
      "Contributing to AI-enabled solutions by connecting business needs with practical LLM workflows and software integrations.",
    bullets: [
      "Translate business requirements into technical workflows, identifying opportunities to apply AI agents and automation to streamline operations.",
      "Design and prototype LLM-powered solution flows using prompt engineering, structured outputs, and API or tool integrations.",
      "Test and refine AI workflows for output quality, reliability, and edge cases, supporting iterative improvements to solution performance and usability.",
    ],
    link: "https://www.fokelworks.com/",
  },
  {
    company: "IBM SkillsBuild Training Program",
    role: "AI & Machine Learning Trainee",
    period: "June 2025 — August 2025",
    description:
      "Completed a two-month industry training program focused on AI, machine learning, data science, and Python.",
    bullets: [
      "Worked with Python, Pandas, NumPy, Scikit-learn, Matplotlib, and Jupyter Notebook for data analysis and predictive modeling.",
      "Strengthened practical understanding of supervised learning, feature engineering, data visualization, and real-world AI applications through assignments.",
    ],
    link: "https://skillsbuild.org/",
  },
];

export const skills = [
  {
    group: "AI & machine learning",
    items: ["Machine Learning", "NLP", "Computer Vision", "Generative AI", "LLM Applications", "RAG", "Prompt Engineering", "XGBoost", "Scikit-learn", "OpenCV"],
  },
  {
    group: "AI engineering & backend",
    items: ["Python", "FastAPI", "Flask", "LangGraph", "LangChain", "REST APIs", "Agentic Workflows", "TypeScript", "Node.js", "Express.js"],
  },
  {
    group: "Frontend & product",
    items: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Full-Stack Development"],
  },
  {
    group: "Data & developer tools",
    items: ["PostgreSQL", "Supabase", "SQLite", "ChromaDB", "Pandas", "NumPy", "Matplotlib", "Git", "GitHub", "Docker", "SQL", "C++"],
  },
];

export const projects: Project[] = [
  {
    slug: "researchgpt",
    title: "ResearchGPT",
    eyebrow: "Multi-agent AI research assistant",
    category: "Agentic AI · RAG",
    summary: "A research workspace that coordinates specialized AI agents to plan, retrieve, analyse, and turn source material into structured reports.",
    description:
      "ResearchGPT explores how a coordinated, multi-agent workflow can make research more organised and traceable. A LangGraph workflow coordinates planning, information retrieval, analysis, and report generation, while a retrieval-augmented pipeline grounds responses in document content.",
    visual: "research",
    stack: ["Next.js", "TypeScript", "LangGraph", "Gemini 2.5 Pro", "ChromaDB", "Supabase", "Clerk"],
    highlights: [
      "Orchestrates specialised agents for planning, retrieval, analysis, report writing, and data visualisation.",
      "Uses document embeddings, ChromaDB, and semantic search to support source-grounded responses.",
      "Combines research automation with citation-backed reporting and interactive analytics in a SaaS-style interface.",
    ],
    problem:
      "Research often involves fragmented steps: finding relevant material, understanding it, comparing evidence, and producing a coherent report. Moving between these steps manually can make the process slow and difficult to reproduce.",
    approach:
      "Build a multi-agent workflow in which agents have distinct responsibilities and pass structured context through a LangGraph orchestration layer. A retrieval-augmented knowledge pipeline provides relevant document context to support grounded analysis.",
    architecture: [
      "Next.js interface for research requests, results, reports, and analytics.",
      "LangGraph orchestration to coordinate planning, retrieval, analysis, and generation agents.",
      "Gemini 2.5 Pro for language understanding and generation.",
      "ChromaDB and document embeddings for semantic retrieval; Supabase for application data.",
    ],
    outcome:
      "A full-stack research assistant that brings agent orchestration and retrieval-grounded generation into one workflow. The live application is linked above; implementation details can be explored in a walkthrough.",
  },
  {
    slug: "galaxy-morphology",
    title: "Galaxy Morphology Classification",
    eyebrow: "Computer vision · Applied machine learning",
    category: "Machine Learning · Computer Vision",
    summary: "An image-classification pipeline that groups galaxies into Elliptical, Spiral, and Irregular morphological classes using astronomical imagery.",
    description:
      "This project applies machine learning and deep learning to galaxy morphology. Using a curated three-class mapping from Galaxy10 DECaLS, the pipeline prepares images, benchmarks classical algorithms against transfer-learning models, and adds visual explainability to help interpret predictions.",
    visual: "galaxy",
    stack: ["Python", "Galaxy10 DECaLS", "XGBoost", "ResNet18", "Scikit-learn", "Grad-CAM", "FastAPI", "Streamlit"],
    github: "https://github.com/RaajatTanwar/Galaxy-Morphology-Classification",
    highlights: [
      "Prepared a 12,587-image dataset mapped into Elliptical, Spiral, and Irregular classes, with 224 × 224 × 3 input images.",
      "Benchmarked classical machine-learning approaches against transfer-learning architectures.",
      "Achieved 81.84% test accuracy with the XGBoost model on the reported 1,889-sample test set.",
      "Added Grad-CAM explainability and exposed predictions through a FastAPI backend and Streamlit interface.",
    ],
    problem:
      "Galaxy morphology provides clues about galaxy structure and formation, but manually classifying large image collections is time-consuming. An automated classifier can help organise images into broad morphological categories.",
    approach:
      "Build a reproducible image pipeline around the Galaxy10 DECaLS dataset, map the selected labels into three broad classes, resize images to a common input shape, and compare classical ML with transfer-learning models. Use Grad-CAM to inspect image regions influencing model predictions.",
    architecture: [
      "Galaxy10 DECaLS images are validated and mapped into three morphology classes.",
      "Preprocessing resizes images to 224 × 224 × 3 and prepares model-ready features.",
      "Classical ML and transfer-learning models are trained and evaluated on a held-out test set.",
      "Grad-CAM provides visual explanations; FastAPI and Streamlit expose the prediction workflow.",
    ],
    outcome:
      "The reported best result is 81.84% accuracy for XGBoost on 1,889 test samples. The project demonstrates an end-to-end applied ML workflow, from data preparation and model comparison to explainability and inference interfaces.",
    metric: { value: "81.84%", label: "XGBoost test accuracy" },
  },
  {
    slug: "receipts-ai",
    title: "Receipts-AI",
    eyebrow: "AI developer tools · Verification",
    category: "Developer Tools · TypeScript",
    summary: "A local-first verification system that checks AI coding agents’ completion claims against test execution and repository state.",
    description:
      "Receipts-AI focuses on a practical reliability problem in agentic software development: an agent can claim that work is complete, but that claim should be supported by actual test evidence and the state of the codebase. The project introduces verification workflows and tamper-aware checks around test results.",
    visual: "receipts",
    stack: ["TypeScript", "Next.js", "Express.js", "Zod", "pnpm", "Git"],
    github: "https://github.com/RaajatTanwar/receipts-ai",
    highlights: [
      "Verifies coding-agent completion claims against actual test execution results and the current Git repository state.",
      "Uses Git fingerprinting to help detect changes that invalidate previously captured test evidence.",
      "Checks for suspicious test changes, including weakened assertions, skipped tests, or deleted test cases.",
      "Organises the application as a pnpm monorepo with a verification server, dashboard, shared schemas, CLI tooling, and policy hooks.",
    ],
    problem:
      "AI coding agents can report success even when tests were not meaningfully run or when the test suite has been changed in ways that hide failures. A trustworthy workflow needs evidence that connects a completion claim to the code and tests that were actually checked.",
    approach:
      "Create a local-first verification layer that records test evidence and relates it to repository state. Fingerprints and test-integrity checks help surface when the underlying code or tests have changed since verification.",
    architecture: [
      "CLI and policy hooks provide entry points for local developer and coding-agent workflows.",
      "TypeScript verification service evaluates test evidence and repository state.",
      "Git fingerprints help associate verification results with a specific code state.",
      "Shared Zod schemas keep data contracts consistent across the service and Next.js dashboard.",
    ],
    outcome:
      "A developer-tooling project centred on verifiable evidence rather than unverified agent claims. It brings test verification, repository awareness, and test-integrity checks into a local workflow.",
  },
  {
    slug: "uniwell",
    title: "UniWell: Campus Health Sanctuary",
    eyebrow: "Full-stack healthcare platform",
    category: "Full Stack · AI Healthcare",
    summary: "A campus healthcare platform with separate portals for students, medical staff, and administrators.",
    description:
      "UniWell brings common campus healthcare workflows into a role-based application. It combines appointment scheduling and digital medical records with AI-powered assistance and emergency SOS functionality.",
    visual: "uniwell",
    stack: ["Next.js", "React", "Supabase", "Authentication", "Role-Based Access Control"],
    github: undefined,
    live: "https://uniwell-ind.vercel.app/",
    highlights: [
      "Built role-based portals for students, medical staff, and administrators.",
      "Implemented AI-powered healthcare assistance and emergency SOS broadcasting workflows.",
      "Added appointment scheduling and digital medical-record workflows.",
      "Used Supabase authentication and role-based access control to structure access across user groups.",
    ],
    problem:
      "Campus healthcare information and interactions can be spread across disconnected processes. Students, medical staff, and administrators need a shared platform with workflows appropriate to each role.",
    approach:
      "Build a full-stack application with distinct role-based experiences and a shared backend. Supabase authentication and access controls support the separation of student, staff, and administrator workflows.",
    architecture: [
      "Next.js and React provide the student, medical staff, and administrator interfaces.",
      "Supabase provides authentication and application data services.",
      "Role-based access control separates functionality and data access by user role.",
      "Healthcare workflows connect appointments, digital records, AI assistance, and emergency SOS interactions.",
    ],
    outcome:
      "A deployed campus healthcare application that demonstrates full-stack product development, role-based access control, and the integration of AI-oriented workflows.",
  },
];

export const education = [
  {
    institution: "Guru Gobind Singh Indraprastha University",
    qualification: "B.Tech · Artificial Intelligence & Machine Learning",
    detail: "2023 — Present",
  },
];
