import Footer from "./components/Footer";
import PageNav from "./components/PageNav";
import Hero from "./components/Galleary/Hero";
import LatestWork from "./components/Galleary/LatestWork";

function Gallery() {
  return (
    <div>
      <PageNav />
      <Hero />
      <LatestWork />
      <Footer />
    </div>
  );
}

export default Gallery;
