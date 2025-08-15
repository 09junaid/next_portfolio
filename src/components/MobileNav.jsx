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
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            {" "}
            <h1 className="text-4xl font-semibold">
              Junaid<span className="text-accent">.</span>
            </h1>{" "}
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } capitalize hover:text-accent text-xl transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
