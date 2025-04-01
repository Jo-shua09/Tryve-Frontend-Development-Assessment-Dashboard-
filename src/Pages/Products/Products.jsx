import { Link } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import Chart from "../../components/Chart";
import { productData } from "../../Services/DummyData";

const Products = () => {
  return (
    <div className="sm:flex-[4] w-full h-full overflow-hidden">
      <div className="flex mx-5 items-center justify-between">
        <h1 className="text-5xl font-bold">product</h1>
        <Link to="/newproducts">
          <button className="py-3 px-8 bg-teal-600 text-white text-2xl capitalize font-semibold rounded-md">
            create
          </button>
        </Link>
      </div>

      <div className="flex my-5 py-5 justify-between gap-x-5 gap-y-10 items-center w-full h-fit md:flex-nowrap flex-wrap overflow-hidden px-5">
        <div className="md:flex-1 md:w-1/2 w-full h-fit">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>

        <div className="md:flex-1 md:w-1/2 w-full h-fit md:pb-16 p-5 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-x-4">
            <img
              src="face.jpg"
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <span className="text-2xl font-semibold">oriamo airpods</span>
          </div>
          <div className="mt-5">
            <div className="w-40 items-center justify-between flex">
              <span className="text-[1.3rem] font-bold">id:</span>
              <span className="text-xl font-normal">12</span>
            </div>
            <div className="w-40 items-center justify-between flex">
              <span className="text-[1.3rem] font-bold">sales:</span>
              <span className="text-xl font-normal">5370</span>
            </div>
            <div className="w-40 items-center justify-between flex">
              <span className="text-[1.3rem] font-bold">active:</span>
              <span className="text-xl font-normal">yes</span>
            </div>
            <div className="w-40 items-center justify-between flex">
              <span className="text-[1.3rem] font-bold">in stock:</span>
              <span className="text-xl font-normal">no</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-fit p-5 md:mx-5 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
        <form className="flex justify-between md:flex-row flex-col gap-y-10">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-500 text-2xl font-semibold mt-5">
              product name
            </label>
            <input
              type="text"
              placeholder="oriamo airpod"
              className="w-[340px] border-b border-gray-500 focus:outline-none h-10 pl-2 text-xl"
            />
            <label className="mb-2 text-gray-500 text-2xl font-semibold mt-5">
              in stock
            </label>
            <select
              className="mb-2 border w-fit py-2 px-4 cursor-pointer border-gray-500 capitalize text-xl font-semibold"
              name="inStock"
              id="inStock"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label className="mb-2 text-gray-500">active</label>
            <select
              className="mb-2 border w-fit py-2 px-4 cursor-pointer border-gray-500 capitalize text-xl font-semibold"
              name="active"
              id="active"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <div className=" flex flex-col justify-around">
            <div className=" flex items-center gap-x-4">
              <img
                src="face.jpg"
                alt=""
                className="w-28 h-28 object-cover rounded-lg mb-4"
              />
              <label htmlFor="file">
                <Publish sx={{ fontSize: "2rem" }} />
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
            <Link to="/newproducts">
              <button className="bg-blue-700 font-bold py-3 px-7 w-56 text-white text-xl rounded-lg capitalize sm:mt-10 mt-5 mb-5">
                update
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
