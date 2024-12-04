import { NavLink } from "react-router-dom";
import Logo from "./Logo";

/**
 * PageNav component renders the navigation bar with links and a contact button.
 */
function PageNav() {
  return (
    <nav
      className="h-[48px] w-full flex items-center px-28 justify-between"
      id="pageNav"
    >
      <Logo />
      <ul className="list-none flex gap-16 justify-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/commission">Commission</NavLink>
        </li>
        <li>
          <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
        </li>
      </ul>

      <NavLink to="/connect">
        <Button variant={0} h={8}>
          Contact
        </Button>
      </NavLink>
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button
      // skipcq: JS-R1004
      className={`btn h-10 w-32 px-4 rounded-[36px] text-[#333] font-bold bg-[#f0f0f0] border-2 border-[#f0f0f0] hover:text-[#f0f0f0] hover:bg-[#ff4c4c] transition-all`}
    >
      {children}
    </button>
  );
}

export default PageNav;
