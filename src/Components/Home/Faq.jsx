import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import FaqAccordion from './FaqAccordion'
import faqBackground from '../../assets/faq-background.png'
import FaqAccordionTwo from './FaqAccordionTwo'
import FaqAccordionThree from './FaqAccordionThree'
import FaqAccordionFour from './FaqAccordionFour'
import FaqAccordionFive from './FaqAccordionFive'

const Faq = () => {
    const [activeTab, setActiveTab] = useState('Basics');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Basics');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <section className='faq py-8 md:py-32 bg-dark' style={{ backgroundImage: `url(${faqBackground})`, backgroundRepeat: "no-repeat" }}>
            <div className="container px-5">
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
                    <div className='bg-btnGroup p-2 rounded-full hidden md:inline-block'>
                        <button
                            className={`text-white py-2 px-4 rounded-full ${activeTab === 'Basics'
                                ? 'btnGradientClr font-bold'
                                : ''
                                }`}
                            onClick={() => handleTabClick('Basics')}
                        >
                            Basics
                        </button>

                        <button
                            className={`text-white py-2 px-4 ${activeTab === 'Company' ? 'btnGradientClr rounded-full font-bold' : ''}`}
                            onClick={() => handleTabClick('Company')}
                        >
                            Company
                        </button>

                        <button
                            className={`text-white py-2 px-4 ${activeTab === 'Pricing' ? 'btnGradientClr rounded-full font-bold' : ''}`}
                            onClick={() => handleTabClick('Pricing')}
                        >
                            Pricing
                        </button>

                        <button
                            className={`text-white py-2 px-4 ${activeTab === 'Features' ? 'btnGradientClr rounded-full font-bold' : ''}`}
                            onClick={() => handleTabClick('Features')}
                        >
                            Features
                        </button>

                        <button
                            className={`text-white py-2 px-4 ${activeTab === 'Compare' ? 'btnGradientClr rounded-full font-bold' : ''}`}
                            onClick={() => handleTabClick('Compare')}
                        >
                            Compare
                        </button>
                    </div>

                    <div className='bg-btnGroup p-2 rounded-full inline-block md:hidden'>
                        <div className="relative inline-block text-left ">
                            <div className=' btnGradientClr rounded-full'>
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className={`w-[320px] flex justify-between items-center py-2 px-4 ${isOpen ? 'text-white' : 'text-white'}`}
                                >
                                    <div className='selectedItem'>
                                        {selectedOption}
                                    </div>
                                    <div className='toggoleBtn'>
                                        <svg className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? '' : 'transform rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="w-[320px] py-1">
                                        <button
                                            onClick={() => selectOption('Basics')}
                                            className={` px-4 py-2 text-sm w-full`}
                                        >
                                            Basics
                                        </button>
                                        <button
                                            onClick={() => selectOption('Option 1')}
                                            className={` px-4 py-2 text-sm w-full`}
                                        >
                                            Option 1
                                        </button>
                                        <button
                                            onClick={() => selectOption('Option 2')}
                                            className={` px-4 py-2 text-sm  w-full`}
                                        >
                                            Option 2
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {
                    activeTab === 'Basics' && (
                        <FaqAccordion />
                    )
                }

                {
                    activeTab === 'Company' && (
                        <FaqAccordionTwo />
                    )
                }

                {
                    activeTab === 'Pricing' && (
                        <FaqAccordionThree />
                    )
                }

                {
                    activeTab === 'Pricing' && (
                        <FaqAccordionThree />
                    )
                }

                {
                    activeTab === 'Features' && (
                        <FaqAccordionFour />
                    )
                }

                {
                    activeTab === 'Compare' && (
                        <FaqAccordionFive />
                    )
                }

            </div>
        </section>
    )
}

export default Faq