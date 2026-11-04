import PropTypes from "prop-types";
import { forwardRef } from "react";

const variantMap = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

const legacyVariantMap = {
  0: "secondary",
  1: "primary",
  2: "ghost",
};

function Button(
  {
    variant = "primary",
    children,
    onClick,
    arialabel,
    className,
    type,
    disabled,
  },
  ref,
) {
  const resolvedVariant =
    typeof variant === "number"
      ? legacyVariantMap[variant] || "primary"
      : variant;

  const variantClass = variantMap[resolvedVariant] || variantMap.primary;

  return (
    <button
      ref={ref}
      type={type}
      className={`btn interactive-button min-h-10 px-6 md:px-7 rounded-full transition-[color,background-color,border-color,box-shadow,transform] duration-200 ${variantClass} ${
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

export default forwardRef(Button);
