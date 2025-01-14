import React from "react";

const Newproducts = () => {
  return (
    <div className="pt-3 flex-[4] mx-5">
      <h1 className="text-4xl mb-10 font-bold">new Products</h1>
      <form className="flex flex-col gap-y-5 justify-between gap-x-20 sm:w-1/2 w-full ">
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="username" className="text-2xl font-semibold text-gray-700">
            image
          </label>
          <input type="file" className="text-xl" id="file" />
        </div>
        <div className=" w-full flex flex-col gap-y-2">
          <label htmlFor="name" className="text-2xl font-semibold text-gray-700">
            name
          </label>
          <input type="text" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="oriamo airpod" />
        </div>
        <div className=" w-full flex flex-col  gap-y-2">
          <label htmlFor="stock" className="text-2xl font-semibold text-gray-700">
            stock
          </label>
          <input type="number" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="112" />
        </div>
        <div className=" flex flex-col items-start w-full gap-x-3">
          <label className="text-2xl font-semibold"> active:</label>
          <select name="active" id="active" className="border w-full h-16 text-xl capitalize font-medium rounded-md p-2">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button className="w-52 bg-blue-700 h-16 font-bold text-white text-xl rounded-lg capitalize sm:mt-10 mt-5 mb-5">create</button>
      </form>
    </div>
  );
};

export default Newproducts;
