import { useEffect } from "react";
import Footer from "../Shared/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
