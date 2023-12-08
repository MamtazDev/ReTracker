import React from 'react'
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <section className='pricing py-32 bg-drakWhite'>
            <div className="container">
                <SectionHeader
                    sectionTag={"Pricing"}
                    sectionTagColor={"text-primary"}
                    sectionTitle={"Pricing built to suit all"}
                    sectionTitleTwo={"types of business"}
                    sectionTagColorTwo={"text-primary"}
                    section_pb={"pb-8"}
                />

                <div className="subcription_type flex justify-center mb-10">
                    <div className="btn_wrapper border border-slate-200 flex p-2 rounded-full">
                        <div>
                            <button className='py-4 px-4 bg-lightPrimary rounded-full text-primary text-base font-bold'>
                                Monthly
                            </button>
                        </div>

                        <div>
                            <button className='py-4 px-4'>
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center pb-16'>
                    <div class="grid grid-cols-12 gap-4">
<PricingCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing