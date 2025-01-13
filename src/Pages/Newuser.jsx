import React from "react";

const Newuser = () => {
  return (
    <div className="flex-[4] mx-5 pt-3">
      <h1 className="text-4xl mb-10 font-bold">new user</h1>
      <form className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 justify-between gap-x-20 w-full ">
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="username" className="text-2xl font-semibold text-gray-700">
            username
          </label>
          <input type="text" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="joashua2021" />
        </div>
        <div className=" w-full flex flex-col gap-y-2">
          <label htmlFor="name" className="text-2xl font-semibold text-gray-700">
            name
          </label>
          <input type="text" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="joshua onyeka" />
        </div>
        <div className=" w-full flex flex-col  gap-y-2">
          <label htmlFor="email" className="text-2xl font-semibold text-gray-700">
            email
          </label>
          <input type="email" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="joshuaonyeka2020@gmail.com" />
        </div>
        <div className=" w-full flex flex-col  gap-y-2">
          <label htmlFor="phone" className="text-2xl font-semibold text-gray-700">
            phone
          </label>
          <input type="number" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="+000 000 0000" />
        </div>
        <div className=" w-full flex flex-col  gap-y-2">
          <label htmlFor="address" className="text-2xl font-semibold text-gray-700">
            address
          </label>
          <input type="text" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="New york | USA" />
        </div>
        <div className=" w-full flex flex-col  gap-y-2">
          <label htmlFor="password" className="text-2xl font-semibold text-gray-700">
            password
          </label>
          <input type="text" className="border text-xl rounded-md pl-2 text-black h-16 w-full" placeholder="password" />
        </div>
        <div className=" flex flex-col gap-y-1">
          <label htmlFor="gender" className="text-2xl font-semibold">
            gender:
          </label>
          <div className="flex flex-col items-start gap-y-3 ml-5">
            <div className="flex items-center gap-x-2">
              <input type="radio" name="gender" id="male" value="male" />
              <label className="text-xl font-medium" htmlFor="male">
                male
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="radio" name="gender" id="female" value="female" />
              <label className="text-xl font-medium" htmlFor="female">
                female
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="radio" name="gender" id="others" value="others" />
              <label className="text-xl font-medium" htmlFor="others">
                others
              </label>
            </div>
          </div>
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

export default Newuser;
