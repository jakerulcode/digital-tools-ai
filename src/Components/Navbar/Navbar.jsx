import NavImg from "../../assets/DigiTools.png";
const Navbar = ({carts}) => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>

              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
            </ul>
          </div>
          <img className=" " src={NavImg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>

            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Price</a>
            </li>
            <li>
              <a>Faq</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2.5">
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
            <span className="badge badge-sm indicator-item text-red-500 font-bold text-[16px]">{carts.length}</span>
          </div>
          <p className="font-semibold">Login</p>

          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3c2fd1] hover:to-[#7e10d6] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
