import React from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import StepLines from "../../Shared/StepLines";

const StepOne = () => {
  return (
    <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
      <StepLines />

      <p className="text-primary font-bold text-sm mb-3">Step 01</p>
      <AuthTitle>Add Property</AuthTitle>

      <form>
        <div className=" my-10">
          <label htmlFor="search">Enter Address</label>
          <input
            type="search"
            id="search"
            placeholder="Search by street, area or city"
          />
        </div>

        <PrimaryBtn>Continue</PrimaryBtn>
        <button className="text-primary font-bold text-base  text-center mt-4 w-full">
          Skip for now
        </button>
      </form>
    </div>
  );
};

export default StepOne;
