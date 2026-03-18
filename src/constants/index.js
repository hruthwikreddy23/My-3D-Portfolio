import { split } from "postcss/lib/list";
import {
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  frontend,
  ull,
  nextjs,
  aws,
  python,
  restapi,
  unicycle,
  Campusconnect,
  carol,
  margala,
  priya,
  dv,
  uix, 
  ai,
  vmware,
  splitsync,
  
} from "../assets";
import { source } from "framer-motion/client";

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
    title: "Frontend Engineer",
    icon: frontend,
  },
  {
    title: "UI/UX Developer",
    icon: uix,
  },
  {
    title: "Data Visualization Engineer",
    icon: dv,
  },
  {
    title: "AI-enabled Web Developer",
    icon: ai,
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
    title: "Frontend Engineer",
    company_name: "VMware",
    icon: vmware,
    iconBg: "#020511ff",
    date: "Sep 2023 - Nov 2024",
    points: [
      "Built data-driven dashboards and frontend interfaces to visualize telecom network performance and usage trends.",
      "Designed interactive data visualizations using JavaScript charting libraries, improving data accessibility for internal teams.",
      "Developed backend APIs and data pipelines to support real-time analytics dashboards and system integrations.",
      "Automated data workflows and reporting processes, improving efficiency and reducing manual effort across teams.",
    ],
  },
  {
    title: "Research & Teaching Assistant",
    company_name: "University of Louisiana at Lafayette",
    icon: ull,
    iconBg: "#0c0d0fff",
    date: "Jan 2025 - Present",
    points: [
      "Built and maintained university web platforms using React, improving performance, responsiveness, and accessibility (WCAG).",
      "Developed interactive dashboards and data visualization interfaces for 15+ departments, enabling efficient data monitoring.",
      "Designed frontend workflows integrating REST APIs, reducing manual reporting effort by ~60%.",
      "Created a scheduling interface for 50+ users, automating shift coordination and improving efficiency by ~70%.",
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
    name: "SplitSync AI",
    description:
      "AI-powered expense management platform for real-time group expense tracking and automated balance settlement. Built with Next.js, featuring interactive dashboards, AI-based receipt processing, and intuitive multi-user workflows for simplified expense sharing.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Gen ai",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
        color: "white-text-gradient",
      },
    ],
    image: splitsync,
    source_code_link: "https://github.com/hruthwikreddy23/SplitSync-AI",
  },
  {
    name: "CampusCONNECT",
    description:
      "AI-enabled event management platform for discovering and managing campus events. Built with Next.js, featuring dual user portals, responsive UI, AI-generated event content, and an assistant chatbot to improve engagement and event workflows.",
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
        name: "RAG",
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