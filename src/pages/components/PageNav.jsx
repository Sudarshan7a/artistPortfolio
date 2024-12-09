import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Links = [
  {
    name: "Discord",
    url: "https://discordapp.com/users/559749115991556107",
    icon: "discord.svg",
  },
  {
    name: "Gmail",
    url: "mailto:dupro1710@gmail.com?subject=Commission%20Inquiry&body=Hi%20there,%0A%0AI%20am%20interested%20in%20commissioning%20an%20artwork.%20Here%20are%20some%20details%20about%20my%20project..",
    icon: "gmail.svg",
  },
  {
    name: "Pixiv",
    url: "https://www.pixiv.net/en/users/21112248",
    icon: "pixiv.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Ronaldeweeb17",
    icon: "twitter.svg",
  },
];
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
        <ul
          className={`${
            menuOpen ? "visible" : "hidden"
          } footerul z-40 md:hidden w-full flex flex-row top-[600px] items-end justify-center gap-8`}
        >
          {Links.map((link) => (
            <li
              className="mx-2 flex sm:flex-row gap-8 sm:gap-20 w-auto justify-center items-center"
              key={link.name}
            >
              <div className="flex text-textPrimary scale-125 items-center">
                <a href={link.url}>
                  <svg height="32" width="32" xmlns="">
                    <image width="32" height="32" href={`Icons/${link.icon}`} />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
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
