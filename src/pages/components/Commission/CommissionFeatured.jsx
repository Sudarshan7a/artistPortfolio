import PropTypes from "prop-types";
import { commissionFeatured, keyHighlights } from "../../../commissionList";

/**
 * CommissionFeatured component renders the featured commissions section.
 */
function CommissionFeatured() {
  return (
    <div
      className=" bg-white px-[5%] py-[5%] md:pr-[5%]"
      id="CommissionFeatured"
    >
      <h2 className="mb-[5%] text-textPrimary font-title  text-2xl sm:text-4xl md:text-h2 font-semibold tracking-wide">
        Character and Background Combined.
      </h2>
      <div className="my-8 mb-12 flex justify-center sm:justify-start flex-wrap gap-4 md:gap-8">
        {commissionFeatured.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
      <div
        className="mt-20 bg-primaryColor p-[4%] text-textPrimary text-h3 font-title"
        style={{
          borderRadius: "40px",
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.20)",
        }}
      >
        <h3>Key Highlights:</h3>
        <ul className="mt-8 mx-2 sm:mx-8 text-textPrimary font-subtitle">
          {keyHighlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-lg my-2">
              <img
                src="Icons/tickMarkIcon.svg" // Cycle through icons
                alt={`icon-${index}`}
                className="w-6 h-6 m-2 mx-4"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addons: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.string.isRequired,
};

export default CommissionFeatured;

const drawingIcon = "Icons/drawing.svg";
const landscape = "Icons/landscape.svg";
const start = "Icons/star.svg";
const icons = [drawingIcon, landscape, start];
function Card({ title, price, image: imageLocation, layout, addons }) {
  return (
    <div className="max-w-96">
      {/* Product Image */}
      <div
        className="productImage"
        style={{
          flexShrink: 0,
          borderRadius: "40px",
          border: "1px solid rgba(51, 51, 51, 0.20)",
          background: `url(${imageLocation}) lightgray ${layout}  no-repeat`,
        }}
      ></div>

      {/* Product Description */}
      <div className="ml-2 max-w-64 mt-4">
        <h3 className="text-xl w-fit font-bold">{title}</h3>
        <p className="text-lg w-fit text-textSecondary font-subtitle">
          {price}
        </p>

        {/* Addons List */}
        <ul className="mt-4 lg:w-11/12">
          {addons.map((addon, index) => (
            <li
              key={index}
              className="flex max-w-full items-center text-sm text-gray-600 mb-1"
            >
              {/* Icon before text */}
              <img
                src={icons[index % icons.length]} // Cycle through icons
                alt={`icon-${index}`}
                className="w-6 h-6 mr-2"
              />
              {addon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
