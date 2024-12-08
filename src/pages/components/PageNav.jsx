import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

/**
 * PageNav component renders the navigation bar with links and a contact button.
 */
function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`h-[48px] bg-primaryColor w-screen flex items-center px-[4%] lg:px-[8%] justify-between 
          ${menuOpen && "fixed top-0 left-0 z-30"}`}
        id="pageNav"
      >
        {/* Menu icon */}

        <svg
          className={`visible md:hidden -order-1 md:mr-20`}
          height="32"
          width="32"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <image
            width="32"
            height="32"
            href={`Icons/${menuOpen ? "closeIcon.svg " : "menuIcon.svg"}`}
          />
        </svg>

        <Logo />

        {/* Navigation links */}
        <ul
          className={`list-none flex 
               flex-col md:flex-row bg-primaryColor w-fit ${
                 menuOpen
                   ? "block z-20 top-12 left-0 p-16 justify-center items-start gap-4 py-10"
                   : "hidden z-20 top-2 left-52  md:flex"
               } "gap-6 lg:gap-16" justify-center`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/commission">Commission</NavLink>
          </li>
          <li className="min-w-fit">
            <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
          </li>
        </ul>

        {/* Contact Button */}

        <NavLink to="/connect">
          <Button variant={0} h={8}>
            Contact
          </Button>
        </NavLink>
        <div
          className={`${
            menuOpen ? "visible z-10" : "hidden"
          }  fixed bg-primaryColor top-12 left-0 h-screen w-full`}
        ></div>
      </nav>
    </>
  );
}

// Button component
import PropTypes from "prop-types";
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

function Button({ children }) {
  return (
    <button className="btn h-10 md:w-32 md:px-2 rounded-[36px] text-[#333] font-bold bg-[#f0f0f0] border-2 border-[#f0f0f0] hover:text-[#f0f0f0] hover:bg-[#ff4c4c] transition-all">
      {children}
    </button>
  );
}

export default PageNav;
