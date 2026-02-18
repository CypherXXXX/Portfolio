export const DATA = {
    profile: {
        name: "Ankit Ranjan Das",
        role: "Full Stack & AI Engineer",
        contact: {
            email: "ankitdas3758@gmail.com",
            phone: "+91 9572523758",
        },
        links: {
            linkedin: "#",
            github: "https://github.com/CypherXXXX",
            portfolio: "#",
        },
    },
    experience: [
        {
            company: "Tata Steel",
            role: "Web Developer Intern",
            period: "Internship",
            description: "Engineered a real-time analysis backend using Python (Flask) & Scikit-Learn. Deployed Gradient Boosting Classifier (<100ms processing). Accelerated PostgreSQL query performance by 40% via compound indexing.",
        },
    ],
    projects: [
        {
            name: "NexusAI",
            description: "Autonomous Multi-Agent Research CRM.",
            tech: ["LangGraph", "Llama 3.3", "FastAPI", "Groq"],
            features: [
                "Engineered a multi-step autonomous agent using LangGraph and Llama 3.3 (70B) that orchestrates parallel research workflows via Tavily AI.",
                "Architected an event-driven CRM backend with FastAPI (Async) and SQLite, optimizing for <200ms inference.",
                "Developed 'Weighted Confidence Scoring' engine to qualify leads and generate hallucination-free outreach.",
            ],
            links: {
                github: "https://github.com/CypherXXXX/nexusai",
                demo: "https://nexusai-ivory.vercel.app/",
            },
            image: "/NexusAI.png",
        },
        {
            name: "EdCare",
            description: "Predictive Health Diagnostics Engine.",
            tech: ["Python", "Scikit-Learn", "React 19", "TanStack Query"],
            features: [
                "Engineered a real-time predictive diagnostic engine using Python (Flask) & Scikit-Learn with Gradient Boosting Classifier.",
                "Architected a scalable React 19 interface with Optimistic UI patterns via TanStack Query.",
                "Designed a secure PostgreSQL schema with Row Level Security (RLS) and Zod validation.",
            ],
            links: {
                github: "https://github.com/CypherXXXX/_edcare_",
                demo: "https://edcare-six.vercel.app",
            },
            image: "/EdCare.png",
        },
        {
            name: "DocuMind",
            description: "Intelligent RAG Document Analysis.",
            tech: ["Next.js 16", "Stripe", "Inngest", "RAG"],
            features: [
                "Architected a Hybrid RAG Engine combining Vector Search and BM25 using Reciprocal Rank Fusion (RRF).",
                "Built an event-driven ingestion system using Inngest serverless queues for complex file parsing.",
                "Deployed high-performance infrastructure with Llama 3.3 70B via Groq and Stripe metered billing.",
            ],
            links: {
                github: "https://github.com/CypherXXXX/docu-mind",
                demo: "https://docu-mind-phi-silk.vercel.app",
            },
            image: "/DocuMind.png",
        },
        {
            name: "GitMetrix",
            description: "Real-Time Developer Velocity Dashboard.",
            tech: ["Next.js 16", "GraphQL", "Redis", "Recharts"],
            features: [
                "Engineered a real-time analytics engine processing 10,000+ annual GitHub events via GraphQL API.",
                "Implemented Redis Edge Caching to reduce data retrieval latency by 90%.",
                "Developed a proprietary 'Velocity Score' algorithm and resilient 'Obsidian' visualization layer.",
            ],
            links: {
                github: "https://github.com/CypherXXXX/GitMetrix",
                demo: "https://git-metrix.vercel.app/",
            },
            image: "/GitMetrix.png",
        },
    ],
    skills: {
        languages: ["Python", "TypeScript", "SQL", "C++", "HTML5 & CSS3"],
        frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Radix UI", "TanStack Query"],
        backend: ["FastAPI", "Node.js", "Flask", "PostgreSQL", "Supabase", "Redis"],
        ai: ["LangGraph", "Llama", "RAG", "Vector DBs", "Groq API", "Ollama"],
        devops: ["Docker", "GitHub Actions", "Vercel", "Render", "Stripe", "Clerk"],
    },
};
