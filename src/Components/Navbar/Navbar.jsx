import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import NavIcon from '../../assets/DigiTools.png'

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm mb-15">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <img className="w-45 object-contain" src={NavIcon} /> 
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="flex items-center gap-3">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>

            <p className="font-semibold">Login</p>
          </div>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3c2fd1] hover:to-[#7e10d6] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
