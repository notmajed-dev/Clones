import React from "react";
import heroImg from "../assets/hero.png";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Left Side */}
        <div className="mx-9">
          <h1 className="font-bold text-5xl mt-20">
            The Agentic Era <br /> Begins Now.
          </h1>
          <p className="font-medium mt-3">
            The infrastructure behind India's next <br />
            hundred million businesses.
          </p>

          {/* Buttons Row */}
          <div className="flex gap-6 mt-6 items-center">
            <button className="cursor-pointer bg-[#0434F8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started Now
            </button>
            <p className=" flex justify-center items-center text-blue-800 cursor-pointer hover:underline">
              Know More <ArrowRight size={20} />
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="w-150 h-96 bg-gray-200 rounded-md flex items-center justify-center">
            <img
              src={heroImg}
              alt="Hero Illustration"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;