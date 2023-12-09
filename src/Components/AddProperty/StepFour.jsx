import React, { useState } from "react";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";
import AuthTitle from "../../Shared/AuthTitle";
import { FaPlus, FaMinus } from "react-icons/fa";
import CountrySelect from "./CountrySelect";


const StepFour = ({ setStepper }) => {
  const [purchaseYear, setPurchaseYear] = useState(2023);
  const [serviceYear, setServiceYear] = useState(2023);

  return (
    <div>
      <p className="text-primary font-bold text-sm mb-3">Step 04</p>
      <AuthTitle>Purchase Information </AuthTitle>

      <form>
        <div className="mt-10 flex items-center gap-4 mb-4">
          <div className="w-full">
            <label>
              Purchase Year <span>(Required)</span>{" "}
            </label>
            <div className="flex justify-between year">
              <button
                type="button"
                onClick={() => setPurchaseYear(purchaseYear + 1)}
                className="icon"
              >
                <FaPlus />
              </button>
              <p>{purchaseYear}</p>
              <button
                onClick={() => setPurchaseYear(purchaseYear - 1)}
                type="button"
                className="icon"
              >
                <FaMinus />
              </button>
            </div>
          </div>
          <div className="w-full">
            <label>
              Placed into Service <span>(Required)</span>{" "}
            </label>
            <div className="flex justify-between year">
              <button
                onClick={() => setServiceYear(serviceYear + 1)}
                type="button"
                className="icon"
              >
                <FaPlus />
              </button>
              <p>{serviceYear}</p>
              <button
                onClick={() => setServiceYear(serviceYear - 1)}
                type="button"
                className="icon"
              >
                <FaMinus />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
        <CountrySelect/>
          <input type="number" placeholder="0.00" />
        </div>

        <div className="flex items-center gap-4 mt-10">
          <div onClick={() => setStepper(5)} className="w-full">
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
          <div onClick={() => setStepper(3)} className="w-full">
            <OutLineBtn>Go Back</OutLineBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
