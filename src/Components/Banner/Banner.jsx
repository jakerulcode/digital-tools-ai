import React from "react";
import BannerImage from "../../assets/banner.png";
import Badge from "../../assets/Group 5.png";
import PlayBtn from "../../assets/Play.png"

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden mb-7">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            <img src={Badge} alt="" /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span >
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
           <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3c2fd1] hover:to-[#7e10d6] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
           Explore Products
          </button>

           <button className="btn btn-outline btn-primary rounded-full"> <img src={PlayBtn} alt="" />Watch Demo</button>
          </div>

         
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
