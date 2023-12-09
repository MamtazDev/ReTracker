import React, { useState } from 'react'
import plus from "../../assets/accordion-plus.png";
import minus from "../../assets/accordion-minus.png";

const FaqAccordion = () => {
    const [isOpen, setIsOpen] = useState(0);
    const accoprdionData = [
        {
            id: 1,
            ques: "How do I add a new property to my portfolio on RE Tracker?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },

        {
            id: 2,
            ques: "Can I invite co-workers to collaborate on my properties?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },

        {
            id: 3,
            ques: "What types of properties can I manage with RE Tracker?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },

        {
            id: 4,
            ques: "How do I log hours spent on property-related tasks?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 5,
            ques: "Is there a limit to the number of properties I can add?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 6,
            ques: "How do I add a new property to my portfolio on RE Tracker?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 7,
            ques: "Can I invite co-workers to collaborate on my properties?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 8,
            ques: "What types of properties can I manage with RE Tracker?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 9,
            ques: "How do I log hours spent on property-related tasks?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
        {
            id: 10,
            ques: "Is there a limit to the number of properties I can add?",
            ans: "To add a property, simply click 'Add Property' on the main dashboard, fill in details like address and type, and hit 'Save.' Your new property is now part of your RE Tracker account, streamlining your real estate management effortlessly.",
        },
    ];
    return (

        <div className="faq">
            <div className="container">
                <div className='grid grid-cols-12 gap-6'>
                    <div className="col-span-6">

                        {accoprdionData.slice(0,5).map((data, index) => (
                            <div key={index} className={"bg-btnGroup rounded-2xl mb-6"}>
                                <div onClick={() => setIsOpen(index === isOpen ? null : index)} className={index === isOpen ? "flex border-b border-darkTwo justify-between cursor-pointer p-5" : "flex justify-between border-0 cursor-pointer p-5"}>
                                    <p className="text-base text-white font-semibold">
                                        {data.ques}
                                    </p>

                                    <img className="" src={isOpen === index ? minus : plus} alt="icon" />
                                </div>
                                {isOpen === index && (
                                    <p className="text-white text-sm font-normal p-5">
                                        {data.ans}
                                    </p>
                                )}
                            </div>

                        ))}

                    </div>
                    <div className="col-span-6">

                        {accoprdionData.slice(5, 10).map((data, index) => (
                            <div key={index} className={"bg-btnGroup rounded-2xl mb-6"}>
                                <div onClick={() => setIsOpen(data?.id === isOpen ? null : data?.id)} className={data?.id === isOpen ? "flex border-b border-darkTwo justify-between cursor-pointer p-5" : "flex justify-between border-0 cursor-pointer p-5"}>
                                    <p className="text-base text-white font-semibold">
                                        {data.ques}
                                    </p>

                                    <img className="" src={isOpen === data?.id ? minus : plus} alt="icon" />
                                </div>
                                {isOpen === data?.id && (
                                    <p className="text-white text-sm font-normal p-5">
                                        {data.ans}
                                    </p>
                                )}
                            </div>

                        ))}

                    </div>
                </div>


            </div>
        </div>

    )
}

export default FaqAccordion