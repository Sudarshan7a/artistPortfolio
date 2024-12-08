import { NavLink } from "react-router-dom";
import Button from "../Button";

/**
 * HeroSection component renders the hero section of the homepage.
 * It includes an image, a heading, a paragraph, and two buttons.
 */
function HeroSection() {
  return (
    <>
      <div className="z-0 h-[360px] overflow-hidden relative flex overflow-y-scroll no-scrollbar items-center">
        <img
          className="h-full w-full object-cover object-center-top"
          src="./images/fullCom/fullCom_whiteKnight/variant2.jpg"
          alt="fullCom_whiteKnight "
        />
      </div>
      <h1 className="homeheroh1 text-3xl sm:text-5xl md:text-6xl mb-6 mx-6 md:mb-0 font-bold mt-12 text-center ">
        Crafting Dreams into Art
      </h1>
      <p className="homeherop mt-2 text-sm mx-4 md:text-xl text-textPrimary font-medium text-center ">
        Every Scene Tells a Story, Every Detail Holds a Memory
      </p>
      <div className="mt-8 mb-4 flex flex-col items-center sm:flex-row  gap-6 sm:gap-12 justify-center">
        <NavLink className={"w-fit"} to="/gallery">
          <Button variant={1} arialabel="View Gallery">
            View Gallery
          </Button>
        </NavLink>
        <NavLink className={"w-fit"} to="/commission">
          <Button variant={0} arialabel="View Commission">Commission</Button>
        </NavLink>
      </div>
    </>
  );
}

export default HeroSection;
