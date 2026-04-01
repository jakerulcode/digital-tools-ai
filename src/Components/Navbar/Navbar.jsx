

import { useState } from "react";
import NavImg from "../../assets/DigiTools.png";

const Navbar = ({ carts }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-base-100 shadow-sm mb-3">
      <div className="navbar container mx-auto">

        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Hamburger */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </button>
          <img className="w-auto h-8" src={NavImg} alt="Logo" />
        </div>

        {/* Navbar Center - Desktop only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Price</a></li>
            <li><a>Faq</a></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2.5">
          {/* Cart */}
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm indicator-item text-red-500 font-bold text-[16px]">
              {carts.length}
            </span>
          </div>

          {/* Login - tablet+ এ দেখাবে */}
          <p className="font-semibold hidden sm:block">Login</p>

          {/* Get Started */}
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3c2fd1] hover:to-[#7e10d6] text-white px-3 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-base-200 bg-base-100">
          <ul className="menu menu-sm p-2 font-semibold">
            <li><a onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Price</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Faq</a></li>
            {/* Login mobile এ menu তে */}
            <li className="sm:hidden"><a onClick={() => setMenuOpen(false)}>Login</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
