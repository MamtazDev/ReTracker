import React from 'react'


const PowerFeaturesCard = ({ cardTitle, cardContent, bgColor, cardImg }) => {
    return (
        <div className='max-w-[405px] mb-8 md:mb-0'>
            <div className="card_img mb-8">
                <img className='w-full' src={cardImg} alt="card-img" />
            </div>
            <div className="card_content">
                <h2 className='text-xl text-slate-950 font-medium mb-3'>
                    {cardTitle}
                </h2>
                <p className='text-sm font-normal text-slate-950'>
                    {cardContent}
                </p>
            </div>
        </div>
    )
}

export default PowerFeaturesCard