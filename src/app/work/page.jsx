"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { projectData } from "@/constants/resumeData";

export default function Work() {
  const [project, setProject] = useState(projectData[0]);

  const handleProjectChange = (projectIndex) => {
    setProject(projectData[projectIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* outline */}
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.category}
                </h2>
              </div>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsArrowUpRight className="text-2xl text-white group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-2xl text-white group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] h-[400px] mb-6"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Project Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={() => {
                  const currentIndex = projectData.findIndex(
                    (p) => p.num === project.num
                  );
                  const prevIndex =
                    currentIndex === 0
                      ? projectData.length - 1
                      : currentIndex - 1;
                  handleProjectChange(prevIndex);
                }}
                className="group relative w-14 h-14 rounded-full 
             bg-white/5 border border-white/20 
             flex items-center justify-center 
             overflow-hidden backdrop-blur-sm
             transition-all duration-500 cursor-pointer"
              >
                {/* Glow background on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 to-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>

                {/* Border highlight on hover */}
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent/60 transition-all duration-500"></span>

                {/* Icon */}
                <BsArrowRight className="relative text-2xl text-white/80 group-hover:text-accent transition-all duration-500 rotate-180" />
              </button>

              {/* Counter (same) */}
              <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-white/80 text-sm font-semibold tracking-wider">
                  {project.num} / {projectData.length}
                </span>
              </div>

              <button
                onClick={() => {
                  const currentIndex = projectData.findIndex(
                    (p) => p.num === project.num
                  );
                  const nextIndex =
                    currentIndex === projectData.length - 1
                      ? 0
                      : currentIndex + 1;
                  handleProjectChange(nextIndex);
                }}
                className="group relative w-14 h-14 rounded-full 
             bg-white/5 border border-white/20 
             flex items-center justify-center 
             overflow-hidden backdrop-blur-sm
             transition-all duration-500 cursor-pointer"
              >
                {/* Glow background on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 to-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>

                {/* Border highlight on hover */}
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent/60 transition-all duration-500"></span>

                {/* Icon */}
                <BsArrowRight className="relative text-2xl text-white/80 group-hover:text-accent transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
