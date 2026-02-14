import {
  
  backend,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  fsd,
  frontend,
  cloud,
  optum,
  ull,
  nextjs,
  aws,
  python,
  restapi,
  podiumai,
  unicycle,
  Campusconnect,
  carol,
  margala,
  priya,
  
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
    title: "Full Stack Developer",
    icon: fsd,
  },
  {
    title: "Frontend / UI Engineer",
    icon: frontend,
  },
  {
    title: "Backend / API Developer",
    icon: backend,
  },
  {
    title: "Cloud / SaaS Engineer",
    icon: cloud,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Optum",
    icon: optum,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2024",
    points: [
      "Contributed to the Core Investment platform enabling financial transactions such as Buy, Sell, Cancel, and Dividend processing for HSA accounts.",
      "Developed and maintained REST APIs and microservices supporting transaction workflows and system integrations.",
      "Worked with AWS services (S3, SQS, SNS, ECS, CloudWatch) for distributed application workflows and monitoring.",
      "Collaborated with cross-functional teams to deliver production features, testing, and performance improvements.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0fff",
    date: "Jan 2025 - Present",
    points: [
      "Built an automated shift-scheduling system for ~50 student employees using Microsoft Power Apps, Power Automate, and Teams.",
      "Developed workflow automation and rule-based scheduling logic using Microsoft Graph APIs.",
      "Maintained lab infrastructure and MFP printers, handling OS updates, troubleshooting, hardware support, and system reliability.",
      "Supported academic web systems and contributed using React, Tailwind CSS, JavaScript, and Python (Django / FastAPI).",
    ],
  }, 
  
];

const testimonials = [
  {
    testimonial:
      "Hruthwik demonstrates strong problem-solving skills and a structured approach to development. He consistently delivers clear, practical, and well-designed solutions.",
    name: "Carol Edwards",
    designation: "Manager",
    company: "ULL UCSS STEP ",
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
    name: "PODiumAI",
    description:
      "Full-stack SaaS platform enabling users to generate AI-powered podcasts with multi-voice support, real-time data handling, and secure authentication. Built with a modern React / Next.js architecture and designed for performance and scalability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "convex",
        color: "white-text-gradient",
      },
    ],
    image: podiumai,
  },
  {
    name: "CampusCONNECT",
    description:
      "Web Platform designed for centralized campus event discovery, registrations, and payments. Implemented role-based workflows, secure file uploads, and responsive dashboards for students and organizers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: Campusconnect,
  },
  {
    name: "UNICYCLE",
    description:
      "Campus-focused marketplace enabling students to exchange academic resources such as books, gadgets, and study materials. Implemented AI-powered descriptions, price recommendations, .edu-only authentication, and buyer–seller workflows.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "LLaMA",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "white-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "ZOD",
        color: "green-text-gradient",
      },
    ],
    image: unicycle,
  },
];

export { services, technologies, experiences, testimonials, projects };