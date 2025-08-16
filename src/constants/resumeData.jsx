import { FaHtml5,FaCss3,FaBootstrap,FaJs,FaReact,FaNodeJs, } from "react-icons/fa";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs,} from "react-icons/si";
import badge from "../../public/assets/resume/badge.svg";
import cap from "../../public/assets/resume/cap.svg";
import thumb1 from "../../public/assets/work/thumb1.png";
import thumb2 from "../../public/assets/work/thumb2.png";
import thumb3 from "../../public/assets/work/thumb3.png";

// about data in resume
export const about={
  title:"About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
    fieldName:"Skype",
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
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  items:[
    {
      company:"Meissasoft pvt. ltd.",
      position:"Full Stack Developer",
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
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
export const skills={
 title:"My Skills",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  skillLists:[
    {
      icon:<FaHtml5 />,
      name:"HTML",
    },
    {
      icon:<FaCss3 />,
      name:"CSS",
    },
    {
      icon:<FaBootstrap />,
      name:"Bootstrap",
    },
    {
      icon:<FaJs />,
      name:"Javascript",
    },
    {
      icon:<FaReact />,
      name:"React",
    },
    {
      icon:<FaNodeJs />,
      name:"NodeJs",
    },
    {
      icon:<SiTailwindcss />,
      name:"Tailwind",
    },
    {
      icon:<SiNextdotjs />,
      name:"NextJs",
    },
  ]
}

export const projectData=[
  {
    num:'01',
    category:'Forntend Development',
    title:'project 1',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
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

    ],
    image:thumb1,
    live:'',
    github:'',
  },
  {
    num:'02',
    category:'Web Development',
    title:'project 1',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
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

    ],
    image:thumb2,
    live:'',
    github:'',
  },
  {
    num:'03',
    category:'Full Stack Development',
    title:'project 1',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
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

    ],
    image:thumb3,
    live:'',
    github:'',
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