import styles from "./Galleary.module.css";

const latestArt = {
  width: "1220px",
  height: "620px",
  borderRadius: "40px",
  background:
    'url("images/fullCom/fullCom_preciousBean.jpg") lightgray 50% / cover no-repeat',
};
/**
 * LatestWork component renders the latest artwork section.
 */
function LatestWork() {
  return (
    <div className="m-[120px]">
      <div className="fadein flex items-start justify-between font-title font-semibold text-textPrimary">
        <h2 className=" text-[36px]  ">Latest Art Work</h2>
        <p className="text-[28px]">
          If you can dream it, <br />
          We can create it.
        </p>
      </div>
      <div className="m-auto relative">
        <div className={`${styles.latesArt} mt-12 m-auto p-4`} />
        <div
          className="justify-center m-auto  absolute top-0 left-0 right-0 bottom-0"
          style={latestArt}
        ></div>
      </div>
    </div>
  );
}

export default LatestWork;
