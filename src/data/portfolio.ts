export const profile = {
  name: "Raj Ambavane",
  role: "AI · Data Science · ML Engineer",
  location: "College Park, MD",
  tagline:
    "I build AI systems and data products that actually ship. From agentic workflows and RAG pipelines to predictive models and enterprise automation, I focus on work that creates real impact.",
  email: "rajambavane03@gmail.com",
  phone: "+1 227 275 1500",
  github: "https://github.com/RajAmbavane",
  linkedin: "https://www.linkedin.com/in/raj-ambavane-91686b2bb/",
};

export const stats = [
  { v: "2", l: "Hackathons won" },
  { v: "500+", l: "Docs automated" },
  { v: "167", l: "Studies analyzed" },
  { v: "75%", l: "Access uplift" },
  { v: "12+", l: "AI projects shipped" },
];

export const about = {
  summary:
    "I'm a Data Science graduate student at the University of Maryland working across agentic AI, machine learning, and analytics. Right now I build document intelligence and workforce automation systems at CRDF Global, and outside work I ship multi-agent products that have won two hackathons.",
  pillars: [
    { title: "AI Systems & LLM Engineering", desc: "Multi-agent architectures, RAG pipelines, and LLM fine-tuning that hold up in production." },
    { title: "Machine Learning & Modeling", desc: "End-to-end ML pipelines, model evaluation, AutoML, explainability, and deep learning." },
    { title: "Data Science & Analytics", desc: "EDA, statistical analysis, and storytelling with Tableau and Power BI." },
    { title: "Data & Cloud Engineering", desc: "ETL and ELT pipelines on AWS and Azure, with Spark, Fabric, and Docker, built to scale." },
  ],
};

