import React, { useState } from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import StepLines from "../../Shared/StepLines";
import { Link } from "react-router-dom";

const StepOne = ({ setStepper }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleContinue = () => {
    if (searchInput.trim() !== "") {
      setStepper(2);
    }
  };
  return (
    <div>
      <p className="text-primary font-bold text-sm mb-3">Step 01</p>
      <AuthTitle>Add Property</AuthTitle>

      <form>
        <div className=" my-10">
          <label htmlFor="search">Enter Address</label>
          <input
            type="search"
            id="search"
            placeholder="Search by street, area or city"
            required
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <div onClick={handleContinue}>
          <PrimaryBtn disabled={searchInput.trim() === ""}>Continue</PrimaryBtn>
        </div>

        <Link
          to="/"
          className="text-primary font-bold block text-base  text-center mt-4 w-full"
        >
          Skip for now
        </Link>
      </form>
    </div>
  );
};

export default StepOne;
