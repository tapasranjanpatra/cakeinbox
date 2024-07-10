import React from "react";
import Card from "./Card";
// import Thecard from "./Thecard";
import Image from "next/image";
import { GiPlainCircle } from "react-icons/gi";
import { LuCircle } from "react-icons/lu";

const Mainpage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="border rounded-xl"
          src="/Images/banner.jpg"
          width={800}
          height={400}
          alt="error"
        />
        <div className="flex items-center justify-center gap-1 py-2 ">
          <GiPlainCircle size={10} />
          <LuCircle size={10} />
        </div>
      </div>
      <div className="">
        <h1 className="flex items-center justify-center my-2 font-bold font-serif">
          Have a Look!
        </h1>
        <div className="flex gap-2 justify-center mx-auto my-4">
          <Image
            className="border rounded-2xl"
            src="/Images/one.jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one (1).jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one.jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one (1).jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one.jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one (1).jpg"
            width={140}
            height={140}
            alt="error"
          />
          <Image
            className="border rounded-2xl"
            src="/Images/one.jpg"
            width={140}
            height={140}
            alt="error"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
