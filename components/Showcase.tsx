import React from "react";
import { Button } from "./ui/button";
import Card from "./Card";

const Showcase = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex mx-auto items-center justify-between px-2 my-8">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold font-serif">Best Selling Cakes</h2>
          <p className="text-sm font-mono font-light text-gray-600">
            Hope You Like It
          </p>
        </div>
        <div className="">
          <Button>View All</Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Showcase;
