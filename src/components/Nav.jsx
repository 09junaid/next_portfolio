"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../../types/links';

export default function Nav() {
  const pathname=usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link,index)=>(
        <Link key={index} href={link.path} className={`${pathname===link.path && 'text-accent border-b-2 border-accent'} capitalize hover:text-accent transition-all`}>{link.name}</Link>
      ))}
    </nav>
  )
}
