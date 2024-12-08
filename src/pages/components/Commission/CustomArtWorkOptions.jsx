import { customArtworkOptions } from "../../../commissionList";

/**
 * CustomArtWorkOptions component renders the custom artwork options.
 */
function CustomArtWorkOptions() {
  return (
    <div className="mx-[5%] lg:mx-[10%] my-10 md:my-16 lg:my-24">
      <h2 className="mb-8 tracking-wide">Custom Artwork Options.</h2>
      <div className="px-5 lg:px-11 py-4 text-textPrimary text-2xl sm:text-4xl font-semibold bg-white shadow-custom-light rounded-[40px]">
        <div className="">
          {customArtworkOptions.map((group, index) => (
            <div className="mt-12 font-subtitle" key={index}>
              <hr className="mx-2 sm:mx-3 lg:mx-7 m-auto h-1 bg-custom-gradient border-none my-8" />

              {group.map((option) => (
                <div key={option.title} className="mb-8 ">
                  <span className="flex w-fit items-start">
                    <svg
                      className={`top-3 mx-1 ${
                        option.icon === "Icons/redCross.svg" && "mr-2  sm:mr-0"
                      } sm:mx-2 lg:mx-8 flex justify-center items-center`}
                      height="32"
                      width="32"
                      xmlns=""
                    >
                      <image
                        className="  "
                        width="20"
                        height="20"
                        href={option.icon}
                      />
                    </svg>
                    <h3 className="text-wrap text-lg sm:text-xl font-regular ">
                      {option?.title}
                    </h3>
                  </span>
                  <p className="ml-12 lg:ml-32  text-base sm:text-lg font-regular">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomArtWorkOptions;
