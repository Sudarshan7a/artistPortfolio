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
      <div className="my-8 mb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
        {commissionFeatured.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
      <div
        className="mt-20 bg-primaryColor p-[4%] text-textPrimary text-h3 font-title rounded-[var(--radius-xl)] shadow-md"
      >
        <h3>Key Highlights:</h3>
        <ul className="mt-8 mx-2 sm:mx-8 text-textPrimary font-subtitle">
          {keyHighlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-lg my-2">
              <img
                src="Icons/tickMarkIcon.svg" // Cycle through icons
                alt=""
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
    <article className="rounded-[var(--radius-xl)] border border-border bg-surface2 p-4 shadow-card h-full flex flex-col">
      {/* Product Image */}
      <div
        className="w-full h-[320px] md:h-[360px] min-h-[50vh]"
        style={{
          flexShrink: 0,
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border)",
          background: `url(${imageLocation}) lightgray ${layout}  no-repeat`,
        }}
        role="img"
        aria-label={`${title} example artwork`}
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
              className="flex max-w-full items-start text-sm text-textSecondary"
            >
              {/* Icon before text */}
              <img
                src={icons[index % icons.length]} // Cycle through icons
                alt=""
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
