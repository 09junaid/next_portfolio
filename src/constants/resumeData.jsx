import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiShadcnui, SiTypescript, SiNextdotjs, SiExpress, SiNestjs,SiRedux,SiPrisma ,SiTypeorm ,SiReactquery } from "react-icons/si";

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"
import badge from "../../public/assets/resume/badge.svg";
import cap from "../../public/assets/resume/cap.svg";
import thumb1 from "../../public/assets/work/thumb1.png";
import thumb2 from "../../public/assets/work/thumb2.png";

// about data in resume
export const about={
  title:"About me",
  description:"I am a passionate Full Stack Web Developer with 2 years of hands-on experience in creating modern, responsive, and user-friendly web applications. Skilled in MERN stack and eager to deliver innovative digital solutions that make an impact.",
  info:[
    {
    fieldName:"Name",
    fieldValue:"Junaid Arshad",
    },
    {
    fieldName:"Phone",
    fieldValue:"(+92) 322 387 7270",
    },
    {
    fieldName:"Experience",
    fieldValue:"2 Years",
    },
    {
    fieldName:"LinkedIn",
    fieldValue:"Junaid Arshad",
    },
    {
    fieldName:"Nationality",
    fieldValue:"Pakistan",
    },
    {
    fieldName:"Email",
    fieldValue:"junaidarshad8686@gmail.com",
    },
    {
    fieldName:"Freelance",
    fieldValue:"Available",
    },
    {
    fieldName:"Language",
    fieldValue:"English, Urdu",
    },
  ]
}

// experience data in resume
export const experience={
  icon:badge,
  title:"My Experience",
  description:"Hands-on experience in building scalable web applications, from crafting responsive UIs to developing full-stack solutions. I have worked across different roles, gaining expertise in front-end, back-end, and modern frameworks.",
  items:[
    {
      company:"Meissasoft pvt. ltd.",
      position:"Full Stack Web Developer",
      duration:"2025 - Present",
    },
    {
      company:"IIFA Tech pvt. ltd.",
      position:"MERN Stack Developer (Intern)",
      duration:"2024 - 2025",
    },
    {
      company:"Asian Solutions pvt. ltd.",
      position:"Front-End Developer (Intern)",
      duration:"2023 - 2024",
    },
  ]
}

// education data in resume
export const education={
  icon:cap,
  title:"My Education",
  description:"A strong academic foundation in Computer Science and Software Engineering, equipping me with technical expertise and problem-solving skills to build modern digital solutions.",
  items:[
    {
      institute:"Minhaj University Lahore",
      position:"BS Software Engineering",
      duration:"2020 - 2024",
    },
    {
      institute:"Islamia College Kasur",
      position:"ICS (Computer Science)",
      duration:"2018 - 2020",
    },
    {
      institute:"Government College Kasur",
      position:"Matriculation (Computer Science)",
      duration:"2016 - 2018",
    },
  ]
}

// education data in resume
export const skills = {
  title: "My Skills",
  description:
    "Skilled in creating modern, responsive, and scalable web applications using the latest frontend and backend technologies.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      icon: <SiReactquery />,
      name: "React Query",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <SiPrisma  />,
      name: "Prisma",
    },
    {
      icon: <SiTypeorm  />,
      name: "TypeORM",
    },
    {
      icon: <FaServer />,
      name: "Database",
    },
  ],
};


export const projectData=[
  {
    num:'01',
    category:'Forntend Development',
    title:'project 1',
    description:'This project demonstrates my proficiency in handling media streams, developing scalable front-end structures, and working with third-party SDKs.',
    stack:[
      {
        name:'HTML 5',
      },
      {
        name:'CSS 3',
      },
      {
        name:'JavaScrip',
      },
      {
        name:'React',
      },
      {
        name:'Zego-Cloud',
      },

    ],
    image:thumb1,
    live:'https://novatalk.netlify.app/',
    github:'https://github.com/09junaid',
  },
  {
    num:'02',
    category:'MERN Stack Development',
    title:'project 2',
    description:'Developed a complete full-stack eCommerce web application using the MERN Stack (MongoDB, Express.js, React, Node.js) with Stripe payment integration and JWT-based authentication. ',
    stack:[
      {
        name:'MongoDB',
      },
      {
        name:'Express.js',
      },
      {
        name:'React',
      },
      {
        name:'Node.js',
      },

    ],
    image:thumb2,
    live:'https://hypehive.vercel.app/',
    github:'https://github.com/09junaid/full-ecommerce',
  },
]

export const contact=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+92) 322 387 7270',
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'junaidarshad8686@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:'Lahore, Pakistan',
  },
]