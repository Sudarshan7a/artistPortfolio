import styles from "./Galleary.module.css";
import PropsTypes from "prop-types";
import { gallearyList } from "../../../mainList";

/**
 * Ronal1710Galleary component to display the gallery.
 *
 * @returns {JSX.Element} The rendered gallery component.
 */
function Ronal1710Galleary() {
  return (
    <div
      className={`${styles.galleary} flex flex-col sm:gap-[36px]  mt-10 bg-textPrimary items-center  pb-8 mb-10`}
    >
      <h1 className="text-center text-[48px] text-primaryColor font-title font-semiBold m-10 ">
        Ronal1710’s Gallery
      </h1>
      {gallearyList.map((item) => (
        <ShowCase key={item[1].name} layout={item[0]} loc={item.slice(1)} />
      ))}
    </div>
  );
}

export default Ronal1710Galleary;

ShowCase.propTypes = {
  layout: PropsTypes.number,
  loc: PropsTypes.arrayOf(PropsTypes.object),
};
/**
 * ShowCase component to display images in different layouts.
 *
 * @param {Object} props - The component props.
 * @param {number} props.layout - The layout type (1 to 5) to determine how images are displayed.
 * @param {Array} props.loc - Array of image objects containing `loc` (image source) and `name` (image alt text).
 *
 * @returns {JSX.Element} The rendered component based on the layout type.
 */
function ShowCase({ layout, loc }) {
  switch (layout) {
    case 1:
      // For single image
      return (
        <div className="m-4">
          <img className=" rounded-md" src={loc[0].loc} alt={loc[0].name} />
        </div>
      );
    case 2:
      // For Left main image and right sub image
      return (
        <div className="m-4 flex flex-col lg:flex-row items-center justify-center gap-8 scale-105 ">
          <img
            className="px-4 w-full lg:w-7/12 rounded-md"
            src={loc[0].loc}
            alt={loc[0].name}
          />
          <img
            className="px-4 w-full lg:w-1/3 rounded-md"
            src={loc[1].loc}
            alt={loc[1].name}
          />
        </div>
      );
    case 3:
      // For Left main image and right two sub image
      return (
        <div className="mx-4  sm:pm-0 w-fit h-fit flex flex-col md:flex-row md:items-center justify-end sm:justify-end gap-4 md:gap-8 ">
          <img
            className="w-11/12 h-fit m-auto md:w-8/12 rounded-md scale-105"
            src={loc[0].loc}
            alt={loc[0].name}
          />
          <div className="w-full sm:w-1/2 flex-grow sm:flex-grow-0 justify-start md:w-1/4 scale-90 flex flex-col sm:flex-row md:flex-col gap-12 sm:gap-4">
            <img
              className="rounded-md sm:scale-90"
              src={loc[1].loc}
              alt={loc[1].name}
            />
            <img
              className="rounded-md sm:scale-90"
              src={loc[2].loc}
              alt={loc[2].name}
            />
          </div>
        </div>
      );
    case 4:
      // For three images
      return (
        <div className="m-4 px-4 flex flex-col sm:flex-row gap-8 sm:gap-8   justify-around ">
          <img
            className="rounded-md lg:scale-125 w-full sm:w-[30%] lg:w-3/12"
            src={loc[0].loc}
            alt={loc[0].name}
          />
          <img
            className="rounded-md lg:scale-125 w-full sm:w-[30%] lg:w-3/12"
            src={loc[1].loc}
            alt={loc[1].name}
          />
          <img
            className="rounded-md lg:scale-125 w-full sm:w-[30%] lg:w-3/12"
            src={loc[2].loc}
            alt={loc[2].name}
          />
        </div>
      );
    case 5:
      // For two images
      return (
        <div className="m-4 mx-8 my-8  flex flex-col md:flex-row items-center gap-8 md:gap-4 justify-between">
          <div className="w-full md:w-1/2 md:pr-4">
            <img
              className="rounded-md w-max-fit"
              src={loc[0].loc}
              alt={loc[0].name}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <img
              className="rounded-md w-max-fit"
              src={loc[1].loc}
              alt={loc[1].name}
            />
          </div>
        </div>
      );
    default:
      break;
  }
}
