"use client"
import { ReactTyped } from "react-typed";

export default function Sertificate() {
  return (
    <>
      <section className="w-full h-screen bg-[#F0EBE3] flex items-center justify-center p-[100px]">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-[25px] font-light mb-14">"My certificate as part of my portfolio"</h1>
          <div className="grid grid-cols-4 gap-16 w-full px-20">
            <div className="h-60 bg-blue-400"></div>
            <div className="h-60 bg-red-400"></div>
            <div className="h-60 bg-blue-400"></div>
            <div className="h-60 bg-red-400"></div>
          </div>
        </div>
      </section>
    </>
  );
}
