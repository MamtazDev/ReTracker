import React, { useEffect } from "react";
import Auth from "../Shared/Auth";
import Banner from "../Components/ConsultingNew/Banner";
import WhatWeDo from "../Components/ConsultingNew/WhatWeDo";
import GetStartedToday from "../Components/ConsultingNew/GetStartedToday";
import ConsultingOptions from "../Components/ConsultingNew/ConsultingOptions";
import Aos from "aos";

const ConsultingNew = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Auth>
        <Banner />
      </Auth>
      <WhatWeDo />
      <GetStartedToday />
      <ConsultingOptions />
    </>
  );
};

export default ConsultingNew;
