import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full max-w-[180rem]">
      <Topbar />
      <div className="flex gap-x-5 my-6 mt-28 max-w-[150rem] w-full">
        <div className="md:flex hidden flex-1">
          <Sidebar />
        </div>
        <div className="flex-[5] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
