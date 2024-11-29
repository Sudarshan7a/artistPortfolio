import Logo from "./Logo";
// import PropsTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Footer() {
  const backgroundStyle = {
    height: "596px",
    backgroundImage: `url('images/Intersect.svg')`,
  };
  return (
    <footer
      className="footer h-[500px] pt-12 overflow-hidden "
      style={backgroundStyle}
    >
      <div className="m-16 ml-24  flex gap-16 justify-around items-start ">
        <Logo scale={4} />
        <FooterNavLinks />
        <Social />
        <Contact />
      </div>
      <div className="ml-24  mr-20 ">
        <Motivation />
        <Copywrite />
      </div>
    </footer>
  );
}

export default Footer;

function FooterNavLinks() {
  return (
    <ul className="footerul flex flex-col gap-4">
      <li className="h-[32px]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="h-[32px]">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li className="h-[32px]">
        <NavLink to="/commission">Commission</NavLink>
      </li>
      <li className="h-[32px]">
        <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
      </li>
    </ul>
  );
}

function Social() {
  return (
    <div className="social flex flex-col gap-4 w-[180px]">
      <ul className="footerul flex flex-col gap-4">
        <li>
          <a href="mailto:artiste@example.com?subject=Commission%20Inquiry&body=Hi%20there,%0A%0AI%20am%20interested%20in%20commissioning%20an%20artwork.%20Here%20are%20some%20details%20about%20my%20project..">
            <div className="flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/gmail.svg" />
              </svg>
              Gmail
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/pixiv.svg" />
              </svg>
              Pixiv
            </div>
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/559749115991556107">
            <div className="flex gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href="Icons/discord.svg" />
              </svg>
              Discord
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="flex gap-4 items-center">
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

function Contact() {
  return (
    <div className="contact flex flex-col gap-4">
      <p className="text-nowrap">
        Ready to See Your Concept Come Alive?
        <br /> Let&apos;s Collaborate!
      </p>
      <div className="w-[240px]">
        <Button variant={1}>Contact</Button>
      </div>
    </div>
  );
}

function Motivation() {
  return (
    <div className="motivation flex flex-row items-end justify-between gap-4">
      <h1 className="footerh1">Say hello!</h1>
      <div className="bg-[#D9D9D9] relative rotate-180 rounded-full w-[52px] h-[52px] flex items-center justify-center cursor-pointer ">
        <svg className="top-3 absolute" height="32" width="32" xmlns="">
          <image width="32" height="32" href="Icons/downArrow.svg" />
        </svg>
      </div>
    </div>
  );
}

function Copywrite() {
  return (
    <div className="copywrite m-6 ">
      <hr></hr>
      <div>
        <ul className="flex justify-center gap-12 m-4 text-[#333] text-[16px] font-subtitle">
          <li>Ronal1710</li>
          <li>2024</li>
          <li>@copywrite</li>
        </ul>
      </div>
    </div>
  );
}
