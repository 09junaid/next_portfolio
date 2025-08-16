import React from "react";
import Link from "next/link";
import {Button} from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with responsive sizing */}
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold transition-all duration-300 hover:text-accent">
            Junaid<span className="text-accent">.</span>
          </h1>
        </Link>
        
        {/* Desktop navigation with responsive gap */}
        <div className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-8">
          <Nav/>
          <Link href={"/contact"}>
            <Button className="btn-responsive bg-accent hover:bg-accent-hover text-primary font-semibold transition-all duration-300">
              Hire me
            </Button>
          </Link>
        </div>
        
        {/* Mobile navigation */}
        <div className="lg:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
}
