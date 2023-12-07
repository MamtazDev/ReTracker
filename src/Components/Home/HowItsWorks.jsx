import React from 'react'
import setpOne from '../../assets/step1.png'
import setpTwo from '../../assets/step2.png'
import setpThree from '../../assets/step3.png'
import HowItsWorksStep from './HowItsWorksStep'

const HowItsWorks = () => {
    return (
        <section className='howitworks py-32 bg-drakWhite'>
            <div className='container'>

                <div className="section-header">
                    <div className="section_tag text-center pb-4">
                        <p className="text-lg font-semibold text-primary">
                            How it works?
                        </p>
                    </div>

                    <div className="section_title text-center pb-5">
                        <h2 className="text-6xl font-bold pb-5">
                            The Easy Way to get started
                        </h2>
                        <h2 className="text-6xl text-primary font-bold">
                            to manage property
                        </h2>
                    </div>
                </div>



                <HowItsWorksStep
                    cardImg={setpOne}
                    stepNumber={"Step 01"}
                    createAccount={"Create account"}
                    cardDes={"Begin your RE Tracker journey by registering for an account"}
                    featuresOne={"Fill in the required fields with basic information, including your name, email address."}
                    featuresTwo={"Create a secure password following the specified guidelines."}
                    featuresThree={"Check your email inbox for a verification message from RE Tracker"}
                    featuresFour={"Return to the RE Tracker website and log in with your newly created credentials."}

                    btnName={"Sign up"}
                    btnLink={"/sign-up"}
                />

                <HowItsWorksStep
                    cardImg={setpTwo}
                    stepNumber={"Step 02"}
                    createAccount={"Add Properties"}
                    cardDes={"Begin by effortlessly adding your properties using the intuitive dashboard"}
                    featuresOne={"Locate the prominently displayed 'Add Property' button and click on it"}
                    featuresTwo={"Input property details such as address, image, type, year bought, and price bought into the provided form"}
                    featuresThree={"Click the 'Save' or 'Add Property' button on the form to save the information"}
                    featuresFour={"Receive a confirmation message or be redirected back to the main dashboard"}
                    btnName={"Try for free"}
                    btnLink={"/try-for-free"}
                />

                <HowItsWorksStep
                    cardImg={setpThree}
                    stepNumber={"Step 03"}
                    createAccount={"Analyze and Optimize"}
                    cardDes={"Begin by effortlessly adding your properties using the intuitive dashboard"}
                    featuresOne={"Open the Analytics Dashboard to gain insights into property performance"}
                    featuresTwo={"Investigate trends and generate detailed reports to understand property-related activities"}
                    featuresThree={"Utilize gathered data to inform strategic decisions and optimize your real estate approach"}
                    featuresFour={"Leverage RE Tracker's analytics tools to continuously analyze, strategize, and optimize your property management practices"}
                    btnName={"Try for free"}
                    btnLink={"/try-for-free"}
                />



            </div>
        </section>
    )
}

export default HowItsWorks