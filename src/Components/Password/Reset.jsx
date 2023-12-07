import React from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const Reset = () => {
  return (
    <div className="pb-p_188 pt-p_228 max-w-authWidth mx-auto">
      <AuthTitle>Reset Password </AuthTitle>
      <p className="mt-3 mb-10 text-base font-normal text-[#78716C]">
        Enter a new password and confirm your new password to reset.
      </p>

      <form>
        <div className="mb-5">
          <label htmlFor="new-pass">
            New Password <span>(Required)</span>{" "}
          </label>
          <input type="password" id="new-pass" />
        </div>
        <div className="mb-10">
          <label htmlFor="cfr-pass">
            Confirm Password <span>(Required)</span>{" "}
          </label>
          <input type="password" id="cfr-pass" />
        </div>

        <PrimaryBtn>Reset Password </PrimaryBtn>
      </form>
    </div>
  );
};

export default Reset;
