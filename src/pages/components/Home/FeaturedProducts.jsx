import { homeFeatured } from "../../../mainList";
import PropTypes from "prop-types";
import SidebarButtons from "../../SidebarButtons";

function FeaturedProducts() {
  return (
    <div className="ml-24 mt-24 pl-8 pt-8">
      <h2 className="text-h2 ">Popular Featured</h2>
      <div className="flex gap-10 pl-12 pt-12 w-full overflow-x-hidden">
        {homeFeatured.map((product) => (
          <Cards {...product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-end gap-10 mt-12 mr-20 h-20">
        <SidebarButtons scale={150} rotation={180} aviable={false} />
        <SidebarButtons scale={150} rotation={0} aviable={true} />
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  imageLocation: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
};

export default FeaturedProducts;
function Cards({ title, shortDescription, imageLocation, layout }) {
  return (
    <div>
      {/* //productImage  */}
      <div
        className="productImage bg-slate-700"
        style={{
          width: "400px",
          height: "660px",
          flexShrink: 0,
          borderRadius: "40px",
          background: `url(${imageLocation}) lightgray ${layout} 100% no-repeat`,
        }}
      ></div>
      {/* //productImage's description  */}
      <div className="ml-2 mt-4">
        <h3 className="">{title}</h3>
        <p className=" text-lg text-textSecondary font-subtitle">
          {shortDescription}
        </p>
      </div>
    </div>
  );
}
