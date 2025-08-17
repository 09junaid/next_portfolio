"use client";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaPython,
  FaGithub,
  FaDocker,
  FaMicrochip,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import {
  SiMui,
  SiTailwindcss,
  SiTypescript,
  SiShadcnui,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiSwagger,
  SiPostman,
  SiJest,
  SiWebstorm,
  SiSublimetext,
  SiGraphql,
  SiSocketdotio,
  SiApachekafka,
  SiPrisma,
  SiTypeorm,
  SiMongoose
} from "react-icons/si";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { DiRedis } from "react-icons/di";

// Simple service data configuration
const serviceConfig = {
  frontend: {
    title: "Front-end Development",
    description:
      "Creating beautiful, responsive, and interactive user interfaces using modern web technologies.",
    technologies: [
      {
        category: "Core Technologies",
        technologies: [
          {
            name: "HTML5",
            icon: <FaHtml5 />,
            description: "Semantic markup and structure",
          },
          {
            name: "CSS3",
            icon: <FaCss3 />,
            description: "Styling and animations",
          },
          {
            name: "JavaScript",
            icon: <FaJs />,
            description: "Dynamic functionality",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript />,
            description: "Static typing",
          },
        ],
      },
      {
        category: "Styling & UI Tools",
        technologies: [
          {
            name: "Bootstrap",
            icon: <FaBootstrap />,
            description: "Responsive UI components",
          },
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            description: "Utility-first CSS framework",
          },
          {
            name: "MUI",
            icon: <SiMui />,
            description: "Material-UI component library",
          },
          {
            name: "Shadcn UI",
            icon: <SiShadcnui />,
            description: "UI component library",
          },
        ],
      },
      {
        category: "Frameworks & Libraries",
        technologies: [
          {
            name: "React",
            icon: <FaReact />,
            description: "Component-based UI library",
          },
          {
            name: "Next.js",
            icon: <RiNextjsFill />,
            description: "Full-stack React framework",
          },
        ],
      },
      {
        category: "State Management and Data Fetching Libraries",
        technologies: [
          {
            name: "Redux Toolkit",
            icon: <SiRedux />,
            description: "State management library",
          },
          {
            name: "RTK Query",
            icon: <TbBrandRedux />,
            description: "Data fetching library",
          },
          {
            name: "React Query",
            icon: <SiReactquery />,
            description: "Data fetching library",
          },
          {
            name: "Axios",
            icon: <SiAxios />,
            description: "HTTP requests library",
          },
        ],
      },
    ],
    deliverables: [
      "Responsive web applications",
      "Modern UI/UX design",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },
  backend: {
    title: "Backend Development",
    description:
      "Building robust server-side solutions with scalable architecture and secure APIs.",
    technologies: [
      {
        category: "Server Technologies",
        technologies: [
          {
            name: "Node.js",
            icon: <FaNodeJs />,
            description: "JavaScript runtime environment",
          },
          {
            name: "Express.js",
            icon: <SiExpress />,
            description: "Web application framework",
          },
          {
            name: "Nest.js",
            icon: <SiNestjs />,
            description: "Progressive Node.js framework",
          },
          {
            name: "Python",
            icon: <FaPython />,
            description: "Backend development",
          },
        ],
      },
      {
        category: "Databases",
        technologies: [
          {
            name: "MongoDB",
            icon: <SiMongodb />,
            description: "NoSQL document database",
          },
          {
            name: "PostgreSQL",
            icon: <SiPostgresql />,
            description: "Relational database",
          },
          {
            name: "MySQL",
            icon: <GrMysql />,
            description: "Reliable database system",
          },
          {
            name: "Supabase",
            icon: <RiSupabaseFill />,
            description: "Cloud-hosted database",
          },
        ],
      },
      {
        category: "ORMs & Data Access",
        technologies: [
          {
            name: "Prisma",
            icon: <SiPrisma />,
            description: "ORM for databases",
          },
          {
            name: "TypeORM",
            icon: <SiTypeorm />,
            description: "ORM for databases",
          },
          {
            name: "Mongoose",
            icon: <SiMongoose />,
            description: "ORM for MongoDB",
          },
        ],
      },
      {
        category: "API & Communication",
        technologies: [
          {
            name: "REST API",
            icon: <FaServer />,
            description: "Standardized API architecture",
          },
          {
            name: "GraphQL",
            icon: <SiGraphql />,
            description: "Flexible API query language",
          },
          {
            name: "WebSockets",
            icon: <SiSocketdotio />,
            description: "Real-time communication",
          },
        ],
      },
      {
        category: "Infrastructure & Scaling",
        technologies: [
          {
            name: "Docker",
            icon: <FaDocker />,
            description: "Containerization & deployment",
          },
          {
            name: "Redis",
            icon: <DiRedis />,
            description: "In-memory caching & pub/sub",
          },
          {
            name: "Microservices",
            icon: <FaMicrochip />,
            description: "Distributed backend architecture",
          },
          {
            name: "Message Queues",
            icon: <SiApachekafka />,
            description: "Async task processing (RabbitMQ, Kafka)",
          },
        ],
      },
    ],
    deliverables: [
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Authentication & authorization systems",
      "Real-time communication (WebSockets)",
      "Microservices architecture",
      "Caching & performance optimization",
      "Cloud deployment & containerization",
    ],
  },
  fullstack: {
  title: "Full Stack Development",
  description:
    "End-to-end web development from frontend to backend, creating complete web applications.",
  technologies: [
    // === Frontend Core ===
    {
      category: "Core Frontend Technologies",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 />, description: "Semantic markup and structure" },
        { name: "CSS3", icon: <FaCss3 />, description: "Styling and animations" },
        { name: "JavaScript", icon: <FaJs />, description: "Dynamic functionality" },
        { name: "TypeScript", icon: <SiTypescript />, description: "Static typing" },
      ],
    },
    {
      category: "Styling & UI Tools",
      technologies: [
        { name: "Bootstrap", icon: <FaBootstrap />, description: "Responsive UI components" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework" },
        { name: "MUI", icon: <SiMui />, description: "Material-UI component library" },
        { name: "Shadcn UI", icon: <SiShadcnui />, description: "UI component library" },
      ],
    },
    {
      category: "Frontend Frameworks & Libraries",
      technologies: [
        { name: "React", icon: <FaReact />, description: "Component-based UI library" },
        { name: "Next.js", icon: <RiNextjsFill />, description: "Full-stack React framework" },
      ],
    },
    {
      category: "State Management & Data Fetching",
      technologies: [
        { name: "Redux Toolkit", icon: <SiRedux />, description: "State management library" },
        { name: "RTK Query", icon: <TbBrandRedux />, description: "Data fetching library" },
        { name: "React Query", icon: <SiReactquery />, description: "Data fetching library" },
        { name: "Axios", icon: <SiAxios />, description: "HTTP requests library" },
      ],
    },

    // === Backend Core ===
    {
      category: "Server Technologies",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime environment" },
        { name: "Express.js", icon: <SiExpress />, description: "Web application framework" },
        { name: "Nest.js", icon: <SiNestjs />, description: "Progressive Node.js framework" },
        { name: "Python", icon: <FaPython />, description: "Backend development" },
      ],
    },
    {
      category: "Databases",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL document database" },
        { name: "PostgreSQL", icon: <SiPostgresql />, description: "Relational database" },
        { name: "MySQL", icon: <GrMysql />, description: "Reliable relational database" },
        { name: "Supabase", icon: <RiSupabaseFill />, description: "Cloud-hosted database" },
      ],
    },
    {
      category: "ORMs & Data Access",
      technologies: [
        { name: "Prisma", icon: <SiPrisma />, description: "ORM for databases" },
        { name: "TypeORM", icon: <SiTypeorm />, description: "ORM for databases" },
        { name: "Mongoose", icon: <SiMongoose />, description: "ODM for MongoDB" },
      ],
    },
    {
      category: "API & Communication",
      technologies: [
        { name: "REST API", icon: <FaServer />, description: "Standardized API architecture" },
        { name: "GraphQL", icon: <SiGraphql />, description: "Flexible API query language" },
        { name: "WebSockets", icon: <SiSocketdotio />, description: "Real-time communication" },
      ],
    },
    {
      category: "Infrastructure & Scaling",
      technologies: [
        { name: "Docker", icon: <FaDocker />, description: "Containerization & deployment" },
        { name: "Redis", icon: <DiRedis />, description: "In-memory caching & pub/sub" },
        { name: "Microservices", icon: <FaMicrochip />, description: "Distributed backend architecture" },
        { name: "Message Queues", icon: <SiApachekafka />, description: "Async task processing (RabbitMQ, Kafka)" },
      ],
    },

    // === Common Tools ===
    {
      category: "API & Testing Tools",
      technologies: [
        { name: "Swagger", icon: <SiSwagger />, description: "API documentation" },
        { name: "Postman", icon: <SiPostman />, description: "API testing" },
        { name: "Jest", icon: <SiJest />, description: "Unit testing framework" },
      ],
    },
    {
      category: "DevOps & Version Control",
      technologies: [
        { name: "Git", icon: <FaGitAlt />, description: "Version control" },
        { name: "GitHub", icon: <FaGithub />, description: "Source control" },
        { name: "Deployment", icon: <FaServer />, description: "Cloud hosting & CI/CD" },
      ],
    },
    {
      category: "Editors & IDEs",
      technologies: [
        { name: "VS Code", icon: <VscVscode />, description: "Code editor" },
        { name: "Sublime Text", icon: <SiSublimetext />, description: "Code editor" },
        { name: "WebStorm", icon: <SiWebstorm />, description: "IDE for JavaScript/TypeScript" },
      ],
    },
  ],
  deliverables: [
    "Complete end-to-end web applications",
    "Frontend and backend integration",
    "Database design and optimization",
    "User authentication and authorization",
    "Real-time features (WebSockets)",
    "Cloud deployment & containerization",
    "Performance optimization",
  ],
},

};

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service;
  const serviceData = serviceConfig[serviceSlug];
  if (!serviceData) {
    return (
      <div className="min-h-[80vh] section-padding flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-accent hover:text-white transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] section-padding"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 mb-6"
          >
            <BsArrowLeft className="text-lg" />
            <span>Back to Services</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {serviceData.title}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            {serviceData.description}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-12">
          {serviceData.technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-accent">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1, duration: 0.5 }}
                    className="group bg-[#1e1e24] border border-white/10 rounded-xl p-6 hover:border-accent/50 hover:bg-[#27272c] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl text-accent group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Description */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-white/5 border border-accent/20 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">What I Deliver</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <ul className="space-y-3">
              {serviceData.deliverables
                .slice(0, Math.ceil(serviceData.deliverables.length / 2))
                .map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <ul className="space-y-3">
              {serviceData.deliverables
                .slice(Math.ceil(serviceData.deliverables.length / 2))
                .map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
