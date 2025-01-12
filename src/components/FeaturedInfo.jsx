import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="w-full flex justify-between">
      <div className=" flex-1 mx-5 p-7 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
        <span className="text-2xl">revenue</span>
        <div className=" my-2 flex items-center gap-x-8">
          <span className="text-4xl font-bold">$2,495</span>
          <span className="flex items-start">
            -11.4 <ArrowDownward sx={{ fontSize: "1.5rem" }} className="ml-1 text-red-600" />
          </span>
        </div>
        <span className="text-xl text-gray-400 normal-case">Compared to last month</span>
      </div>

      <div className=" flex-1 mx-5 p-7 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
        <span className="text-2xl">sales</span>
        <div className=" my-2 flex items-center gap-x-8">
          <span className="text-4xl font-bold">$4,835</span>
          <span className="flex items-start ">
            -1.5 <ArrowDownward sx={{ fontSize: "1.5rem" }} className="ml-1 text-red-600" />
          </span>
        </div>
        <span className="text-xl text-gray-400 normal-case">Compared to last month</span>
      </div>

      <div className=" flex-1 mx-5 p-7 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
        <span className="text-2xl">cost</span>
        <div className=" my-2 flex items-center gap-x-8">
          <span className="text-4xl font-bold">$1,721</span>
          <span className="flex items-start ">
            +2.4 <ArrowUpward sx={{ fontSize: "1.5rem" }} className="ml-1 text-green-600" />
          </span>
        </div>
        <span className="text-xl text-gray-400 normal-case">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
