import 'remixicon/fonts/remixicon.css'

export default function SideBar() {
    return (
        <div className="h-screen w-12 fixed top-0 right-0 flex flex-col gap-2 items-center justify-center mr-3 z-50">
            <div className="w-full h-14 flex items-center justify-center">
                <i className="ri-mail-fill text-[25px]"></i>
            </div>
            <a href="https://www.instagram.com/nrshafaa_/" target="_blank" className="w-full h-14 flex items-center justify-center">
                <i className="ri-instagram-fill text-[25px]"></i>
            </a>
            <a href="https://www.linkedin.com/in/nur-shafa-salsabila/" target="_blank" className="w-full h-14 flex items-center justify-center">
                <i className="ri-linkedin-box-fill text-[25px]"></i>
            </a>
            <div className="w-full h-14 flex items-center justify-center">
                <i className="ri-whatsapp-fill text-[25px]"></i>
            </div>
        </div>
    );
  }
  