
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mock Exam Portal",
    description:
      "An online mock examination platform designed to help students test their preparation. It provides a digital environment for practicing examinations, evaluating performance, Live Monitoring and improving knowledge through regular practice.",
    image: "/projects/exam-portal.png",
    technologies: ["React", "Node", "Javascript", "SQL", "OpenCV"],
    githubUrl: "https://github.com/Akash-Jitu/online-exam-portal",
    liveUrl: "https://online-exam-portal-blush-phi.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Application",
    description:
      "An e-commerce application designed to provide a convenient online shopping experience. The platform focuses on product discovery, shopping cart management, and a simple purchasing experience.",
    image: "/projects/ecommerce.png",
    technologies: ["JavaScript", "React", "MongoDB", "node.js", "express.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Job Recommendation System",
    description:
      "A job recommendation platform designed to help users discover relevant career opportunities. It focuses on connecting candidate profiles and skills with suitable job roles through a recommendation-based approach.",
    image: "/projects/job-recommendation.png",
    technologies: ["JavaScript", "React", "MongoDB", "ML", "SVC"],
    githubUrl: "#",
    liveUrl: "https://job-recom.vercel.app/",
  },
  {
    id: 4,
    title: "Real-Time GPS Tracker",
    description:
      "A company project focused on real-time GPS tracking, vehicle monitoring, and trip management. This private security application is developed for restricted company use and is not publicly accessible.",
    image: "/projects/gps-tracker.png",
    technologies: ["TypeScript", "React", "node.js", "Express.js", "Databases", "TcpIP"],
    githubUrl: "#",
    liveUrl: "#",
    isPrivate: true,
  },
  {
    id: 5,
    title: "Pricing Sandbox",
    description:
      "A pricing simulation platform designed to experiment with different pricing strategies. It provides an environment to compare pricing scenarios and understand their potential impact on business performance.",
    image: "/projects/pricing-sandbox.png",
    technologies: ["Python", "Sqlite", "streamlit", "Sql", "Matrix"],
    githubUrl: "https://github.com/Akash-Jitu/pricing_sandbox/tree/master",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Telecom Chatbot",
    description:
      "An AI-powered telecom chatbot concept designed to assist customers with common telecom-related queries. It focuses on customer support, plan information, and billing and usage-related assistance.",
    image: "/projects/telecom-chatbot.png",
    technologies: ["Python", "LangChain", "Rag", "VectorDB", "Embedding Models"],
    githubUrl: "https://github.com/Akash-Jitu/Telecom-AI-Command-Center",
    liveUrl: "https://telecom-ai-command-center-dzeumrzt6nwwhjdazqcczd.streamlit.app/",
  },
];
