import React from "react";
import { GiCakeSlice } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { BsBagCheckFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsPersonBadgeFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto my-3">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <GiCakeSlice size={30} />
          <p className="font-bold">CakeInbox</p>
        </div>
        <div className="flex items-center">
          <IoLocation size={20} />
          <p className="font-semibold text-sm">Location</p>
          <IoIosArrowDown className="ml-1" />
        </div>
      </div>
      <div className="flex items-center bg-gray-100">
        <input
          className="bg-gray-100 px-10 py-1 font-serif"
          type="text"
          placeholder="Search Cakes"
        />
        <IoMdSearch size={20} className="mr-4" />
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex flex-col justify-center items-center gap-1 cursor-pointer"
        >
          <GrMapLocation className="" size={20} />
          <p className="text-xs font-semibold">Track Order</p>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col justify-center items-center gap-1 cursor-pointer"
        >
          <BsBagCheckFill size={20} />
          <p className="text-xs font-semibold">Cart</p>
        </Link>
        <Link
          href="/register"
          className="flex flex-col justify-center items-center gap-1 cursor-pointer"
        >
          <IoPersonCircleSharp size={20} />
          <p className="text-xs font-semibold">Sign In</p>
        </Link>
        <Link
          href="/"
          className="flex flex-col justify-center items-center gap-1 cursor-pointer"
        >
          <BsPersonBadgeFill size={20} />
          <p className="text-xs font-semibold">About Us</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
