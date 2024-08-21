"use client"
export default function Footer() {
  return (
    <>
      <section id="footer" className="w-full h-fit md:h-[450px] bg-[#F6F5F2] flex items-center justify-center p-5 md:py-0 lg:px-[100px]">
        <div className="w-full h-fit lg:h-[350px] bg-[#F0EBE3] flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="h-full w-full flex flex-col items-center justify-center p-2 gap-2 md:p-5 lg:gap-5 md:w-1/3">
                <h1 className="w-full text-left text-base md:text-sm lg:text-base">Currently vibing to:</h1>
                <iframe width="90%" height="200" src="https://www.youtube.com/embed/ChukpOHfAI8?si=JTtFvLVqHFIbf8ji" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="text-center w-[85%] font-light text-base md:text-sm lg:text-base">OneRepublic - Nobody (from Kaiju No. 8) [Official Lyric Video]</p>
            </div>
            <div className="h-full w-full md:w-1/2 flex flex-col items-center justify-between py-5 md:py-16">
                <div className="w-full h-full my-1 py-5 bg-[#ece3d5] flex items-center justify-between flex-col border-x-4 border-[#e8d9c1] relative">
                    <div className="w-1/3 h-1 absolute top-0 left-0 bg-[#e8d9c1]"></div>

                    <div className="flex items-center justify-center flex-col gap-5">
                        <h1 className="italic text-[20px] md:text-[25px] font-light">Thanks for stopping by!</h1>
                        <a href="https://drive.usercontent.google.com/u/0/uc?id=1c7Bf3-d-DoL0dwB-NYtlE1oNQkF5nC2G&export=download" target="_blank" className="px-10 py-3 md:px-5 md:py-1 lg:px-10 lg:py-3 border-2 border-black duration-300 ease-in-out transition-all hover:border-[#e6d4b8] hover:bg-[#F0EBE3] hover:scale-110">Get in touch</a>
                    </div>
                    <div className="flex mt-5 md:mt-7 lg:mt-0 flex-col md:flex-row items-center justify-center">
                        <p className="md:text-xs lg:text-base">Web Designer</p>
                        <div className="w-3 h-3 rounded-full bg-[#e8d9c1] border-[1px] border-[#e2ceaf] mx-2"></div>
                        <p className="md:text-xs lg:text-base">Mobile Designer</p>
                        <div className="w-3 h-3 rounded-full bg-[#e8d9c1] border-[1px] border-[#e2ceaf] mx-2"></div>
                        <p className="md:text-xs lg:text-base">Visual Designer</p>
                    </div>

                    <div className="w-1/3 h-1 absolute right-0 bottom-0 bg-[#e8d9c1]"></div>
                </div>
            </div>
            <div className="h-full w-full md:w-1/3 flex flex-col items-center justify-start px-10 py-5 md:px-5 md:py-5 lg:px-10 lg:py-5 gap-5 relative bg-red-300">
                <div className="w-full relative z-10">
                    <h1 className="w-full text-center text-base mb-5">Tools experience with:</h1>
                    <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 gap-3">
                        <a href="https://www.figma.com/" target="_blank" className="h-[80px] rounded-xl flex items-center justify-center bg-white shadow-md duration-300 ease-in-out transition-all cursor-pointer hover:scale-110">
                            <img className="w-16 h-16" src="./tools/figma.png" alt="figma" />
                        </a>
                        <a href="https://www.canva.com/" target="_blank" className="h-[80px] rounded-xl flex items-center justify-center bg-white shadow-md duration-300 ease-in-out transition-all cursor-pointer hover:scale-110">
                            <img className="w-16 h-16" src="./tools/canva.png" alt="canva" />
                        </a>
                        <a href="https://miro.com/" target="_blank" className="h-[80px] rounded-xl flex items-center justify-center bg-white shadow-md duration-300 ease-in-out transition-all cursor-pointer hover:scale-110">
                            <img className="w-20 h-20" src="./tools/miro.png" alt="miro" />
                        </a>
                        <a href="https://www.capcut.com/" target="_blank" className="h-[80px] rounded-xl flex items-center justify-center bg-white shadow-md duration-300 ease-in-out transition-all cursor-pointer hover:scale-110">
                            <img className="w-10 h-10" src="./tools/capcut.png" alt="capcut" />
                        </a>
                        <a href="https://www.vlognow.me/" target="_blank" className="h-[80px] rounded-xl flex items-center justify-center bg-white shadow-md duration-300 ease-in-out transition-all cursor-pointer hover:scale-110">
                            <img className="w-16 h-16" src="./tools/vn.png" alt="vn" />
                        </a>
                    </div>
                </div>
                <img className="absolute right-0 top-0 h-full blur-[3px]" src="decoration.png" alt="decoration" />
            </div>
        </div>
      </section>
      <section className="w-full h-fit flex-col bg-[#F6F5F2] flex items-center justify-center gap-1 pb-5">
        <img className="h-16 w-9" src="./icon.png" alt="" />
        <h1 className="text-base font-light italic text-[#987070]">@ 2024 by Bella</h1>
      </section>
    </>
  );
}
