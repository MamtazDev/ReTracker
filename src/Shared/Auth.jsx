import { useLocation, useNavigate } from "react-router";
import "../Styles/Auth.css";
import Header from "./Header";

const Auth = ({ children }) => {
  const checkPath = useLocation();
  const isHomepage = checkPath.pathname
  console.log(isHomepage)
  // console.log(checkPath)
  return (
    <div className="relative">
      <div className="absolute w-full top-16">
        <Header />
      </div>
      <div className={isHomepage ? "auth_home_layout" : "auth_layout"}>
        <div className="container mx-auto">
          <div className="max-w-[1536px] w-full bg-white rounded-3xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
