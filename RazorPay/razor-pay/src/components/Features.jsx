import React from "react";

const Features = () => {
  return (
    <div>
      <div className="ml-9">
        <p className="font-bold text-3xl py-10">
          The all in one{" "}
          <span className="text-[#009E5C]"> finance platform</span>
          <br /> you've been looking for
        </p>
        <div className="flex items-center flex-wrap gap-6 text-[#40566D]">
          <span>With Razorpay, you can</span>
          <span className="text-gray-400">|</span>
          <ul className="flex gap-6 font-bold text-black">
            <li>Build AI Native</li>
            <li>Accept Payments</li>
            <li>Make Payouts</li>
            <li>Start Business Banking</li>
            <li>Automate Payroll</li>
            <li>Get Credit & Loans</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Features;
