import React from "react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="w-full bg-[#0434F8] flex justify-between items-center">
        <div className="mx-9 text-white font-medium">
          <p className="text-8xl">SPRINT/26 </p>
          <p>
            100+ Launches <br />
            One Blueprint
          </p>
          <a href="/" className=" underline underline-offset-1  block mt-9">
            See What's New
          </a>
        </div>
        {/*Right Content*/}
        <div className="w-250 h-100 bg-amber-950 ">
            <img src={bannerImg} 
            alt="BannerIllustration"
            className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Banner;