import React from "react";
import Auth from "../Shared/Auth";
import StepOne from "../Components/AddProperty/StepOne";
import StepTwo from "../Components/AddProperty/StepTwo";
import StepThree from "../Components/AddProperty/StepThree";

const AddProperty = () => {
  return (
    <Auth>
      {/* <StepOne /> */}
      {/* <StepTwo/> */}
      <StepThree/>
    </Auth>
  );
};

export default AddProperty;
