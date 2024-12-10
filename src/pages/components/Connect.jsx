import { NavLink } from "react-router-dom";
import Button from "./Button";
import PageNav from "./PageNav";

const Links = [
  {
    name: "Discord",
    url: "https://discordapp.com/users/559749115991556107",
    icon: "discord.svg",
  },
  {
    name: "Email",
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
 * Connect component that renders the connection options.
 **/
function Connect() {
  return (
    <div className=" relative">
      <PageNav />
      <Back />
      <Social />
    </div>
  );
}

export default Connect;

/**
 * Social component that renders the social media links in the footer.
 **/
function Social() {
  return (
    <div className="m-auto w-auto h-screen bg-primaryColor overflow-y-clip text-textPrimary font-title  gap-4 ">
      <h1 className="text-2xl sm:text-4xl text-textPrimary font-title font-bold text-center my-16">
        Connect with me
      </h1>
      <ul className="footerul w-auto flex flex-wrap md:flex-col items-center justify-center gap-8">
        {Links.map((link) => (
          <li
            className="mx-2 flex flex-col sm:flex-row gap-8 sm:gap-20 w-auto justify-center items-center"
            key={link.name}
          >
            <div className="flex text-textPrimary scale-125 w-[120px] sm:w-[160px] gap-4 items-center">
              <svg height="32" width="32" xmlns="">
                <image width="32" height="32" href={`Icons/${link.icon}`} />
              </svg>
              {link.name}
            </div>
            <a href={link.url}>
              <Button variant={1} h={8} className="w-1/2">
                {" "}
                send message{" "}
              </Button>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex absolute mt-40 md:px-[5%] w-auto md:w-full items-start justify-center">
        <h1 className="text-xl w-auto sm:text-2xl text-textPrimary font-title font-bold text-center">
          Note:
        </h1>
        <p className=" text-lg text-textPrimary text-wrap text-center mx-2 sm:mx-4">
          it usually take me 24-48 hours to read and reply to your request via
          all means above, please be patient!
        </p>
      </div>
    </div>
  );
}

/**
 * Back component that renders the back button in the Connect screen.
 **/
function Back() {
  return (
    <NavLink to="/">
      <svg
        className="mt-[3px] absolute left-7 sm:left-10 md:left-20 top-16 md:top-24"
        height="28"
        width="28"
        xmlns=""
      >
        <image width="28" height="28" href={"Icons/backArrow.svg"} />
      </svg>
    </NavLink>
  );
}
