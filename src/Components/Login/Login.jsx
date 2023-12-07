import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import AuthTitle from '../../Shared/AuthTitle';
import SocialMediaBtn from '../../Shared/SocialMediaBtn';
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

const Login = () => {
    return (
        <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
        <AuthTitle>Login to Your Account</AuthTitle>
        <div className="flex gap-4 items-center mt-10">
          <SocialMediaBtn pic={google} name="Continue with Google" />
          <SocialMediaBtn pic={facebook} name="Continue with Facebook" />
        </div>
        <div className="w-full flex gap-6 items-center my-8">
          <p className="border border-b-lightGray w-full"></p>
          <p className="text-base font-semibold">OR</p>
          <p className="border border-b-lightGray w-full"></p>
        </div>

        <form>
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

          <div className="flex justify-between items-center gap-3 mb-10">
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="stay" />
              <label className="mb-0" htmlFor="stay">
                Stay signed in
              </label>
            </div>
            <p className="text-primary font-semibold text-sm ">
              I forgot my password
            </p>
          </div>
          <PrimaryBtn>Login</PrimaryBtn>
        </form>
      </div>
    );
};

export default Login;