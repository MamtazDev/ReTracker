import React, { useEffect } from 'react'
import Banner from '../Components/Home/Banner'
import HowItsWorks from '../Components/Home/HowItsWorks'
import PowerFeatures from '../Components/Home/PowerFeatures'
import Testimonal from '../Components/Home/Testimonal'
import Pricing from '../Components/Home/Pricing'
import Faq from '../Components/Home/Faq'
import Intregations from '../Components/Home/Intregations'
import GetStartdToday from '../Components/Home/GetStartdToday'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <Banner />
            <HowItsWorks />
            <PowerFeatures />
            <Testimonal />
            <Pricing />
            <Faq />
            <Intregations />
            <GetStartdToday />
        </>
    )
}

export default Home;
