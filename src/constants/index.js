import {
  javascript, typescript, reactjs, tailwind, nodejs,
  backend, cloud, fsd, ai, ull, nextjs, aws, python,
  restapi, carol, margala, priya, graphql, docker, mongodb,
  git, postgresql, redis, pytorch, springboot, kubernetes,
  angular, fastapi, langchain, terraform, kafka, java, csharp,
  bash, html5, express, mysql, elasticsearch, azure, jenkins,
  rabbitmq, huggingface, mlflow, deloitte, cajunAsr, apiGuard,
  contextforge, microservices, tensorflow, cuda, pinecone, cpp,
  // newly added
  framer, gsap, django, oracle, grafana, websocket, sklearn,
} from "../assets";

export const navLinks = [
  { id: "about",   title: "About"   },
  { id: "work",    title: "Work"    },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Java Full Stack Engineer", icon: fsd     },
  { title: "Microservices Architect",  icon: backend },
  { title: "AI / ML Engineer",         icon: ai      },
  { title: "Cloud & DevOps",           icon: cloud   },
];

const techCategories = [
  {
    label: "Languages",
    items: [
      { name: "Java",         icon: java       },
      { name: "Python",       icon: python     },
      { name: "TypeScript",   icon: typescript },
      { name: "JavaScript",   icon: javascript },
      { name: "C++",          icon: cpp        },
      { name: "C#",           icon: csharp     },
      { name: "Bash / Shell", icon: bash       },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Angular",        icon: angular  },
      { name: "React",          icon: reactjs  },
      { name: "Next.js",        icon: nextjs   },
      { name: "Tailwind CSS",   icon: tailwind },
      { name: "HTML5",          icon: html5    },
      { name: "Framer Motion",  icon: framer   },
      { name: "GSAP",           icon: gsap     },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", icon: springboot },
      { name: "Node.js",     icon: nodejs     },
      { name: "FastAPI",     icon: fastapi    },
      { name: "Express.js",  icon: express    },
      { name: "GraphQL",     icon: graphql    },
      { name: "REST API",    icon: restapi    },
      { name: "Django",      icon: django     },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL",    icon: postgresql    },
      { name: "MySQL",         icon: mysql         },
      { name: "MongoDB",       icon: mongodb       },
      { name: "Redis",         icon: redis         },
      { name: "Elasticsearch", icon: elasticsearch },
      { name: "Oracle 19c",    icon: oracle        },
      { name: "Pinecone",      icon: pinecone      },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS",        icon: aws        },
      { name: "Azure",      icon: azure      },
      { name: "Docker",     icon: docker     },
      { name: "Kubernetes", icon: kubernetes },
      { name: "Jenkins",    icon: jenkins    },
      { name: "Terraform",  icon: terraform  },
      { name: "Git",        icon: git        },
    ],
  },
  {
    label: "Messaging & Streaming",
    items: [
      { name: "Apache Kafka", icon: kafka      },
      { name: "RabbitMQ",     icon: rabbitmq   },
      { name: "Redis",        icon: redis      },
      { name: "Grafana",      icon: grafana    },
      { name: "WebSocket",    icon: websocket  },
      { name: "Elasticsearch", icon: elasticsearch },
    ],
  },
  {
    label: "AI & ML",
    items: [
      { name: "LangChain",    icon: langchain   },
      { name: "PyTorch",      icon: pytorch     },
      { name: "TensorFlow",   icon: tensorflow  },
      { name: "HuggingFace",  icon: huggingface },
      { name: "Scikit-learn", icon: sklearn     },
      { name: "MLflow",       icon: mlflow      },
      { name: "CUDA / HPC",   icon: cuda        },
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer AI/ML & Data Systems (Research Assistant)",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0f",
    date: "Jan 2025 – May 2026",
    points: [
      "Designed enterprise-scale web applications and RESTful microservices using Python, Django, and FastAPI, serving 21,000+ users across 15+ departments. Improved responsiveness by 40% and owned the full SDLC through UAT, deployment, and production support.",
      "Integrated Microsoft Graph API with OAuth 2.0 and Power Automate to automate secure institutional data pipelines, enforcing access governance across systems. Reduced manual processing by 60% and recovered 15+ staff hours weekly via audit-ready data handling.",
      "Constructed Python ETL pipelines processing 500,000+ records across Banner ERP and Moodle LMS, applying B-tree indexing, CTEs, and Materialized Views on PostgreSQL — cutting query execution from 2 minutes to under 10 seconds and removing 90% of manual data entry.",
      "Developed 20+ automated reporting services with FastAPI, Pandas, and ReportLab, cutting report generation time from 8 hours to 30 seconds.",
      "Pioneered LangChain and RAG-powered multi-agent workflows integrating LLM pipelines with MLflow tracking, accelerating delivery by 35%.",
      "Trained a Whisper-based Cajun-French ASR model with PyTorch and TensorFlow on HPC/CUDA clusters, cutting word error rate by 21% and VRAM usage by 40% for low-resource speech research.",
      "Containerized 8+ services with Docker and Docker Compose — FastAPI, PostgreSQL, and Dagster ETL — cutting deployment setup time by 40%.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#022B3A",
    date: "May 2023 – Dec 2024",
    points: [
      "Architected secure, multi-threaded Spring Boot microservices on Azure Kubernetes Service, enforcing RBAC across distributed enterprise services. Cut infrastructure costs by 15% while improving resilience and scalability under high-volume peak transaction loads.",
      "Engineered high-performance RESTful and SOAP APIs backed by Oracle and MongoDB, applying multi-threaded request handling, index tuning, and connection pooling for sub-50ms response times. Boosted downstream data exchange efficiency by 20% across mission-critical platforms.",
      "Designed GraphQL APIs with schema-first development and resolver optimization, reducing client over-fetching and cutting payload sizes by 35% for front-end consumers.",
      "Spearheaded Angular (14+) frontend development with RxJS, TypeScript, and Bootstrap, delivering responsive dashboards with real-time visualizations and WCAG accessibility compliance. Accelerated feature delivery by 25%.",
      "Implemented OAuth2, JWT, and Spring Security across microservices, embedding DevSecOps practices into CI/CD pipelines. Reduced production vulnerabilities by 35% and strengthened overall security posture.",
      "Integrated Apache Kafka for real-time event streaming with exactly-once delivery, using Redis and RabbitMQ for asynchronous workflow execution — improving message reliability by 40% and lowering UI response latency.",
      "Automated Jenkins CI/CD pipelines with SonarQube, rollback strategies, and environment validation, cutting deployment windows by 35%.",
      "Built JUnit and Mockito test frameworks achieving 98% code coverage, with reusable Cypress regression suites cutting QA cycles by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hruthwik demonstrates strong problem-solving skills and a structured approach to development. He consistently delivers clear, practical, and well-designed solutions.",
    name: "Carol Edwards",
    designation: "Manager",
    company: "ULL UCSS STEP",
    image: carol,
  },
  {
    testimonial:
      "Hruthwik has a solid grasp of modern web technologies and system design. His work reflects a strong focus on performance, usability, and clean implementation.",
    name: "Dr. Margala",
    designation: "Director-Computer Science",
    company: "ULL",
    image: margala,
  },
  {
    testimonial:
      "Working with Hruthwik was a great experience. He communicates ideas clearly, adapts quickly to challenges, and consistently builds reliable, well-structured applications.",
    name: "Vishnu Priya",
    designation: "GTA",
    company: "ULL UCSS STEP",
    image: priya,
  },
];

const projects = [
  {
    name: "ContextForge – Agentic Knowledge Base",
    description:
      "Agent-navigable knowledge base of 1,200+ documents using Google's OKF markdown with YAML frontmatter — cutting tokens per query by 62%. Hybrid FAISS vector search + knowledge graph improved Recall@10 by 24% and dropped query latency from 1.8s to 640ms. Claude-powered agent with automated ingestion reduced manual maintenance by 80%.",
    tags: [
      { name: "LangChain",  color: "blue-text-gradient"  },
      { name: "FAISS",      color: "green-text-gradient" },
      { name: "FastAPI",    color: "pink-text-gradient"  },
      { name: "Claude API", color: "blue-text-gradient"  },
      { name: "Python",     color: "green-text-gradient" },
    ],
    image: contextforge,
  },
  {
    name: "Distributed Async Microservices Platform",
    description:
      "Asynchronous Spring Boot microservices powered by Redis and RabbitMQ, lifting processing efficiency by 40% while reducing front-end latency. Apache Kafka event streaming with exactly-once delivery improved message reliability by 40% across distributed consumers. Observability via Grafana, Elasticsearch, and Jenkins CI/CD.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient"  },
      { name: "Kafka",       color: "green-text-gradient" },
      { name: "Redis",       color: "pink-text-gradient"  },
      { name: "RabbitMQ",   color: "blue-text-gradient"  },
      { name: "Docker",      color: "green-text-gradient" },
    ],
    image: microservices,
  },
  {
    name: "Cajun-French ASR & AI Inference System",
    description:
      "Fine-tuned a Whisper ASR model on 100+ hours of Cajun-French audio using PyTorch FSDP, QLoRA, and mixed precision on HPC/CUDA clusters — reducing WER by 21%, CER by 17%, and VRAM by 40%. Shipped real-time WebSocket streaming inference with intent classification (F1 0.91, 38ms latency) and a LangChain + Pinecone RAG layer improving Recall@10 by 18%.",
    tags: [
      { name: "PyTorch",     color: "blue-text-gradient"  },
      { name: "TensorFlow",  color: "green-text-gradient" },
      { name: "HuggingFace", color: "pink-text-gradient"  },
      { name: "LangChain",   color: "blue-text-gradient"  },
      { name: "CUDA / HPC",  color: "green-text-gradient" },
    ],
    image: cajunAsr,
  },
  {
    name: "API-ContractGuard – Schema Validation CLI",
    description:
      "Modular 5-component Node.js CLI using AJV and JSON Schema to detect API schema drift before production, covering 10 REST endpoints with three-tier PASS/WARNING/FAIL reporting. 36-unit Jest suite at 98% coverage with CI/CD exit-code enforcement that blocks breaking changes on pull requests across MERN stack applications.",
    tags: [
      { name: "Node.js",     color: "blue-text-gradient"  },
      { name: "JSON Schema", color: "green-text-gradient" },
      { name: "Jest",        color: "pink-text-gradient"  },
      { name: "CI/CD",       color: "blue-text-gradient"  },
    ],
    image: apiGuard,
  },
];

export { services, techCategories, experiences, testimonials, projects };
