import Auth from "../Shared/Auth";
import AuthTitle from "../Shared/AuthTitle";
import SocialMediaBtn from "../Shared/SocialMediaBtn";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Login = () => {
  return (
    <Auth>
      <div className="pb-28 pt-[153px] max-w-[504px] mx-auto">
        <AuthTitle>Login to Your Account</AuthTitle>
        <div className="flex gap-4 items-center mt-10">
          <SocialMediaBtn pic={google} name="Continue with Google" />
          <SocialMediaBtn pic={facebook} name="Continue with Facebook" />
        </div>
        <div></div>
      </div>
    </Auth>
  );
};

export default Login;
