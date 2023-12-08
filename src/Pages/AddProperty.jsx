import React from "react";
import Auth from "../Shared/Auth";
import StepOne from "../Components/AddProperty/StepOne";
import StepTwo from "../Components/AddProperty/StepTwo";

const AddProperty = () => {
  return (
    <Auth>
      {/* <StepOne /> */}
      <StepTwo/>
    </Auth>
  );
};

export default AddProperty;
