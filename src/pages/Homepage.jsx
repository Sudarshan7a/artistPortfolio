import AboutMe from "./components/Home/AboutMe";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import HeroSection from "./components/Home/HeroSection";
import Ronal1710ShowCase from "./components/Home/Ronal1710ShowCase";
import ImagesShowcase from "./components/Home/ImagesShowcase";
import Footer from "./components/Footer";
import PageNav from "./components/PageNav";

/**
 * Homepage component that renders the main sections of the website.
 */
function Homepage() {
  return (
    <>
      <PageNav />
      <HeroSection />
      <FeaturedProducts />
      <AboutMe />
      <Ronal1710ShowCase />
      <ImagesShowcase />
      <Footer />
    </>
  );
}

export default Homepage;
