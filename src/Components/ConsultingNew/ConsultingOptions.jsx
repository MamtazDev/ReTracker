import React from 'react'
import SectionHeader from './../Home/SectionHeader';
import markImg3 from '../../assets/mark3.png';

const ConsultingOptions = () => {
    return (
        <section className='ConsultingOptions pt-24 pb-16'>
            <SectionHeader
                sectionTag={"CONSULTING OPTIONS"}
                sectionTagColor={"text-primary"}
                sectionTitle={"Elevate Real Estate Game with "}
                sectionTitleTwo={"Affordable Consulting Offers"}
                sectionTagColorTwo={"text-primary"}
                section_pb={"pb-8"}
            />

            <div className="container max-w-[1030px]">
                <div className="grid grid-cols-12 gap-8">

                    <div className="col-span-6">
                        <div className="card_wrapper p-8 bg-white shadow-lg flex flex-col justify-between h-100">
                            <div className="section-header mb-8">
                                <h2 className='text-xl text-slate-950 font-bold mb-4'>
                                    Hourly Consulting
                                </h2>

                                <h4 className='text-5xl text-slate-950 font-bold'>
                                    $299
                                </h4>
                            </div>

                            

                            <ul>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    1-on-1 Expert Consulting
                                </li>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    Flexible Scheduling
                                </li>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    Tailored Real Estate Guidance
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-6">
                        <div className="card_wrapper p-8 bg-white shadow-lg flex flex-col justify-between h-100">
                            <div className="section-header mb-8">
                                <h2 className='text-xl text-slate-950 font-bold mb-4'>
                                    Hourly Consulting
                                </h2>

                                <h4 className='text-5xl text-slate-950 font-bold'>
                                    $299
                                </h4>
                            </div>

                            <ul>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    Comprehensive Real Estate Strategy Sessions
                                </li>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    5 One-Hour Calls or Fewer Longer Sessions
                                </li>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    Complimentary Access to Short-Term Rental Markets Database (Save $350)
                                </li>
                                <li className='text-base font-normal text-slate-950 flex items-center gap-3 mb-4'>
                                    <span>
                                        <img src={markImg3} alt="mark" />
                                    </span>
                                    Flexible Scheduling
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultingOptions