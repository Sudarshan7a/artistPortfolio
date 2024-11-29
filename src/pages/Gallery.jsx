import Footer from "./components/Footer";
import PageNav from "./components/PageNav";
import Hero from "./components/Galleary/Hero";
import LatestWork from "./components/Galleary/LatestWork";
import Ronal1710Gallery from "./components/Galleary/Ronal1710Galleary";

function Gallery() {
  return (
    <div>
      <PageNav />
      <Hero />
      <LatestWork />
      <Ronal1710Gallery />
      <Footer />
    </div>
  );
}

export default Gallery;
