"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../public/assets/picofme.png";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[498px] 2xl:h-[498px] mix-blend-lighten relative"
        >
          <Image
            src={profilePic}
            alt="profile pic"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
        
        {/* Responsive circle */}
        <motion.svg 
          className="w-[202px] h-[202px] sm:w-[252px] sm:h-[252px] md:w-[302px] md:h-[302px] lg:w-[352px] lg:h-[352px] xl:w-[402px] xl:h-[402px] 2xl:w-[506px] 2xl:h-[506px] absolute inset-0"
          fill="transparent" 
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="#00ff99" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray:"24 10 0 0" }}
            animate={{
              strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22  22"],
              rotate:[120,360]
            }}
            transition={{duration:20,repeat:Infinity,repeatType:"reverse"}}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
