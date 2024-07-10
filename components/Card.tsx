import Image from "next/image";
import React from "react";
import { IoImage } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="border w-fit border-gray-400 rounded-2xl my-2">
      <div className="">
        <Image
          className="rounded-t-2xl"
          src="/Images/one.jpg"
          width={220}
          height={220}
          alt="error"
        />
      </div>
      <div className="flex flex-col m-3 gap-2">
        <p className="text-sm">White Cream Cake</p>
        <div className="flex items-center">
          <FaRupeeSign size={10} />
          <p className="font-mono text-xs font-semibold">500</p>
        </div>
        <div className="flex items-center justify-center gap-1 w-fit bg-green-400 p-1 rounded-lg">
          <FaStar size={13} />
          <p className="text-xs">5.0</p>
        </div>
        <div className="flex text-sm"><p className="text-xs font-semibold">Estimated Delivery</p>: Today</div>
      </div>
    </div>
  );
};

export default Card;
