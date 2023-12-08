import React from 'react'


const PowerFeaturesCard = ({ cardTitle, cardContent, bgColor, cardImg }) => {
    return (
        <div className='max-w-[405px] mb-8'>
            <div className={`card_wrapper px-7 pt-7 ${bgColor} rounded-3xl mb-8`}>
                <div className="card_img">
                    <img src={cardImg} alt="card-img" />
                </div>
            </div>
            <div className="card_content">
                <h2 className='text-xl text-slate-black font-medium mb-3'>
                    {cardTitle}
                </h2>
                <p className='text-sm font-normal text-slate-black'>
                    {cardContent}
                </p>
            </div>
        </div>
    )
}

export default PowerFeaturesCard