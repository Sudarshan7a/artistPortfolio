import PropTypes from "prop-types";
import { commissionFeatured, keyHighlights } from "../../../commissionList";

/**
 * CommissionFeatured component renders the featured commissions section.
 */
function CommissionFeatured() {
  return (
    <div
      className="bg-white px-4 sm:px-6 lg:px-10 py-10"
      id="CommissionFeatured"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mx-auto mb-10 max-w-3xl text-center text-textPrimary font-title text-2xl sm:text-4xl md:text-h2 font-semibold tracking-wide leading-tight">
        Character and Background Combined.
        </h2>
        <div className="my-8 mb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
          {commissionFeatured.map((item) => (
            <Card {...item} key={item.title} />
          ))}
        </div>
      </div>
      <div
        className="mx-auto mt-20 w-full max-w-7xl bg-primaryColor p-6 sm:p-8 lg:p-10 text-textPrimary text-h3 font-title"
        style={{
          borderRadius: "40px",
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.20)",
        }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-h3">Key Highlights:</h3>
        <ul className="mt-8 mx-0 sm:mx-4 text-textPrimary font-subtitle">
          {keyHighlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-base sm:text-lg my-2 break-words">
              <img
                src="Icons/tickMarkIcon.svg" // Cycle through icons
                alt={`icon-${index}`}
                className="w-6 h-6 mt-1 mr-3 shrink-0"
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
    <article className="rounded-[30px] border border-[#d9e2f3] bg-[#f9fbff] p-4 shadow-[0_12px_24px_rgba(13,20,36,0.08)] h-full flex flex-col">
      {/* Product Image */}
      <div
        className="w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden"
        style={{
          flexShrink: 0,
          borderRadius: "40px",
          border: "1px solid rgba(51, 51, 51, 0.20)",
          backgroundImage: `url(${imageLocation})`,
          backgroundColor: "lightgray",
          backgroundPosition: layout,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Product Description */}
      <div className="mt-4 px-1 flex-1 flex flex-col">
        <h3 className="text-xl leading-tight font-bold">{title}</h3>
        <p className="text-lg text-textSecondary font-subtitle mt-1">
          ${price}
        </p>

        {/* Addons List */}
        <ul className="mt-4 space-y-2">
          {addons.map((addon, index) => (
            <li
              key={index}
              className="flex max-w-full items-start text-sm text-gray-600"
            >
              {/* Icon before text */}
              <img
                src={icons[index % icons.length]} // Cycle through icons
                alt={`icon-${index}`}
                className="w-5 h-5 mr-2 mt-0.5"
              />
              {addon}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
