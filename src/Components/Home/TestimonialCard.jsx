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
  dataAos,
  dataDuration
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="tesimonial-card max-w-[320px] p-2 bg-white rounded-2xl md:card_wrapper md:mb-0 md:max-w-[405px] w-full md:h-full" data-aos={dataAos}
        data-aos-duration={dataDuration}>
        <div className="border rounded-2xl p-4 md:card_border h-full flex flex-col justify-between">
          <div className="card_content pb-4 md:pb-10">
            <div className="card_title">
              <h2 className="text-lg font-medium text-slate-black pb-1"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                {cardTitle}
              </h2>
            </div>
            <div className="card_des">
              <p className="text-sm font-normal text-slate-black"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {cardDes}
              </p>
            </div>
          </div>

          <div className="card_athor">
            <div className="author_wrapper flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="author_img"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img src={autohrImg} alt="author-icon" />
                </div>

                <div className="author_info">
                  <h5 className="text-sm font-normal text-slate-black"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {authorName}
                  </h5>
                  <p className="text-[12px] font-medium text-primary"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    {authorSocialId}
                  </p>
                </div>
              </div>

              <div className="social_icon"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
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
