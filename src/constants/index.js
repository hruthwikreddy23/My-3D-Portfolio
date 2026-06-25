import {
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  backend,
  cloud,
  fsd,
  ai,
  ull,
  nextjs,
  aws,
  python,
  restapi,
  carol,
  margala,
  priya,
  gsap,
  framer,
  graphql,
  vercel,
  deloitte,
  cajunAsr,
  adServing,
  schedulex,
  apiGuard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Agentic AI Engineer",
    icon: ai,
  },
  {
    title: "Cloud & Data Engineer",
    icon: cloud,
  },
  {
    title: "Full Stack Developer",
    icon: fsd,
  },
];

const technologies = [
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "REST API",
    icon: restapi,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#022B3A",
    date: "May 2023 – Dec 2024",
    points: [
      "Designed object-oriented, multi-tiered Spring Boot microservices using Controller-Service-Repository layered architecture with interface-based abstractions and Spring IoC dependency injection, reducing onboarding time for new services by 40% while enforcing OAuth2/JWT-based access control.",
      "Developed multi-threaded, asynchronous request handling using Spring's thread pool for distributed RESTful APIs backed by MongoDB, delivering sub-50ms response times during peak operational loads.",
      "Built concurrent Node.js/Express microservices handling parallel API calls and webhook-based integrations across multiple third-party systems, reducing average processing times by 25%.",
      "Containerized services with Docker and deployed on AWS ECS and Azure AKS using blue-green deployment strategies, cutting release downtime by 30%.",
      "Designed and maintained Jenkins CI/CD pipelines with SonarQube static analysis, enforcing coding standards and cutting manual deployment effort by 50%.",
      "Built responsive Angular dashboards with real-time visualizations and centralized Log4j/Elasticsearch logging, cutting error triage time by 45%.",
    ],
  },
  {
    title: "Software Engineer, AI/ML & Data Systems | Research Assistant",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0fff",
    date: "Jan 2025 – May 2026",
    points: [
      "Architected multi-agent LangChain workflows with tool-augmented orchestration, shared context management, and parallel agent execution, integrating AWS Bedrock for LLM invocation and MLflow for systematic evaluation across LLM-based services.",
      "Orchestrated multi-step agentic workflows using AWS Step Functions for stateful, long-running LLM pipeline execution, and provisioned agentic AI infrastructure as code using AWS CDK for repeatable, scalable deployments.",
      "Engineered production backend services for distributed, university-wide web platforms using Python and FastAPI, optimizing SQL queries and improving system responsiveness by 40% for 21,000+ users across 15+ departments.",
      "Fine-tuned a Whisper-based ASR model on 100+ hours of Cajun-French speech using QLoRA, PyTorch FSDP, and mixed-precision training on HPC/CUDA clusters, achieving a 21% WER reduction and 40% lower VRAM usage.",
      "Engineered ML infrastructure for 20+ reporting services with CloudWatch alarms and Prometheus/Grafana dashboards, cutting report generation from 8 hours to under 30 seconds.",
      "Built large-scale distributed ETL pipelines processing 500,000+ institutional records, integrating Banner ERP and Moodle LMS data sources, reducing manual data entry by 90%.",
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
    name: "Cajun-French ASR & Agentic AI System",
    description:
      "Fine-tuned a Whisper ASR model on 100+ hours of Cajun-French audio using PyTorch FSDP, QLoRA, and mixed-precision training on HPC/CUDA clusters (21% WER reduction). Built a LangChain + Pinecone RAG system with real-time WebSocket streaming inference and Voice Activity Detection.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
      {
        name: "Pinecone",
        color: "blue-text-gradient",
      },
      {
        name: "CUDA/HPC",
        color: "green-text-gradient",
      },
    ],
    image: cajunAsr,
  },
  {
    name: "Open-Source Ad Serving Platform",
    description:
      "Distributed ML-powered ad serving pipeline (Retrieval-Filter-Predict-Rank) using PyTorch DeepFM/LR/FM models on Criteo ad logs (AUC 0.76). Achieved <10ms P99 latency and 150+ QPS/node at 1M+ DAU scale with Redis frequency capping and Prometheus/Grafana observability.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "white-text-gradient",
      },
    ],
    image: adServing,
  },
  {
    name: "ScheduleX – Shift Management System",
    description:
      "Full-stack React and Supabase scheduling platform supporting 500+ weekly shifts for 50 student workers. Engineered a FIFO approval engine using Priority Queue, Greedy, and Hash Set algorithms processing 1,300+ shift requests, with GPS clock-in tracking and 180ms real-time sync.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: schedulex,
  },
  {
    name: "API-ContractGuard",
    description:
      "Modular, object-oriented Node.js CLI validating API responses against JSON Schema contracts with 99.9% drift detection. Backed by a 36-test Jest suite (98% coverage) with three-tier PASS/WARNING/FAIL reporting across 10 endpoints, integrated into CI/CD to automatically block breaking changes.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "JSON Schema",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
      {
        name: "CI/CD",
        color: "blue-text-gradient",
      },
    ],
    image: apiGuard,
  },
];

export { services, technologies, experiences, testimonials, projects };
