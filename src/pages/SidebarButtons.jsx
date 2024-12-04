import PropTypes from "prop-types";

/**
 * SidebarButtons component renders a button with an SVG icon.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.rotation - The rotation degree for the SVG icon.
 * @param {number} props.scale - The scale factor for the SVG icon.
 * @param {boolean} props.aviable - The availability status of the button.
 */ function SidebarButtons({ rotation, scale, aviable, onClick }) {
  const styleClass = `scale-${scale} rotate-${rotation}`;
  const isDisabled = !aviable; // Button is disabled if not available
  const activeClass = aviable
    ? "opacity-100 cursor-pointer"
    : "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`bg-[#D9D9D9] shadow-sm rounded-full h-12 w-12 flex justify-center items-center ${activeClass}`}
      style={{ cursor: isDisabled ? "default" : "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={`${styleClass}`}
      >
        <path
          d="M15.0531 14.7073C15.4436 14.3167 15.4436 13.6836 15.0531 13.293L11.4073 9.64725C11.0168 9.25673 11.0168 8.62356 11.4073 8.23304L11.5331 8.10725C11.9236 7.71673 12.5568 7.71673 12.9473 8.10725L18.1331 13.293C18.5236 13.6836 18.5236 14.3167 18.1331 14.7073L12.9473 19.893C12.5568 20.2836 11.9236 20.2836 11.5331 19.893L11.4073 19.7673C11.0168 19.3767 11.0168 18.7436 11.4073 18.353L15.0531 14.7073Z"
          fill="#333333"
        />
      </svg>
    </button>
  );
}

SidebarButtons.propTypes = {
  rotation: PropTypes.number,
  scale: PropTypes.number,
  aviable: PropTypes.bool,
  onClick: PropTypes.func, // New prop for click handler
};

export default SidebarButtons;
