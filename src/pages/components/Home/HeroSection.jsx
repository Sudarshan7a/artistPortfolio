import Button from "../Button";

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
        <Button variant={1}>View Gallery</Button>
        <Button variant={0}>Commission</Button>
      </div>
    </>
  );
}

export default HeroSection;
