import React from 'react'

import markIcon from '../../assets/mark.png'
import { Link } from 'react-router-dom'

const HowItsWorksStep = ({ stepNumber, createAccount, cardDes, featuresOne, featuresTwo, featuresThree, featuresFour, featuresFive, cardImg, btnName, btnLink }) => {
    return (
        <div className='flex justify-center'>
            <div className='howitworks-card card_wrapper'>
                <div className='card_border'>
                    <div class="grid grid-cols-12 gap-4">

                        <div class="col-span-5">
                            <div className="card_info pb-8">
                                <div className="card_tag pb-2">
                                    <p className='text-sm font-semibold text-primary'>
                                        {stepNumber}
                                    </p>
                                </div>

                                <div className="card_title pb-1">
                                    <h2 className='text-4xl font-semibold text-clr_black'>
                                        {createAccount}
                                    </h2>
                                </div>

                                <div className="card_des">
                                    <p className='text-base font-normal text-clr_black'>
                                        {cardDes}
                                    </p>
                                </div>
                            </div>

                            <div className="card_features">
                                <ul>
                                    <li className='flex items-center gap-4 text-sm font-medium text-clr_black mb-4'>
                                        <span>
                                            <img src={markIcon} alt="mark-icon" />
                                        </span>
                                        {featuresOne}
                                    </li>
                                    <li className='flex items-center gap-4 text-sm font-medium text-clr_black mb-4'>
                                        <span>
                                            <img src={markIcon} alt="mark-icon" />
                                        </span>
                                        {featuresTwo}
                                    </li>
                                    <li className='flex items-center gap-4 text-sm font-medium text-clr_black mb-4'>
                                        <span>
                                            <img src={markIcon} alt="mark-icon" />
                                        </span>
                                        {featuresThree}
                                    </li>
                                    <li className='flex items-center gap-4 text-sm font-medium text-clr_black mb-4'>
                                        <span>
                                            <img src={markIcon} alt="mark-icon" />
                                        </span>
                                        {featuresFour}
                                    </li>

                                </ul>
                            </div>

                            <div className="card_btn">
                                <button className='border border-primary px-20 py-6 rounded-full'>
                                    <Link to={btnLink} className='text-base font-bold text-primary'>
                                        {btnName}
                                    </Link>
                                </button>
                            </div>

                        </div>

                        <div class="col-span-7">
                            <div className="card_img">
                                <img className='' src={cardImg} alt="card-img" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowItsWorksStep