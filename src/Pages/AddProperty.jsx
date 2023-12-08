import React, { useState } from "react";
import Auth from "../Shared/Auth";
import StepOne from "../Components/AddProperty/StepOne";
import StepTwo from "../Components/AddProperty/StepTwo";
import StepThree from "../Components/AddProperty/StepThree";

const AddProperty = () => {
  const [stepper, setStepper] = useState(1);
  return (
    <Auth>
      {stepper === 1 && <StepOne stepper={stepper} setStepper={setStepper} />}
      {stepper === 2 && <StepTwo stepper={stepper} setStepper={setStepper} />}
      {stepper === 3 && <StepThree stepper={stepper} setStepper={setStepper} />}
    </Auth>
  );
};

export default AddProperty;
