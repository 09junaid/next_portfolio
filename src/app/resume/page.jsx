"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { about, education, experience, skills } from "@/constants/resumeData";
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mb-10"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* {experience} */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title */}
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* Accent Line */}
                <div className="w-16 h-[3px] bg-accent rounded-full mt-2 mx-auto xl:mx-0" />
                <p className="max-w-[600px] text-white/60 mt-4 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                {/* Experience List */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3 border border-white/5 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                      >
                        <span className="text-sm text-accent font-medium tracking-wide">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 text-white/70">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title */}
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* Accent Line */}
                <div className="w-16 h-[3px] bg-accent rounded-full mt-2 mx-auto xl:mx-0" />
                <p className="max-w-[600px] text-white/60 mt-4 mx-auto xl:mx-0">
                  {education.description}
                </p>

                {/* Education List */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3 border border-white/5 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                      >
                        <span className="text-sm text-accent font-medium tracking-wide">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 text-white/70">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title */}
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                {/* Accent Line */}
                <div className="w-16 h-[3px] bg-accent rounded-full mt-2 mx-auto xl:mx-0" />
                <p className="max-w-[600px] text-white/60 mt-4 mx-auto xl:mx-0">
                  {skills.description}
                </p>

                {/* Skills Grid with Scroll */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillLists.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={150}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-full h-[150px] bg-[#232329] flex flex-col justify-center items-center rounded-xl group transition-all duration-300 hover:bg-accent/5">
                                <div className="text-6xl group-hover:text-accent transition-colors duration-300">
                                  {item.icon}
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="rounded-lg bg-[#232329] border border-white/10 px-4 py-2 text-sm text-white/80 shadow-lg backdrop-blur-lg"
                            >
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title */}
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* Accent Line */}
                <div className="w-16 h-[3px] bg-accent rounded-full mt-2 mx-auto xl:mx-0" />
                <p className="max-w-[600px] text-white/60 mt-4 mx-auto xl:mx-0">
                  {about.description}
                </p>

                {/* Info Grid inside ScrollArea */}
                <ScrollArea className="h-[400px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto xl:mx-0 pr-4">
                    {about.info.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xl">
                          {item.icon ? item.icon : item.fieldName.charAt(0)}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col text-left">
                          <span className="text-sm text-white/60">
                            {item.fieldName}
                          </span>
                          {item.fieldName.toLowerCase() === "email" ? (
                            <a
                              href={`mailto:${item.fieldValue}`}
                              className="text-lg font-semibold hover:text-accent transition-colors truncate max-w-[220px]"
                              title={item.fieldValue}
                            >
                              {item.fieldValue}
                            </a>
                          ) : (
                            <span className="text-lg font-semibold">
                              {item.fieldValue}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
