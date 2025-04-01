import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full h-auto shadow-sm bg-white fixed top-0 z-[99999]">
      <div className="flex justify-between items-center px-5 py-4 ">
        <div className="">
          <Link to="/">
            <span className="font-bold text-4xl text-blue-950 cursor-pointer">
              MyDashboard
            </span>
          </Link>
        </div>

        <div className=" flex items-center gap-x-6">
          <div className="relative cursor-pointer ">
            <NotificationsNone sx={{ fontSize: "2.5rem" }} />
            <span className="absolute -top-1 right-0 text-white bg-red-800 rounded-full h-4 w-4 p-[.7rem] text-xl font-bold flex items-center justify-center">
              2
            </span>
          </div>
          <div className="relative cursor-pointer ">
            <Language sx={{ fontSize: "2.5rem" }} />
            <span className="absolute -top-1 right-0 text-white bg-red-800 rounded-full h-4 w-4 p-[.7rem] text-xl font-bold flex items-center justify-center">
              2
            </span>
          </div>
          <div className="relative cursor-pointer ">
            <Settings sx={{ fontSize: "2.5rem" }} />
          </div>
          <div className="w-full h-full ml-10">
            <img
              src="face.jpg"
              alt=""
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
