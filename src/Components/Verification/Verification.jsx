import React from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const Verification = () => {
  return (
    <div className="verification pb-p_188 pt-p_228 max-w-authWidth mx-auto text-center">
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
