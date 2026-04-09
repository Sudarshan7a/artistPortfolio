import PropTypes from "prop-types";

const variantMap = {
  primary:
    "text-[#3b2c15] bg-[linear-gradient(130deg,#fff9d8_0%,#f1d58f_45%,#fffcf0_100%)] border-2 border-[#ecd08c] hover:text-[#3b2c15] hover:bg-[linear-gradient(130deg,#fffdf3_0%,#f7e1ab_45%,#ffffff_100%)] hover:border-[#e4c377] shadow-[0_6px_14px_rgba(226,183,91,0.20)] hover:shadow-[0_10px_22px_rgba(226,183,91,0.24)]",
  secondary:
    "text-[#8d6a2c] bg-transparent border-2 border-[#e2b75b] hover:text-[#3b2c15] hover:bg-[#fff5bf] hover:border-[#d7aa49]",
  ghost:
    "text-[#1b2030] bg-[#ffffff] border-2 border-[#d8deec] hover:bg-[#eef2fb] hover:border-[#cdd7f0] shadow-[0_2px_8px_rgba(13,20,36,0.06)]",
};

const legacyVariantMap = {
  0: "secondary",
  1: "primary",
  2: "ghost",
};

function Button({
  variant = "primary",
  children,
  onClick,
  arialabel,
  className,
  type,
  disabled,
}) {
  const resolvedVariant =
    typeof variant === "number"
      ? legacyVariantMap[variant] || "primary"
      : variant;

  const variantClass = variantMap[resolvedVariant] || variantMap.primary;

  return (
    <button
      type={type}
      className={`btn interactive-button min-h-10 px-6 md:px-7 rounded-[26px] transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d5efc]/50 ${variantClass} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
      aria-label={arialabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["primary", "secondary", "ghost"]),
    PropTypes.number,
  ]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  arialabel: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
};

export default Button;
