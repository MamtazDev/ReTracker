import React from 'react'

const SectionHeader = ({ sectionTag, sectionTitle, sectionTitleTwo, section_pb, sectionTagColor, sectionTagColorTwo }) => {
    return (
        <div className={`section-header ${section_pb}`}>
            <div className="section_tag text-center pb-3">
                {/* text-primary */}
                <p className={`text-lg font-semibold ${sectionTagColor}`}>
                    {sectionTag}
                </p>
            </div>

            <div className="section_title text-center">
                <h2 className="text-6xl font-semibold leading-[76px]">
                    {sectionTitle} <br />
                    <span className={`${sectionTagColorTwo}`}>
                        {sectionTitleTwo}
                    </span>
                </h2>

            </div>
        </div>

    )
}

export default SectionHeader