import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="pt-3 flex-[4] mx-5">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">edit user</h1>
        <Link to="/newuser">
          <button className="py-3 px-8 bg-teal-600 text-white text-2xl capitalize font-semibold rounded-md">create</button>
        </Link>
      </div>
      <div className="flex mt-5 gap-x-5">
        <div className="flex-1 p-5 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-x-8">
            <img src="fetch.jpg" alt="" className="w-12 h-12 rounded-full cursor-pointer" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">joshua onyeka</span>
              <span className="text-xl font-normal">frontend developer</span>
            </div>
          </div>
          <div className=" mt-5">
            <span className="text-base font-semibold text-gray-400">account details</span>
            <div className="flex items-center my-5 mx-0 gap-x-3 text-[#444]">
              <PermIdentity sx={{ fontSize: "1.5rem" }} />
              <span className="text-xl font-medium">joashus2021</span>
            </div>

            <div className="flex items-center my-5 mx-0 gap-x-3 text-[#444]">
              <CalendarToday sx={{ fontSize: "1.5rem" }} />
              <span className="text-xl font-medium">127.1.1.1</span>
            </div>
            <span className="text-base font-semibold text-gray-400">contact details</span>
            <div className="flex items-center my-5 mx-0 gap-x-3 text-[#444]">
              <PhoneAndroid sx={{ fontSize: "1.5rem" }} />
              <span className="text-xl font-medium">+000 000 0000</span>
            </div>
            <div className="flex items-center my-5 mx-0 gap-x-3 text-[#444]">
              <MailOutline sx={{ fontSize: "1.5rem" }} />
              <span className="text-xl font-medium">+000 000 0000</span>
            </div>
            <div className="flex items-center my-5 mx-0 gap-x-3 text-[#444]">
              <LocationSearching sx={{ fontSize: "1.5rem" }} />
              <span className="text-xl font-medium">New York | USA</span>
            </div>
          </div>
        </div>

        <div className="flex-[2] p-5 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
          <span className="text-3xl font-bold">edit</span>
          <form className="flex justify-between mt-5">
            <div className="pb-5">
              <div className="flex flex-col mt-5">
                <label className="mb-1 text-[1.4rem]">username</label>
                <input type="text" placeholder="joashua2021" className="w-[340px] border-b border-gray-500 focus:border-none h-10 pl-2 text-xl" />
              </div>
              <div className="flex flex-col mt-5">
                <label className="mb-1 text-[1.4rem]">full name</label>
                <input type="text" placeholder="joshua onyeka" className="border-b border-gray-500 focus:border-none h-10 pl-2 text-xl" />
              </div>
              <div className="flex flex-col mt-5">
                <label className="mb-1 text-[1.4rem]">email</label>
                <input
                  type="email"
                  placeholder="joshuaonyeka2020@gmail.com"
                  className="border-b border-gray-500 focus:border-none h-10 pl-2 text-xl"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label className="mb-1 text-[1.4rem]">phone</label>
                <input type="number" placeholder="+000 000 0000" className="border-b border-gray-500 focus:border-none h-10 pl-2 text-xl" />
              </div>
              <div className="flex flex-col mt-5">
                <label className="mb-1 text-[1.4rem]">address</label>
                <input type="address" placeholder="New york | USA" className="border-b border-gray-500 focus:border-none h-10 pl-2 text-xl" />
              </div>
            </div>

            <div className=" flex flex-col justify-between">
              <div className=" flex gap-x-4 items-center cursor-pointer">
                <img src="fetcg.jpg" alt="" className="w-28 h-28 object-cover rounded-sm cursor-pointer" />
                <label htmlFor="file">
                  <Publish className="cursor-pointer " sx={{ fontSize: "2rem" }} />
                </label>
                <input type="file" id="file" className="" />
              </div>
              <button className="rounded-lg bg-blue-900 text-white py-3 px-7 capitalize text-xl font-bold">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;
