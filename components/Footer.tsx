import Image from "next/image";
import React from "react";
import { FaHeart, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiCakeSlice } from "react-icons/gi";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto bg-gray-100 border rounded-xl p-10 shadow-xl">
      <div className="flex flex-col gap-4 text-sm my-4">
        <div className="flex items-center gap-1">
          <GiCakeSlice size={30} />
          <p className="font-bold">CakeInbox</p>
        </div>
        <div className="">
          <div>
            <div className="flex items-center gap-1">
              <p>Show Us Some Love</p> <FaHeart />
            </div>
            and connect with us!
          </div>
        </div>
        <div className="flex gap-3 ">
          <FaInstagram size={25} />
          <RiFacebookBoxLine size={25} />
          <TbBrandYoutube size={25} />
          <FaXTwitter size={25} />
          <IoLogoLinkedin size={25} />
        </div>
      </div>
      <div className="flex gap-8 text-xs font-semibold font-mono text-gray-700">
        <div className="flex flex-col gap-4 my-4">
          <p>About Us</p>
          <p>Sell with Us</p>
          <p>Coupons and Deals</p>
          <p>Terms and Condition</p>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <p>Media</p>
          <p>Privacy Policy</p>
          <p>Reviews</p>
          <p>Story</p>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <p>FAQ</p>
          <p>Contact Us</p>
          <p>WhatsApp</p>
          <p>Download App</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center my-2">
        <p className="text-sm my-2 font-mono font-semibold text-gray-700">
          Simplify your experience with our app.
        </p>
        <Image
          className="border rounded-lg cursor-pointer"
          src="/Images/apple.jpg"
          height={150}
          width={150}
          alt="error"
        />
        <Image
          className="border rounded-lg cursor-pointer"
          src="/Images/google.jpg"
          height={150}
          width={150}
          alt="error"
        />
      </div>
    </div>
  );
};

export default Footer;
