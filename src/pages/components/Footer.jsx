import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import React from "react";
const backgroundStyle = {
  backgroundImage: 'url("images/Intersect.svg")',
};
/**
 * Footer component that renders the footer section of the page.
 */

function Footer() {
  const [deviceWidth, setDeviceWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer
      className="footer px-4 sm:px-6 md:px-8 md:pt-8 overflow-hidden"
      style={backgroundStyle}
    >
      <div className="mb-4 sm:mb-4 md:m-8 ml:16 lg:ml-20 flex flex-col lg:flex-row gap-10 justify-between items-start ">
        <div className="min-w-fit">
          <Logo scale={deviceWidth < 768 ? 1 : 4} />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-16 justify-start sm:justify-around h-fit w-full items-start sm:items-center">
          <FooterNavLinks />
          <Social />
        </div>
        <div className=" w-fit mx-4 md:mx-8">
          <Contact />
        </div>
      </div>
      <div className="relative ml-4 sm:ml-6 md:ml-16 lg:ml-24 mr-4 sm:mr-6 md:mr-20 pb-1 pr-14 sm:pr-16 md:pr-0">
        <Motivation />
        <Copywrite />
      </div>
    </footer>
  );
}

export default Footer;

/**
 * FooterNavLinks component that renders the navigation links in the footer.
 */
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/gallery", label: "Gallery" },
  { path: "/commission", label: "Commission" },
  { path: "/terms-and-conditions", label: "Terms and Conditions" },
];

/**
 * FooterNavLinks component that renders the navigation links in the footer.
 */
function FooterNavLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="footerul text-textSecondary flex flex-col gap-4">
      {navLinks.map((link) => (
        <li
          key={link.path}
          className={`footer-nav-item h-[32px] cursor-pointer ${
            location.pathname === link.path && "active"
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent immediate navigation
            scrollToTop(); // Scroll to the top
            setTimeout(() => {
              navigate(link.path); // Navigate to the path after scrolling
            }, 800);
          }}
        >
          {link.label}
        </li>
      ))}
    </ul>
  );
}
/**
 * Social component that renders the social media links in the footer.
 **/
function Social() {
  return (
    <div className="social flex flex-col gap-4 w-full sm:w-[180px]">
      <ul className="footerul flex flex-col gap-4">
        <li>
          <a href="mailto:dupro1710@gmail.com?subject=Commission%20Inquiry&body=Hi%20there,%0A%0AI%20am%20interested%20in%20commissioning%20an%20artwork.%20Here%20are%20some%20details%20about%20my%20project..">
            <div className="social-link-row flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/gmail.svg" />
              </svg>
              Email
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.pixiv.net/en/users/21112248">
            <div className="social-link-row flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/pixiv.svg" />
              </svg>
              Pixiv
            </div>
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/559749115991556107">
            <div className="social-link-row flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/discord.svg" />
              </svg>
              Discord
            </div>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Ronaldeweeb17">
            <div className="social-link-row flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/twitter.svg" />
              </svg>
              Twitter
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

/**
 * Contact component that renders the contact section in the footer.
 */
function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact flex flex-col w-fit gap-4">
      <p className="text-wrap w-fit">
        <span className="text-nowrap">Ready to See Your Concept</span>
        <span> Come Alive?</span>
      </p>
      <div className="w-[240px]">
        <Button
          onClick={(e) => {
            e.preventDefault(); // Prevent immediate navigation
            scrollToTop(); // Scroll to the top
            setTimeout(() => {
              navigate("/connect"); // Navigate to the path after scrolling
            }, 800);
          }}
          variant={1}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}

/**
 * Motivation component that renders the motivation section in the footer.
 */
function Motivation() {
  return (
    <div className="motivation absolute right-0 top-0 -translate-y-1/2 z-20">
      <div
        onClick={scrollToTop}
        className="scrollToTop bg-[#dfe8ff] border border-[#c9def5] relative rotate-180 rounded-full w-[52px] h-[52px] flex items-center justify-center cursor-pointer "
      >
        <svg className="top-3 absolute" height="32" width="32" xmlns="">
          <image width="32" height="32" href="Icons/downArrow.svg" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Copywrite component that renders the copyright information in the footer.
 */
function Copywrite() {
  const [showDeveloperContact, setShowDeveloperContact] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleCloseContact = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowDeveloperContact(false);
      setIsClosing(false);
    }, 400); // 400ms allows the popup to smoothly hide, while the blur dissipates faster
  };

  return (
    <>
      <hr className=" mt-6" />
      <div className="copywrite mt-2 relative px-1 sm:px-2 md:px-4">
        <div>
          <ul className="flex flex-wrap md:flex-nowrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-1.5 my-2 px-2 text-[#333] text-[13px] sm:text-[15px] md:text-[16px] font-subtitle items-center">
            <li>Ronal1710</li>
            <li>2024</li>
            <li>@copywrite</li>
            <li>
              <button
                className="relative inline-block whitespace-nowrap text-textPrimary opacity-80 hover:opacity-100 hover:scale-100 transition-opacity duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-textPrimary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onClick={() => setShowDeveloperContact(true)}
              >
                Contact Developer
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showDeveloperContact && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center py-6 overflow-x-hidden px-4 ${isClosing ? "animate-apple-backdrop-hide" : "animate-apple-backdrop"}`}
          onClick={handleCloseContact}
        >
          <div
            className={`bg-[#f5f5f7]/95 w-full backdrop-blur-2xl border border-black/5 rounded-[2.2rem] sm:rounded-[2.8rem] p-6 sm:p-10 md:p-14 max-w-[calc(100%-1.5rem)] sm:max-w-[680px] max-h-[88vh] overflow-y-auto relative shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${isClosing ? "animate-apple-hide" : "animate-apple-reveal"} flex flex-col items-center`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseContact}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/5 text-[#86868b] hover:bg-black/10 hover:text-[#1d1d1f] transition-colors duration-300 text-lg sm:text-xl"
            >
              ✕
            </button>

            <div className="mb-8 sm:mb-10 md:mb-12 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-title tracking-tight text-[#1d1d1f] mb-3 sm:mb-4 leading-tight font-semibold">
                Developer Contact.
              </h3>
              <p className="text-[#86868b] font-subtitle text-base sm:text-lg md:text-xl font-medium">
                Reach out for inquiries, collaborations, or technical support.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[500px]">
              <a
                href="mailto:sudupa0007@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 text-[#86868b] hover:text-[#1d1d1f] bg-white hover:bg-white/60 p-4 sm:p-5 rounded-2xl transition-all duration-300 border border-black/5"
              >
                <div className="bg-[#f5f5f7] p-2.5 sm:p-3 rounded-xl border border-black/5">
                  <img
                    src="Icons/gmail.svg"
                    alt="Email"
                    className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-title font-semibold text-[#1d1d1f] text-base sm:text-lg">
                    Email
                  </p>
                  <p className="text-sm text-left break-all sm:break-normal">
                    sudupa0007@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://discordapp.com/users/1276841090657288255"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 text-[#86868b] hover:text-[#1d1d1f] bg-white hover:bg-white/60 p-4 sm:p-5 rounded-2xl transition-all duration-300 border border-black/5"
              >
                <div className="bg-[#f5f5f7] p-2.5 sm:p-3 rounded-xl border border-black/5">
                  <img
                    src="Icons/discord.svg"
                    alt="Discord"
                    className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-title font-semibold text-[#1d1d1f] text-base sm:text-lg">
                    Discord
                  </p>
                  <p className="text-sm text-left">
                    Connect instantly with sudupa
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Scrolls the window to the top smoothly.
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
}
