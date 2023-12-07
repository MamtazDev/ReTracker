import React from "react";
import Auth from "../../Shared/Auth";
import heroImg from "../../assets/banner-img.png"

const Banner = () => {
  return (
    <Auth>
      <section className="home_banner_section pt-28 px-28">
        <div className="section_tag text-center pb-4">
          <p className="text-lg font-semibold text-primary">
            Revolutionize Your Property Tasks
          </p>
        </div>
        
        <div className="section_title text-center pb-5">
          <h2 className="text-6xl font-bold pb-5">
            Transform Your Real Estate Management
          </h2>
          <h2 className="text-6xl font-bold">
            Experience with <span className="text-primary">RETracker</span>
          </h2>
        </div>

        <div className="secton-info text-center pb-16">
          <p className="text-xl">
            Your All-in-One Solution for Streamlined Real Estate Management. From Task Tracking to <br />
            Smart Analytics, We've Got You Covered.
          </p>
        </div>

        <div className="hero-img text-center">
          <img src={heroImg} className="w-full" alt="hero-img" />
        </div>


      </section>
    </Auth>
  )
};

export default Banner;
