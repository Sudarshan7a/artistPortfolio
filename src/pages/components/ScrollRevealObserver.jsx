import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Uses IntersectionObserver to reveal only hero sections.
 */
function ScrollRevealObserver() {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("[data-hero-reveal]"),
    );
    if (!elements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element) => element.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollRevealObserver;
