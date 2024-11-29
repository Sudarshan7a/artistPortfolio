import pro_lg from "./../../assets/images/profile/pro_lg.jpg";
import PropTypes from "prop-types";

const logoStyle = {
  color: "#333333",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "38.4px",
  letterSpacing: "0.064px",
};
var scaleStyle = " ";
function Logo({ scale }) {
  scaleStyle = {
    // "scale-100", " scale-110", " scale-125", " scale-150",
    0: "scale-95",
    1: "scale-100",
    2: "scale-110",
    3: "scale-125",
    4: "scale-150",
  };

  return (
    <div className={`flex items-center mr-3 gap-2 ${scaleStyle[scale]}`}>
      <img
        src={pro_lg}
        alt="logo"
        className="h-[36px] w-[36px] rounded-full "
      />
      <h1 style={logoStyle}>Ronal1710</h1>
    </div>
  );
}
Logo.propTypes = {
  scale: PropTypes.number,
};

export default Logo;
