import PropTypes from "prop-types";
import Button from "../Button";
import SidebarButtons from "../../SidebarButtons";
import { useState } from "react";

CommissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  commissionType: PropTypes.arrayOf(PropTypes.string).isRequired,
  pricingBreakdown: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handelSideButtonClick: PropTypes.func.isRequired,
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
  handelSideButtonClick,
  currentIndex,
  type,
  indexLength,
}) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleThumbnailClick(index) {
    setMainImageIndex(index);
  }
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={`mb-20  ${isModalOpen ? "overflow-hidden h-screen" : ""}`}>
      <div className="w-[80%] mx-auto p-[3%] bg-white shadow-lg rounded-[40px] overflow-hidden flex">
        {/* Images */}
        <div className="w-9/12">
          {images.length === 1 && (
            // Single Image Layout
            <img
              src={images[mainImageIndex]}
              alt={`${title} Preview`}
              className="w-full rounded-lg object-cover"
            />
          )}
          {images.length === 2 && (
            // Two Image Layout
            <div className="flex justify-center gap-4 p-4">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${title} Preview ${index + 1}`}
                  className="w-1/2 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
          {images.length > 2 && (
            // Multi-Image Layout (Main Image + Thumbnails)
            <div className="flex flex-col items-center gap-2">
              <img
                src={images[mainImageIndex]}
                alt={`${title} Main Preview`}
                className="w-full rounded-lg object-cover"
              />
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`w-32 h-20 rounded-md object-cover border-4  ${
                      mainImageIndex === index
                        ? "border-accentColorRed"
                        : "border-gray-200"
                    } cursor-pointer`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          )}
          <div>
            {/* View Larger Button */}
            <div className="mt-6 flex justify-center">
              <Button onClick={toggleModal} variant={1}>
                View Larger
              </Button>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="pl-6 py-4">
          <h2 className="text-h2 font-bold text-textPrimary mb-4">{title}</h2>
          <p className="text-h3 text-textPrimary font-semibold mb-2">
            Total: ${total}
          </p>
          <div className="ml-4">
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
          handelSideButtonClick={handelSideButtonClick}
          type={type}
          currentIndex={currentIndex}
          indexLength={indexLength}
        />
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-textSecondary bg-opacity-50"
          onClick={toggleModal}
        >
          <button
            onClick={toggleModal}
            className="absolute top-7 right-8 text-gray-500 hover:text-gray-700"
          >
            <svg className="" height="32" width="32" xmlns="">
              <image width="32" height="32" href="Icons/closeIcon.svg" />
            </svg>
          </button>
          <div
            className={`relative bg-primaryColor p-4 rounded-lg max-w-[90%] h-[90%] object-fit overflow-x-scroll no-scrollbar`}
            onClick={(e) => e.stopPropagation()} // Prevent click bubbling
          >
            <img
              src={images[mainImageIndex]}
              alt="Enlarged View"
              className=" rounded-lg h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default CommissionCard;

FullSidebarButtons.propTypes = {
  handelSideButtonClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  indexLength: PropTypes.number.isRequired,
};
function FullSidebarButtons({
  type,
  handelSideButtonClick,
  currentIndex,
  indexLength,
}) {
  return (
    <div className="flex items-center gap-8">
      <SidebarButtons
        onClick={() => handelSideButtonClick(type, "left")}
        scale={150}
        rotation={180}
        aviable={currentIndex > 0} // Disable if at the start
      />
      <div className="w-32 h-16 bg-slate-300 flex gap-2 justify-center items-center rounded-full">
        {Array.from({ length: indexLength }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 ${
              index === currentIndex ? "w-5" : ""
            } bg-slate-600 rounded-full`}
          />
        ))}
      </div>
      <SidebarButtons
        onClick={() => handelSideButtonClick(type, "right")}
        scale={150}
        rotation={0}
        aviable={currentIndex < indexLength - 1} // Disable if at the end
      />
    </div>
  );
}
