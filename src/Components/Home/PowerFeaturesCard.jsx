import React from "react";

const PowerFeaturesCard = ({
  cardTitle,
  cardContent,
  bgColor,
  cardImg,
  dataAos,
  dataDuration,
}) => {
  return (
    <div className="max-w-[320px] md:max-w-[405px]">
      <div
        className="card_img mb-8"
        data-aos={dataAos}
        data-aos-duration={dataDuration}>
        <img className="w-full" src={cardImg} alt="card-img" />
      </div>
      <div className="card_content">
        <h2 className="text-xl text-slate-black font-medium mb-3">
          {cardTitle}
        </h2>
        <p className="text-sm font-normal text-slate-black">{cardContent}</p>
      </div>
    </div>
  );
};

export default PowerFeaturesCard;
