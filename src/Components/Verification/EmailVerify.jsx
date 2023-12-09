import { Link } from "react-router-dom";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";

const EmailVerify = () => {
  return (
    <div className="email_verify pb-28 pt-p_153 max-w-authWidth mx-auto">
      <AuthTitle>Verify Email</AuthTitle>
      <p className="text-secondary text-base font-normal mt-3 mb-10">
        Enter the 6-digit code we just sent to{" "}
        <span className="text-black">name@example.com</span>{" "}
      </p>
      <div className="flex items-center gap-4 mb-5">
        <div className="icon">
          <MdOutlineEmail />
        </div>
        <p className="text-slate-black font-medium text-sm">Change Email</p>
      </div>
      <div className="flex items-center gap-4 mb-10">
        <div className="icon">
          <TbBrandTelegram />{" "}
        </div>
        <p className="text-slate-black font-medium text-sm">
          Wait 1:57 seconds before requesting a new code.
        </p>
      </div>
      <form>
        <div className="flex items-center gap-4 mb-5">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input key={index} type="number" />
          ))}
        </div>
        <p className="text-secondary font-medium text-base mb-10">
          Can’t find the code? Please check your spam folder.
        </p>
        <Link to="/successful-verification">
          <PrimaryBtn>Verify Email</PrimaryBtn>
        </Link>
      </form>
    </div>
  );
};

export default EmailVerify;
