import SideBar from "@/components/sideBar";
import Navbar from "@/components/navbar";
import Homepages from "@/components/pages/homepages";
import About from "@/components/pages/about";

export default function Home() {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <Homepages/>
      <About/>
    </>
  );
}
