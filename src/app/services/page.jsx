"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const service = [
  {
    num: "01",
    title: "Front-end Development",
    href: "/services/frontend",
    description:
      "Creating beautiful, responsive, and interactive user interfaces using modern web technologies like HTML, CSS, JavaScript, and React.",
  },
  {
    num: "02",
    title: "Back-end Development",
    href: "/services/backend",
    description:
      "Building robust server-side solutions with scalable architecture and secure APIs using Node.js, Express.js, Nest.js, MongoDB ans more. ",
  },
  {
    num: "03",
    title: "Full Stack Development",
    href: "/services/fullstack",
    description:
      "End-to-end web development from frontend to backend, creating complete web applications with modern technologies.",
  },
];
export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[60px]"
        >
          {service.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 group p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent text-outline [color:transparent] group-hover:[-webkit-text-stroke:1px_#00ff99] transition-all duration-500">
                  {item.num}
                </div>

                <Link href={item.href} className="w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] rounded-full bg-white group-hover:bg-accent hover:-rotate-45 flex justify-center items-center transition-all duration-500">
                  <BsArrowDownRight className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                </Link>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>
              
              <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
              
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
