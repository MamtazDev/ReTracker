import  { useState } from "react";
import Auth from "../Shared/Auth";
import StepOne from "../Components/AddProperty/StepOne";
import StepTwo from "../Components/AddProperty/StepTwo";
import StepThree from "../Components/AddProperty/StepThree";
import StepLines from "../Shared/StepLines";
import StepFour from "../Components/AddProperty/StepFour";
import StepFive from "../Components/AddProperty/StepFive";

const AddProperty = () => {
  const [stepper, setStepper] = useState(1);
  const paddingClassname =
    stepper === 1
      ? "pb-p_105 lg:pb-p_254 pt-p_113 lg:pt-p_168 "
      : stepper === 2
      ? "pb-5 lg:pb-16 pt-10 lg:pt-p_168"
      : stepper === 3
      ? "pb-5 lg:pb-16 pt-10 lg:pt-p_168"
      : stepper === 4
      ? "pb-5 lg:pb-p_268 pt-10 lg:pt-p_168"
      : "pb-5 lg:pb-p_148 pt-10 lg:pt-p_168";
  return (
    <Auth>
      <div className={`${paddingClassname} max-w-authWidth mx-auto`}>
        {stepper !== 5 && <StepLines stepper={stepper} />}
        {stepper === 1 && <StepOne stepper={stepper} setStepper={setStepper} />}
        {stepper === 2 && <StepTwo stepper={stepper} setStepper={setStepper} />}
        {stepper === 3 && (
          <StepThree stepper={stepper} setStepper={setStepper} />
        )}
        {stepper === 4 && (
          <StepFour stepper={stepper} setStepper={setStepper} />
        )}
        {stepper === 5 && (
          <StepFive stepper={stepper} setStepper={setStepper} />
        )}
      </div>
    </Auth>
  );
};

export default AddProperty;
