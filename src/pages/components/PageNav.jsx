import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

const socialLinks = [
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

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/commission", label: "Commission" },
  { to: "/terms-and-conditions", label: "Terms" },
];

/**
 * PageNav component renders the navigation bar with links and a contact button.
 */
function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = (event, isActive) => {
    if (isActive) {
      event.preventDefault();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getNavClass = ({ isActive }) =>
    `nav-link-animated text-[15px] tracking-wide transition-all duration-300 nav-text-glow ${
      isActive
        ? "opacity-100 font-semibold nav-link-active"
        : "opacity-80 hover:opacity-100"
    }`;

  return (
    <header className="sticky top-0 z-40">
      <nav
        className={`nav-surface relative w-full px-4 md:px-10 lg:px-20 grid grid-cols-[1fr_auto_1fr] items-center md:flex md:items-center md:justify-between transition-all duration-300 overflow-x-hidden ${
          isScrolled
            ? "is-scrolled h-[52px] bg-primaryColor/88"
            : "h-[58px] bg-primaryColor/95"
        }`}
        id="pageNav"
      >
        <button
          className="order-1 md:hidden h-8 w-8 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0 justify-self-start"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <image
              width="18"
              height="18"
              href={`Icons/${menuOpen ? "closeIcon.svg" : "menuIcon.svg"}`}
            />
          </svg>
        </button>

        <div className="order-2 md:order-none justify-self-center md:justify-self-auto">
          <Logo />
        </div>

        <ul className="hidden md:flex items-center gap-5 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink className={getNavClass} to={link.to}>
                {({ isActive }) => (
                  <span
                    onClick={
                      link.to === "/"
                        ? (event) => handleHomeClick(event, isActive)
                        : undefined
                    }
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink className="hidden md:block" to="/connect">
          <Button
            variant="ghost"
            className="nav-contact-button min-h-8 px-4 text-xs"
          >
            Contact
          </Button>
        </NavLink>

        <NavLink
          className="order-3 md:hidden flex-shrink-0 justify-self-end"
          to="/connect"
        >
          <Button
            variant="ghost"
            className="nav-contact-button min-h-8 px-3 text-[11px]"
          >
            Contact
          </Button>
        </NavLink>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[58px] z-30 bg-black/30 backdrop-blur-sm flex items-start justify-center px-4 pt-3"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-primaryColor rounded-3xl p-6 shadow-[0_18px_36px_rgba(13,20,36,0.18)] w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 border-b border-black/10 pb-5 mb-5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink className={getNavClass} to={link.to}>
                    {({ isActive }) => (
                      <span
                        onClick={
                          link.to === "/"
                            ? (event) => handleHomeClick(event, isActive)
                            : undefined
                        }
                      >
                        {link.label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-4 gap-2 mb-5">
              {socialLinks.map((link) => (
                <a
                  className="menu-social-tile h-11 rounded-xl bg-white border border-black/10 flex items-center justify-center"
                  href={link.url}
                  key={link.name}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image width="24" height="24" href={`Icons/${link.icon}`} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              <NavLink className="w-full" to="/connect">
                <Button variant="secondary" className="w-full min-h-8 text-sm">
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default PageNav;
