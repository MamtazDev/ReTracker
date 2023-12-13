import React, { useEffect } from 'react'
import Auth from '../Shared/Auth'
import Banner from '../Components/Consulting/Banner'
import WhatWeDo from '../Components/Consulting/WhatWeDo'
import GetStartedToday from '../Components/Consulting/GetStartedToday'
import Aos from 'aos'


const Consulting = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <Auth>
                <Banner />
            </Auth>
            <WhatWeDo />
            <GetStartedToday />
        </>
    )
}

export default Consulting