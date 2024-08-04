import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-14 fixed  top-0 left-0 flex items-center justify-end px-20 z-50">
            <div className="h-full flex items-center gap-5">
              <Link className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center" href="/">About</Link>
              <Link className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center" href="/">Portofolio</Link>
              <Link className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center" href="/">Sertificate</Link>
              <Link className="px-10 text-xl capitalize  font-normal h-full flex items-center justify-center" href="/">Contact Us</Link>
            </div>
        </nav>
    );
  }
  