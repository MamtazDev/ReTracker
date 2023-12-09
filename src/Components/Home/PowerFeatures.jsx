import React from 'react'
import SectionHeader from './SectionHeader';
import powerfulPattern from '../../assets/pattern_one.png';
import PowerFeaturesCard from './PowerFeaturesCard';
import cardImg1 from '../../assets/card_img1.png'
import cardImg2 from '../../assets/card_img2.png'
import cardImg3 from '../../assets/card_img3.png'
import cardImg4 from '../../assets/card_img4.png'
import cardImg5 from '../../assets/card_img5.png'
import cardImg6 from '../../assets/card_img6.png'

const PowerFeatures = () => {
    return (
        <section
            className='powerful_features py-32'
            style={
                {
                    backgroundImage: `url(${powerfulPattern})`,
                    backgroundRepeat: "no-repeat",
                }
            }
        >
            <SectionHeader
                sectionTag={"Powerful Features"}
                sectionTagColor={"text-primary"}
                sectionTagColorTwo={"text-primary"}
                sectionTitle={"Streamline your property management"}
                sectionTitleTwo={"with powerful features"}
                section_pb={"pb-16"}
            />

            <div className="container">
                <div className="card flex justify-center">
                    <div className="power_features_wrapper max-w-twelveEighty">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg1}
                                    cardTitle={"Intuitive Dashboard"}
                                    cardContent={"Effortlessly navigate through a user-friendly dashboard that provides a comprehensive overview of your properties, tasks, and insights."}
                                    bgColor={"bg-primary"}
                                />
                            </div>
                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg2}
                                    cardTitle={"Property Management"}
                                    cardContent={"Add, edit, and manage your properties with just a few clicks. Our intuitive property management tools empower you to stay organized and informed asset in your portfolio."}
                                    bgColor={"bg-emerald-500"}
                                />
                            </div>
                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg3}
                                    cardTitle={"Calendar View"}
                                    cardContent={"Log hours spent on property-related tasks and gain a visual perspective with our interactive calendar view. Track your activities efficiently and plan for future endeavors."}
                                    bgColor={"bg-amber"}
                                />
                            </div>

                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg4}
                                    cardTitle={"Customizable Categories"}
                                    cardContent={"Tailor RE Tracker to fit your unique needs by customizing task categories. Whether it's repairs, analyses, or consultations, adapt the platform."}
                                    bgColor={"bg-orange"}
                                />
                            </div>

                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg5}
                                    cardTitle={"Smart Analytics"}
                                    cardContent={"Make informed decisions with our analytics dashboard. Gain valuable insights into your property portfolio's performance, track trends, and identify areas for improvement."}
                                    bgColor={"bg-blue-500"}
                                />
                            </div>

                            <div className="col-span-4">
                                <PowerFeaturesCard
                                    cardImg={cardImg6}
                                    cardTitle={"Collaborate Seamlessly"}
                                    cardContent={"Enhance teamwork by inviting coworkers to collaborate on your properties. Share responsibilities, communicate effortlessly, and elevate your property management."}
                                    bgColor={"bg-pink-500"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PowerFeatures