import React, { useState } from "react";
import StepLines from "../../Shared/StepLines";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";

const StepTwo = ({ stepper, setStepper }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  const options = [
    {
      title: "Short-Term Rental (STR)",
      subtitle:
        "STRs offer property owners the advantage of higher nightly rates and flexibility in property use, allowing for increased income during peak demand periods.",
    },
    {
      title: "Long-Term Rental (LTR)",
      subtitle:
        "LTRs provide stable, predictable income with less hands-on management, appealing to those seeking consistency and reduced turnover.",
    },
    {
      title: "Hybrid",
      subtitle:
        "Hybrid rental models provide property owners with income diversification, market adaptability, and the flexibility to use the property personally.",
    },
  ];
  return (
    <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
      <StepLines />

      <p className="text-primary font-bold text-sm mb-3">Step 02</p>
      <AuthTitle>Property Type </AuthTitle>

      <form>
        <div className=" my-10">
          <label htmlFor="search">Type Lists </label>
          <div className="flex flex-col gap-3">
            {options.map((option, index) => (
              <div
                onClick={() => handleOptionClick(index)}
                key={index}
                className="border border-[#E5E7EB] rounded-lg p-5 flex items-start gap-4 "
              >
                <div
                  className={`cursor-pointer flex-shrink-0 h-4 w-4 rounded-full mt-1 ${
                    selectedOption === index
                      ? "border-4 border-primary"
                      : "border-2 border-[#E5E7EB]"
                  }`}
                ></div>
                <div>
                  <p className="text-base font-semibold text-[#1F2937]">
                    {option?.title}
                  </p>
                  <p className="text-[#6B7280] text-sm font-normal">
                    {option?.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full" onClick={() => setStepper(3)}>
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
          <div className="w-full" onClick={() => setStepper(1)}>
            <OutLineBtn>Go Back</OutLineBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
