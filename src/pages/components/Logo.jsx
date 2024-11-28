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
  if (scale == null) {
    scale = 100;
    scaleStyle = `scale-${scale}`;
  } else {
    scaleStyle = `scale-${scale}`;
  }

  return (
    <div className={`flex items-center mr-3 gap-2 ${scaleStyle}`}>
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
