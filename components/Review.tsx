import React from "react";
import Reviewbox from "./Reviewbox";
import { Button } from "./ui/button";

const Review = () => {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold font-sans">Customer Review : </h1>
          <Button>View All</Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Reviewbox />
          <Reviewbox />
          <Reviewbox />
        </div>
      </div>
    </div>
  );
};

export default Review;
