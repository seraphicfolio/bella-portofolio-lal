"use client"
import { Carousel } from "flowbite-react";

export default function Portofolio() {
  return (
    <>
      <section className="w-full h-fit grid grid-cols-1 md:grid-cols-2" id="portofolio">
        <div className="h-[500px] md:h-[300px] lg:h-[500px] py-10 bg-black relative group md:py-0">
          <div className="absolute z-20 top-0 right-0 h-full w-full backdrop-blur-md flex items-center justify-center duration-300 ease-in-out transition-all group-hover:-right-full">
              <h1 className="text-[70px] font-bold text-stroke-white md:text-[90px] lg:text-[200px]">MOBILE</h1>
          </div>
          <Carousel leftControl=" " rightControl=" " indicators={false} className="w-full h-full">
            <a href="https://www.figma.com/proto/05eSxzkrgv4dGO4u9e3WzW/Final-Project---Kelompok-5---NoWaste?node-id=1140-1701&t=FvnKaWUiYdWBGlN4-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A2&starting-point-node-id=1140%3A1699" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-full object-contain cursor-pointer" src="./projects/NoWaste/part1.png" alt="NoWaste" />
            </a>

            <a href="https://www.figma.com/proto/05eSxzkrgv4dGO4u9e3WzW/Final-Project---Kelompok-5---NoWaste?node-id=1140-1701&t=FvnKaWUiYdWBGlN4-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A2&starting-point-node-id=1140%3A1699" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-full object-contain cursor-pointer" src="./projects/NoWaste/part2.png" alt="NoWaste" />
            </a>

            <a href="https://www.figma.com/proto/05eSxzkrgv4dGO4u9e3WzW/Final-Project---Kelompok-5---NoWaste?node-id=1140-1701&t=FvnKaWUiYdWBGlN4-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A2&starting-point-node-id=1140%3A1699" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-full object-contain cursor-pointer" src="./projects/NoWaste/part3.png" alt="NoWaste" />
            </a>

            <a href="https://www.figma.com/proto/05eSxzkrgv4dGO4u9e3WzW/Final-Project---Kelompok-5---NoWaste?node-id=1140-1701&t=FvnKaWUiYdWBGlN4-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A2&starting-point-node-id=1140%3A1699" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-full object-contain cursor-pointer" src="./projects/NoWaste/part4.png" alt="NoWaste" />
            </a>
          </Carousel>
        </div>
        <div className="h-[250px] bg-[#CDCCCC] p-10 md:h-[300px] lg:h-[500px]">
          <a href="https://www.figma.com/design/bpssNtkeRksAcaYolV0zlQ/Tugas-(MSIB)-Visual-Design-Nur-Shafa-Salsabila?node-id=0-1&t=qtYuQMWsiV01lbuI-0" target="_blank" className="w-full h-full flex items-center justify-center">
            <img className="w-full h-full" src="./projects/maxim/part1.png" alt="maxim" />
          </a>
        </div>     
        <div className="h-[250px] bg-[#DBDADA] p-10 md:h-[300px] lg:h-[500px]">
          <a href="https://www.figma.com/design/ilDGkOPid4Fapebf3sUnGH/Nur-Shafa-Salsabila-Tugas-Materi-27-Kelompok-4?node-id=57-1897&t=2AZXuKBOd2pC5sS3-0" target="_blank" className="w-full h-full flex items-center justify-center">
            <img className="w-full h-full" src="./projects/toko_alat_music/part1.png" alt="toko_alat_music" />
          </a>
        </div>     
        <div className="h-[300px] relative group md:h-[300px] lg:h-[500px]">
          <div className="absolute z-20 top-0 left-0 h-full w-full backdrop-blur-md flex items-center justify-center duration-300 ease-in-out transition-all group-hover:-left-full">
              <h1 className="text-[70px] font-bold text-stroke-black md:text-[80px] lg:text-[150px]">WEBSITE</h1>
          </div>
          <div className="h-full py-10 bg-white md:py-0">
            <Carousel leftControl=" " rightControl=" " indicators={false} className="w-full h-full">
              <a href="https://www.figma.com/proto/iD6zHw8Qb2HHHCYwn0yqP0/IT-Bootcamp-Software-Development?node-id=627-10475&t=wwNXdTb1XwGWcKbZ-0&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43989&starting-point-node-id=627%3A10475" target="_blank" className="w-full h-full flex items-center justify-center">
                <img className="w-full h-full object-contain" src="./projects/fiore/part1.png" alt="fiore" />
              </a>

              <a href="https://www.figma.com/proto/iD6zHw8Qb2HHHCYwn0yqP0/IT-Bootcamp-Software-Development?node-id=627-10475&t=wwNXdTb1XwGWcKbZ-0&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43989&starting-point-node-id=627%3A10475" target="_blank" className="w-full h-full flex items-center justify-center">
                <img className="w-full h-full object-contain" src="./projects/fiore/part2.png" alt="fiore" />
              </a>

              <a href="https://www.figma.com/proto/iD6zHw8Qb2HHHCYwn0yqP0/IT-Bootcamp-Software-Development?node-id=627-10475&t=wwNXdTb1XwGWcKbZ-0&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43989&starting-point-node-id=627%3A10475" target="_blank" className="w-full h-full flex items-center justify-center">
                <img className="w-full h-full object-contain" src="./projects/fiore/part3.png" alt="fiore" />
              </a>

              <a href="https://www.figma.com/proto/iD6zHw8Qb2HHHCYwn0yqP0/IT-Bootcamp-Software-Development?node-id=627-10475&t=wwNXdTb1XwGWcKbZ-0&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43989&starting-point-node-id=627%3A10475" target="_blank" className="w-full h-full flex items-center justify-center">
                <img className="w-full h-full object-contain" src="./projects/fiore/part4.png" alt="fiore" />
              </a>
            </Carousel>
          </div>
        </div>
        <div className="h-[300px] bg-white group relative md:h-[300px] lg:h-[500px]">
          <div className="absolute z-20 top-0 right-0 h-full w-full backdrop-blur-md flex items-center justify-center duration-300 ease-in-out transition-all group-hover:-right-full">
              <h1 className="text-[100px] font-bold text-stroke-black md:text-[100px] lg:text-[200px]">UI/UX</h1>
          </div>
          <Carousel leftControl=" " rightControl=" " indicators={false} className="w-full h-full">
            <a href="https://www.figma.com/proto/vSPImkAWLXDxsjQZTYgb9L/Tugas-IMK?node-id=451-12495&t=SRtaNJ4QpKvS7PIF-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43993&starting-point-node-id=451%3A12495" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-[200px] md:h-[450px]" src="./projects/pawon_sunda/part1.png" alt="pawon_sunda" />
            </a>

            <a href="https://www.figma.com/proto/vSPImkAWLXDxsjQZTYgb9L/Tugas-IMK?node-id=451-12495&t=SRtaNJ4QpKvS7PIF-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43993&starting-point-node-id=451%3A12495" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-[200px] md:h-[450px]" src="./projects/pawon_sunda/part2.png" alt="pawon_sunda" />
            </a>

            <a href="https://www.figma.com/proto/vSPImkAWLXDxsjQZTYgb9L/Tugas-IMK?node-id=451-12495&t=SRtaNJ4QpKvS7PIF-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43993&starting-point-node-id=451%3A12495" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-[200px] md:h-[450px]" src="./projects/pawon_sunda/part3.png" alt="pawon_sunda" />
            </a>

            <a href="https://www.figma.com/proto/vSPImkAWLXDxsjQZTYgb9L/Tugas-IMK?node-id=451-12495&t=SRtaNJ4QpKvS7PIF-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A43993&starting-point-node-id=451%3A12495" target="_blank" className="w-full h-full flex items-center justify-center">
              <img className="w-full h-full object-contain" src="./projects/pawon_sunda/part4.png" alt="NoWaste" />
            </a>
          </Carousel>
        </div>
        <div className="h-[500px] md:h-full bg-[#FC5C9C] p-10 relative overflow-hidden group">
          <div className="w-full h-full bg-black absolute top-0 left-0 z-20 bg-opacity-10"></div>
          <img className="w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-10 duration-300 ease-in-out transition-all group-hover:scale-50 group-hover:z-10" src="./statue1.png" alt="statue1" />
          <img className="w-full h-full object-contain scale-x-[-1] top-[40%] left-[35%] rotate-12 -translate-y-1/2 -translate-x-1/2 absolute duration-300 ease-in-out transition-all group-hover:scale-125 group-hover:z-10" src="./statue2.png" alt="statue2" />
          <img className="w-1/2 h-1/2 -rotate-12 object-contain scale-x-[-1] top-[60%] left-[70%] -translate-y-1/2 -translate-x-1/2 absolute duration-300 ease-in-out transition-all group-hover:scale-125 group-hover:z-10 group-hover:left-[60%]" src="./statue3.png" alt="statue3" />
          <img className="w-48 h-4w-48 -rotate-12 object-contain duration-300 ease-in-out transition-all absolute -top-full -right-5 group-hover:-top-5 group-hover:-right-5" src="./cloud.png" alt="cloud" />
          <img className="w-[400px] h-[400px] object-contain z-20 absolute duration-300 ease-in-out transition-all -bottom-full -left-16 group-hover:-bottom-28 group-hover:-left-16" src="./cloud.png" alt="cloud" />
          <img className="w-[400px] h-[400px] object-contain z-20 absolute duration-300 ease-in-out transition-all -bottom-full left-20 group-hover:-bottom-36 group-hover:left-20" src="./cloud.png" alt="cloud" />
        </div>     
      </section>
    </>
  );
}
