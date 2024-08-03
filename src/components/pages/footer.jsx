"use client"
export default function Footer() {
  return (
    <>
      <section className="w-full h-[450px] bg-[#F6F5F2] flex items-center justify-center px-[100px]">
        <div className="w-full h-[350px] bg-[#F0EBE3] flex items-center justify-between">
            <div className="h-full w-1/3 flex flex-col items-center justify-center p-5 gap-5">
                <h1 className="w-full text-left text-base">Currently vibing to:</h1>
                <iframe width="90%" height="200" src="https://www.youtube.com/embed/ChukpOHfAI8?si=JTtFvLVqHFIbf8ji" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className="text-center w-[85%] font-light text-base">OneRepublic - Nobody (from Kaiju No. 8) [Official Lyric Video]</p>
            </div>
            <div className="h-full w-1/2 flex flex-col items-center justify-between py-16">
                <div className="w-full h-full my-1 py-5 bg-[#ece3d5] flex items-center justify-between flex-col border-x-4 border-[#e8d9c1] relative">
                    <div className="w-1/3 h-1 absolute top-0 left-0 bg-[#e8d9c1]"></div>

                    <div className="flex items-center justify-center flex-col gap-5">
                        <h1 className="italic text-[25px] font-light">Thanks for stopping by!</h1>
                        <button className="px-10 py-3 border-2 border-black">Get in touch</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p>Web Designer</p>
                        <div className="w-3 h-3 rounded-full bg-slate-200 mx-2"></div>
                        <p>Front-End Designer</p>
                        <div className="w-3 h-3 rounded-full bg-slate-200 mx-2"></div>
                        <p>Visual Designer</p>
                    </div>

                    <div className="w-1/3 h-1 absolute right-0 bottom-0 bg-[#e8d9c1]"></div>
                </div>
            </div>
            <div className="h-full w-1/3 flex flex-col items-center justify-start px-10 py-5 gap-5 relative">
                <div className="w-full relative z-10">
                    <h1 className="w-full text-center text-base mb-5">Tools experience with:</h1>
                    <div className="w-full h-fit grid grid-cols-4 gap-3">
                        <div className="h-[90px] rounded-xl flex items-center justify-center bg-white shadow-md">
                            <img className="w-16 h-16" src="./tools/figma.png" alt="figma" />
                        </div>
                        <div className="h-[90px] rounded-xl flex items-center justify-center bg-white shadow-md">
                            <img className="w-16 h-16" src="./tools/canva.png" alt="canva" />
                        </div>
                        <div className="h-[90px] rounded-xl flex items-center justify-center bg-white shadow-md">
                            <img className="w-20 h-20" src="./tools/miro.png" alt="miro" />
                        </div>
                        <div className="h-[90px] rounded-xl flex items-center justify-center bg-white shadow-md">
                            <img className="w-10 h-10" src="./tools/capcut.png" alt="capcut" />
                        </div>
                        <div className="h-[90px] rounded-xl flex items-center justify-center bg-white shadow-md">
                            <img className="w-16 h-16" src="./tools/vn.png" alt="vn" />
                        </div>
                    </div>
                </div>
                <img className="absolute right-0 top-0 h-full blur-[3px]" src="decoration.png" alt="decoration" />
            </div>
        </div>
      </section>
    </>
  );
}
