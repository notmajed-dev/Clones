import React from "react";
import { ArrowRight } from "lucide-react";
const NavBar = () => {
  return (
    <div>
      <div className="bg-[#0434F8] w-full flex items-center justify-between py-6 text-white">
        <p className="italic font-bold  text-3xl">RazorPay</p>
        <ul className="flex mx-6 gap-6">
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400 ">
            Agentic Stack
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Payments
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Banking+
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Payroll
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Engage
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Partners
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Resources
          </li>
          <li className="cursor-pointer hover:underline hover:decoration-yellow-400 underline-offset-4 hover:text-blue-400">
            Pricing
          </li>
          <div className="flex gap-3">
            <button className="text-blue-400 rounded-md bg-white border-2 border-blue-400 px-3 py-1">
              Login
            </button>
            <button className="text-blue-400 rounded-md bg-white border-2 border-blue-400 px-3 py-1 bg-blue">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
