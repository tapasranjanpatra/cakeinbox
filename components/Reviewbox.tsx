import React from "react";

const Reviewbox = () => {
  return (
    <div className="max-w-sm border rounded-lg border-gray-400 p-6 my-10 shadow-2xl">
      <div className="text-xs text-gray-800">
        The cake was really good, I love the taste. Amazing experience and delivery time was quick. I would love to order more.
      </div>
      <div className="flex items-center justify-between my-6 text-xs">
        <h1 className="font-semibold">Customer Name</h1>
        <p className="text-gray-600">Date : 01/01/2024</p>
      </div>
    </div>
  );
};

export default Reviewbox;
