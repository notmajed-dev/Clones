import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("E-Commerce");
  const tabs = ["E-Commerce", "Education", "BFSI", "SaaS", "Freelancer"];

  return (
    <div>
      {/* Heading + Icons */}
      <div className="flex justify-around items-center">
        <p className="font-bold text-6xl mt-6 ml-9">
          Powering every industry. <br /> Powering all disruptors.
        </p>
        <ul className="flex gap-6">
          <li><LucideIcons.ShoppingCart size={50} /></li>
          <li><LucideIcons.Play size={50} /></li>
          <li><LucideIcons.HeartPlus size={50} /></li>
          <li><LucideIcons.MapIcon size={50} /></li>
        </ul>
      </div>

      {/* Tabs */}
      <div className="mt-9">
        <ul className="flex justify-center gap-12 font-bold text-gray-600">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 ${
                activeTab === tab
                  ? "text-black border-b-4 border-green-500"
                  : "hover:text-black"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCases;