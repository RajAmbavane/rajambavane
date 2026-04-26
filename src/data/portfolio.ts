export const profile = {
  name: "Raj Ambavane",
  role: "AI · Data Science · ML Engineer",
  location: "College Park, MD",
  tagline:
    "I build intelligent AI systems and data-driven solutions — from LLM pipelines to predictive models and analytics that create real-world impact.",
  email: "rajambavane03@gmail.com",
  phone: "+1 227 275 1500",
  github: "https://github.com/RajAmbavane",
  linkedin: "https://www.linkedin.com/in/rajambavane",
};

export const about = {
  summary:
    "Data Science graduate student at the University of Maryland working across AI Systems, Machine Learning, Data Science, and Analytics — combining research, engineering, and real-world deployment.",
  pillars: [
    { title: "AI Systems & LLM Engineering", desc: "Multi-agent architectures, RAG pipelines, LLM fine-tuning and orchestration." },
    { title: "Machine Learning & Predictive Modeling", desc: "End-to-end ML pipelines, model evaluation, AutoML, deep learning." },
    { title: "Data Science & Analytics", desc: "EDA, statistical analysis, data storytelling, Tableau, Power BI." },
    { title: "Data Engineering & Pipelines", desc: "ETL/ELT pipelines, AWS, Spark, Docker, scalable data infrastructure." },
  ],
};

export const experiences = [
  {
    role: "Research Intern",
    org: "University of Maryland",
    icon: "RI",
    points: [
      "Conducted systematic review of 1400+ research papers using PRISMA methodology",
      "Analyzed 167+ studies in Neuro-Symbolic AI",
      "Built meta-analysis framework for evaluating AI systems",
      "Focus: reasoning, trust, hybrid AI systems",
    ],
  },
  {
    role: "AI Agent Developer Intern",
    org: "OLL",
    icon: "AI",
    points: [
      "Built multi-agent systems using LangChain & LangGraph",
      "Developed AI business advisor improving decision accuracy by 15%",
      "Built AWS ETL pipelines reducing manual workload by 50%",
      "Applied predictive modeling and analytics",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Intrainz",
    icon: "DS",
    points: [
      "Built recommendation systems across multiple domains",
      "Achieved 85% accuracy",
      "Designed scalable pipelines for 300+ users",
    ],
  },
];

export const featuredProject = {
  name: "Krishi Mitra",
  subtitle: "RAG-based Agricultural LLM",
  github: "https://github.com/RajAmbavane/Krishi-Mitra-An-Agricultural-LLM",
  description:
    "A multilingual RAG-based LLM system using LLaMA, LangChain, and vector embeddings — empowering farmers with real-time agricultural intelligence.",
  highlights: [
    "Full pipeline: ingestion → embedding → retrieval → generation",
    "Real-time insights on weather, government schemes, and agricultural decisions",
    "Improves information accessibility by 60%",
    "Real-world rural impact and farmer empowerment",
  ],
  stack: ["LLaMA", "LangChain", "RAG", "FAISS", "Python"],
};

export const projects = [
  {
    name: "LuxeResolve",
    tag: "Luxury Return Fraud Detection",
    icon: "LR",
    github: "https://github.com/RajAmbavane/LUXE",
    demo: "https://luxeresolve.onrender.com/",
    desc: "Multi-agent AI system for detecting fraud in luxury item returns using LLM agents, anomaly detection, and behavioral intelligence.",
    stack: ["Multi-Agent", "LLM", "Anomaly Detection"],
  },
  {
    name: "Autonomous DS Crew",
    tag: "End-to-End Data Science Automation",
    icon: "DS",
    github: "https://github.com/RajAmbavane/Autonomour-DS-Crew",
    desc: "Multi-agent AI system automating the full data science lifecycle — ingestion, EDA, modeling, evaluation, and reporting. +40% efficiency.",
    stack: ["LangGraph", "AutoML", "Agents"],
  },
  {
    name: "Smart Plant Health",
    tag: "YOLO + LSTM Hybrid Model",
    icon: "CV",
    github: "https://github.com/RajAmbavane/Smart-Plant-Health-Monitor",
    desc: "Hybrid ML system using YOLO + LSTM for real-time plant health monitoring with 89% accuracy.",
    stack: ["YOLO", "LSTM", "Computer Vision"],
  },
  {
    name: "Telegram Fitness Bot",
    tag: "AI Chatbot · 200+ users",
    icon: "BOT",
    github: "https://github.com/RajAmbavane/Telegram-Bot",
    desc: "AI-powered fitness chatbot with recommendation engine and predictive analytics. Increased user consistency by 35%.",
    stack: ["NLP", "Recommendation", "Python"],
  },
];

export const publications = [
  { title: "Krishi Mitra: LLM-powered QA system for farmers", status: "Ongoing" },
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
  { title: "MIT ADT Ideathon 2024", desc: "Recognized for innovative AI-driven solution." },
  { title: "DRDO 2018 — Hydroponics Project", desc: "Fr. Agnel School." },
];

export const skills = {
  ai: [
    "LangChain", "LangGraph", "Hugging Face Transformers", "OpenAI API", "LLaMA",
    "RAG Pipelines", "Multi-Agent Systems", "Prompt Engineering",
    "Vector DBs (FAISS)", "Knowledge Graphs", "AutoML", "Agent Orchestration",
    "Generative AI Design",
  ],
  ml: [
    "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost",
    "YOLO", "LSTM", "Predictive Modeling", "Deep Learning",
    "NLP", "Computer Vision", "Time Series Analysis", "Feature Engineering",
  ],
  data: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA",
    "Statistical Analysis", "Data Mining", "Tableau", "Power BI",
    "Data Visualization", "Bayesian Analysis", "A/B Testing", "Google Analytics",
  ],
  engineering: [
    "Python", "R", "SQL", "Flask", "ETL/ELT Pipelines",
    "Apache Spark", "AWS", "Docker", "MongoDB", "MySQL",
    "Firebase", "Supabase", "Git", "GitHub", "Jupyter", "DVC", "FastAPI",
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