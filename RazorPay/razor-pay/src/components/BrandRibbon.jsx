import React from "react";

const BrandRibbon = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white shadow-md py-4">
      {/* First strip */}
      <div className="inline-block animate-marquee">
        <span className="mx-8 text-4xl font-bold">ZERODHA</span>
        <span className="mx-8 text-4xl font-cursive">ATHER</span>
        <span className="mx-8 text-4xl font-serif">IndiGo</span>
        <span className="mx-8 text-4xl font-roboto">Akasa Air</span>
        <span className="mx-8 text-4xl font-cursive">Myntra</span>
        <span className="mx-8 text-4xl font-roboto">Airtel</span>
        <span className="mx-8 text-4xl font-mono">CRED</span>
        <span className="mx-8 text-4xl font-serif">BookMyShow</span>
        <span className="mx-8 text-4xl font-bold">OLA</span>
      </div>

      {/* Duplicate strip for seamless loop */}
      <div className="inline-block animate-marquee">
        <span className="mx-8 text-4xl font-bold">ZODHA</span>
        <span className="mx-8 text-4xl font-cursive">ATHER</span>
        <span className="mx-8 text-4xl font-serif">IndiGo</span>
        <span className="mx-8 text-4xl font-roboto">Akasa Air</span>
        <span className="mx-8 text-4xl font-cursive">Myntra</span>
        <span className="mx-8 text-4xl font-roboto">Airtel</span>
        <span className="mx-8 text-4xl font-mono">CRED</span>
        <span className="mx-8 text-4xl font-serif">BookMyShow</span>
        <span className="mx-8 text-4xl font-bold">OLA</span>
      </div>
    </div>
  );
};

export default BrandRibbon;