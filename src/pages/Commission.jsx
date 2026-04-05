import PageNav from "./components/PageNav";
import CommissionHero from "./components/Commission/CommissionHero";
import CustomArtWorkOptions from "./components/Commission/CustomArtWorkOptions";
import CommissionFeatured from "./components/Commission/CommissionFeatured";
import CustomArtShowcase from "./components/Commission/CustomArtShowcase";
import Footer from "./components/Footer";

/**
 * Commission component renders the commission page with navigation and hero section.
 */
function Commission() {
  return (
    <div>
      <PageNav />
      <CommissionHero />
      <CustomArtWorkOptions />
      <CommissionFeatured />
      <CustomArtShowcase />
      <Footer />
    </div>
  );
}

export default Commission;
