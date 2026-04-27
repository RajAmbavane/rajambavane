export const profile = {
  name: "Raj Ambavane",
  role: "AI · Data Science · ML Engineer",
  location: "College Park, MD",
  tagline:
    "I build AI systems and data products that actually ship. From RAG pipelines and multi-agent workflows to predictive models and analytics, I focus on work that creates real impact.",
  email: "rajambavane03@gmail.com",
  phone: "+1 227 275 1500",
  github: "https://github.com/RajAmbavane",
  linkedin: "https://www.linkedin.com/in/rajambavane",
};

export const about = {
  summary:
    "I'm a Data Science graduate student at the University of Maryland working across AI systems, machine learning, and analytics. I enjoy taking ideas from research to production and shipping things people actually use.",
  pillars: [
    { title: "AI Systems & LLM Engineering", desc: "Multi-agent architectures, RAG pipelines, and LLM fine-tuning that hold up in production." },
    { title: "Machine Learning & Modeling", desc: "End-to-end ML pipelines, model evaluation, AutoML, and deep learning." },
    { title: "Data Science & Analytics", desc: "EDA, statistical analysis, and storytelling with Tableau and Power BI." },
    { title: "Data Engineering", desc: "ETL and ELT pipelines on AWS with Spark and Docker, built to scale." },
  ],
};

export const experiences = [
  {
    role: "Research Intern",
    org: "University of Maryland",
    icon: "RI",
    points: [
      "Reviewed 100+ codebases and 100+ research papers using PRISMA methodology.",
      "Analyzed 167+ studies in Neuro-Symbolic AI.",
      "Built a meta-analysis framework for evaluating AI systems.",
      "Focused on reasoning, trust, and hybrid AI systems.",
    ],
  },
  {
    role: "AI Agent Developer Intern",
    org: "OLL",
    icon: "AI",
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
    icon: "DS",
    points: [
      "Built recommendation systems across multiple domains.",
      "Hit 85% model accuracy in production.",
      "Designed scalable pipelines serving 300+ users.",
    ],
  },
];

export const featuredProject = {
  name: "Krishi Mitra",
  subtitle: "RAG based Agricultural LLM",
  github: "https://github.com/RajAmbavane/Krishi-Mitra-An-Agricultural-LLM",
  description:
    "A multilingual RAG system built with LLaMA, LangChain, and vector embeddings. It gives farmers real time agricultural intelligence in their own language.",
  highlights: [
    "Full pipeline from ingestion to embedding, retrieval, and generation.",
    "Real time insights on weather, government schemes, and farming decisions.",
    "Improves information access for rural users by 60%.",
    "Built with real world farmer impact in mind.",
  ],
  stack: ["LLaMA", "LangChain", "RAG", "FAISS", "Python"],
};

export const projects = [
  {
    name: "LuxeResolve",
    tag: "Luxury Return Fraud Detection",
    iconKey: "shield",
    github: "https://github.com/RajAmbavane/LUXE",
    demo: "https://luxeresolve.onrender.com/",
    desc: "A multi-agent AI system that detects fraud in luxury item returns using LLM agents, anomaly detection, and behavioral signals.",
    highlights: [
      "Coordinated LLM agents for risk scoring and explanation.",
      "Anomaly detection on return patterns and customer behavior.",
      "End to end pipeline with a live deployed demo.",
    ],
    stack: ["Multi-Agent", "LLM", "Anomaly Detection", "Python"],
  },
  {
    name: "Autonomous DS Crew",
    tag: "End to End Data Science Automation",
    iconKey: "network",
    github: "https://github.com/RajAmbavane/Autonomour-DS-Crew",
    desc: "A multi-agent system that automates the full data science lifecycle, from ingestion and EDA to modeling, evaluation, and reporting.",
    highlights: [
      "Agents for EDA, modeling, evaluation, and report generation.",
      "Cuts manual data science work by roughly 40%.",
      "LangGraph orchestration with AutoML under the hood.",
    ],
    stack: ["LangGraph", "AutoML", "Agents", "Python"],
  },
  {
    name: "Smart Plant Health",
    tag: "YOLO + LSTM Hybrid Model",
    iconKey: "leaf",
    github: "https://github.com/RajAmbavane/Smart-Plant-Health-Monitor",
    desc: "A hybrid computer vision system that combines YOLO and LSTM to monitor plant health in real time with 89% accuracy.",
    highlights: [
      "Real time detection with YOLO for visual symptoms.",
      "LSTM models temporal trends in plant health.",
      "89% accuracy on the validation set.",
    ],
    stack: ["YOLO", "LSTM", "Computer Vision", "PyTorch"],
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
  { title: "MIT ADT Ideathon 2024", desc: "Recognized for an innovative AI driven solution." },
  { title: "DRDO 2018, Hydroponics Project", desc: "Fr. Agnel School." },
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
