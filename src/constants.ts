import { Achievement, ExperienceItem, NavLink, Project, SkillCategory } from "./types";

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "/img/resume.pdf", isExternal: true },
  { name: "Contact", href: "#contact" },
];

export const TECH_ICONS = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "FastAPI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RAG-as-a-Service — Multi-Tenant AI Knowledge Base SaaS",
    description: "A multi-tenant retrieval-augmented-generation platform that lets businesses upload documents and get an instant AI chatbot. Built on free-tier infrastructure: Supabase with Row-Level Security for tenant isolation, Qdrant Cloud for vector search, and Groq/Gemini for low-latency inference, with Razorpay wired up for the Indian market.",
    tags: ["Next.js", "FastAPI", "Supabase", "Qdrant", "Groq", "Gemini", "Razorpay"],
    image: "/img/rag-project.png",
    github: "https://github.com/Praveen-pk-pro/Rag-as-a-service-"
  },
  {
    id: 2,
    title: "WhatsApp Lead Distribution Automation",
    description: "A scheduled automation system that distributes incoming sales leads to a team over WhatsApp, with a companion web tool for uploading lead lists as CSV. Built on Supabase for data storage, GitHub Actions cron jobs for scheduling, and the WhatsApp Business Cloud API for delivery. Also includes companion n8n workflows for lead distribution and student attendance alerts.",
    tags: ["Supabase", "GitHub Actions", "WhatsApp API", "Python", "n8n"],
    image: "/img/whatsapp-project.png",
    github: "https://github.com/Praveen-pk-pro/whatsapp-lead-automation"
  },
  {
    id: 3,
    title: "AI YouTube Automation System (\"faceless youtube channel\")",
    description: "An end-to-end faceless video pipeline that generates scripts, voiceovers, and visuals, then publishes to YouTube on a schedule with zero manual editing. Uses Gemini/OpenRouter for scripting, gTTS and IndicF5 for English and Tamil text-to-speech, MoviePy for assembly, and the YouTube Data API v3 (OAuth2) via GitHub Actions, with multi-provider AI fallback for uptime.",
    tags: ["Python", "Gemini", "OpenRouter", "MoviePy", "IndicF5", "YouTube API", "GitHub Actions"],
    image: "/img/youtube.png",
    github: "https://github.com/Praveen-pk-pro/jesusautomation"
  },
  {
    id: 4,
    title: "Free AI Chatbot — SSEC AI Bot (Team Project)",
    description: "A deployed, no-setup AI chatbot that answers from a custom system.md knowledge base, using parallel model-fallback routing across OpenRouter (Gemma, Qwen, GLM, LFM, NemoTron) for reliable uptime. Built as a 4-person team project with fellow 2nd-year IT students, guided by faculty.",
    tags: ["TypeScript", "Vite", "OpenRouter", "LLM Fallback Routing"],
    image: "/img/freeai.png",
    link: "https://ssec-ai-bot.vercel.app",
    github: "https://github.com/Praveen-pk-pro/Free-AI-Chatbot"
  },
  {
    id: 5,
    title: "Smart Crop Advisory System — 3rd Place, DesignXpo 1.0",
    description: "A web app that gives farmers crop recommendations and weather-based insights, built under a no-agentic-AI constraint for the DesignXpo 1.0 event at Sree Sakthi Engineering College. Placed 3rd out of the intra-collegiate field.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/img/won.png",
    link: "https://design-event.vercel.app/",
    github: "https://github.com/Praveen-pk-pro/Design-event"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2025 - Present",
    description: "Designing and shipping production  full-stack web apps for clients — ortfolio websites , and Supabase-backed web tools — end to end, from architecture to deployment."
  },
  {
    id: 2,
    role: "Industrial Training — Python for ML",
    company: "Botroid Tech",
    period: "June 2026",
    description: "Completed a hands-on industrial training program in Python for machine learning and related software tooling for real-world applications.",
    certificate: "/img/botroid.png"
  },
  {
    id: 3,
    role: "Value-Added Courses — AWS Cloud",
    company: "VEI Technologies (Sree Sakthi Engineering College)",
    period: "2025 - 2026",
    description: "Completed structured, hands-on training programs covering AWS cloud fundamentals.",
    certificate: "/img/aws.png"
  },
  {
    id: 4,
    role: "Value-Added Courses — MEAN Stack",
    company: "VEI Technologies (Sree Sakthi Engineering College)",
    period: "2025 - 2026",
    description: "Completed structured, hands-on training programs covering MEAN stack web development.",
    certificate: "/img/mean.png"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C", "SQL"]
  },
  {
    title: "AI & Automation",
    skills: ["RAG Pipelines", "Prompt Engineering", "Gemini", "Groq", "OpenRouter", "n8n", "GitHub Actions"]
  },
  {
    title: "Web & Backend",
    skills: ["Next.js", "FastAPI", "Supabase (RLS & Auth)", "Qdrant Cloud", "Razorpay"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "AWS Cloud", "MySQL", "Docker"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "RAG Course for Beginners",
    issuer: "Certificate",
    date: "Completed Jan 2026",
    description: "Completed a course on retrieval-augmented generation fundamentals — vector embeddings, chunking strategies, and grounding LLM responses in external data.",
    type: "Certificate",
    image: "/img/rag.png"
  },
  {
    id: 2,
    title: "AI Agents for Beginners",
    issuer: "Certificate",
    date: "Completed Jan 2026",
    description: "Completed a foundational course on building and orchestrating AI agents — agent design patterns, tool use, and multi-step reasoning workflows.",
    type: "Certificate",
    image: "/img/ai.png"
  },
  {
    id: 3,
    title: "DesignXpo 1.0 — 3rd Prize",
    issuer: "Sree Sakthi Engineering College",
    date: "2026",
    description: "Placed 3rd in an intra-collegiate technical event with a Smart Crop Advisory System, built under a no-agentic-AI constraint.",
    type: "Award",
    image: "/img/eventwin.png"
  },
  {
    id: 4,
    title: "CIH'26 — Coimbatore Innovation Hackathon",
    issuer: "AIC RAISE x Rathinam Global Deemed University",
    date: "2026",
    description: "Participated in a 24-hour national-level innovation challenge developing creative technical solutions under pressure.",
    type: "Hackathon",
    image: "/img/hackathonrgu.png"
  }
];
