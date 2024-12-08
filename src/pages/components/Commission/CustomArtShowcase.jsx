import { commissionSamples } from "../../../commissionList";
import { useState } from "react";
import CommissionCard from "./CommissionCard";

function CustomArtShowcase() {
  const [currentIndex, setCurrentIndex] = useState({
    CharactersIndex: 0,
    CharactersBackgroundIndex: 0,
    CharactersOver800Index: 0,
    BackgroundIndex: 0,
  });

  const [visibleIndex, setVisibleIndex] = useState(currentIndex); // Controls visible content
  const [isAnimating, setIsAnimating] = useState(false); // Manages animation state

  function handelSideButtonClick(type, direction) {
    console.log(
      `Type: ${type}, Direction: ${direction}, CurrentIndex:`,
      currentIndex
    );

    const indexKey = type + "Index"; // Dynamically create the key name
    const current = currentIndex[indexKey]; // Access the current value using bracket notation

    let newIndex;
    if (direction === "left") {
      newIndex = current - 1;
    } else {
      newIndex = current + 1;
    }

    // Start fade-out animation
    setIsAnimating(true);

    // Update `visibleIndex` after fade-out completes
    setTimeout(() => {
      setVisibleIndex((prev) => ({
        ...prev,
        [indexKey]: newIndex,
      }));
    }, 400); // Match the CSS animation duration

    // Sync `currentIndex` and reset animation after fade-in completes
    setTimeout(() => {
      setCurrentIndex((prev) => ({
        ...prev,
        [indexKey]: newIndex,
      }));
      setIsAnimating(false); // Reset animation state
    }, 600); // Double the CSS duration for fade-in
  }

  return (
    <div className="flex flex-col">
      <h1 className="my-10 text-center text-3xl sm:text-4xl md:text-h1 text-textPrimary font-title font-semibold ">
        Custom Artwork Showcase
      </h1>
      <div>
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-2xl md:text-h2 tracking-wide">
          Characters
        </h2>

        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <CommissionCard
            currentIndex={visibleIndex.CharactersIndex}
            title={commissionSamples[0][visibleIndex.CharactersIndex]?.title[0]}
            total={commissionSamples[0][visibleIndex.CharactersIndex]?.title[1]}
            commissionType={
              commissionSamples[0][visibleIndex.CharactersIndex].title[2]
                ?.points
            }
            pricingBreakdown={
              commissionSamples[0][visibleIndex.CharactersIndex].title[3]
                ?.points
            }
            images={commissionSamples[0][visibleIndex.CharactersIndex]?.images}
            type={commissionSamples[0][visibleIndex.CharactersIndex]?.type}
            handelSideButtonClick={handelSideButtonClick}
            indexLength={commissionSamples[0].length}
          />
        </div>
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-2xl md:text-h2 tracking-wide">
          CharactersBackground
        </h2>

        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <CommissionCard
            currentIndex={visibleIndex.CharactersBackgroundIndex}
            title={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]
                ?.title[0]
            }
            total={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]
                ?.title[1]
            }
            commissionType={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]
                .title[2]?.points
            }
            pricingBreakdown={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]
                .title[3]?.points
            }
            images={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]
                ?.images
            }
            type={
              commissionSamples[1][visibleIndex.CharactersBackgroundIndex]?.type
            }
            handelSideButtonClick={handelSideButtonClick}
            indexLength={commissionSamples[1].length}
          />
        </div>
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-2xl md:text-h2 tracking-wide">
          CharactersOver800
        </h2>

        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <CommissionCard
            currentIndex={visibleIndex.CharactersOver800Index}
            title={
              commissionSamples[2][visibleIndex.CharactersOver800Index]
                ?.title[0]
            }
            total={
              commissionSamples[2][visibleIndex.CharactersOver800Index]
                ?.title[1]
            }
            commissionType={
              commissionSamples[2][visibleIndex.CharactersOver800Index].title[2]
                ?.points
            }
            pricingBreakdown={
              commissionSamples[2][visibleIndex.CharactersOver800Index].title[3]
                ?.points
            }
            images={
              commissionSamples[2][visibleIndex.CharactersOver800Index]?.images
            }
            type={
              commissionSamples[2][visibleIndex.CharactersOver800Index]?.type
            }
            handelSideButtonClick={handelSideButtonClick}
            indexLength={commissionSamples[2].length}
          />
        </div>
        <h2 className="w-[80%] mx-auto mb-8 text-textPrimary font-title text-2xl md:text-h2 tracking-wide">
          Background
        </h2>

        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <CommissionCard
            currentIndex={visibleIndex.BackgroundIndex}
            title={commissionSamples[3][visibleIndex.BackgroundIndex]?.title[0]}
            total={commissionSamples[3][visibleIndex.BackgroundIndex]?.title[1]}
            commissionType={
              commissionSamples[3][visibleIndex.BackgroundIndex].title[2]
                ?.points
            }
            pricingBreakdown={
              commissionSamples[3][visibleIndex.BackgroundIndex].title[3]
                ?.points
            }
            images={commissionSamples[3][visibleIndex.BackgroundIndex]?.images}
            type={commissionSamples[3][visibleIndex.BackgroundIndex]?.type}
            handelSideButtonClick={handelSideButtonClick}
            indexLength={commissionSamples[3].length}
          />
        </div>
      </div>
      ;
    </div>
  );
}

export default CustomArtShowcase;
