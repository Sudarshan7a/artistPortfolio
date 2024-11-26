import PropTypes from "prop-types";

function SidebarButtons({ rotation, scale, aviable }) {
  let styleClass = `scale-${scale} rotate-${rotation}`;
  console.log(styleClass);
  let active = "";
  aviable ? (active = "opacity-100") : (active = "bg-opacity-50 opacity-70");
  return (
    <>
      <button
        className={`bg-[#D9D9D9]  ${active} shadow-sm rounded-full  h-12 w-12  flex justify-center items-center`}
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
            className={`${active} `}
            d="M15.0531 14.7073C15.4436 14.3167 15.4436 13.6836 15.0531 13.293L11.4073 9.64725C11.0168 9.25673 11.0168 8.62356 11.4073 8.23304L11.5331 8.10725C11.9236 7.71673 12.5568 7.71673 12.9473 8.10725L18.1331 13.293C18.5236 13.6836 18.5236 14.3167 18.1331 14.7073L12.9473 19.893C12.5568 20.2836 11.9236 20.2836 11.5331 19.893L11.4073 19.7673C11.0168 19.3767 11.0168 18.7436 11.4073 18.353L15.0531 14.7073Z"
            fill="#333333"
          />
        </svg>
      </button>
    </>
  );
}
SidebarButtons.propTypes = {
  rotation: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  aviable: PropTypes.bool.isRequired,
};

export default SidebarButtons;
