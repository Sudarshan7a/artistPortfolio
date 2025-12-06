import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Ronal1710ShowCase.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Ronal1710ShowCase component displays a gallery with animations and scroll effects.
 * @returns {JSX.Element} The rendered component.
 */
const Ronal1710ShowCase = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const gallery = galleryRef.current;
    // const details = gsap.utils.toArray(".details", gallery);
    const photos = gsap.utils.toArray(".photo", gallery);

    // Set initial properties for animation
    gsap.set(photos.slice(1), {
      opacity: 1,
      scale: 1,
      clipPath: "inset(100% 0% 0%)",
    });

    gsap.set(".photo img", {
      y: 5,
    });

    // Photo reveal animation
    const animation = gsap.to(photos.slice(1), {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0% 0%)",
      duration: 1,
      stagger: 1,
    });

    // Bobbing animation for images
    gsap.to(".photo img", {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // ScrollTrigger configuration for pinning and color changes
    ScrollTrigger.create({
      trigger: gallery,
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      animation,
      scrub: 2,
    });

    // Background color changes
    // const colors = ["#f9d2e5aa", "#cdd1ffaa", "#ffe4d3ee", "#ffb399aa"];
    // details.forEach((detail, index) => {
    //   gsap.to(gallery, {
    //     duration: 1,
    //     backgroundColor: colors[index],
    //     scrollTrigger: {
    //       trigger: detail,
    //       scrub: true,
    //     },
    //   });
    // });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Clean up ScrollTrigger on unmount
    };
  }, []);

  // IMPORTANT: Styles for this component are in App.css. Don't miss it!

  return (
    <div>
      <h1
        className={`${styles.headline} bg-gradient-to-b  from-secondaryColor to-[#add8e6]`}
      >
        Why My Art is best for you.
      </h1>
      <div className={`gallery px-[80px] md:px-[40px] lg:px-[80px]  ${styles.gallery}`} ref={galleryRef}>
        <div className="left">
          <div className="detailsWrapper">
            <div className="details d1">
              <h1 className="headline col1">Character Commission</h1>
              <p className="text">
                Character commissions capture each character&apos;s unique
                personality and story, ensuring every detail reflects the
                essence you&apos;re envisioning.
              </p>
            </div>
            <div className="details d2">
              <h1 className="headline col2">Full Illustration</h1>
              <p className="text">
                Discover immersive, anime-inspired worlds crafted with precision
                and passion.
              </p>
            </div>
            <div className="details d3">
              <h1 className="headline col3">Background Art Commission</h1>
              <p className="text">
                Transform your artwork with custom backgrounds that add depth,
                atmosphere, and vibrant detail, perfectly complementing your
                characters and story.
              </p>
            </div>
          </div>
        </div>

        <div className="right"> 
          <div className="photos">
            <div className="photos-box">
              <div className="photo col1">
                <img
                  src="/images/characters/char_augusta_wuwa.jpg"
                  alt="Character Commission"
                />
              </div>
              <div className="photo col2">
                <img
                  src="images/fullCom/fullCom_preciousBean.jpg"
                  alt="Full Illustration"
                />
              </div>
              <div className="photo col3">
                <img
                  src="images/background/bg_ryukawa.jpg"
                  alt="Background Art"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ronal1710ShowCase;
