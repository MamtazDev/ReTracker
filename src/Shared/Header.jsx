import React from "react";
import brandLogo from "../assets/favicon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto max-w-5xl w-full top-16">
      <div className="bg-slate-black rounded-full p-4 text-white capitalize mx-auto">
        <nav className="flex flex-wrap items-center">
          <div className="nav-brand">
            <Link to={"/"} className="flex items-center gap-2 text">
              <img src={brandLogo} alt="brand-logo" />
              <h5 className="font-bold text-lg">RETracker</h5>
            </Link>
          </div>

          <div className="navbar mx-auto">
            <ul className="navbar-nav flex flex-wrap items-center gap-11">
              <li className="nav-items">
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Home
                </Link>
              </li>

              <li className="nav-items">
                <Link
                  to={"/features"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Features
                </Link>
              </li>

              <li className="nav-items">
                <Link
                  to={"/pricing"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-items">
                <Link
                  to={"/contact"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="userBtn flex flex-wrap gap-4">
            <button className="border border-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Link className="text-base font-bold capitalize">Login</Link>
            </button>

            <button className="border border-white py-3 px-8 rounded-full bg-white hover:bg-black text-black hover:text-white  transition-all duration-300">
              <Link className="text-base font-bold capitalize">Sign up</Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
