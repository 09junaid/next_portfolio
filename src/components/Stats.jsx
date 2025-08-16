"use client";
import CountUp from "react-countup";
const stats=[
  {
    num:12,
    text:"Years of Experience"
  },
  {
    num:26,
    text:"Projects Completed"
  },
  {
    num:8,
    text:"Technologies mastered"
  },
  {
    num:500,
    text:"Code commits"
  },
]
export default function Stats() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((item,index)=>(
            <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-center sm:text-left p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-all duration-300">
              <CountUp 
                end={item.num} 
                duration={5} 
                delay={2} 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-accent"
              />
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-tight max-w-[120px] sm:max-w-[150px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
