const spanStyles = "text-accentColorRed";

// CommissionHero component renders the hero section of the commission page.
function CommissionHero() {
  return (
    <div className="pb-20 flex flex-col justify-center font-title text-center ">
      <div className=" h-8 w-auto m-auto  flex justify-center items-center px-6 text-textPrimary bg-white rounded-[2px]">
        <p>
          Build a Scene with Depth: Additional Characters After the Main Are 20%
          Off, and Get 30% Off for Each Character After the Third!
        </p>
      </div>
      <h1 className=" mt-24 text-textPrimary text-center text-h1 font-bold">
        <span className={`${spanStyles}`}>Commission</span> Unique Artworks
        Tailored to <br />
        <span className={`text-nowrap ${spanStyles}`}>Your Vision</span>
      </h1>
      <h3 className="my-5 font-[600] text-2xl text-textSecondary">
        Bringing Your Ideas to Life with Style and Precision
      </h3>
      <h2 className="my-10">Commission status: Open!</h2>
    </div>
  );
}

export default CommissionHero;
