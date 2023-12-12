import React from 'react'

const GetStartedToday = () => {
    return (
        <section className='GetStartedToday py-16'>
            <div className="container">
                <div className="getStarTedCard bg-slate-950 p-16 rounded-3xl">
                    <div className="card_content text-center">
                        <h2 className='text-5xl font-bold text-white mb-12'>
                            Get Started Today
                        </h2>
                        <div className="card_btn flex flex-wrap justify-center gap-6">
                            <button className='btnGradientClr py-3 px-9 rounded-full text-base font-bold text-white'>
                                REGISTER FOR STR COURSES
                            </button>

                            <button className='border border-white bg-transparent py-3 px-9 rounded-full text-base font-bold text-white'>
                                REGISTER FOR STR COURSES
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStartedToday