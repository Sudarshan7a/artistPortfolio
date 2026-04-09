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
    <div className="section-shell min-h-[calc(100vh-72px)] py-10 md:py-14">
      <div className="rounded-[34px] bg-white border border-[#d9e2f3] shadow-[0_18px_34px_rgba(13,20,36,0.10)] p-6 md:p-10">
        <h1 className="text-2xl sm:text-4xl text-textPrimary font-title font-bold text-center">
          Connect with me
        </h1>
        <p className="font-subtitle text-textSecondary text-center mt-2">
          Pick your preferred platform and send your request.
        </p>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {Links.map((link) => (
            <li
              className="interactive-tile rounded-2xl border border-[#e2e8f7] bg-[#f8faff] p-4 md:p-5 flex items-center justify-between gap-4"
              key={link.name}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-white border border-[#d7e0f1] flex items-center justify-center shrink-0">
                  <svg height="24" width="24" xmlns="">
                    <image width="24" height="24" href={`Icons/${link.icon}`} />
                  </svg>
                </div>
                <p className="font-title font-semibold text-textPrimary text-lg">
                  {link.name}
                </p>
              </div>

              <a
                href={link.url}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noreferrer"}
              >
                <Button variant="secondary" className="min-h-9 px-4 text-sm">
                  Open
                </Button>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-[#dde5f4] bg-[#f5f8ff] p-4 md:p-5">
          <p className="text-sm md:text-base text-textSecondary font-subtitle text-center">
            I usually reply within 24-48 hours across Discord, Email, Pixiv, and
            Twitter.
          </p>
        </div>
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
        className="mt-[3px] absolute left-7 sm:left-10 md:left-16 top-24"
        height="28"
        width="28"
        xmlns=""
      >
        <image width="28" height="28" href={"Icons/backArrow.svg"} />
      </svg>
    </NavLink>
  );
}
