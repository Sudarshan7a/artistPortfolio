import styles from "./Galleary.module.css";
import PropsTypes from "prop-types";
import { gallearyList } from "../../.././mainList";

function Ronal1710Galleary() {
  return (
    <div
      className={`${styles.galleary} flex flex-col gap-[36px] mx-4 mt-10 bg-textPrimary items-center rounded-md pb-8 mb-10`}
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
  loc: PropsTypes.array,
};
function ShowCase({ layout, loc }) {
  console.log(loc);
  console.log(layout);
  switch (layout) {
    case 1:
      // For single image
      return (
        <div className="m-4">
          <img className=" rounded-md" src={loc[0].loc} alt="Galleary Image" />
        </div>
      );
    case 2:
      // For Left main image and right sub image
      return (
        <div className="m-4 flex items-center justify-center gap-8 scale-105 ">
          <img
            className="w-7/12 rounded-md"
            src={loc[0].loc}
            alt="Galleary Image"
          />
          <img
            className="w-1/3 rounded-md"
            src={loc[1].loc}
            alt="Galleary Image "
          />
        </div>
      );
    case 3:
      // For Left main image and right two sub image
      return (
        <div className="mx-4 mb-4 flex items-center justify-center gap-8 ">
          <img
            className="w-8/12 rounded-md scale-105"
            src={loc[0].loc}
            alt="Galleary Image"
          />
          <div className="w-1/4 scale-90 flex flex-col gap-4">
            <img
              className=" rounded-md scale-90"
              src={loc[1].loc}
              alt="Galleary Image "
            />
            <img
              className=" rounded-md scale-90"
              src={loc[2].loc}
              alt="Galleary Image "
            />
          </div>
        </div>
      );
    case 4:
      // For three images
      return (
        <div className="m-4 flex gap-32 justify-center ">
          <img
            className="rounded-md scale-125 w-3/12"
            src={loc[0].loc}
            alt="Galleary Image "
          />
          <img
            className="rounded-md scale-125 w-3/12"
            src={loc[1].loc}
            alt="Galleary Image "
          />
          <img
            className="rounded-md scale-125 w-3/12"
            src={loc[2].loc}
            alt="Galleary Image "
          />
        </div>
      );
    case 5:
      // For two images
      return (
        <div className="m-4 mx-8 flex items-center gap-4 justify-between">
          <div className="w-1/2 pr-4">
            <img
              className="rounded-md w-max-fit"
              src={loc[0].loc}
              alt="Galleary Image "
            />
          </div>
          <div className="w-1/2 pl-4">
            <img
              className="rounded-md w-max-fit"
              src={loc[1].loc}
              alt="Galleary Image "
            />
          </div>
        </div>
      );
    default:
      break;
  }
  return <div></div>;
}
