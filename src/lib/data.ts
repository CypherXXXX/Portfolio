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
            name: "OmniSearch",
            description: "Autonomous Multi-Agent Research Platform.",
            tech: ["Next.js 14", "LangGraph", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker Compose"],
            features: [
                "Architected a stable, end-to-end autonomous research platform utilizing Next.js and LangGraph, orchestrating a sequential 5-phase state machine (Planning, Crawling, Indexing, Retrieval, Publishing).",
                "Engineered an enterprise-grade RAG pipeline using PostgreSQL (pgvector) for HNSW-indexed vector storage, evaluating concurrent live sources via Google GenAI SDK to synthesize precise context reports.",
                "Designed a distributed asynchronous ingestion architecture integrating Celery and Redis to decouple JavaScript-rendered web scraping via Crawl4AI across microservices."
            ],
            links: {
                github: "https://github.com/CypherXXXX/OmniSearch",
            },
            image: "/omni.gif",
        },
        {
            name: "DocuMind",
            description: "Intelligent RAG Document Analysis Platform.",
            tech: ["Next.js 16", "RAG", "Stripe", "Inngest Queues", "BM25"],
            features: [
                "Orchestrated a custom retrieval system combining Vector Search and BM25 Trigram algorithms using Reciprocal Rank Fusion (RRF); improving context retrieval accuracy by 40%.",
                "Leveraged Next.js 16 Server Actions for secure data mutation and efficient backend communication, reducing client application cold start times by 30%.",
                "Established a decoupling architecture for resource-intensive file processing utilizing Inngest serverless queues to parse complex document formats asynchronously."
            ],
            links: {
                github: "https://github.com/CypherXXXX/docu-mind",
                demo: "https://docu-mind-phi-silk.vercel.app",
            },
            image: "/DocuMind.png",
        },
        {
            name: "GitMetrix",
            description: "AI Developer Intelligence Platform & Repository Analytics.",
            tech: ["Next.js 16", "pgvector", "Supabase", "MoE Router", "React Flow"],
            features: [
                "Architected a hybrid RAG-based code intelligence engine analyzing GitHub repositories utilizing a Mixture-of-Experts LLM router (Cerebras, Groq, DeepSeek).",
                "Engineered an AST-aware distributed indexing pipeline using Inngest background workflows, capable of processing repositories with up to 1,500 files per job.",
                "Developed an interactive architecture visualizer and analytics dashboard using React Flow and custom graph traversal algorithms to map file dependencies."
            ],
            links: {
                github: "https://github.com/CypherXXXX/GitMetrix",
                demo: "https://git-metrix.vercel.app/",
            },
            image: "/GitMetrix.png",
        },
    ],
    skills: {
        languages: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "HTML5 & CSS3"],
        frontend: ["Next.js", "React 19", "Tailwind CSS v4", "TanStack Query", "Framer Motion", "React Flow"],
        backend: ["FastAPI", "Node.js", "Flask", "PostgreSQL (pgvector)", "Supabase", "Redis"],
        ai: ["LangGraph", "Agentic Workflows", "RAG Pipelines", "MoE Router", "BAAI Cross-Encoder", "Ollama"],
        devops: ["Docker Compose", "Celery", "Inngest", "Git", "WebSockets", "Vercel"],
    },
};
