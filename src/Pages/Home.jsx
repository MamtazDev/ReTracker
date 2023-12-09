import React from 'react'
import Header from '../Shared/Header'
import Banner from '../Components/Home/Banner'
import HowItsWorks from '../Components/Home/HowItsWorks'
import PowerFeatures from '../Components/Home/PowerFeatures'
import Testimonal from '../Components/Home/Testimonal'
import Pricing from '../Components/Home/Pricing'
import Faq from '../Components/Home/Faq'

const Home = () => {
    return (
        <>
            <Banner />
            <HowItsWorks />
            <PowerFeatures />
            <Testimonal />
            <Pricing />
            <Faq />
        </>
    )
}

export default Home