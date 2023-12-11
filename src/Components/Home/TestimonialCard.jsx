import React from "react";
import { Link } from "react-router-dom";

const TestimonialCard = ({
  autohrImg,
  socialLink,
  socialIcon,
  authorSocialId,
  authorName,
  cardDes,
  cardTitle,
}) => {
  return (
    <div className="col-span-4">
      <div className="tesimonial-card card_wrapper max-w-[405px] w-full h-full">
        <div className="card_border h-full flex flex-col justify-between">
          <div className="card_content">
            <div className="card_title">
              <h2 className="text-lg font-medium text-slate-black pb-1">
                {cardTitle}
              </h2>
            </div>
            <div className="card_des">
              <p className="text-sm font-normal text-slate-black">{cardDes}</p>
            </div>
          </div>

          <div className="card_athor">
            <div className="author_wrapper flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="author_img">
                  <img src={autohrImg} alt="author-icon" />
                </div>
                <div className="author_info">
                  <h5 className="text-sm font-normal text-slate-black">
                    {authorName}
                  </h5>
                  <p className="text-[12px] font-medium text-primary">
                    {authorSocialId}
                  </p>
                </div>
              </div>

              <div className="social_icon">
                <Link to={`${socialLink}`}>
                  <img src={socialIcon} alt="social-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
