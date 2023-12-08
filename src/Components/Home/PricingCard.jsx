import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = ({ autohrImg, socialLink, socialIcon, authorSocialId, authorName, cardDes, cardTitle }) => {
  return (
      <div class="col-span-4">
          <div className='pricing-card card_wrapper w-full h-full'>
              <div className='card_border h-full flex flex-col justify-between'>
                  <div className="card_content">
                      <div className="card_title">
                          <h2 className='text-lg font-medium text-slate-black pb-1'>
                              {cardTitle}
                          </h2>
                      </div>
                      <div className="card_des">
                          <p className='text-sm font-normal text-slate-black'>
                              {cardDes}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default PricingCard