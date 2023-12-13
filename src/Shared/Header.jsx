import React, { useState } from "react";
import brandLogo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import responsiveBtn from "../assets/res-btn.png";

const Header = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleResponsiveNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto max-w-[280px]  lg:max-w-5xl w-full ">
      <div
        className={
          isOpen
            ? "bg-slate-950 rounded-[20px] p-2 lg:p-4 text-white capitalize mx-auto"
            : "bg-slate-950 rounded-full p-2 lg:p-4 text-white capitalize mx-auto"
        }
      >
        <nav className={isOpen ? "block" : "flex flex-wrap items-center"}>
          {isOpen ? (
            <div className="flex justify-between mb-4">
              <div className={"nav-brand"}>
                <Link to={"/"} className="flex items-center gap-2 text">
                  <img src={brandLogo} alt="brand-logo" />
                </Link>
              </div>

              <div className="responsive_btnmd:hidden ml-auto">
                <button onClick={toggleResponsiveNav}>
                  <img
                    src={responsiveBtn}
                    className="cursor-pointer"
                    alt="responsive_btn"
                  />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className={"nav-brand"}>
                <Link to={"/"} className="flex items-center gap-2 text">
                  <img src={brandLogo} alt="brand-logo" />
                </Link>
              </div>

              <div className="responsive_btn md:hidden ml-auto">
                <button onClick={toggleResponsiveNav}>
                  <img
                    src={responsiveBtn}
                    className="cursor-pointer"
                    alt="responsive_btn"
                  />
                </button>
              </div>
            </>
          )}

          <div className={isOpen ? "block" : "navbar mx-auto hidden md:block"}>
            <ul
              className={
                isOpen
                  ? "navbar-nav block"
                  : "navbar-nav flex flex-wrap items-center gap-11"
              }
            >
              <li className={isOpen ? "nav-items mb-8" : "nav-items"}>
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Home
                </Link>
              </li>

              <li className={isOpen ? "nav-items mb-8" : "nav-items"}>
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Features
                </Link>
              </li>

              <li className={isOpen ? "nav-items mb-8" : "nav-items"}>
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Pricing
                </Link>
              </li>

              <li className={isOpen ? "nav-items mb-8" : "nav-items"}>
                <Link
                  to={"/"}
                  className="nav-link text-base font-semibold text-white capitalize"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={isOpen ? "block" : "userBtn hidden md:block"}>
            <div className="flex flex-wrap gap-4 ">
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
