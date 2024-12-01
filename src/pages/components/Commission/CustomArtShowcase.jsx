import PropTypes from "prop-types";
import Button from "../Button";
import { commissionSamples } from "../../../commissionList";
import SidebarButtons from "../../SidebarButtons";

function CustomArtShowcase() {
  return (
    <div className="flex flex-col">
      <h1 className="my-10 text-center text-h1 text-textPrimary font-title font-semibold ">
        Custom Artwork Showcase
      </h1>
      <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-h2 tracking-wide">
        Characters
      </h2>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-14">
          <CommissionCard
            title={commissionSamples[0][0]?.title[0]}
            total={commissionSamples[0][0]?.title[1]}
            commissionType={commissionSamples[0][0].title[2]?.points}
            pricingBreakdown={commissionSamples[0][0].title[3]?.points}
            images={commissionSamples[0][0]?.images}
          />
        </div>{" "}
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-h2 tracking-wide">
          Characters + background
        </h2>
        <div className="flex flex-col gap-14">
          <CommissionCard
            title={commissionSamples[1][0]?.title[0]}
            total={commissionSamples[1][0]?.title[1]}
            commissionType={commissionSamples[1][0].title[2]?.points}
            pricingBreakdown={commissionSamples[1][0].title[3]?.points}
            images={commissionSamples[1][0]?.images}
          />
        </div>{" "}
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-h2 tracking-wide">
          Commissions Over $800: Free Alternate Edits!
        </h2>
        <div className="flex flex-col gap-14">
          <CommissionCard
            title={commissionSamples[2][1]?.title[0]}
            total={commissionSamples[2][1]?.title[1]}
            commissionType={commissionSamples[2][1].title[2]?.points}
            pricingBreakdown={commissionSamples[2][1].title[3]?.points}
            images={commissionSamples[2][1]?.images}
          />{" "}
        </div>{" "}
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-h2 tracking-wide">
          Characters + background
        </h2>
        <div className="flex flex-col gap-14">
          <CommissionCard
            title={commissionSamples[3][1]?.title[0]}
            total={commissionSamples[3][1]?.title[1]}
            commissionType={commissionSamples[3][1].title[2]?.points}
            pricingBreakdown={commissionSamples[3][1].title[3]?.points}
            images={commissionSamples[3][1]?.images}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomArtShowcase;

CommissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  commissionType: PropTypes.arrayOf(PropTypes.string).isRequired,
  pricingBreakdown: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function CommissionCard({
  title,
  total,
  commissionType,
  pricingBreakdown,
  images,
}) {
  return (
    <div>
      <div className="w-[80%] mx-auto p-[3%] bg-white shadow-lg rounded-[40px] overflow-hidden flex">
        {/* Images */}
        <div className="w-9/12">
          {images.length === 1 && (
            // Single Image Layout
            <img
              src={images[0]}
              alt={`${title} Preview`}
              className="w-full rounded-lg object-cover"
            />
          )}
          {images.length === 2 && (
            // Two Image Layout
            <div className="flex justify-center gap-4 p-4">
              {images.map((image, index) => (
                <img
                  key={index}
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
                src={images[0]}
                alt={`${title} Main Preview`}
                className="w-full rounded-lg object-cover"
              />
              <div className="flex gap-2 overflow-x-auto">
                {images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-32 h-20 rounded-sm object-cover border border-gray-200"
                  />
                ))}
              </div>
            </div>
          )}
          <div>
            {/* View Larger Button */}
            <div className="mt-6 flex justify-center">
              <Button variant={1}>View Larger</Button>
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
              {commissionType.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>

            {/* Pricing Breakdown */}
            <h3 className="text-lg font-semibold text-textPrimary mb-2">
              Pricing Breakdown:
            </h3>
            <ul className="list-disc list-inside text-textPrimary">
              {pricingBreakdown.map((breakdown, index) => (
                <li key={index}>{breakdown}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20 flex gap-5 m-auto w-auto justify-center">
        <FullSidebarButtons images={images} />
      </div>
    </div>
  );
}
FullSidebarButtons.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
function FullSidebarButtons({ images }) {
  return (
    <div className="flex items-center gap-8">
      <SidebarButtons scale={150} rotation={180} />
      <div className="w-32 h-16 bg-slate-300 display flex gap-2 justify-center items-center rounded-full">
        {images.map((image) => (
          <div
            className={`h-2 w-2 ${
              image === "images/fullCom/fullCom_goddessSquad/variant2.jpg"
                ? "w-5"
                : ""
            } bg-slate-600 rounded-full`}
            key={image}
          ></div>
        ))}
      </div>
      <SidebarButtons scale={150} rotation={0} aviable />
    </div>
  );
}
