import { Visibility } from "@mui/icons-material";
import React from "react";
import { members } from "../assets/DummyData";

const WidgetSm = () => {
  return (
    <div className="flex-1 shadow-[1px_1px_5px_rgba(0,0,0,0.2)] p-5">
      <span className="text-3xl font-bold">new members</span>
      {members.map((data) => (
        <ul className=" m-0 p-0 list-none" key={data.id}>
          <li className=" flex items-center justify-between  my-5 mx-0">
            <img src={data.imageUrl} alt="" className="w-14 h-14 rounded-full object-cover cursor-pointer" />
            <div className="flex flex-col">
              <span className="font-semibold text-2xl">{data.name}</span>
              <span className="text-2xl font-light">{data.role}</span>
            </div>
            <button className="flex border-none items-center rounded-lg py-2 px-3 bg-gray-300 text-custom2 gap-x-2 text-xl">
              <Visibility sx={{ fontSize: "1.7rem" }} />
              Display
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default WidgetSm;
