"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <>
     <section id="about" className="w-full h-fit bg-[#987070] flex items-center justify-center px-5 py-10 md:px-10 md:py-12 lg:px-[300px] lg:py-[100px]">
        <div data-aos-duration="400" data-aos="fade-down" className='w-5 h-10 bg-[#ffebd7]'></div>
        <h1 data-aos-duration="400" data-aos="fade-up" className="text-center text-sm md:text-lg text-[#ffebd7]">"I'm a sixth-semester Information Technology student at Universitas Bina Sarana Informatika with a keen interest in UI/UX Design. I have worked on various projects, from designing user interfaces to conducting user experience research, which has broadened my understanding of effective and engaging design. I am passionate about continuing to learn and grow in this field."</h1>
      </section>
    </>
  );
}
