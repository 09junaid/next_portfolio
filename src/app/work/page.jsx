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
      className="min-h-[80vh] flex flex-col justify-center section-padding"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[30px]">
          {/* Project Info Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none space-y-6 md:space-y-8">
            {/* Project Number and Category */}
            <div className="space-y-4 md:space-y-6">
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mt-2">
                  {project.category}
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base md:text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Divider */}
            <div className="border border-white/20"></div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer hover:bg-white/10 transition-all duration-300">
                      <BsArrowUpRight className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-accent transition-all duration-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Demo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              
              {/* GitHub Repository */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer hover:bg-white/10 transition-all duration-300">
                      <BsGithub className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-accent transition-all duration-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          
          {/* Project Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6"
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
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              {/* Previous Button */}
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
                className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full 
             bg-white/5 border border-white/20 
             flex items-center justify-center 
             overflow-hidden backdrop-blur-sm
             transition-all duration-500 cursor-pointer hover:bg-white/10"
              >
                {/* Glow background on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 to-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>

                {/* Border highlight on hover */}
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent/60 transition-all duration-500"></span>

                {/* Icon */}
                <BsArrowRight className="relative text-lg sm:text-xl md:text-2xl text-white/80 group-hover:text-accent transition-all duration-500 rotate-180" />
              </button>

              {/* Counter */}
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider">
                  {project.num} / {projectData.length}
                </span>
              </div>

              {/* Next Button */}
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
                className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full 
             bg-white/5 border border-white/20 
             flex items-center justify-center 
             overflow-hidden backdrop-blur-sm
             transition-all duration-500 cursor-pointer hover:bg-white/10"
              >
                {/* Glow background on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 to-white/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>

                {/* Border highlight on hover */}
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent/60 transition-all duration-500"></span>

                {/* Icon */}
                <BsArrowRight className="relative text-lg sm:text-xl md:text-2xl text-white/80 group-hover:text-accent transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
