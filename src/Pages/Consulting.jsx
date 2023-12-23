import Aos from "aos";
import React, { useEffect } from "react";
import Banner from "../Components/Consulting/Banner";
import GetStartedToday from "../Components/Consulting/GetStartedToday";
import WhatWeDo from "../Components/Consulting/WhatWeDo";
import Auth from "../Shared/Auth";

const Consulting = () => {
  
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
    </>
  );
};

export default Consulting;
