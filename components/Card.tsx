
import Image from "next/image";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = ({cake}) => {
  
  return (
    <div className="border w-fit border-gray-400 rounded-2xl my-2">
      <div className="">
        <Image
          className="rounded-t-2xl"
          src="/Images/one.jpg" // Update this to dynamically load the image if available
          width={220}
          height={220}
          alt="error"
        />
      </div>
      <div className="flex flex-col m-3 gap-2">
        <p className="text-sm">{cake.name}</p>
        <div className="flex items-center">
          <FaRupeeSign size={10} />
          <p className="font-mono text-xs font-semibold">{cake.price}</p>
        </div>
        <div className="flex items-center justify-center gap-1 w-fit bg-green-400 p-1 rounded-lg">
          <FaStar size={13} />
          <p className="text-xs">5.0</p> {/* Update this if you have ratings */}
        </div>
      </div>
    </div>
  );
};

export default Card;
