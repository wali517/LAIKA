import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FilmsCarousel from "./components/FilmsCarousel.jsx";
import StudioTabs from "./components/StudioTabs.jsx";
import SketchSection from "./components/SketchSection.jsx";
import AwardsSection from "./components/AwardsSection.jsx";
import ShopCarousel from "./components/ShopCarousel.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-brand-cream">
      <Navbar />
      <Hero />
      <FilmsCarousel />
      <StudioTabs />
      <SketchSection />
      <AwardsSection />
      <ShopCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
}
