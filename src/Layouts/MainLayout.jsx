import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
