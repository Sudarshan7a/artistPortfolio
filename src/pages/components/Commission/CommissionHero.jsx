const spanStyles = "text-accentColorRed";

const translations = {
  promotion:
    "Build a Scene with Depth: Additional Characters After the Main Are 20% Off, and Get 30% Off for Each Character After the Third!",
  commission: "Commission",
  uniqueArtworks: "Unique Artworks Tailored to",
  yourVision: "Your Vision",
  subtitle: "Bringing Your Ideas to Life with Style and Precision",
  status: "Commission status: Open!",
};

// CommissionHero component renders the hero section of the commission page.
function CommissionHero() {
  return (
    <section
      className=" flex flex-col justify-center font-title text-center"
      data-hero-reveal
    >
      <div
        className="h-fit w-auto m-auto flex justify-center items-center px-6 text-textPrimary bg-white rounded-[2px] hero-stagger"
        style={{ "--stagger-order": 1 }}
      >
        <p className="md:px-20">{translations.promotion}</p>
      </div>
      <h1
        className="mt-12 mb-4 md:mb-0 md:mt-24 mx-8 text-textPrimary text-center text-2xl sm:text-4xl md:text-6xl lg:text-h1 font-bold hero-stagger"
        style={{ "--stagger-order": 2 }}
      >
        <span className={`${spanStyles}`}>{translations.commission}</span>{" "}
        {translations.uniqueArtworks} <br />
        <span className={`text-nowrap ${spanStyles}`}>
          {translations.yourVision}
        </span>
      </h1>
      <h3
        className="my-5 mx-4 font-[600] text-lg sm:text-xl md:text-2xl text-textSecondary hero-stagger"
        style={{ "--stagger-order": 3 }}
      >
        {translations.subtitle}
      </h3>
      <h2
        className="my-10 mx-4 text-2xl sm:text-4xl md:text-h3 lg:text-h2 hero-stagger"
        style={{ "--stagger-order": 4 }}
      >
        {translations.status}
      </h2>
    </section>
  );
}

export default CommissionHero;
