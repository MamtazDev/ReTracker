import PrimaryBtn from "../../Shared/PrimaryBtn";
import AuthTitle from "../../Shared/AuthTitle";
import Divider from "../../Shared/Divider";
import SocialBtn from "../../Shared/SocialBtn";
import { useState } from "react";

const Login = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
      <AuthTitle>Login to Your Account</AuthTitle>
      <SocialBtn />
      <Divider />

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
          <label className="flex items-center gap-4">
            <input
              className="hidden"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`${
                isChecked && "bg-slate-200"
              } border  border-slate-200 rounded-sm h-[18px] w-[18px] flex items-center justify-center`}
            >
              {isChecked ? "✔" : ""}
            </span>
            Stay signed in
          </label>

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
