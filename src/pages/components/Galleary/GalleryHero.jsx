/**
 * GalleryHero component renders the hero section of the gallery page.
 * @returns {JSX.Element} The GalleryHero component.
 */
function GalleryHero() {
  return (
    <div className="text-[#333] text-center mt-[120px] px-4 md:px-0 flex flex-col items-center w-full">
      <h1 className=" font-title font-bold text-3xl md:text-5xl lg:text-[60px]">
        <span className="text-nowrap">Find Your Inspiration</span> in Our
        Gallery
      </h1>
      <p className=" text-center font-title font-[500] text-lg md:text-xl lg:text-[24px] text-textSecondary m-5">
        Step into my world of art each piece crafted with care and detail.
        <br />
        Explore and find the spark that inspires you.
      </p>
      <svg
        className="mt-20 mb-20 md:mt-30 md:mb-20 lg:mt-40 lg:mb-10 "
        height="32"
        width="32"
        xmlns=""
      >
        <image width="32" height="32" href="Icons/downArrow.svg" />
      </svg>
    </div>
  );
}

export default GalleryHero;
