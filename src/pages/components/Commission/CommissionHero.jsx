const spanStyles = "text-accentColorRed";

// CommissionHero component renders the hero section of the commission page.
function CommissionHero() {
  return (
    <div className="sm:pb-5 md:pb-10 lg:pb-20 flex flex-col justify-center font-title text-center ">
      <div className=" h-fit w-auto m-auto  flex justify-center items-center px-6 text-textPrimary bg-white rounded-[2px]">
        <p className="md:px-20">
          Build a Scene with Depth: Additional Characters After the Main Are 20%
          Off, and Get 30% Off for Each Character After the Third!
        </p>
      </div>
      <h1 className=" mt-12 mb-4 md:mb-0 md:mt-24 mx-8 text-textPrimary text-center text-2xl sm:text-4xl md:text-6xl lg:text-h1 font-bold">
        <span className={`${spanStyles}`}>Commission</span> Unique Artworks
        Tailored to <br />
        <span className={`text-nowrap ${spanStyles}`}>Your Vision</span>
      </h1>
      <h3 className="my-5 mx-4 font-[600] text-lg sm:text-xl md:text-2xl text-textSecondary">
        Bringing Your Ideas to Life with Style and Precision
      </h3>
      <h2 className="my-10 mx-4 text-2xl sm:text-4xl md:text-h3 lg:text-h2">
        Commission status: Open!
      </h2>
    </div>
  );
}

export default CommissionHero;
