import React from "react";
import User from "../../src/assets/user.png";
import Package from "../../src/assets/package.png"
import Rocket from "../../src/assets/rocket.png"

const GetStart = () => {
  return (
    <div className="my-30">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl">Get Started in 3 Steps</h2>
        <p className="text-center text-[#627382] my-4">Start using premium digital tools in minutes, not hours.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5">
          <div className="card bg-base-100  shadow-sm relative">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
              01
            </div>

            <figure className="px-10 pt-10">
              <img src={User} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="card bg-base-100  shadow-sm relative">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
              02
            </div>

            <figure className="px-10 pt-10">
              <img src={Package} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the toolsthat fit your needs.
              </p>
            </div>
          </div>
          <div className="card bg-base-100  shadow-sm relative">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
              03
            </div>

            <figure className="px-10 pt-10">
              <img src={Rocket} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
