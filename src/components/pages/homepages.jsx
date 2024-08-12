"use client"
import { ReactTyped } from "react-typed";

export default function Homepages() {
  return (
    <>
      <section id="homepages" className="w-full h-[450px] md:h-[700px] lg:h-screen bg-[#FFEBD4] flex items-center justify-center px-5 md:px-[90px] lg:ps-[150px]">
        <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-[25px] md:text-[40px] lg:text-[50px] font-light">I'M <span className="underline decoration-[#987070]">BELLA</span> AND I'M A</h1>
            <div className="flex md:flex-row mb-5 lg:mb-10 lg:-mt-5">
              <ReactTyped className="text-[20px] md:text-[40px] lg:text-[100px]" strings={["user interface (UI)", "user experience (UX)"]} typeSpeed={40} backSpeed={50} loop />
              <h1 className="text-[20px] md:text-[40px] lg:text-[100px] font-semibold ms-1 md:ms-2">Designer</h1>
            </div>
            <a href="#portofolio" className="border-2 border-black px-4 py-1 md:px-7 md:py-3 font-light flex items-center justify-center duration-300 ease-in-out transition-all hover:bg-[#987070] hover:text-[#FFEBD4] hover:border-[#906b6b]">My Design</a>
        </div>
      </section>
    </>
  );
}
