import React from 'react'
import SectionHeader from './SectionHeader'
import FaqAccordion from './FaqAccordion'

const Faq = () => {
    return (
        <section className='faq py-8 md:py-32 bg-dark'>
            <div className="container">
                <SectionHeader
                    sectionTag={"RETracker FAQ’s"}
                    sectionTagColor={"text-primary"}
                    sectionTitle={"Frequently Asked "}
                    sectionTitleColor={"text-white"}
                    sectionTitleTwo={"Questions"}
                    sectionTagColorTwo={"text-primary"}
                    section_pb={"pb-8 md:pb-16"}
                />

                <div className="btn_wrapper flex justify-center mb-8">
                    <div className='bg-btnGroup p-2 rounded-full inline-block'>
                        <button className='text-white py-2 px-4 btnGradientClr rounded-full'>
                            Basics
                        </button>

                        <button className='text-white  py-2 px-4'>
                            Company
                        </button>

                        <button className='text-white  py-2 px-4'>
                            Pricing
                        </button>

                        <button className='text-white  py-2 px-4'>
                            Features
                        </button>

                        <button className='text-white  py-2 px-4'>
                            Compare
                        </button>

                    </div>
                </div>

                <FaqAccordion />

            </div>
        </section>
    )
}

export default Faq