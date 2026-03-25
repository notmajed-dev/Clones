import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex gap-10">
        
        <div className="w-1/3">
          <h1 className="text-2xl font-bold mb-4">Razorpay</h1>
          <p className="text-sm text-gray-600">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with ease.
          </p>
        </div>

        <div className="w-2/3 grid grid-cols-4 gap-8">
          
          <div>
            <h2 className="font-semibold mb-3">ACCEPT PAYMENTS</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Payment Aggregator</li>
              <li>Payment Gateway</li>
              <li>Payment Pages</li>
              <li>Payment Links</li>
              <li>Razorpay POS</li>
              <li>QR Codes</li>
              <li>Subscriptions</li>
              <li>Smart Collect</li>
              <li>Optimizer</li>
              <li>Instant Settlements</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">BANKING PLUS</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>RazorpayX</li>
              <li>Source to Pay</li>
              <li>Current Accounts</li>
              <li>Payouts</li>
              <li>Payout Links</li>
              <li>Corporate Credit Card</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">DEVELOPERS</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Docs</li>
              <li>Integrations</li>
              <li>API Reference</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">RESOURCES</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Blog</li>
              <li>Learn</li>
              <li>Customer Stories</li>
              <li>Events</li>
              <li>Chargeback Guide</li>
              <li>Settlement Guide</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;