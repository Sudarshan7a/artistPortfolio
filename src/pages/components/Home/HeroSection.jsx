import { NavLink } from "react-router-dom";
import Button from "../Button";

/**
 * HeroSection component renders the hero section of the homepage.
 * It includes an image, a heading, a paragraph, and two buttons.
 */
function HeroSection() {
  return (
    <>
      <div className=" h-[360px] overflow-hidden relative flex overflow-y-scroll no-scrollbar items-center">
        <img
          className="h-full w-full object-cover object-center-top"
          src="./images/fullCom/fullCom_whiteKnight/variant2.jpg"
          alt="fullCom_whiteKnight "
        />
      </div>
      <h1 className="homeheroh1 text-6xl font-bold mt-12 text-center ">
        Crafting Dreams into Art
      </h1>
      <p className="homeherop mt-2 text-textPrimary font-medium text-center ">
        Every Scene Tells a Story, Every Detail Holds a Memory
      </p>
      <div className="mt-8 mb-4 flex gap-12 justify-center">
        <NavLink to="/gallery">
          <Button variant={1}>View Gallery</Button>
        </NavLink>
        <NavLink to="/commission">
          <Button variant={0}>Commission</Button>
        </NavLink>
      </div>
    </>
  );
}

export default HeroSection;
