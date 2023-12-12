import Aos from 'aos';
import React, { useEffect } from 'react'

const SectionHeader = ({ sectionTag, sectionTitle, sectionTitleTwo, section_pb, sectionTagColor, sectionTagColorTwo, sectionTitleColor }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className={`section-header ${section_pb}`}>
            <div className="section_tag text-center pb-3">
                {/* text-primary */}

                <p className={`text-lg font-semibold ${sectionTagColor}`}
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {sectionTag}
                </p>
            </div>

            <div className="section_title text-center">
                <h2 className={`text-2xl md:text-6xl font-semibold leading-8 md:leading-[76px] ${sectionTitleColor}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {sectionTitle} <br />
                    {/* className='hidden md:block' */}
                    <span className={`${sectionTagColorTwo}`}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        {sectionTitleTwo}
                    </span>
                </h2>

            </div>
        </div>

    )
}

export default SectionHeader