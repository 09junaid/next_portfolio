"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../../types/links';

export default function Nav() {
  const pathname=usePathname();
  return (
    <nav className='flex gap-4 sm:gap-6 md:gap-8'>
      {links.map((link,index)=>(
        <Link 
          key={index} 
          href={link.path} 
          className={`${
            pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
              ? 'text-accent' 
              : 'text-white/80 hover:text-accent'
          } capitalize text-sm sm:text-base font-medium transition-all duration-300 relative group`}
        >
          {link.name}
          {/* Border line - only show one at a time */}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
            pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
              ? 'w-full' // Active state - full width
              : 'w-0 group-hover:w-full' // Hover state - animate from 0 to full
          }`}></span>
        </Link>
      ))}
    </nav>
  )
}
