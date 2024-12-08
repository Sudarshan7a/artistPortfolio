import { useNavigate } from "react-router-dom";
import pro_lg from "../../assets/images/profile/pro_lg.jpg";
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
/**
 * Logo component that displays a profile image and name with scaling options.
 * @param {Object} props - Component properties.
 * @param {number} props.scale - Scale value for the logo.
 */
function Logo({ scale }) {
  const navigate = useNavigate();

  scaleStyle = {
    // "scale-100", " scale-110", " scale-125", " scale-150",
    0: "scale-95",
    1: "scale-100",
    2: "scale-110",
    3: "scale-125",
    4: "scale-150",
  };

  return (
    <div
      // onClick={scrollToTop}
      className={`flex items-center ronal1710logo -order-1 md:-order-1 mr-3 gap-2 ${scaleStyle[scale]}`}
      onClick={(e) => {
        e.preventDefault(); // Prevent immediate navigation
        scrollToTop(); // Scroll to the top
        setTimeout(() => {
          navigate("/"); // Navigate to `/` after scrolling
        }, 800);
      }}
      style={{ cursor: "pointer" }}
    >
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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
}
