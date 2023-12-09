import React from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import StepLines from "../../Shared/StepLines";

const StepOne = ({ stepper, setStepper }) => {
  return (
    <div>
      {/* <StepLines stepper={stepper} /> */}

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
        <div onClick={() => setStepper(2)}>
          <PrimaryBtn>Continue</PrimaryBtn>
        </div>

        <button className="text-primary font-bold text-base  text-center mt-4 w-full">
          Skip for now
        </button>
      </form>
    </div>
  );
};

export default StepOne;
