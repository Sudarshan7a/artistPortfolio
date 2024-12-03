import {
  termsAndConditionsList,
  commissionProcess,
} from "../../../termsAndConditionsList";

const guideLinesList = [
  "General Commission Guidelines",
  "Payment, Cancellation & Refund Policy",
  "Copyright & Usage Policy",
];

function CommissionGuildLines() {
  return (
    <div className="mb-32">
      {termsAndConditionsList.map((guidelines, index) => (
        <div className="my-28 mx-[10%]" key={index}>
          <h1 className="text-h2 text-textPrimary text-title font-semibold tracking-wide">
            {guideLinesList[index]}
          </h1>
          <div className="mt-10 py-[2%] px-[4%] rounded-[40px]  bg-white shadow-custom-light">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className={`p-8 ${
                  index < guidelines.length - 1 && "border-b "
                } border-[#666]`}
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
      <div className="my-28 mx-[10%]">
        <h1 className="text-h2 text-textPrimary text-title font-semibold tracking-wide">
          Commission Process
        </h1>
        <div className="mt-10 py-[2%] px-[4%] rounded-[40px]  bg-white shadow-custom-light">
          {commissionProcess.map((guideline, index) => (
            <div
              key={index}
              className={`p-8 ${
                index < commissionProcess.length - 1 && "border-b "
              } border-[#666] flex gap-4`}
            >
              <h3 className=" w-48 flex gap-2 text-[18px] text-textPrimary font-subtitle font-bold">
                <div>{index + 1}. </div>
                {guideline.title}
              </h3>
              <div className="flex flex-col  w-full items-start ">
                {guideline.description.map((desc, index) => (
                  <p
                    className="text-textPrimary text-body font-subtitle font-normal"
                    key={index}
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

export default CommissionGuildLines;
