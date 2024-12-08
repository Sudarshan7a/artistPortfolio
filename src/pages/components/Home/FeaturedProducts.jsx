import { useRef, useState, useEffect } from "react";
import { homeFeatured } from "../../../mainList";
import PropTypes from "prop-types";
import SidebarButtons from "../../SidebarButtons";
import styles from "./Ronal1710ShowCase.module.css";
import { useNavigate } from "react-router-dom";
/**
 * Renders the FeaturedProducts component,
 * displaying a list of featured products and navigation buttons.
 *
 * @returns {JSX.Element} The JSX representation of the featured products section.
 */
function FeaturedProducts() {
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const navigate = useNavigate();

  /**
   * Navigates to the custom artwork section.
   */
  const goToCustomArtWorkSection = () => {
    navigate("/commission#CommissionFeatured"); // Navigate to the specific section
  };

  // Check if the container has horizontal overflow
  const checkScrollability = () => {
    const container = containerRef.current;
    if (container) {
      // Left button enabled only if scrollLeft > 0 (i.e., if not at the far left)
      setShowLeftButton(container.scrollLeft > 0);

      // Right button enabled only if scrollLeft < (scrollWidth - clientWidth)
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Scroll handler
  const scrollContainer = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 400 + 2 * 16; // Scroll by 8rem + 400px
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Recheck scrollability immediately after the scroll
      checkScrollability();
    }
  };

  // Recheck scrollability on resize
  useEffect(() => {
    const container = containerRef.current;

    /**
     * Handles the scroll event and rechecks scrollability.
     */
    const handleScroll = () => {
      checkScrollability(); // Recheck scrollability after each scroll event
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Initial scrollability check
    checkScrollability();

    // Cleanup on unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="ml-6 sm:ml-12 md:ml-24 mt-24 pl-4 sm:pl-1 md:pl-2 lg:pl-8 pt-8">
        <h2 className="text-h2">Popular Featured</h2>
      </div>
      <div
        ref={containerRef}
        className={`${styles.hideScroll} flex gap-10 px-8 sm:px-16 lg:px-32 pt-12 w-full overflow-x-auto`}
        style={{ scrollBehavior: "smooth" }}
        onClick={() => goToCustomArtWorkSection()}
      >
        {homeFeatured.map((product) => (
          <Cards {...product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-end gap-10 mt-6 md:mt-12 mr-10 md:mr-20 h-20">
        <SidebarButtons
          scale={150}
          rotation={180}
          aviable={showLeftButton} // Left button visibility based on scroll position
          onClick={() => scrollContainer("left")} // Move left when clicked
          arialabel="Go Left"
        />
        <SidebarButtons
          scale={150}
          rotation={0}
          aviable={showRightButton} // Right button visibility based on scroll position
          onClick={() => scrollContainer("right")} // Move right when clicked
          arialabel="Go right"
        />
      </div>
    </>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  imageLocation: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
};

export default FeaturedProducts;

/**
 * Renders a card component with a title, description, and background image.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the card.
 * @param {string} props.shortDescription - A short description for the card.
 * @param {string} props.imageLocation - The URL of the image to be used as the background.
 * @param {string} props.layout - The layout style for the background image.
 * @returns {JSX.Element} A JSX element representing the card.
 */
function Cards({ title, shortDescription, imageLocation, layout }) {
  return (
    <div>
      {/* //productImage  */}
      <div
        className={`${styles.productImage} bg-slate-700`}
        style={{
          flexShrink: 0,
          borderRadius: "40px",
          background: `url(${imageLocation}) lightgray ${layout} 100% no-repeat`,
        }}
      />
      {/* //productImage's description  */}
      <div className="ml-2 mt-4">
        <h3>{title}</h3>
        <p className="text-lg text-textSecondary font-subtitle">
          {shortDescription}
        </p>
      </div>
    </div>
  );
}
