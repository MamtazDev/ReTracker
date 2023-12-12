import React from 'react'
import Auth from '../Shared/Auth'
import Banner from '../Components/Consulting/Banner'
import WhatWeDo from '../Components/Consulting/WhatWeDo'
import GetStartedToday from '../Components/Consulting/GetStartedToday'


const Consulting = () => {
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