export const experiences = [
  {
    role: "Data, Automation & AI Intern",
    org: "CRDF Global",
    period: "Sep 2026 — Present",
    icon: "DA",
    points: [
      "Continuing from the summer AI internship in an expanded data and automation role.",
      "Focused on data engineering, workflow automation, and applied AI across Azure and Microsoft Fabric.",
    ],
  },
  {
    role: "AI Intern",
    org: "CRDF Global",
    period: "Jun 2026 — Aug 2026",
    icon: "CG",
    points: [
      "Automated report and contract extraction with Power Automate, AI Builder, and Azure OpenAI.",
      "Lifted information accessibility by 75% and cut time spent locating information by 60%.",
      "Shipped a Copilot Studio agent grounded on 500+ after action reports spanning five years.",
      "Designed a workforce intelligence front end in SPFx and React, cutting HR staffing time by 60%.",
    ],
  },
  {
    role: "Research Intern",
    org: "University of Maryland",
    period: "Sep 2025 — May 2026",
    icon: "RI",
    points: [
      "Reviewed 100+ codebases and 1,400+ research papers using PRISMA methodology.",
      "Analyzed 167 studies in Neuro-Symbolic AI.",
      "Built a meta-analysis framework for evaluating AI systems.",
      "Focused on reasoning, trust, and hybrid AI systems.",
    ],
  },
  {
    role: "AI Agent Developer Intern",
    org: "OLL",
    period: "Feb 2025 — Jun 2025",
    icon: "AG",
    points: [
      "Built multi-agent systems with LangChain and LangGraph.",
      "Shipped an AI business advisor that improved decision accuracy by 15%.",
      "Built AWS ETL pipelines that cut manual workload by 50%.",
      "Applied predictive modeling and analytics to drive product decisions.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Intrainz",
    period: "May 2023 — Jul 2023",
    icon: "DS",
    points: [
      "Built recommendation systems across multiple domains.",
      "Hit 85% model accuracy in production.",
      "Designed scalable pipelines serving 300+ users.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "Drug Interaction Watchdog",
    subtitle: "Six Agent Clinical AI",
    iconKey: "pill",
    github: "https://github.com/RajAmbavane/Drug-Interaction-Watchdog",
    description:
      "A six agent prototype for drug interaction safety, pairing CYP450 risk modeling with explainable evidence retrieval across FDA, FAERS, and PubMed.",
    highlights: [
      "LangGraph orchestration across analysis, retrieval, and severity based alerting.",
      "XGBoost CYP450 classifier with SHAP explanations tuned to age, kidney, and liver function.",
      "Hybrid BioBERT, BM25, and dense retrieval with cross-encoder reranking and citation keys.",
      "Llama 4 Scout vision intake reads prescriptions and lab reports. Research prototype only.",
    ],
    stack: ["LangGraph", "XGBoost", "SHAP", "BioBERT", "FAISS", "Groq", "Supabase"],
  },
  {
    name: "Krishi Mitra",
    subtitle: "RAG based Agricultural LLM",
    iconKey: "sprout",
    github: "https://github.com/RajAmbavane/Krishi-Mitra-An-Agricultural-LLM",
    description:
      "A multilingual RAG system built with a LoRA fine-tuned LLaMA 3.2, FAISS retrieval, and SearXNG search. It gives farmers real time agricultural intelligence in their own language.",
    highlights: [
      "Full pipeline from ingestion to embedding, retrieval, and generation.",
      "Real time insights on weather, government schemes, and farming decisions.",
      "Improves information access for rural users by 60%.",
      "FastAPI backend with a React and TypeScript interface on Supabase.",
    ],
    stack: ["LLaMA 3.2", "LoRA", "RAG", "FAISS", "SearXNG", "FastAPI", "Python"],
  },
];

export const projects = [
  {
    name: "FieldDoc",
    tag: "AI Crop Clinic for Indian Farmers",
    iconKey: "sprout",
    award: "Agentplace.io Hackathon Winner",
    desc: "An agentic crop clinic in Marathi and Hindi. Hold a phone to one sick leaf and it diagnoses the problem, with no form and no menu.",
    highlights: [
      "Separates disease from spray burn and heat stress, and reports its own confidence.",
      "Blocks any product recommendation below 70% confidence, even when that loses the sale.",
      "Moves the spray day using live weather over the village, not the district.",
      "Books a real agronomist, keeps a season record, and emails the plan in the user's language.",
    ],
    stack: ["AI Agents", "Computer Vision", "Multilingual NLP", "Google Maps", "OpenWeather", "Airtable", "Cal.com"],
  },
  {
    name: "LuxeResolve",
    tag: "Luxury Return Fraud Detection",
    iconKey: "shield",
    award: "UMD AI Agentic Challenge Winner",
    github: "https://github.com/RajAmbavane/LUXE",
    demo: "https://luxeresolve.onrender.com/",
    desc: "A three agent fraud analysis platform for luxury resale returns, splitting visual analysis, text and data analysis, and synthesis into one verdict.",
    highlights: [
      "Visual, text, and synthesis agents combined into a single risk assessment.",
      "Six fraud metrics scored against a curated 16 case evaluation set.",
      "Full stack build with database migrations, edge functions, and a live deployment.",
    ],
    stack: ["Multi-Agent", "React", "FastAPI", "Supabase", "Groq", "Python"],
  },
  {
    name: "Autonomous DS Crew",
    tag: "End to End Data Science Automation",
    iconKey: "network",
    github: "https://github.com/RajAmbavane/Autonomour-DS-Crew",
    desc: "A multi-agent system that automates the full data science lifecycle, from ingestion and EDA to modeling, evaluation, and reporting.",
    highlights: [
      "Seven or more agents for EDA, modeling, evaluation, and report generation.",
      "Cuts manual data science work by roughly 40%.",
      "CrewAI and LangGraph orchestration with AutoML and MLflow tracking.",
    ],
    stack: ["CrewAI", "LangGraph", "AutoML", "LightGBM", "MLflow", "Docker"],
  },
  {
    name: "Smart Plant Health",
    tag: "YOLO + LSTM Hybrid Model",
    iconKey: "leaf",
    github: "https://github.com/RajAmbavane/Smart-Plant-Health-Monitor",
    desc: "A hybrid computer vision system that combines YOLOv8, ResNet50, and LSTM to monitor plant health in real time with 89% accuracy.",
    highlights: [
      "Real time detection with YOLOv8 for visual symptoms.",
      "LSTM models temporal trends and cuts false watering alerts by 22%.",
      "Sensor fusion pipeline served through FastAPI with DVC versioning.",
    ],
    stack: ["YOLOv8", "ResNet50", "LSTM", "PyTorch", "FastAPI", "DVC"],
  },
  {
    name: "Hybrid RAG",
    tag: "Knowledge Graph + Vector Retrieval",
    iconKey: "graph",
    desc: "A retrieval prototype that pairs Neo4j graph traversal with vector search, so answers carry connected context as well as semantic matches.",
    highlights: [
      "Graph relationships retrieved alongside semantically similar passages.",
      "Explores how structured context improves grounding in question answering.",
    ],
    stack: ["Neo4j", "Knowledge Graphs", "RAG", "Vector DBs", "Python"],
  },
  {
    name: "Telegram Fitness Bot",
    tag: "AI Chatbot with 200+ users",
    iconKey: "bot",
    github: "https://github.com/RajAmbavane/Telegram-Bot",
    desc: "An AI fitness chatbot with a recommendation engine and predictive analytics. Used by 200+ people and improved consistency by 35%.",
    highlights: [
      "Recommendation engine tuned to user goals.",
      "Predictive analytics on workout adherence.",
      "Boosted user consistency by 35% in beta.",
    ],
    stack: ["NLP", "Recommendation", "Python", "Telegram API"],
  },
];

export const publications = [
  { title: "Krishi Mitra: LLM powered QA system for farmers", status: "Ongoing" },
  { title: "Neuro-Symbolic AI Meta-analysis", status: "arXiv · Ongoing" },
];

export const certifications = {
  core: [
    "IBM AI Engineering Professional Certificate",
    "IBM Data Science Professional Certificate",
    "IBM Machine Learning Professional Certificate",
  ],
  additional: [
    "AWS S3 (Coursera)",
    "Generative AI & LLM",
    "Deep Learning",
    "Business Intelligence",
    "R Programming",
    "Data Analytics",
    "Bayesian Data Analysis (DataCamp)",
    "Statistical Simulation (DataCamp)",
    "Python DSA Certification",
    "PHP & MySQL",
  ],
};

export const awards = [
  { title: "Agentplace.io Hackathon Winner, 2026", desc: "Won with FieldDoc, an agentic AI crop clinic for Indian farmers." },
  { title: "UMD AI Agentic Challenge Winner", desc: "Won with LuxeResolve, a three agent fraud analysis platform." },
  { title: "MIT ADT Ideathon 2024", desc: "Recognized for an innovative AI driven solution." },
  { title: "DRDO 2018, Hydroponics Project", desc: "Fr. Agnel School." },
];

export const skills = {
  ai: [
    "LangChain", "LangGraph", "CrewAI", "Hugging Face Transformers", "OpenAI API", "LLaMA",
    "Groq", "RAG Pipelines", "Hybrid Search", "Multi-Agent Systems", "Prompt Engineering",
    "Vector DBs (FAISS)", "Neo4j Knowledge Graphs", "LoRA Fine-Tuning", "AutoML",
    "Agent Orchestration", "Generative AI Design", "BM25", "Cross-Encoder Reranking",
    "SearXNG", "Semantic Search", "Azure AI Builder",
  ],
  ml: [
    "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost", "LightGBM",
    "YOLOv8", "LSTM", "BioBERT", "SHAP", "Explainable AI", "Predictive Modeling",
    "Deep Learning", "NLP", "Computer Vision", "Time Series Analysis", "Feature Engineering",
    "ResNet50", "Transfer Learning", "Sensor Fusion", "Model Evaluation",
  ],
  data: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA",
    "Statistical Analysis", "Data Mining", "Tableau", "Power BI", "Microsoft Fabric",
    "Data Visualization", "Bayesian Analysis", "A/B Testing", "Google Analytics",
    "PRISMA Systematic Review", "Meta-Analysis", "Business Intelligence",
  ],
  engineering: [
    "Python", "R", "SQL", "TypeScript", "React", "SPFx", "FastAPI", "Flask",
    "ETL/ELT Pipelines", "Apache Spark", "AWS", "Azure OpenAI", "Azure Functions",
    "Azure AI Document Intelligence", "Azure SQL", "Power Automate", "Copilot Studio",
    "Dataverse", "Docker", "MLflow", "MongoDB", "MySQL", "Supabase", "Git", "DVC",
    "PHP", "Vite", "Tailwind CSS", "Vitest", "React Router", "TanStack Query", "Zod",
    "Framer Motion", "REST APIs", "Telegram API", "GitHub Actions", "CI/CD", "Render",
  ],
  soft: [
    "Leadership", "Communication", "Problem Solving",
    "Analytical Thinking", "Collaboration", "Adaptability", "Product Thinking",
  ],
};

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];
