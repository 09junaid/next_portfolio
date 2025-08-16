import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials=[
  {
    icon:<FaGithub/>,
    path:"https://github.com/09junaid",
    label:"Github",
  },
  {
    icon:<FaLinkedinIn/>,
    path:"https://www.linkedin.com/in/junaid-arshad02/",
    label:"Linkedin",
  },
]
export default function Social({containerStyles,iconStyles}) {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>(
        <Link 
          key={index} 
          href={item.path} 
          className={`${iconStyles} group`}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}
