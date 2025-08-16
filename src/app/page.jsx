"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/pdf/Junaid_Arshad_resume.pdf';
    link.download = 'Junaid_Arshad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm
              <br /> <span className="text-accent">Junaid Arshad</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              I'm a software developer with a passion for creating innovative
              solutions. I specialize in web development, mobile app
              development, and UI/UX design.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleResumeDownload}
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
