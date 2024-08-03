

export default function About() {
  return (
    <>
     <section className="w-full h-screen bg-[#f5d2d2] flex items-center justify-center px-[300px] py-10">
      <div className="mt-20 w-full h-full relative flex flex-col items-center justify-center">
        <div className="w-[35%] h-[80%] absolute top-0 right-0 bg-[#ffebd7] border-[1px] border-slate-300"></div>
        <div className="w-[35%] h-[80%] absolute top-10 right-10 border-[0.5px] border-slate-300 shadow-md blur-[2px]">
          <img className="w-full h-full object-center object-fill" src="https://drive.google.com/thumbnail?id=1n_ErMt_tQz6l19s21gmA9zj82bfkErmg
" alt="" />
        </div>

        <div className="w-[60%] h-fit z-10 -ml-36 relative">
          <img className="absolute -top-32 -left-32 w-72 h-72 blur-[2px]" src="./paus.png" alt="" />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-black">Independent</h1>
            <h1 className="text-5xl font-bold strokeAbout">Innovate</h1>
          </div>

          <div className="w-full h-[350px] bg-[#ffebd7] mt-10 shadow-xl shadow-red-300 flex items-center justify-center flex-col relative">
              <h1 className="w-full text-center break-words px-20 leading-10 text-xl">“We keep <span className="underline decoration-cyan-500">moving forward,</span> opening new doors, and doing new things because we’re curious, and <span className="underline decoration-red-400">curiosity</span> keeps leading us down <span className="underline decoration-lime-400">new paths.</span>”</h1>
              <p className="italic mt-5 font-light"> - Walt Disney</p>

              <img className="absolute h-72 w-7h-72 -bottom-28 -left-32 " src="./cloud.png" alt="cloud" />
              <img className="absolute h-72 w-7h-72 -bottom-36 -left-3" src="./cloud.png" alt="cloud" />

              <div className="w-[200px] h-14 bg-[#ea943e] absolute rotate-45 top-8 -right-12 border-t-2 border-l-2 border-amber-600"></div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
