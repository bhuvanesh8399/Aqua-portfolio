import {
  BookOpen,
  Brain,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Network,
  Trophy
} from "lucide-react";

export const collegeJourney = {
  college: "KALASALINGAM UNIVERSITY ACADEMY AND RESERCH EDUCATION",
  degree: "BACHELOR OF TECHNOLOGY",
  department: "INFORMATION TECHNOLOGY",
  batch: "2022 - 2026",
  status: "FINAL YEAR",
  story:
    "My college journey helped me build a strong technical foundation in programming, databases, operating systems, networking, and software development. Along with academic learning, I focus on building real-world full-stack and AI-powered projects that connect theory with practical product development.",
  coreSubjects: [
    "DSA",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Java",
    "Python",
    "Full Stack Development",
    "AI/ML"
  ],
  practicalDirections: [
    "Full-stack product building",
    "AI/ML project development",
    "Dashboard and database systems",
    "Cloud deployment and real email integrations"
  ]
};

export const academicFoundation = [
  {
    title: "Programming Foundation",
    description:
      "Strong base in Java, Python, problem solving, and core programming logic.",
    icon: Code2
  },
  {
    title: "Computer Science Core",
    description:
      "Academic focus on DSA, DBMS, OS, Computer Networks, and software fundamentals.",
    icon: BookOpen
  },
  {
    title: "Practical Direction",
    description:
      "Building real-world full-stack systems, AI/ML projects, and deployable web apps.",
    icon: Brain
  }
];

export const codingProfiles = [
  {
    title: "LeetCode",
    label: "Problem Solving",
    description:
      "DSA and interview problem-solving practice to improve coding logic and technical readiness.",
    focus: ["Arrays", "Strings", "Loops", "Functions", "Recursion", "DSA"],
    href: "https://leetcode.com/u/bhuvanesh_0326/",
    button: "View LeetCode",
    icon: Trophy,
    accent: "from-amber-300/20 via-yellow-300/10 to-orange-400/20"
  },
  {
    title: "GitHub",
    label: "Project Source Code",
    description:
      "Repositories, project progress, full-stack experiments, and real-world development practice.",
    focus: ["React", "Java", "Python", "SQL", "AI/ML", "Deployment"],
    href: "https://github.com/bhuvanesh8399",
    button: "View GitHub",
    icon: Github,
    accent: "from-slate-100/15 via-sky-300/10 to-cyan-300/20"
  },
  {
    title: "LinkedIn",
    label: "Professional Network",
    description:
      "Professional profile for opportunities, networking, career updates, and project visibility.",
    focus: ["Software Engineering", "Full Stack", "AI Projects", "Career"],
    href: "https://www.linkedin.com/in/bhuvanesh-d-4a1642370/",
    button: "View LinkedIn",
    icon: Linkedin,
    accent: "from-blue-400/20 via-sky-300/10 to-cyan-300/20"
  }
];

export const proofHighlights = [
  {
    label: "College Foundation",
    value: "B.Tech IT",
    icon: GraduationCap
  },
  {
    label: "Coding Practice",
    value: "LeetCode",
    icon: Trophy
  },
  {
    label: "Project Proof",
    value: "GitHub",
    icon: Github
  },
  {
    label: "Career Network",
    value: "LinkedIn",
    icon: Network
  },
  {
    label: "Database + Backend",
    value: "DBMS / SQL",
    icon: Database
  }
];
