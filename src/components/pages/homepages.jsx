"use client"
import { ReactTyped } from "react-typed";

export default function Homepages() {
  return (
    <>
      <section className="w-full h-screen bg-[#FFEBD4] flex items-center justify-center ps-[300px]">
        <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-[50px] font-light">I'M CAMI AND I'M A</h1>
            <div className="flex mb-10 -mt-5">
              <ReactTyped className="text-[90px]" strings={["user interface (UI)", "user experience (UX)"]} typeSpeed={40} backSpeed={50} loop />
              <h1 className="text-[90px] font-semibold ms-2">Designer</h1>
            </div>
            <button className="border-2 border-black px-5 py-3 font-light flex items-center justify-center">Design Web</button>
        </div>
      </section>
    </>
  );
}
