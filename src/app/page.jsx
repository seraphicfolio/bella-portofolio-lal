import SideBar from "@/components/sideBar";
import Navbar from "@/components/navbar";
import Homepages from "@/components/pages/homepages";
import About from "@/components/pages/about";
import Sertificate from "@/components/pages/sertificate";
import Footer from "@/components/pages/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <Homepages/>
      <About/>
      <Sertificate />
      <Footer/>
    </>
  );
}
