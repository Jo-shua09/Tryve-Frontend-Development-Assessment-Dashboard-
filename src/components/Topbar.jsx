import {
  NotificationsNone,
  Language,
  Settings,
  Menu,
  Close,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Topbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full h-auto shadow-sm bg-white fixed top-0 z-[99999]">
      <div className="flex justify-between items-center px-5 py-4">
        <div className="lg:block">
          <Link to="/">
            <span className="font-bold text-3xl md:text-3xl lg:text-4xl text-blue-950 cursor-pointer">
              MyDashboard
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6">
          <div className="relative cursor-pointer">
            <NotificationsNone
              sx={{ fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" } }}
            />
            <span className="absolute -top-1 right-0 text-white bg-red-800 rounded-full h-3 w-3 md:h-4 md:w-4 p-[.7rem] text-sm md:text-xl font-bold flex items-center justify-center">
              2
            </span>
          </div>

          <div className="relative cursor-pointer">
            <Language
              sx={{ fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" } }}
            />
            <span className="absolute -top-1 right-0 text-white bg-red-800 rounded-full h-3 w-3 md:h-4 md:w-4 p-[.7rem] text-sm md:text-xl font-bold flex items-center justify-center">
              2
            </span>
          </div>

          <div className="w-full h-full ml-4 md:ml-6 lg:ml-10">
            <img
              src="face.jpg"
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer"
            />
          </div>

          <div className="relative cursor-pointer">
            <Settings
              sx={{ fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" } }}
            />
          </div>

          <div
            className="relative cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          >
            {showSidebar ? (
              <Close sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }} />
            ) : (
              <Menu sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }} />
            )}
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "75%" }}
          onClick={toggleSidebar}
        >
          <div className="absolute top-4 right-4">
            <Close
              sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
              onClick={toggleSidebar}
              className="cursor-pointer"
            />
          </div>

          <Sidebar onClose={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
