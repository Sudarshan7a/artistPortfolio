import FeaturedProducts from "./components/Home/FeaturedProducts";
import HeroSection from "./components/Home/HeroSection";
import PageNav from "./components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
      <HeroSection />
      <FeaturedProducts />
    </>
  );
}

export default Homepage;
