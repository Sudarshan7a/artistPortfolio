import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

/**
 * HeroSection component renders the hero section of the homepage.
 * It includes an image, a heading, a paragraph, and two buttons.
 */
function HeroSection() {
  const heroArtRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!heroArtRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroArtRef.current.style.transform = `scale(1.06) translate(${x * 14}px, ${y * 10}px)`;
  };

  const resetPointerMove = () => {
    if (!heroArtRef.current) return;
    heroArtRef.current.style.transform = "scale(1.03) translate(0px, 0px)";
  };

  return (
    <section className="mt-0" data-hero-reveal>
      <div
        className="h-[230px] sm:h-[280px] md:h-[330px] lg:h-[380px] overflow-hidden hero-art-shell"
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointerMove}
      >
        <img
          ref={heroArtRef}
          className="h-full w-full object-cover object-center hero-parallax-art hero-float"
          src="./images/fullCom/fullCom_whiteKnight/variant2.jpg"
          alt="White Knight commission artwork"
          decoding="async"
        />
      </div>

      <div className="section-shell px-2 py-4 md:px-0 md:py-4 text-center">
        <p
          className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-textSecondary mb-2 font-title hero-stagger"
          style={{ "--stagger-order": 1 }}
        >
          Commissions Open
        </p>

        <h1 className="homeheroh1 hero-headline text-3xl sm:text-5xl md:text-[54px] leading-[1.08] mb-4 font-bold">
          <span style={{ "--word-delay": "0ms" }}>Crafting</span>{" "}
          <span style={{ "--word-delay": "110ms" }}>Dreams</span>{" "}
          <span style={{ "--word-delay": "220ms" }}>into</span>{" "}
          <span style={{ "--word-delay": "330ms" }}>Art</span>
        </h1>

        <p
          className="homeherop text-textSecondary max-w-[760px] text-base md:text-xl mx-auto hero-stagger"
          style={{ "--stagger-order": 2 }}
        >
          Every scene tells a story, every detail holds a memory. Explore the
          gallery or start a custom artwork tailored to your concept.
        </p>

        <div
          className="mt-7 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 hero-stagger"
          style={{ "--stagger-order": 3 }}
        >
          <NavLink
            className="w-fit m-auto sm:m-0"
            to="/commission"
            aria-label="Start a new commission"
          >
            <Button variant="primary" className="hero-cta-primary">
              Commission Now
            </Button>
          </NavLink>
          <NavLink
            className="w-fit m-auto sm:m-0"
            to="/gallery"
            aria-label="Explore gallery"
          >
            <Button variant="secondary">View Gallery</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
