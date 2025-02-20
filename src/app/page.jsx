import SideBar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Homepages from "@/components/pages/homepages";
import Motivate from "@/components/pages/motivate";
import Certificate from "@/components/pages/certificate";
import Footer from "@/components/pages/footer";
import About from "@/components/pages/about";
import Portofolio from "@/components/pages/portofolio";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <Navbar/>
        <SideBar/>
        <Homepages/>
        <About/>
        <Motivate/>
        <Portofolio/>
        <Certificate />
        <Footer/>
      </section>
    </>
  );
}
