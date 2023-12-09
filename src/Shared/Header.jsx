import React from "react";
import brandLogo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <div className="mx-auto max-w-5xl w-full top-16">
      <div className="bg-slate-black rounded-full p-4 text-white capitalize mx-auto">
        <nav className="flex flex-wrap items-center">
          <div className="nav-brand">
            <Link to={"/"} className="flex items-center gap-2 text">
              <img src={brandLogo} alt="brand-logo" />
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
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Features
                </Link>
              </li>

              <li className="nav-items">
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-items">
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="userBtn flex flex-wrap gap-4">
            {location.pathname !==
              ("/login" &&
                "/forget-password" &&
                "/reset-password" &&
                "/add-priority") && (
              <Link
                to="/login"
                className="text-base font-bold capitalize border border-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Login
              </Link>
            )}

            {location.pathname !==
              ("/signup" &&
                "/verify-email" &&
                "/successful-verification" &&
                "/add-priority") && (
              <Link
                to="/signup"
                className="text-base font-bold capitalize border border-white py-3 px-8 rounded-full bg-white hover:bg-black text-black hover:text-white  transition-all duration-300"
              >
                Sign up
              </Link>
            )}
            {location.pathname === "/add-priority" && (
              <Link
                to="#"
                className="text-base font-bold capitalize border border-white py-3 px-8 rounded-full bg-white hover:bg-black text-black hover:text-white  transition-all duration-300"
              >
                Go to account
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
