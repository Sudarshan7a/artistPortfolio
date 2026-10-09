import PropTypes from "prop-types";
import Button from "../Button";
import SidebarButtons from "../../SidebarButtons";
import { useEffect, useRef, useState } from "react";

CommissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  commissionType: PropTypes.arrayOf(PropTypes.string).isRequired,
  pricingBreakdown: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSideButtonClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  indexLength: PropTypes.number.isRequired,
};

function CommissionCard({
  title,
  total,
  commissionType,
  pricingBreakdown,
  images,
  handleSideButtonClick,
  currentIndex,
  type,
  indexLength,
}) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  function handleThumbnailClick(index) {
    setMainImageIndex(index);
  }
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    if (!isModalOpen) return;
    closeButtonRef.current?.focus();
    const opener = openButtonRef.current;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      opener?.focus();
    };
  }, [isModalOpen]);

  return (
    <div className={`mb-20  ${isModalOpen ? "overflow-hidden h-dvh" : ""}`}>
      <div className="w-[90%] sm:w-[85%] max-w-5xl max-h-dvh mx-auto p-4 sm:p-6 md:p-[3%] bg-white shadow-lg rounded-[var(--radius-xl)] overflow-hidden flex flex-col lg:flex-row">
        {/* Images */}
        <div className="w-full lg:w-1/2 xl:w-5/12 mt-6 md:mt-0 flex flex-col items-center">
          {images.length === 1 && (
            // Single Image Layout
            <img
              src={images[mainImageIndex]}
              alt={`${title} Preview`}
              className="w-full aspect-square rounded-lg object-cover"
            />
          )}
          {images.length === 2 && (
            // Two Image Layout
            <div className="flex justify-center gap-4 p-4 w-full">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${title} Preview ${index + 1}`}
                  className="w-1/2 aspect-square rounded-lg object-cover"
                />
              ))}
            </div>
          )}
          {images.length > 2 && (
            // Multi-Image Layout (Main Image + Thumbnails)
            <div className="flex  flex-col items-center gap-2 w-full">
              <img
                src={images[mainImageIndex]}
                alt={`${title} Main Preview`}
                className="w-full aspect-square rounded-lg object-cover"
              />
              <div className="flex gap-2 overflow-x-auto w-full">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => handleThumbnailClick(index)}
                    aria-pressed={mainImageIndex === index}
                    aria-label={`Show preview ${index + 1} of ${images.length}`}
                    className={`w-24 h-24 sm:w-32 sm:h-24 rounded-md border-4 flex-shrink-0 overflow-hidden ${
                      mainImageIndex === index
                        ? "border-primary-border"
                        : "border-border"
                    } cursor-pointer`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="imgs w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div>
            {/* View Larger Button */}
            <div className="mt-6 flex justify-center">
              <Button ref={openButtonRef} onClick={toggleModal} variant={1}>
                View Larger
              </Button>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="pl-0 lg:pl-6 py-4 w-full lg:w-1/2 xl:w-7/12 mt-6 lg:mt-0 max-w-2xl">
          <h2 className="text-h2 font-bold text-textPrimary mb-4">{title}</h2>
          <p className="text-h3 text-textPrimary font-semibold mb-2">
            Total: ${total}
          </p>
          <div className="ml-4 text-base md:text-lg overflow-auto max-h-[400px]">
            {/* Commission Type */}
            <h3 className="text-lg font-semibold text-textPrimary mb-2">
              Commission Type:
            </h3>
            <ul className="list-disc list-inside text-textPrimary mb-4">
              {commissionType.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>

            {/* Pricing Breakdown */}
            {pricingBreakdown !== undefined && (
              <>
                <h3 className="text-lg font-semibold text-textPrimary mb-2">
                  Pricing Breakdown:
                </h3>
                <ul className="list-disc list-inside text-textPrimary">
                  {pricingBreakdown?.map((breakdown) => (
                    <li key={breakdown}>{breakdown}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12  flex gap-5 m-auto w-auto justify-center">
        <FullSidebarButtons
          handleSideButtonClick={handleSideButtonClick}
          type={type}
          currentIndex={currentIndex}
          indexLength={indexLength}
        />
      </div>
      {/*View larger Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-modal flex items-center justify-center overlay bg-opacity-10"
          onClick={toggleModal}
        >
          <button
            ref={closeButtonRef}
            onClick={toggleModal}
            aria-label="Close enlarged view"
            className="absolute top-3 md:top-7 right-4 md:right-8 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors"
          >
            <svg height="32" width="32" viewBox="0 0 32 32" aria-hidden="true">
              <image width="32" height="32" href="Icons/closeIcon.svg" />
            </svg>
          </button>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} enlarged view`}
            className={`relative bg-primaryColor mx-6 p-4 rounded-lg object-fit overflow-x-scroll no-scrollbar`}
            onClick={(e) => e.stopPropagation()} // Prevent click bubbling
          >
            <img
              src={images[mainImageIndex]}
              alt="Enlarged View"
              className=" rounded-lg max-h-[80dvh] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default CommissionCard;

FullSidebarButtons.propTypes = {
  handleSideButtonClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  indexLength: PropTypes.number.isRequired,
};
function FullSidebarButtons({
  type,
  handleSideButtonClick,
  currentIndex,
  indexLength,
}) {
  return (
    <div className="flex items-center gap-2 md:gap-8">
      <SidebarButtons
        onClick={() => handleSideButtonClick(type, "left")}
        scale={150}
        rotation={180}
        available={currentIndex > 0} // Disable if at the start
      />
      <div className="w-32 h-16 bg-border flex gap-2 justify-center items-center rounded-full">
        {Array.from({ length: indexLength }).map((_, index) => (
          <div
            key={index}
            aria-hidden="true"
            className={`h-2 w-2 ${
              index === currentIndex ? "w-5" : ""
            } bg-textMuted rounded-full`}
          />
        ))}
      </div>
      <SidebarButtons
        onClick={() => handleSideButtonClick(type, "right")}
        scale={150}
        rotation={0}
        available={currentIndex < indexLength - 1} // Disable if at the end
      />
    </div>
  );
}
