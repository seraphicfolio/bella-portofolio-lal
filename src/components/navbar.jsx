import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-14 fixed  top-0 left-0 flex items-center justify-between px-20 z-50">
          <a href="#homepages" className="w-9 h-10 relative">
            <img className="w-12 h-16 absolute top-0 left-0 rotate-6" src="./icon.png" alt="" />
            <h1 className="absolute -bottom-[60%] left-7 font-light italic">ella</h1>
          </a>
            <div className="h-full flex items-center gap-5">
              <a className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#about">About</a>
              <a className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#portofolio">Portofolio</a>
              <a className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#certificate">Certificate</a>
              <a className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#footer">Contact Me</a>
            </div>
        </nav>
    );
  }
  