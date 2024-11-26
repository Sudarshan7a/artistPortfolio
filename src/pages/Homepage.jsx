import AboutMe from "./components/Home/AboutMe";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import HeroSection from "./components/Home/HeroSection";
import Ronal1710ShowCase from "./components/Home/Ronal1710ShowCase";
import PageNav from "./components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <HeroSection />
      <FeaturedProducts />
      <AboutMe />
      <Ronal1710ShowCase />
    </>
  );
}

export default Homepage;
