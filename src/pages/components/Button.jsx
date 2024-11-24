import PropTypes from "prop-types";

const variants = [
  "text-[#ff4c4c] bg-[#f0f0f0]  border-2 border-[#ff4c4c] hover:text-[#f0f0f0] hover:bg-[#ff4c4c]  hover:shadow-lg hover:bg-opacity-80 ",
  "text-[#f0f0f0] bg-[#ff4c4c]  border-2 border-[#f0f0f0] hover:text-[#ff4c4c] hover:bg-[#ffd700] hover:bg-opacity-60 hover:shadow-lg hover:border-[#ffd700] hover:border-opacity-60",
];

function Button({ variant, children }) {
  return (
    <button
      className={`btn h-12 px-10 rounded-[32px] ${variants[variant]} transition-all`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  variant: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
