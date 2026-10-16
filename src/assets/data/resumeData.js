export const email = 'ankitkapoor8437@gmail.com';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ankit-kapoor-a72bb7152/',
    icon: 'ri-linkedin-fill',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ankitkapoor8437',
    icon: 'ri-github-fill',
  },
];

export const experience = [
  {
    role: 'Forward Deployed Engineer (AI/ML Engineer)',
    company: 'Fractal AI',
    period: 'May 2026 — Present',
    highlights: [],
  },
  {
    role: 'Software Development Engineer I',
    company: 'Network18 Media & Investments Limited',
    location: 'Noida',
    period: 'Jan 2024 — May 2026',
    highlights: [
      {
        text: 'Built RAG pipelines using embeddings, chunking, metadata tagging, and vector databases to serve 10M+ documents.',
        liveUrl: 'https://one.news18.com/english/ai-search',
        liveLabel: 'Live AI search',
      },
      {
        text: 'Engineered LangChain agent workflows for multi-step reasoning and tool calling, including an AI podcast service.',
        liveUrl: 'https://hindi.news18.com/podcast/',
        liveLabel: 'Live podcast',
      },
      'Built a RAG-based VS Code extension powered by a self-hosted LLM for contextual code assistance.',
      'Developed an insight service using embeddings over historical datasets for semantic search and LLM-driven summaries.',
      'Worked on a multi-tenant API platform on Kong with quota limits, access controls, and rate-limit monitoring.',
      'Developed Python AI services for transcription, quizzes and polls, infographics, AI podcasting, and multilingual rewriting.',
      'Integrated AI services into a React-based WordPress plugin with backend-controlled deployment.',
      'Built and deployed React-based AI dashboards and Studio Suite for analytics and experimentation.',
    ],
  },
  {
    role: 'Software Development Engineer I',
    company: 'Pantheon India Private Limited',
    location: 'Chennai',
    period: 'Mar 2022 — Dec 2023',
    highlights: [
      'Migrated backend APIs from Node.js to Python FastAPI, strengthening API contracts and standardizing enterprise SSO and validation.',
      'Moved shared state from React Context to Redux to reduce prop drilling and improve scalability and maintainability.',
      'Developed and maintained an Express.js and React CRM for liquor distribution, including inventory, sales, and purchasing workflows.',
    ],
  },
];

export const projects = [
  {
    title: 'RAG-based Knowledge Base',
    category: 'Retrieval-augmented generation',
    description:
      'A knowledge system built with FastAPI, React, ChromaDB, and LLaMA models, deployed through CI/CD on CentOS.',
    technologies: ['Python', 'FastAPI', 'React', 'ChromaDB', 'Docker', 'LLaMA'],
    visual: 'knowledge',
  },
  {
    title: 'Movie Review Sentiment Analysis',
    category: 'Natural language processing',
    description:
      'An NLP sentiment model trained on 70K IMDb reviews, with a Python and Flask backend and Django frontend, deployed on Heroku.',
    technologies: ['Python', 'Flask', 'Django', 'NLP', 'Heroku'],
    visual: 'sentiment',
  },
  {
    title: 'Personal Portfolio',
    category: 'Full-stack web application',
    description:
      'A full-stack portfolio with an Express and Node.js backend and a React frontend, deployed on Vercel and Netlify.',
    technologies: ['Express.js', 'Node.js', 'React', 'Vercel', 'Netlify'],
    visual: 'portfolio',
    liveUrl: 'https://personal-portfolio-ankitkapoor.netlify.app/',
  },
];

export const skillGroups = [
  {
    title: 'Languages & frameworks',
    skills: 'Python, Django, FastAPI, Flask, Node.js, JavaScript, TypeScript, React, Next.js, Tailwind CSS, GraphQL, REST',
  },
  {
    title: 'AI & machine learning',
    skills: 'LLM integration, RAG systems, BERT, vector search, Hugging Face, OpenAI API, Vertex AI, Azure AI',
  },
  {
    title: 'Data & storage',
    skills: 'MongoDB, MySQL, PostgreSQL, DynamoDB, Elasticsearch, OpenSearch, vector databases',
  },
  {
    title: 'Infrastructure & delivery',
    skills: 'GCP (GKE, Cloud Run, GCS, Cloud CDN), Docker, Kubernetes, CI/CD, NGINX, Apache, Jenkins',
  },
  {
    title: 'Models & platforms',
    skills: 'GCP Vertex AI, Gemini, Azure OpenAI, GPT, embeddings, Qwen, LLaMA, Nomic',
  },
];

export const education = [
  {
    institution: 'GGSIPU, Delhi',
    qualification: 'B.Tech, Computer Science Engineering',
    period: '2017 — 2021',
  },
  {
    institution: 'USPC Jain Public School, Ludhiana',
    qualification: 'Class 12, CBSE',
    period: '2017',
  },
];

export const recognition = [
  {
    title: 'Delivery Master',
    description:
      'Recognized for planning, coordination, and problem-solving while delivering major projects on time and streamlining processes.',
  },
  {
    title: 'Rising Star',
    description:
      'Recognized for AI-powered editorial tools including podcasts, quizzes and polls, infographics, multilingual rewriting, and a RAG insight page.',
  },
];
