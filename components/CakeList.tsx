"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const CakeList = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cakes");
        if (!response.ok) {
          throw new Error("Failed to fetch cakes");
        }
        const data = await response.json();
        setCakes(data.data); // Assuming the API response structure { success: true, data: cakes }
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    };

    fetchData();
  }, []);
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
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            View All
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
      {cakes.map((cake, index) => (
        <div>
          <Card key={cake} cake={cake} />
        </div>
      ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default CakeList;
