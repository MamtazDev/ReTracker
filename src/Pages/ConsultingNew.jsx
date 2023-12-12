import React from 'react'
import Auth from '../Shared/Auth'
import Banner from '../Components/ConsultingNew/Banner'
import WhatWeDo from '../Components/ConsultingNew/WhatWeDo'
import GetStartedToday from '../Components/ConsultingNew/GetStartedToday'
import ConsultingOptions from '../Components/ConsultingNew/ConsultingOptions'


const ConsultingNew = () => {
    return (
        <>
            <Auth>
                <Banner />
            </Auth>
            <WhatWeDo />
            <GetStartedToday />
            <ConsultingOptions/>
        </>
    )
}

export default ConsultingNew