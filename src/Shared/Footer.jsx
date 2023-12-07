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
    <div className="footer py-16">
      <div className="container mx-auto">
        <div className="pb-8 mb-8 flex justify-between gap-3 items-center border-b border-b-lightGray">
          <div className="max-w-authWidth">
            <img className="mb-6" src={logo} alt="" />
            <p className="text-base font-normal mb-8">
              Empowering property owners with seamless tools and insights for
              efficient real estate management.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((data, index) => (
                <div
                  key={index}
                  className="border border-primary rounded-full h-10 w-10 flex justify-center items-center transition duration-600 ease-in-out hover:bg-primary"
                >
                  <Link
                    target="_blank"
                    className="text-primary text-2xl transition duration-600 ease-in-out hover:text-white"
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
            <div className="mb-4 w-full flex items-center gap-2 border border-slate-200 rounded-full bg-slate-50 py-2 pl-6 pr-2">
              <input
                className="bg-transparent w-full"
                type="email"
                placeholder="Email address"
              />
              <button>Subscribe</button>
            </div>
            <p className="text-xs">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="font-medium text-sm flex justify-between gap-6 items-center ">
          <p>© 2023 RETracker. All rights reserved.</p>
          <div className=" flex items-center gap-6">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
