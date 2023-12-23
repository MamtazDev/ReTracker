import { useEffect } from "react";
import Aos from "aos";
import Banner from "../Components/ConsultingNew/Banner";
import ConsultingOptions from "../Components/ConsultingNew/ConsultingOptions";
import GetStartedToday from "../Components/ConsultingNew/GetStartedToday";
import WhatWeDo from "../Components/ConsultingNew/WhatWeDo";
import Auth from "../Shared/Auth";

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
