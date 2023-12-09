import React from 'react'
import { Link } from 'react-router-dom'
import MarkIcon2 from '../../assets/mark2.png'

const PricingCard = ({ planType, planDetails, subType, featuresOne, featuresTwo, featuresThree, featuresFour, featuresFive, subBtn, sub_time }) => {
    return (

        <div className='pricing-card max-w-[405px] h-full'>
            <div className=' h-full flex flex-col justify-between'>
                <div className="card_content bg-white rounded-2xl p-2">
                    <div className="pricing_card_type border p-8 rounded-t-2xl">
                        <div className="card_title">
                            <div className="packages_name">
                                <h2 className='text-xl font-bold text-slate-black pb-2'>
                                    {planType}
                                </h2>
                                <p className='text-base font-normal text-slate-black'>
                                    {planDetails}
                                </p>
                            </div>
                        </div>

                        <div className="sub_type py-8">
                            <h2 className='text-4xl font-semibold text-slate-black'>
                                {subType}<small className='text-base font-normal text-secondary'>{sub_time}</small>
                            </h2>
                        </div>

                        <Link className='py-3 border border-primary w-full block text-center rounded-full text-base font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                            {subBtn}

                        </Link>
                    </div>

                    <div className="pricing_card_features border p-8 border-t-0 rounded-b-2xl">
                        <ul>
                            <li className='flex items-center gap-2 mb-4 text-sm font-normal text-slate-black'>
                                <span>
                                    <img className='w-full' src={MarkIcon2} alt="mark-icon" />
                                </span>
                                {featuresOne}
                            </li>

                            <li className='flex items-center gap-2 mb-4 text-sm font-normal text-slate-black'>
                                <span>
                                    <img src={MarkIcon2} alt="mark-icon" />
                                </span>
                                {featuresTwo}
                            </li>

                            <li className='flex items-center gap-2 mb-4 text-sm font-normal text-slate-black'>
                                <span>
                                    <img src={MarkIcon2} alt="mark-icon" />
                                </span>
                                {featuresThree}
                            </li>

                            <li className='flex items-center gap-2 mb-4 text-sm font-normal text-slate-black'>
                                <span>
                                    <img src={MarkIcon2} alt="mark-icon" />
                                </span>
                                {featuresFour}
                            </li>

                            <li className='flex items-center gap-2 text-sm font-normal text-slate-black'>
                                <span>
                                    <img src={MarkIcon2} alt="mark-icon" />
                                </span>
                                {featuresFive}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PricingCard