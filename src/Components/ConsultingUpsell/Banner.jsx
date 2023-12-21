import PrimaryBtn from "../../Shared/PrimaryBtn";
import bg from "../../assets/consultan-bg.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "292.5px 0 212.5px",
  };

  return (
    <div style={bannerStyle}>
      <div className="max-w-[1280px] m-auto">
        <div className="max-w-[576px]">
          <p className="text-white text-lg font-semibold mb-4">
            Consulting Upsell
          </p>
          <p className="text-violet-300 text-5xl font-bold mb-1">
            RE Tracker Consulting
          </p>
          <p className="text-white text-5xl font-bold mb-4">Only for $299</p>
          <p className="text-slate-300 text-xl font-normal mb-12">
            We offer expert consulting tailored to your goals and backed by
            real-world insights. Discover what your one-hour call can achieve!
          </p>
          <div className="flex  max-w-[319px] items-center gap-4">
            <PrimaryBtn>Package A</PrimaryBtn>
            <button className="bg-white py-3 px-8 text-slate-950 w-full rounded-full font-bold text-base">
              Package B
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
