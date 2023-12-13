import React from "react";
import whatWeDoImg1 from "../../assets/whatWeDoImg.png";
import whatWeDoImg2 from "../../assets/whatWeDoImg1.png";
import whatWeDoImg3 from "../../assets/whatWeDoImg2.png";

const whatWeDoCard = [
  {
    id: 0,
    cardImg: whatWeDoImg1,
    cardTitle: "BEFORE BUYING A PROPERTY",
    cardContentOne:
      "You are looking to buy a short-term rental property and need guidance on how to select the right market and the right property.",
    cardContentTwo:
      "You already have a property in mind and you want a second opinion to help figure out how it will perform financially.",
    cardContentThree:
      "You want to understand whether short-term rentals are the right real estate strategy for you in the first place.",
    dataAos: "flip-up",
    dataDuration: "500",
  },

  {
    id: 1,
    cardImg: whatWeDoImg2,
    cardTitle: "ALREADY HAVE A PROPERTY UNDER CONTRACT OR PURCHASED?",
    cardContentOne:
      "You have an existing property that you’re looking to convert into short-term rentals. You want to understand how to best manage a short-term rental.",
    cardContentTwo:
      "You want advice on developing a strategy that can help you maximize your occupancy and daily rates.",
    cardContentThree:
      "You are looking for interior design help and advice on how to make the property stand out.",
    dataAos: "flip-up",
    dataDuration: "1000",
  },

  {
    id: 2,
    cardImg: whatWeDoImg3,
    cardTitle: "THINKING BIGGER",
    cardContentOne:
      "You want to acquire multiple properties to build a short-term rental portfolio and want to better define your strategy.",
    cardContentTwo:
      "You're a seasoned real estate investor and want to explore whether short-term rentals make sense to expand into.",
    cardContentThree:
      "You're considering investing into short-term rentals and want a 3rd party opinion to see if the figures make sense.",
    dataAos: "flip-up",
    dataDuration: "1500",
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatWeDo pt-12 md:pt-24 pb-8 md:pb-16 overflow-x-hidden">
      <div className="container max-w-[1030px]">
        <div className="section_title mb-8 px-7 md:px-0">
          <h2
            className="text-2xl md:text-5xl font-semibold text-slate-950 text-center"
            data-aos="fade-up"
            data-aos-duration="500">
            What <span className="text-primary">We Offer</span>
          </h2>
        </div>

        <div className="whatweDo_content mb-6 md:mb-16 px-7 md:px-0">
          <p
            className="text-sm md:text-base font-normal text-slate-950 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000">
            We’ve always thought that it’s quite unbalanced that in large real
            estate transactions, the person the buyer relies on the most is
            their real estate agent. While they can be very helpful, there is a
            misalignment of interests -- their commission depends on you
            purchasing the property and paying the maximum for it.
          </p>

          <p
            className="text-sm md:text-base font-normal text-slate-950 mb-5"
            data-aos="fade-up"
            data-aos-duration="1500">
            We see the value that we provide as that of an unbiased 3rd party
            that doesn’t have a vested interest in the financial outcome. Our
            goal is first and foremost to help you avoid making expensive
            mistakes, figure out how to properly approach market and property
            research, and -- once you have a property -- how to build a
            short-term rental business that doesn’t create a 2nd full time job
            for you while also maximizing your cashflow.
          </p>

          <p
            className="text-sm md:text-base font-normal text-slate-950 mb-5"
            data-aos="fade-up"
            data-aos-duration="2000">
            We offer consulting services for new and existing short-term rental
            hosts and investors that cover a range of situations:
          </p>
        </div>

        {whatWeDoCard.map((cardData) => (
          <div
            className="whatwedo_card p-5 md:p-10 bg-white shadow-lg rounded-3xl mb-8"
            key={cardData.id}
            data-aos={cardData.dataAos}
            data-aos-duration={cardData.dataDuration}>
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12 md:col-span-4">
                <div className="cardImg mb-5 md:mb-0">
                  <img src={cardData.cardImg} alt="card-img" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="card_content">
                  <h4
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                    data-aos="fade-up"
                    data-aos-duration="500">
                    {cardData.cardTitle}
                  </h4>
                  <p
                    className="text-sm md:text-base font-normal text-secondary"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    {cardData.cardContentOne}
                  </p>
                  <p
                    className="text-sm md:text-base font-normal text-secondary"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    {cardData.cardContentTwo}
                  </p>
                  <p
                    className="text-sm md:text-base font-normal text-secondary"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    {cardData.cardContentThree}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="consultancy_offer px-7 md:px-0">
          <h2
            className="text-2xl font-bold text-slate-950 mb-5"
            data-aos="fade-up"
            data-aos-duration="500">
            WE OFFER 2 CONSULTING OPTIONS
          </h2>

          <ul>
            <li>
              <p
                className="text-sm md:text-base font-normal text-slate-800 mb-5"
                data-aos="fade-up"
                data-aos-duration="1000">
                * Hourly: Our 1-on-1 consulting service is available at $299 per
                hour, or
              </p>
            </li>
            <li>
              <p
                className="text-sm md:text-base font-normal text-slate-800 mb-5"
                data-aos="fade-up"
                data-aos-duration="1500">
                * 5-Hour Package: If you are in the process of acquiring a
                property or want to develop a more comprehensive real estate
                investment strategy for your portfolio focusing on short term
                rentals, we recommend to do for a 5-hour consulting package.
                This will allow to go more in depth, develop a more
                comprehensive plan and strategy, and will pay for itself many
                times over in the long-term. Calls can be broken down into 5
                one-hour calls or fewer longer ones at your preference. This
                package is available at $1,495 and includes complementary access
                to our Short-Term Rental Markets Database (you'll save $350).
              </p>
            </li>
            <li>
              <p
                className="text-sm md:text-base font-normal text-slate-800 mb-5"
                data-aos="fade-up"
                data-aos-duration="2000">
                To get started, simply click on add to cart and select your
                preferred option at the check out page. You’ll be able to
                schedule the call at a time that works best after checking out.
              </p>
            </li>
            <li>
              <p
                className="text-sm md:text-base font-normal text-slate-800 mb-5"
                data-aos="fade-up"
                data-aos-duration="2500">
                If you have any questions on whether this is the right fit for
                you, feel free to send us an email first via our contact us
                page.
              </p>
            </li>
          </ul>
          <div className="text-center">
            <button className="primary_btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
