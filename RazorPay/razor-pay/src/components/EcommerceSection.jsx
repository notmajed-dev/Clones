import React from "react";
import * as LucideIcons from "lucide-react";
import EcommerceImg from "../assets/ecommerce.png";

const EcommerceSection = () => {
  return (
    <div className="w-full flex justify-center px-4">
      {/* Container */}
      <div className="relative w-full max-w-[1100px]">

        {/* Image */}
        <img
          src={EcommerceImg}
          alt="Ecommerce"
          className="w-full h-auto rounded-xl"
        />

        {/* Card */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-white shadow-xl rounded-2xl p-6 max-w-[420px] w-full">

          <p className="text-4xl font-extrabold leading-tight">
            Empower your <br />
            <span className="text-green-700">
              e-commerce business.
            </span>
          </p>

          <p className="mt-4 text-gray-600 text-sm">
            Streamline payment management with a unified dashboard,
            enabling both online and in-person payment collection
            while enhancing conversion rates and minimizing fraud.
          </p>

          <button className="bg-[#0434F8] text-white rounded-md px-4 py-2 mt-6 flex items-center gap-2 hover:bg-blue-700 transition">
            See Solutions <LucideIcons.MoveRight size={18} />
          </button>

          <div className="flex gap-4 mt-6 items-center text-sm">
            <span className="font-semibold">NYKAA</span>
            <span className="font-semibold">Zomato</span>
            <span className="font-semibold">Flipkart</span>
            <span className="text-gray-500">+70,000 others</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EcommerceSection;