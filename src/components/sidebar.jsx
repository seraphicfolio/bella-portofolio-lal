import 'remixicon/fonts/remixicon.css'

export default function SideBar() {
    return (
        <div className="h-screen w-12 fixed top-0 right-0 flex flex-col gap-10 items-center justify-center z-50">
            <div className="w-full h-14 flex items-center justify-center">
                <i className="ri-mail-fill text-[30px]"></i>
            </div>
            <a href="https://www.instagram.com/nrshafaa_/" target="_blank" className="w-full h-14 flex items-center justify-center">
                <i className="ri-instagram-fill text-[30px]"></i>
            </a>
            <a href="https://www.linkedin.com/in/nur-shafa-salsabila/" target="_blank" className="w-full h-14 flex items-center justify-center">
                <i className="ri-linkedin-box-fill text-[30px]"></i>
            </a>
            <div className="w-full h-14 flex items-center justify-center">
                <i className="ri-phone-fill text-[30px]"></i>
            </div>
        </div>
    );
  }
  