import Button from "./Button";
import PageNav from "./PageNav";

const Links = [
  {
    name: "Discord",
    url: "https://discordapp.com/users/559749115991556107",
    icon: "discord.svg",
  },
  {
    name: "Gmail",
    url: "mailto:artiste@example.com?subject=Commission%20Inquiry&body=Hi%20there,%0A%0AI%20am%20interested%20in%20commissioning%20an%20artwork.%20Here%20are%20some%20details%20about%20my%20project..",
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
    <div className="m-auto w-full h-screen bg-primaryColor overflow-y-clip text-textPrimary font-title  gap-4 ">
      <h1 className="text-4xl text-textPrimary font-title font-bold text-center my-16">
        Connect with me
      </h1>
      <ul className="footerul flex flex-col items-center justify-center gap-8">
        {Links.map((link) => (
          <li
            className=" flex gap-20 w-full justify-center items-center"
            key={link.name}
          >
            <div className="flex w-1/12 gap-4 items-center">
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
    </div>
  );
}

/**
 * Back component that renders the back button in the Connect screen.
 **/
function Back() {
  return (
    <a href="/" className=" flex justify-end mr-36 mt-12">
      <svg height="28" width="28" xmlns="">
        <image width="28" height="28" href={"Icons/backArrow.svg"} />
      </svg>
    </a>
  );
}
