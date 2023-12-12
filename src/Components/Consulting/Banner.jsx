import React from 'react'
import ConsultancyImg from "../../assets/consultancy.png"

const Banner = () => {
    return (
        <section className="home_banner_section pt-[75px] pb-16 md:pt-[104px] md:px-16">

            <div className="grid grid-cols-12 md:gap-8 items-center">

                <div className="col-span-12 md:col-span-6">
                    <div className="consultancy_img flex justify-center">
                        <span className='md:flex-shrink-0'>
                            <img className='md:w-full' src={ConsultancyImg} alt="consultancy-banner-img" />
                        </span>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <div className="banner_content">
                        <div className="section_title pb-3 md:pb-5">
                            <h2 className="text-2xl md:text-6xl font-bold mb-1">
                                RE Tracker Consulting
                            </h2>
                            <h4 className='text-2xl md:text-5xl font-bold text-primary mb-5'>
                                $ 299.00
                            </h4>
                            <p className='text-sm md:text-lg font-normal text-slate-700 mb-12'>
                                Whether you're a new or an existing real estate / short-term rental investor or a host, we are glad to offer unbiased advice and guidance to help you make the most out of your short-term rental. All of our Consulting Calls will be conducted by our business partner, Alex Stegemann, who brings years of experience and real-world expertise for everything short-term rentals.
                            </p>

                            <button className='primary_btn'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Banner