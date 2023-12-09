import React from 'react'
import SectionHeader from './SectionHeader'
import intregrationImg from '../../assets/integrations.png'
import { Link } from 'react-router-dom'

const Intregations = () => {
    return (
        <section className='intregrations py-32'>
            <div className="container">
                <SectionHeader sectionTag={"Integrations"} sectionTagColor={"text-primary"} sectionTitle={"Elevate Property Management Efficiency"} sectionTitleTwo={"with 50+ Integrations."} sectionTagColorTwo={"text-primary"} section_pb={"pb-16"}
                />

                <div className='flex justify-center pb-16'>
                    <img src={intregrationImg} alt="img" />
                </div>

                <p className='text-lg font-normal text-slate-black text-center mb-8'>
                    Experience a new level of productivity as RE Tracker seamlessly integrates with 50+ tools, <br /> enhancing your property management with unmatched efficiency and precision.
                </p>

                <div className='text-center'>
                    <Link className='py-3 px-16 border border-primary w-full text-center rounded-full text-base font-bold hover:bg-primary  text-primary hover:text-white transition-all duration-300'>
                        Start with Pro
                    </Link>
                </div>


            </div>


        </section>
    )
}

export default Intregations