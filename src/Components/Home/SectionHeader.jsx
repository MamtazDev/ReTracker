import React from 'react'

const SectionHeader = ({ sectionTag, sectionTitle, sectionTitleTwo, section_pb, sectionTagColor, sectionTagColorTwo }) => {
    return (
        <div className={`section-header ${section_pb}`}>
            <div className="section_tag text-center pb-4">
                {/* text-primary */}
                <p className={`text-lg font-semibold ${sectionTagColor}`}>
                    {sectionTag}
                </p>
            </div>

            <div className="section_title text-center pb-5">
                <h2 className="text-6xl font-bold pb-5">
                    {sectionTitle}
                </h2>
                <h2 className={`text-6xl ${sectionTagColorTwo} font-bold`}>
                    {sectionTitleTwo}
                </h2>
            </div>
        </div>

    )
}

export default SectionHeader