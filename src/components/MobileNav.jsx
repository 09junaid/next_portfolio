"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { links } from "../../types/links";
export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
        <CiMenuFries className="text-2xl sm:text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary/95 backdrop-blur-md border-l border-white/10">
        {/* Logo */}
        <div className="mt-8 sm:mt-12 mb-8 sm:mb-12 text-center">
          <Link href={"/"}>
            <h1 className="text-2xl sm:text-3xl font-semibold hover:text-accent transition-colors duration-300">
              Junaid<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 sm:gap-8 justify-center items-center flex-1">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname === link.path 
                  ? "text-accent border-b-2 border-accent" 
                  : "text-white/80 hover:text-accent"
              } capitalize text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Contact Button */}
        <div className="mt-auto mb-8 text-center">
          <Link href="/contact">
            <button className="w-full max-w-[200px] bg-accent text-primary font-semibold py-3 px-6 rounded-lg hover:bg-accent-hover transition-all duration-300">
              Hire Me
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
