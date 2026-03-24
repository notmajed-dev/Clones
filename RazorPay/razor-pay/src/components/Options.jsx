import React from "react";
import * as LucideIcons from "lucide-react";

const Options = () => {
  return (
    <div className="flex justify-center items-center shadow-xl rounded-md">
      <input
        type="text"
        placeholder="Looking for a product"
        className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-blue-500"
      />
      <ul className="text-blue-800 flex gap-4 font-medium bg-white cursor-pointer">
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl ml-9 px-1">
          <LucideIcons.DollarSignIcon size={20} />
          Accept Payments
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl px-1">
          <LucideIcons.HandCoins size={20} />
          Make Payouts
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl px-1">
          <LucideIcons.Handshake size={20} />
          Start Business Banking
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl px-1">
          <LucideIcons.CreditCard size={20} />
          Get Credit
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl px-1">
          <LucideIcons.BanknoteArrowDown size={20} />
          Automate Payroll
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-blue-800 rounded-2xl px-1">
          <LucideIcons.CircleQuestionMark size={20}/>Something else?
        </li>
      </ul>
    </div>
  );
};

export default Options;
