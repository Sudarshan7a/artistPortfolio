import {
  termsAndConditionsList,
  commissionProcess,
} from "../../../termsAndConditionsList";

const guideLinesList = [
  "General Commission Guidelines",
  "Payment, Cancellation & Refund Policy",
  "Copyright & Usage Policy",
];

/**
 * Component to display the commission guidelines and process.
 */
function CommissionGuidelines() {
  return (
    <div className="mb-32">
      {termsAndConditionsList.map((guidelines, index) => (
        <div className="my-28 mx-[4%] sm:mx-[10%]" key={guidelines[0].title}>
          <h1 className="fadein  text-2xl md:text-h2 text-textPrimary text-title font-semibold tracking-wide">
            {guideLinesList[index]}
          </h1>
          <div className="fadein mt-10 py-[2%] px-[2%] sm:px-[4%] rounded-[40px]  bg-white shadow-custom-light">
            {guidelines.map((guideline, guidelineIndex) => (
              <div
                key={guidelineIndex}
                className={`p-4 sm:p-8 ${
                  guidelineIndex < guidelines.length - 1 &&
                  "border-b border-[#666]"
                } `}
              >
                <h3 className="text-[18px] text-textPrimary font-subtitle font-bold">
                  {guideline.title}
                </h3>
                <div className="flex  mt-2">
                  <svg
                    className="shrink-0 rotate-[-90deg] "
                    height="24"
                    width="24"
                    xmlns=""
                  >
                    <image
                      width="24"
                      height="24"
                      color="#333"
                      href="Icons/dropDownArrow.svg"
                    />
                  </svg>
                  <p className="ml-1 text-textPrimary text-body font-subtitle font-normal">
                    {guideline.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="my-28 mx-[4%] sm:mx-[10%]">
        <h1 className="fadein  text-2xl md:text-h2 text-textPrimary text-title font-semibold tracking-wide">
          Commission Process
        </h1>
        <div className=" mt-10 py-[2%] px-[2%] sm:px-[4%] rounded-[40px]  bg-white shadow-custom-light">
          {commissionProcess.map((guideline, commissionProcessIndex) => (
            <div
              key={commissionProcessIndex}
              className={`p-8 ${
                commissionProcessIndex < commissionProcess.length - 1 &&
                "border-b "
              } border-[#666] flex flex-col sm:flex-row gap-4`}
            >
              <h3 className="fadein w-48 flex gap-2 text-[18px] text-textPrimary font-subtitle font-bold">
                <div>{commissionProcessIndex + 1}. </div>
                {guideline.title}
              </h3>
              <div className="fadein flex flex-col  w-full items-start ">
                {guideline.description.map((desc, commissionProcessIndex) => (
                  <p
                    className="text-textPrimary text-body font-subtitle font-normal"
                    key={commissionProcessIndex}
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommissionGuidelines;
