import {
  javascript,
  typescript,
  reactjs,
  nodejs,
  backend,
  cloud,
  fsd,
  ai,
  ull,
  nextjs,
  aws,
  python,
  carol,
  margala,
  priya,
  graphql,
  docker,
  mongodb,
  git,
  postgresql,
  redis,
  pytorch,
  springboot,
  kubernetes,
  angular,
  fastapi,
  langchain,
  terraform,
  java,
  csharp,
  bash,
  mysql,
  elasticsearch,
  azure,
  jenkins,
  huggingface,
  mlflow,
  deloitte,
  cajunAsr,
  adServing,
  edaProject,
  tensorflow,
  cuda,
  sklearn,
  pinecone,
  kicad,
  ltspice,
  cpp,
  ngspice,
  multisim,
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

const techCategories = [
  {
    label: "Languages",
    items: [
      { name: "Python",       icon: python },
      { name: "JavaScript",   icon: javascript },
      { name: "TypeScript",   icon: typescript },
      { name: "Java",         icon: java },
      { name: "C++",          icon: cpp },
      { name: "C#",           icon: csharp },
      { name: "Bash / Shell", icon: bash },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "PyTorch",      icon: pytorch },
      { name: "TensorFlow",   icon: tensorflow },
      { name: "HuggingFace",  icon: huggingface },
      { name: "LangChain",    icon: langchain },
      { name: "Scikit-learn", icon: sklearn },
      { name: "MLflow",       icon: mlflow },
      { name: "CUDA / HPC",   icon: cuda },
    ],
  },
  {
    label: "Web & Backend",
    items: [
      { name: "React",       icon: reactjs },
      { name: "Angular",     icon: angular },
      { name: "Next.js",     icon: nextjs },
      { name: "Node.js",     icon: nodejs },
      { name: "FastAPI",     icon: fastapi },
      { name: "Spring Boot", icon: springboot },
      { name: "GraphQL",     icon: graphql },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL",    icon: postgresql },
      { name: "MongoDB",       icon: mongodb },
      { name: "Redis",         icon: redis },
      { name: "MySQL",         icon: mysql },
      { name: "Elasticsearch", icon: elasticsearch },
      { name: "Pinecone",      icon: pinecone },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS",        icon: aws },
      { name: "Azure",      icon: azure },
      { name: "Docker",     icon: docker },
      { name: "Kubernetes", icon: kubernetes },
      { name: "Terraform",  icon: terraform },
      { name: "Jenkins",    icon: jenkins },
      { name: "Git",        icon: git },
    ],
  },
  {
    label: "Hardware & EDA",
    items: [
      { name: "KiCAD",    icon: kicad },
      { name: "LTspice",  icon: ltspice },
      { name: "Ngspice",  icon: ngspice },
      { name: "Multisim", icon: multisim },
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#022B3A",
    date: "Sep 2023 – Nov 2024",
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
    title: "Graduate Assistant – Electronics & Systems",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0fff",
    date: "Jan 2025 – May 2025",
    points: [
      "Designed and simulated analog and mixed-signal circuits in KiCAD and LTspice, including op-amp filters, voltage regulators, and oscillator circuits with SPICE-verified frequency and transient analysis.",
      "Performed SPICE simulations using Ngspice and Multisim to validate circuit behavior, identify parasitic effects, and iterate on PCB-level design decisions.",
      "Developed Python automation scripts for batch SPICE netlist generation and post-simulation data extraction, reducing manual analysis time by 60%.",
      "Assisted in lab instruction for electronics courses, guiding students through circuit prototyping, oscilloscope measurements, and PCB design workflows.",
    ],
  },
  {
    title: "Research Assistant – AI/ML & Systems",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0fff",
    date: "Jun 2025 – May 2026",
    points: [
      "Architected multi-agent LangChain workflows with tool-augmented orchestration, shared context management, and parallel agent execution, integrating AWS Bedrock for LLM invocation and MLflow for systematic evaluation across LLM-based services.",
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
    name: "Cajun-French ASR & Agentic AI Platform",
    description:
      "Fine-tuned a Whisper ASR model on 100+ hours of Cajun-French audio using PyTorch FSDP, QLoRA, and mixed-precision training on HPC/CUDA clusters achieving 21% WER reduction. Built a multi-agent LangChain + Pinecone RAG system with real-time WebSocket streaming and Voice Activity Detection.",
    tags: [
      { name: "PyTorch",     color: "blue-text-gradient" },
      { name: "HuggingFace", color: "green-text-gradient" },
      { name: "LangChain",   color: "pink-text-gradient" },
      { name: "Pinecone",    color: "blue-text-gradient" },
      { name: "CUDA / HPC",  color: "green-text-gradient" },
    ],
    image: cajunAsr,
  },
  {
    name: "Open-Source ML Ad Serving Platform",
    description:
      "Distributed ML-powered ad serving pipeline (Retrieval → Filter → Predict → Rank) using PyTorch DeepFM, LR, and FM models trained on Criteo logs (AUC 0.76). Achieved <10ms P99 latency at 150+ QPS/node for 1M+ DAU scale with Redis frequency capping and Prometheus/Grafana observability.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "FastAPI",    color: "green-text-gradient" },
      { name: "PyTorch",    color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Redis",      color: "green-text-gradient" },
      { name: "Docker",     color: "white-text-gradient" },
    ],
    image: adServing,
  },
  {
    name: "EDA Circuit Design & SPICE Simulation Workbench",
    description:
      "Designed and simulated analog/mixed-signal circuits in KiCAD and LTspice — op-amp filters, voltage regulators, and oscillator circuits with SPICE-verified transient and frequency analysis. Used Ngspice and Multisim for cross-validation; automated netlist generation and post-simulation data extraction with Python.",
    tags: [
      { name: "KiCAD",   color: "blue-text-gradient" },
      { name: "LTspice", color: "green-text-gradient" },
      { name: "Ngspice", color: "pink-text-gradient" },
      { name: "Python",  color: "blue-text-gradient" },
      { name: "SPICE",   color: "green-text-gradient" },
    ],
    image: edaProject,
  },
];

export { services, techCategories, experiences, testimonials, projects };
