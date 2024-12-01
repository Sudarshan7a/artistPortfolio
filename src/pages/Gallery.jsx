import Footer from "./components/Footer";
import PageNav from "./components/PageNav";
import GalleryHero from "./components/Galleary/GalleryHero";
import LatestWork from "./components/Galleary/LatestWork";
import Ronal1710Gallery from "./components/Galleary/Ronal1710Galleary";

/**
 * Gallery component that renders the gallery page with navigation, hero section, latest work, gallery, and footer.
 */
function Gallery() {
  return (
    <div>
      <PageNav />
      <GalleryHero />
      <LatestWork />
      <Ronal1710Gallery />
      <Footer />
    </div>
  );
}

export default Gallery;
