import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const socialIcons = [
    {
      pic: <FaFacebook />,
      link: "https://www.facebook.com/",
    },
    {
      pic: <FaTwitter />,
      link: "https://twitter.com/",
    },
    {
      pic: <RiInstagramFill />,
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <div className="footer px-5 lg:px-0 py-7  lg:py-16">
      <div className="container mx-auto">
        <div className="pb-7 lg:pb-8 mb-5 lg:mb-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-3 items-center border-b border-b-lightGray">
          <div className="max-w-authWidth">
            <img className="mb-5 lg:mb-6" src={logo} alt="" />
            <p className="text-base font-normal mb-5 lg:mb-8">
              Empowering property owners with seamless tools and insights for
              efficient real estate management.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.length > 0 &&
                socialIcons.map((data, index) => (
                  <div
                    key={index}
                    className="border border-primary rounded-full text-primary text-2xl hover:text-white h-10 w-10 flex justify-center items-center transition duration-600 ease-in-out hover:bg-primary"
                  >
                    <Link
                      target="_blank"
                      className=""
                      to={data.link}
                    >
                      {data.pic}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="max-w-authWidth">
            <p className="text-2xl font-bold mb-2">Subscribe</p>
            <p className="text-base font-normal mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="hidden mb-4 w-full lg:flex items-center gap-2 border border-slate-200 rounded-full bg-slate-50 py-2 pl-6 pr-2">
              <input
                className="bg-transparent w-full"
                type="email"
                placeholder="Email address"
              />
              <button>Subscribe</button>
            </div>

            <div className="block lg:hidden  ">
              <input
                className="year mb-4"
                type="email"
                placeholder="Email address"
              />
              <button className="w-full mb-4">Subscribe</button>
            </div>

            <p className="text-xs text-slate-black">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="font-medium text-sm flex flex-col lg:flex-row justify-between gap-5 lg:gap-6 items-center ">
          <p>© 2023 RETracker. All rights reserved.</p>
          <div className=" flex items-center gap-6">
            <Link to="#">Privacy Policy</Link>
            <Link to="#"> of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
