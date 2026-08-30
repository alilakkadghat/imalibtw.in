export interface WhatItDoesItem {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  homepageDescription: string;
  role: string;
  year: string;
  status: string;
  stack: string[];
  stackDisplay: string;
  demoLink?: string;
  githubLink?: string;
  image?: string;
  introduction: string[];
  whatItDoes: WhatItDoesItem[];
  thePartThatMatters: string[];
  closingStatement: string;
}

export const projectsData: Project[] = [
  {
    slug: "acm-tech-hub",
    title: "ACM Tech Hub 1.0",
    subtitle: "Technical Committee Operating System",
    homepageDescription: "Technical committee operating system for attendance, mentorship, task management, collaboration, meetings, and AI-powered workflows.",
    role: "Technical Lead / Lead Developer",
    year: "2026",
    status: "In active use",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "WebSockets", "AI/LLMs"],
    stackDisplay: "Next.js · FastAPI · PostgreSQL · WebSockets · AI/LLMs",
    demoLink: "https://tech-hub.mpstmeacm.com/",
    image: "/projects/techhub.png",
    introduction: [
      "ACM Tech Hub is an internal workspace built to bring the day-to-day operations of the ACM Technical Committee into one system.",
      "Instead of relying on separate spreadsheets, chat groups, meeting notes, and task trackers, the platform combines committee operations into a single role-aware workspace."
    ],
    whatItDoes: [
      {
        title: "Multi-method attendance",
        description: "NFC-based attendance, automatic attendance through meeting links, AI-powered screenshot scanning, and manual administrative overrides."
      },
      {
        title: "Mentorship workspaces",
        description: "private team chat, Kanban task boards, polls, and shared resources for individual teams."
      },
      {
        title: "AI-powered MOM",
        description: "converts raw meeting notes into structured Minutes of Meeting containing discussions, decisions, and action items."
      },
      {
        title: "Role-based access",
        description: "separate permissions and workflows for Heads, Subheads, and Executives."
      },
      {
        title: "Real-time collaboration",
        description: "WebSocket-powered chat and live workspace interactions."
      },
      {
        title: "Task orchestration",
        description: "assignment, tracking, and submission workflows across mentorship teams."
      }
    ],
    thePartThatMatters: [
      "The interesting problem wasn't building another committee dashboard.",
      "The committee already had the tools it needed — they were just scattered across different systems.",
      "The challenge was building a single system that could handle real operational workflows, where permissions, attendance records, live communication, meetings, tasks, and AI-generated information all interact with each other.",
      "I designed Tech Hub as an operating layer for the committee rather than simply a collection of features."
    ],
    closingStatement: "The goal wasn't to digitize the committee. It was to make the committee easier to run."
  },
  {
    slug: "merchid",
    title: "MerchID",
    subtitle: "QR-Powered Digital Identity Platform",
    homepageDescription: "Digital identity platform for ACM committee members — permanent QR profiles, role-based administration, bulk imports, and centralized member management.",
    role: "Technical Lead",
    year: "2025–2026",
    status: "In active use",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "Cloudinary"],
    stackDisplay: "Next.js · FastAPI · PostgreSQL · TypeScript · Cloudinary",
    demoLink: "https://member.mpstmeacm.com/",
    image: "/projects/merchid.png",
    introduction: [
      "MerchID was built to solve a simple problem: committee members needed a digital identity that could be accessed instantly without relying on printed information or manually maintained profile pages.",
      "Each member receives a permanent QR-powered profile that acts as their digital identity within the committee ecosystem."
    ],
    whatItDoes: [
      {
        title: "QR identities",
        description: "every member receives a unique QR code linking to their profile."
      },
      {
        title: "Member profiles",
        description: "centralized profiles containing committee information, roles, and media."
      },
      {
        title: "Administration",
        description: "role-based controls for managing members and profile information."
      },
      {
        title: "Bulk imports",
        description: "administrators can onboard large groups of members through CSV uploads."
      },
      {
        title: "Media management",
        description: "Cloudinary integration for profile assets and images."
      },
      {
        title: "Profile themes",
        description: "multiple visual themes allow profiles to maintain a consistent identity while remaining customizable."
      }
    ],
    thePartThatMatters: [
      "The QR code is the visible part of MerchID, but the interesting problem was everything behind it.",
      "The system needed to make member onboarding, profile management, asset handling, and administration simple enough for non-technical committee members to operate.",
      "Instead of creating static profile pages, I built the platform around persistent identities backed by a centralized data model.",
      "That means a member's QR identity can remain the same even as their role, profile information, or committee responsibilities change."
    ],
    closingStatement: "The QR code is the interface. The real product is the identity system behind it."
  },
  {
    slug: "careerorbit",
    title: "CareerOrbit",
    subtitle: "AI-Powered Placement Intelligence Platform",
    homepageDescription: "AI-driven career platform that analyzes student profiles, resumes, skills, and opportunities to provide personalized placement intelligence.",
    role: "Full-Stack Developer",
    year: "2025–2026",
    status: "Completed",
    stack: ["React", "Node.js", "PostgreSQL", "Gemini API", "Three.js", "Docker"],
    stackDisplay: "React · Node.js · PostgreSQL · Gemini API · Three.js · Docker",
    demoLink: "https://careerorbit.imalibtw.in/",
    githubLink: "https://github.com/alilakkadghat/Career-Orbit",
    image: "/projects/careerorbit.png",
    introduction: [
      "CareerOrbit was built around the idea that placement preparation shouldn't be limited to searching through job listings.",
      "Students have different skills, resumes, experiences, and career goals — but traditional placement platforms often treat them as the same user.",
      "CareerOrbit uses AI to turn a student's existing profile into personalized career intelligence."
    ],
    whatItDoes: [
      {
        title: "Resume analysis",
        description: "analyzes resumes and identifies relevant skills, experience, and areas for improvement."
      },
      {
        title: "AI recommendations",
        description: "generates personalized career and placement recommendations."
      },
      {
        title: "Skill intelligence",
        description: "evaluates the relationship between a student's current skills and target opportunities."
      },
      {
        title: "ATS analysis",
        description: "provides resume scoring and feedback based on job requirements."
      },
      {
        title: "Interactive experience",
        description: "Three.js-based visual components create a more engaging career exploration experience."
      },
      {
        title: "Containerized deployment",
        description: "Docker-based architecture keeps the application reproducible across environments."
      }
    ],
    thePartThatMatters: [
      "The difficult part wasn't sending a prompt to an LLM.",
      "The real challenge was turning an inherently unstructured input — a student's resume, skills, and career goals — into useful information that could actually influence their decisions.",
      "CareerOrbit treats the LLM as one component inside a larger application rather than the application itself.",
      "The surrounding system handles the user data, persistence, analysis workflow, and presentation while AI provides the intelligence layer."
    ],
    closingStatement: "AI becomes useful when it fits into a workflow, not when it exists as a chatbot."
  },
  {
    slug: "walmart-data-pipeline",
    title: "Walmart Data Engineering Pipeline",
    subtitle: "End-to-End Analytics Engineering Platform",
    homepageDescription: "Production-style data pipeline implementing a Medallion architecture for ingestion, transformation, historical tracking, orchestration, and BI analytics.",
    role: "Data Engineer",
    year: "2026",
    status: "Completed",
    stack: ["Databricks", "DBT", "Airflow", "SQL", "Power BI"],
    stackDisplay: "Databricks · DBT · Airflow · SQL · Power BI",
    introduction: [
      "The Walmart Data Engineering Pipeline was built as an end-to-end data platform rather than a collection of independent transformation scripts.",
      "The system takes raw retail data through multiple stages before exposing it as analytics-ready datasets."
    ],
    whatItDoes: [
      {
        title: "Data ingestion",
        description: "brings raw datasets into the data platform."
      },
      {
        title: "Bronze layer",
        description: "preserves incoming data in its raw form."
      },
      {
        title: "Silver layer",
        description: "cleans, validates, and transforms data into reliable models."
      },
      {
        title: "Gold layer",
        description: "produces business-ready datasets optimized for analytics."
      },
      {
        title: "DBT transformations",
        description: "manages modular SQL transformations and data modeling."
      },
      {
        title: "Historical tracking",
        description: "implements SCD Type 1 and Type 2 to manage changing dimensional data."
      },
      {
        title: "Airflow orchestration",
        description: "schedules and manages pipeline execution."
      },
      {
        title: "BI analytics",
        description: "connects curated datasets to Power BI for reporting and analysis."
      }
    ],
    thePartThatMatters: [
      "The objective wasn't simply to process a dataset.",
      "I wanted to understand what happens when a data pipeline starts behaving like a real data platform — where raw data needs to be preserved, transformations need to be reproducible, historical changes need to be tracked, and downstream analytics depends on the reliability of every layer.",
      "The Medallion architecture creates clear boundaries between ingestion, transformation, and consumption.",
      "DBT handles the transformation layer while Airflow coordinates the workflows, creating a pipeline that can be extended as the data model grows."
    ],
    closingStatement: "A data pipeline isn't just about moving data. It's about making data trustworthy."
  },
  {
    slug: "whatsapp-rag-bot",
    title: "WhatsApp RAG Bot",
    subtitle: "AI-Powered Conversational Knowledge Assistant",
    homepageDescription: "Retrieval-augmented conversational assistant that connects a knowledge base with WhatsApp to provide grounded, context-aware responses.",
    role: "AI Engineer",
    year: "2025–2026",
    status: "Completed",
    stack: ["Python", "RAG", "LLMs", "Vector Search", "WhatsApp API"],
    stackDisplay: "Python · RAG · LLMs · Vector Search · WhatsApp API",
    introduction: [
      "The WhatsApp RAG Bot explores how an LLM can answer questions using an external knowledge base rather than relying entirely on its pretrained knowledge.",
      "Users interact with the system through WhatsApp, while the backend handles retrieval, context construction, and response generation."
    ],
    whatItDoes: [
      {
        title: "Knowledge retrieval",
        description: "searches the underlying knowledge base for relevant information."
      },
      {
        title: "Semantic search",
        description: "retrieves context based on meaning rather than simple keyword matching."
      },
      {
        title: "Context injection",
        description: "relevant documents are passed into the LLM as context."
      },
      {
        title: "Grounded responses",
        description: "responses are generated using retrieved information to reduce unsupported answers."
      },
      {
        title: "WhatsApp interface",
        description: "users interact with the system through a familiar conversational interface."
      },
      {
        title: "Automated workflow",
        description: "message → retrieval → generation → response happens as a single pipeline."
      }
    ],
    thePartThatMatters: [
      "A basic chatbot answers questions.",
      "A useful knowledge assistant needs to know where its answer came from.",
      "The main engineering challenge was therefore not the LLM itself, but designing the retrieval pipeline around it.",
      "The system separates retrieval from generation so that the model receives relevant context before producing a response.",
      "This architecture makes it possible to update the knowledge base without retraining the underlying model."
    ],
    closingStatement: "The model provides the intelligence. Retrieval provides the memory."
  },
  {
    slug: "spiderman-3d-webverse",
    title: "Spider-Man 3D WebVerse",
    subtitle: "Interactive 3D Multiverse Web Experience",
    homepageDescription: "Browser-based 3D experience combining interactive environments, animations, game mechanics, and controller-based interaction.",
    role: "Developer",
    year: "2025",
    status: "Completed",
    stack: ["Three.js", "WebGL", "Vite", "JavaScript"],
    stackDisplay: "Three.js · WebGL · Vite · JavaScript",
    demoLink: "https://webverse.imalibtw.in/",
    introduction: [
      "Spider-Man 3D WebVerse was an experiment in pushing a traditional website toward something closer to an interactive game.",
      "Instead of presenting information through conventional pages and components, the project uses WebGL and Three.js to create a navigable 3D environment directly inside the browser."
    ],
    whatItDoes: [
      {
        title: "3D environments",
        description: "interactive WebGL environments rendered directly in the browser."
      },
      {
        title: "Character interaction",
        description: "player-controlled movement and exploration."
      },
      {
        title: "Camera systems",
        description: "dynamic camera behaviour designed around the 3D environment."
      },
      {
        title: "Animations",
        description: "interactive character and environmental animations."
      },
      {
        title: "Game mechanics",
        description: "movement and interaction systems inspired by traditional games."
      },
      {
        title: "Controller support",
        description: "PlayStation DualSense integration for physical controls."
      }
    ],
    thePartThatMatters: [
      "Most websites are designed around clicks, scrolling, and navigation.",
      "This project was an attempt to rethink that interaction model completely.",
      "The browser became the game engine, the website became the environment, and the user became the character moving through it.",
      "The biggest challenge was balancing visual complexity with browser performance while keeping interaction responsive."
    ],
    closingStatement: "Sometimes the best way to explore the web is to stop treating it like a page."
  }
];
