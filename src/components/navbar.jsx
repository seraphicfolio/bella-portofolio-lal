"use client"

export default function Navbar() {
    return (
        <nav className="w-full h-14 fixed bg-[#FFEBD4] top-0 left-0 flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-20 z-50">
          <a href="#homepages" className="w-9 h-10 relative">
            <img className="w-8 h-10 absolute top-0 left-0 rotate-6" src="./icon.png" alt="" />
            <h1 className="absolute bottom-0 left-7 font-light italic">ella</h1>
          </a>
          <button className="md:hidden p-2" onClick={() => document.getElementById('navbar-menu').classList.toggle('hidden')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div id="navbar-menu" className="hidden h-screen md:bg-transparent absolute top-full right-0 w-full md:top-0 transition-all duration-300 ease-in-out md:right-8 lg:right-20 items-center gap-2 md:gap-5 md:flex md:w-auto md:h-full">
            <div className="bg-[#ffd7aa] md:flex md:w-full md:bg-transparent ">
              <a className="w-full md:w-auto px-4 md:px-10 py-2 md:py-0 text-lg lg:text-xl capitalize font-normal md:h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#about">About</a>
              <a className="w-full border-t-2 border-[#a67741] md:border-0 md:w-auto px-4 md:px-10 py-2 md:py-0 text-lg lg:text-xl capitalize font-normal md:h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#portofolio">Portofolio</a>
              <a className="w-full border-t-2 border-[#a67741] md:border-0 md:w-auto px-4 md:px-10 py-2 md:py-0 text-lg lg:text-xl capitalize font-normal md:h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#certificate">Certificate</a>
              <a className="w-full md:w-auto px-4 md:px-10 py-2 md:py-0 text-lg border-t-2 border-b-2 border-[#a67741] md:border-0 lg:text-xl capitalize font-normal md:h-full flex items-center justify-center duration-300 ease-in-out transition-all hover:scale-110" href="#footer">Contact Me</a>
            </div>
            <div className="w-full h-full bg-opacity-50 bg-[#523300] md:hidden"></div>
          </div>
        </nav>
    );
  }