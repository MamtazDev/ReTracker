import React from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import { IoMdCheckmark } from "react-icons/io";
import Confetti from "react-confetti";

const Verification = () => {
  return (
    <div className=" pb-p_188 pt-p_228 max-w-authWidth mx-auto text-center">
      <Confetti />
      <div
        style={{ height: "64px", width: "64px" }}
        className="icon mx-auto mb-10"
      >
        <IoMdCheckmark className="text-3xl" />
      </div>

      <AuthTitle>Welcome to RETracker</AuthTitle>
      <p className="mt-3 mb-10 text-base font-normal text-[#78716C]">
        You have been verified to our platform successfully. Opening doors to
        manage your property like never before.
      </p>

      <PrimaryBtn>Continue </PrimaryBtn>
    </div>
  );
};

export default Verification;
