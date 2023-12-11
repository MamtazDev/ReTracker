import { useLocation, useNavigate } from "react-router";
import "../Styles/Auth.css";
import Header from "./Header";

const Auth = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative">
      <div className="absolute w-full top-7 lg:top-16">
        <Header />
      </div>
      <div
        className={
          location.pathname === "/" ? "auth_home_layout" : "auth_layout"
        }
      >
        <div className="container mx-auto">

          <div className="lg:max-w-[1536px] w-full bg-white rounded-3xl mx-4 lg:mx-0">

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
