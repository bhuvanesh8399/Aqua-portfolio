export const projects = [
  {
    id: "aqua-ai",
    title: "Aqua AI",
    domain: "Aquaculture AI",
    repo: "https://github.com/bhuvanesh8399/fish-feed-ai",
    featured: true,
    mockup: "pond",
    description:
      "AI-powered aquaculture system for fish feed optimization, pond health monitoring, safety checks, and autonomous automation.",
    problem:
      "Fish farms face feed wastage, water quality risks, and manual monitoring difficulties.",
    solution:
      "Aqua AI predicts feed needs, monitors pond health, explains risks, and automates operational insights.",
    points: ["ML feed prediction", "FRIDAY + JARVIS AI idea", "Pond health dashboard"],
    tech: ["React", "FastAPI", "PostgreSQL", "ML", "Recharts"]
  },
  {
    id: "water-safety",
    title: "Water Safety AI",
    domain: "Public Health AI",
    repo: "https://github.com/bhuvanesh8399/AI-water-born-disease",
    featured: true,
    mockup: "risk",
    description:
      "District-level AI early warning system for public health and water-borne disease risk monitoring.",
    problem:
      "Public health teams often react late because risk data and response workflows are scattered.",
    solution:
      "The platform predicts district risk, generates alerts, coordinates departments, and supports public advisory workflows.",
    points: ["AI risk scoring", "High alert workflows", "Public advisory system"],
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "WebSocket"]
  },
  {
    id: "digital-krishi",
    title: "Digital Krishi",
    domain: "Agriculture AI",
    repo: "https://github.com/bhuvanesh8399/Digital_krishi",
    featured: true,
    mockup: "chat",
    description:
      "Multilingual AI agricultural assistant for crop advisory, disease detection, weather guidance, and government schemes.",
    problem:
      "Farmers face language barriers, delayed disease detection, and scattered agricultural guidance.",
    solution:
      "Digital Krishi uses RAG, computer vision, multilingual UI, and officer validation to provide useful farmer support.",
    points: ["RAG-based answers", "Crop disease detection", "Officer validation"],
    tech: ["React", "FastAPI", "RAG", "Computer Vision", "PWA"]
  },
  {
    id: "ambulance-delay",
    title: "Ambulance Delay AI",
    domain: "Emergency AI",
    repo: "https://github.com/bhuvanesh8399/AI-Assisted-Ambulance-Delay-Prediction",
    featured: false,
    mockup: "route",
    description:
      "Real-time GPS and delay prediction platform for ambulance response and dynamic green corridor planning.",
    problem:
      "Emergency response can be delayed when traffic and hospital teams lack real-time coordination.",
    solution:
      "The system streams ambulance GPS, computes ETA, predicts delays, and supports green corridor planning.",
    points: ["GPS streaming", "OSRM routing", "Delay prediction"],
    tech: ["FastAPI", "SQLAlchemy", "OSRM", "React", "Leaflet"]
  },
  {
    id: "rubriciq",
    title: "RubricIQ",
    domain: "EdTech AI",
    repo: "https://github.com/bhuvanesh8399/Student_Grade_System",
    featured: false,
    mockup: "grade",
    description:
      "AI-powered academic evaluation platform for rubric-based grading, feedback, moderation, and analytics.",
    problem:
      "Manual evaluation is time-consuming and feedback can be inconsistent.",
    solution:
      "RubricIQ uses rubric scoring, explainable feedback, faculty moderation, and analytics dashboards.",
    points: ["Rubric scoring", "Explainable feedback", "Faculty dashboard"],
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "JWT"]
  },
  {
    id: "smart-contract",
    title: "Smart Contract Builder",
    domain: "Legal-Tech SaaS",
    repo: "https://github.com/bhuvanesh8399/Smart_Contract_Builder",
    featured: false,
    mockup: "contract",
    description:
      "SaaS platform for freelancers to create contracts, detect risk, manage drafts, and monitor workspace health.",
    problem:
      "Freelancers often work with incomplete agreements, unclear payment terms, and unorganized documents.",
    solution:
      "The platform guides contract creation and detects agreement risks before finalization.",
    points: ["Contract wizard", "Risk engine", "Workspace health"],
    tech: ["React", "TypeScript", "FastAPI", "JWT", "SQLite"]
  },
  {
    id: "financial-ai",
    title: "Financial AI Platform",
    domain: "Financial AI",
    repo: "https://github.com/bhuvanesh8399/AI-Financial-Time-Series-Forecasting-and-Decision-Support-System-Repository",
    featured: false,
    mockup: "chart",
    description:
      "AI financial decision-support platform with forecasting, risk analysis, confidence scoring, and explainable recommendations.",
    problem:
      "Prediction tools often show numbers without risk, confidence, or clear explanation.",
    solution:
      "The platform combines forecasting, risk analysis, confidence scoring, and explainable decision support.",
    points: ["ARIMA + LSTM", "Risk analyzer", "AI assistant"],
    tech: ["React", "FastAPI", "TensorFlow", "ARIMA", "LSTM"]
  }
];
