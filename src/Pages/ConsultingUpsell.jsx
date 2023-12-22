import React from "react";
import Auth from "../Shared/Auth";
import Banner from "../Components/ConsultingUpsell/Banner";
import Header from "../Shared/Header";
import Packages from "../Components/ConsultingUpsell/Packages";

const ConsultingUpsell = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full top-7 lg:top-16 z-10">
          <Header />
        </div>
        <Banner />
      </div>
      <Packages />
    </div>
  );
};

export default ConsultingUpsell;
