export default function Motivate() {
  return (
    <>
     <section className="h-[600px] w-full bg-[#f5d2d2] flex items-center justify-center px-5 py-20 md:px-10 lg:px-[300px] md:h-[700px] lg:h-screen lg:py-10">
        <div className="mb-10 md:mb-32 md:mt-20 w-full h-full relative flex flex-col items-center justify-center">
          <div className="w-[70%] h-full absolute top-0 right-0 bg-[#ffebd7] border-[1px] border-slate-300 md:w-1/2 lg:h-[80%] lg:w-[35%]"></div>

          <div className="absolute -top-10 -right-12 md:-top-16 md:-right-20 blur-[2px]">
            <img data-aos-duration="300" data-aos="fade-up-right" className="w-40 h-40 md:w-60 md:h-60" src="./flower.png" alt="flower" />
          </div>

          <div className="w-[70%] h-full absolute top-10 right-10 border-[0.5px] border-slate-300 shadow-md md:w-[49%] md:h-full lg:w-[35%]lg:h-[80%]">
            <img className="w-full h-full object-center object-fill" src="./profiles.jpeg" alt="" />
          </div>

          <div className="w-[60%] h-fit z-10 -ml-36 relative mt-[200px] lg:mt-0">
            <img data-aos-duration="1000" data-aos="fade-up-left" className="absolute -top-44 -left-10 blur-[2px] w-44 h-44 md:w-72 md:h-72 md:-top-32 md:-left-32" src="./paus.png" alt="" />
            <div className="relative z-10">
              <h1 className="text-2xl md:text-5xl font-bold text-black">Independent</h1>
              <h1 className="text-2xl md:text-5xl font-bold strokeAbout">Innovate</h1>
            </div>

            <div className="w-[130%] h-[150px] bg-[#ffebd7] shadow-xl shadow-red-300 flex px-2 items-center justify-center flex-col relative md:mt-10 md:w-full md:h-[200px] lg:h-[350px] md:px-0">
                <h1 className="w-full text-center break-words text-xs md:text-base lg:leading-10 lg:text-xl md:px-20">“We keep <span className="underline decoration-cyan-500">moving forward,</span> opening new doors, and doing new things because we’re curious, and <span className="underline decoration-red-400">curiosity</span> keeps leading us down <span className="underline decoration-lime-400">new paths.</span>”</h1>
                <p className="text-xs italic mt-5 font-light lg:text-base"> - Walt Disney</p>

                <img data-aos-duration="1000" data-aos="fade-up-right" className="absolute h-36 w-40 -left-16 -bottom-16 md:-bottom-28 md:-left-32 md:h-60 md:w-60 lg:h-72 lg:w-72" src="./cloud.png" alt="cloud" />
                <img data-aos-duration="1000" data-aos="fade-up-right" className="absolute h-36 w-40 -bottom-20 -left-3 md:-bottom-36 md:h-60 md:w-60 lg:h-72 lg:w-72" src="./cloud.png" alt="cloud" />

                <div className="w-[70px] h-5 bg-[#ea943e] absolute rotate-45 top-1 -right-5 md:top-8 md:-right-12 border-t-2 border-l-2 border-amber-600 md:w-[100px] lg:w-[200px] md:h-14"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
