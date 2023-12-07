import React from "react";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import Divider from "../../Shared/Divider";
import SocialBtn from "../../Shared/SocialBtn";
import AuthTitle from "../../Shared/AuthTitle";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
      <AuthTitle>Create Account</AuthTitle>
      <SocialBtn />
      <Divider />

      <form>
        <div className="mb-5">
          <label htmlFor="name">
            Full Name <span>(Required)</span>{" "}
          </label>
          <input type="text" id="name" />
        </div>
        <div className="mb-5">
          <label htmlFor="email">
            Email <span>(Required)</span>{" "}
          </label>
          <input type="email" id="email" />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            Password <span>(Required)</span>{" "}
          </label>
          <input type="password" id="password" />
        </div>

        <div className="flex gap-3 items-center mb-10">
          <input type="checkbox" id="stay" />
          <label className="mb-0" htmlFor="stay">
            By providing your email, you agreeing to our{" "}
            <Link to="#">Terms of Service</Link> .
          </label>
        </div>

        <PrimaryBtn>Create Account</PrimaryBtn>
      </form>
    </div>
  );
};

export default SignUp;
