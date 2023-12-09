import React from 'react'
import getstartedImg from '../../assets/getstartedtoday.png'
import SectionHeader from './SectionHeader';
import MarkIcon2 from '../../assets/mark2.png'
import { Link } from 'react-router-dom';

const GetStartdToday = () => {
    return (
        <div className='get_started_today mb-16'>
            <div className="container">
                <div className='py-16' style={{ backgroundImage: `url(${getstartedImg})`, backgroundRepeat:"no-repeat", backgroundPosition: "center" }}>
                    <SectionHeader
                        sectionTag={"Get Started Today"}
                        sectionTagColor={"text-primary"}
                        sectionTitle={"Experience the Future of "}
                        sectionTitleTwo={"Property Management"}
                        sectionTagColorTwo={"text-primary"}
                        sectionTitleColor={"pb-8"}
                    />


                    <ul className='flex gap-8 justify-center mb-12'>
                        <li className='text-sm font-medium text-slate-black flex items-center gap-3'>
                            <span>
                                <img src={MarkIcon2} alt="mark-icon" />
                            </span>
                            Streamlined Tasks
                        </li>

                        <li className='text-sm font-medium text-slate-black flex items-center gap-3'>
                            <span>
                                <img src={MarkIcon2} alt="mark-icon" />
                            </span>
                            Smart Insights
                        </li>

                        <li className='text-sm font-medium text-slate-black flex items-center gap-3'>
                            <span>
                                <img src={MarkIcon2} alt="mark-icon" />
                            </span>
                            Collaborate Seamlessly
                        </li>

                        <li className='text-sm font-medium text-slate-black flex items-center gap-3'>
                            <span>
                                <img src={MarkIcon2} alt="mark-icon" />
                            </span>
                            Secure and Reliable
                        </li>
                    </ul>

                    <div className='text-center'>
                        <Link className='py-3 px-16 border border-primary w-full iline-block text-center rounded-full text-base font-bold hover:bg-white hover:text-primary bg-primary text-white transition-all duration-300'>
                            Start with Pro
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GetStartdToday