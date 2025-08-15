import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials=[
  {
    icon:<FaGithub/>,
    path:"https://github.com/junaid-dev",
    label:"Github",
  },
  {
    icon:<FaLinkedinIn/>,
    path:"https://www.linkedin.com/in/junaid-dev/",
    label:"Linkedin",
  },
  {
    icon:<FaTwitter/>,
    path:"https://twitter.com/junaid_dev",
    label:"Twitter",
  },
  {
    icon:<FaYoutube/>,
    path:"https://www.youtube.com/@junaiddev",
    label:"Youtube",
  },
]
export default function Social({containerStyles,iconStyles}) {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>(
        <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      ))}
    </div>
  )
}
