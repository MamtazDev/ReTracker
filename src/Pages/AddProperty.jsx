import React, { useState } from "react";
import Auth from "../Shared/Auth";
import StepOne from "../Components/AddProperty/StepOne";
import StepTwo from "../Components/AddProperty/StepTwo";
import StepThree from "../Components/AddProperty/StepThree";
import StepLines from "../Shared/StepLines";

const AddProperty = () => {
  const [stepper, setStepper] = useState(1);
  return (
    <Auth>
      <div   className="pb-28 pt-p_153 max-w-authWidth mx-auto">
     {stepper!==5 && <StepLines stepper={stepper}/>}
      {stepper === 1 && <StepOne stepper={stepper} setStepper={setStepper} />}
      {stepper === 2 && <StepTwo stepper={stepper} setStepper={setStepper} />}
      {stepper === 3 && <StepThree stepper={stepper} setStepper={setStepper} />}
      </div>
  
     
    </Auth>
  );
};

export default AddProperty;
