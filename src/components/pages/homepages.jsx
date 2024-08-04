"use client"
import { ReactTyped } from "react-typed";

export default function Homepages() {
  return (
    <>
      <section id="homepages" className="w-full h-screen bg-[#FFEBD4] flex items-center justify-center ps-[300px]">
        <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-[50px] font-light">I'M <span className="underline decoration-[#987070]">BELLA</span> AND I'M A</h1>
            <div className="flex mb-10 -mt-5">
              <ReactTyped className="text-[90px]" strings={["user interface (UI)", "user experience (UX)"]} typeSpeed={40} backSpeed={50} loop />
              <h1 className="text-[90px] font-semibold ms-2">Designer</h1>
            </div>
            <a href="#portofolio" className="border-2 border-black px-7 py-3 font-light flex items-center justify-center duration-300 ease-in-out transition-all hover:bg-[#987070] hover:text-[#FFEBD4] hover:border-[#906b6b]">My Design</a>
        </div>
      </section>
    </>
  );
}
