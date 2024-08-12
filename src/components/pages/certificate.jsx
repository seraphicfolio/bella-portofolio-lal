"use client"
import { ReactTyped } from "react-typed";

export default function Certificate() {
  return (
    <>
      <section id="certificate" className="w-full h-fit bg-[#F0EBE3] flex items-center justify-center py-10 md:py-20 lg:p-[100px] lg:h-screen">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-base text-center font-light mb-5 md:mb-14 md:text-[25px]">"My certificate as part of my portfolio"</h1>
          <div className="grid grid-cols-2 gap-2 px-5 w-full md:px-20 md:gap-5 md:grid-cols-4">
            <a data-aos-duration="1000" data-aos="fade-up"  href="https://drive.google.com/file/d/1Z3w_HwKb8ari81Tn84k6Dp2dW1rDiD5_/view?usp=drive_open" className="h-60 bg-[#F6F5F2] p-5 group cursor-pointer" target="_blank">
              <img className="w-full h-full object-contain duration-300 ease-in-out transition-all group-hover:scale-110" src="./certificate/image3.png" alt="certificate" />
            </a>
            <a data-aos-duration="1000" data-aos="fade-up"  href="https://drive.google.com/file/d/1x9YLNrEinEBnea5bDq84pBwR3Dw0_kSR/view" className="h-60 bg-[#F6F5F2] p-5 group cursor-pointer" target="_blank">
              <img className="w-full h-full object-contain duration-300 ease-in-out transition-all group-hover:scale-110" src="./certificate/image1.png" alt="certificate" />
            </a>
            <a data-aos-duration="1000" data-aos="fade-up"  href="https://drive.google.com/open?id=1i-jnlFg0Wlo46UqXAdVc8r2r0_yAMBeB&authuser=0" className="h-60 bg-[#F6F5F2] p-5 group cursor-pointer" target="_blank">
              <img className="w-full h-full object-contain duration-300 ease-in-out transition-all group-hover:scale-110" src="./certificate/image2.png" alt="certificate" />
            </a>
            <a data-aos-duration="1000" data-aos="fade-up"  href="https://drive.google.com/open?id=1E9AGpyCFOw1cHKiKZmH6uWSCvXQnHoj1&authuser=0" className="h-60 bg-[#F6F5F2] p-5 group cursor-pointer" target="_blank">
              <img className="w-full h-full object-contain duration-300 ease-in-out transition-all group-hover:scale-110" src="./certificate/image4.png" alt="certificate" />
            </a>
          </div>
          <div className="w-full h-fit flex items-center justify-center">
            <a className="text-center mt-7 md:mt-16 text-base font-light group duration-500 ease-in-out transition-all border-0 hover:bg-[#F0EBE3] hover:text-slate-600 underline hover:py-2 hover:no-underline hover:px-5 hover:border-2 hover:border-[#e6d4b8] hover:shadow-lg" href="https://drive.google.com/drive/folders/1GADCJp03svKoWasrMmBHZHrk2GkDdawi" target="_blank">
              See More
              <i className="ri-arrow-right-line duration-300 ease-in-out transition-all group-hover:ps-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
