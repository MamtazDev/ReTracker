import location from "../../assets/location.png";
import arrow from "../../assets/downarrow.png";
import bell from "../../assets/bell.png";
import ques from "../../assets/ques.png";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={location} alt="" />
        <p className="text-sm font-medium">
          123 Greenfield Avenue, Maplewood, NY 54321, USA
        </p>
        <img src={arrow} alt="" />
      </div>
      <div className="flex gap-3 items-center">
        <button className="w-8 h-8 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-full">
          <img src={ques} alt="" />
        </button>
        <div className="relative">
          <button className="w-8 h-8 flex items-center justify-center border bg-slate-50 border-slate-200 rounded-full">
            <img src={bell} alt="" />
          </button>{" "}
          <p
            style={{ width: "16px", height: "16px" }}
            className="absolute -top-1.5 right-0 icon text-xs"
          >
            8
          </p>
        </div>
        <button className="border border-primary rounded-full p-[1px] ">
          <img src={profile} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
