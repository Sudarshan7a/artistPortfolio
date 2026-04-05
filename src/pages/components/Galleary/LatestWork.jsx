import styles from "./Galleary.module.css";
import { memo } from "react";

const latestArt = {
  borderRadius: "40px",
  height: "100%",
  background:
    'url("images/fullCom/fullCom_goddess_n_angel_9999.jpg") lightgray 50% / cover no-repeat',
};
/**
 * LatestWork component renders the latest artwork section.
 */
function LatestWork() {
  return (
    <div className="m-[30px] md:m-[60px] lg:m-[120px]">
      <div className="fadein flex flex-col sm:flex-row items-start justify-between font-title font-semibold text-textPrimary">
        <h2 className="text-3xl sm:text-4xl md:text-[36px]  ">
          Latest Art Work
        </h2>
        <p className="text-2xl sm:text-3xl md:text-[28px]">
          If you can dream it, <br />
          We can create it.
        </p>
      </div>
      <div className="m-auto my-20 mb-32 md:mb-20 relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]  xl:h-[90vh]">
        <div className={`${styles.latesArt} mt-12 m-auto p-4`} />
        <div
          className="justify-center   absolute top-0 left-0 right-0 bottom-0"
          style={latestArt}
        ></div>
      </div>
    </div>
  );
}

export default memo(LatestWork);
