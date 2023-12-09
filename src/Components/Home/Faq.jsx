import React from 'react'
import SectionHeader from './SectionHeader'

const Faq = () => {
    return (
        <section className='faq py-32 bg-dark'>
            <div className="container">
                <SectionHeader
                    sectionTag={"RETracker FAQ’s"}
                    sectionTagColor={"text-primary"}
                    sectionTitle={"Frequently Asked "}
                    sectionTitleColor={"text-white"}
                    sectionTitleTwo={"Questions"}
                    sectionTagColorTwo={"text-primary"}
                />

                <div>
                    <button className='text-white py-2 px-4'>
                        Basics
                    </button>
                </div>


            </div>
        </section>
    )
}

export default Faq