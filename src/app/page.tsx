import Navbar from "./Components/Navbar";
import Herosection from "./Components/HeroSection";
import Cards from "./Components/Cards";
import Artical from "./Components/Articals"
import Footer from "./Components/Footer";
export default function Home() {
  return (
   <div className="container mx-auto">
    <Navbar/>
    <Herosection/>
    <Cards/>
    <Artical/>
    <Footer/>
   </div>
  );
}
