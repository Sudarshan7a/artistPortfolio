import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

/**
 * Floating CTA used to keep conversion path visible without being intrusive.
 */
function StickyCommissionCTA() {
  const location = useLocation();
  const hideCTAOn = ["/commission", "/connect"];

  if (hideCTAOn.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="sticky-commission">
      <NavLink to="/commission" aria-label="Open commission page">
        <Button
          variant="primary"
          className="cta-attention px-5 md:px-6 text-xs md:text-sm"
        >
          Commission Now
        </Button>
      </NavLink>
    </div>
  );
}

export default StickyCommissionCTA;
