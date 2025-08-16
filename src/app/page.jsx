"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/pdf/Junaid_Arshad_resume.pdf";
    link.download = "Junaid_Arshad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 section-padding">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-none w-full space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <span className="text-lg sm:text-xl md:text-2xl text-accent font-medium">
                Software Developer
              </span>
              <h1 className="h1">
                Hello I'm
                <br />
                <span className="text-accent">Junaid Arshad</span>
              </h1>
              <p className="max-w-[500px] mx-auto lg:mx-0 text-white/80 text-justify lg:text-left text-sm sm:text-base md:text-lg leading-relaxed">
               Full Stack Web Developer with 2 years of experience, specializing in MERN stack to build responsive, efficient, and user-friendly applications.
              </p>
            </div>

            {/* Action Buttons and Social */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <Button
                onClick={handleResumeDownload}
                variant={"outline"}
                size={"lg"}
                className="btn-responsive uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-lg sm:text-xl" />
              </Button>

              <div className="w-full sm:w-auto">
                <Social
                  containerStyles="flex gap-4 md:gap-6 justify-center lg:justify-start"
                  iconStyles="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-accent rounded-full flex justify-center items-center text-accent text-sm sm:text-base hover:bg-accent hover:text-primary hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 lg:order-none w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 lg:mt-16">
        <Stats />
      </div>
    </section>
  );
}
