import { useState } from "react";
import {
  AttachMoney,
  BarChartOutlined,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  // Report,
  Storefront,
  Timeline,
  TrendingUp,
  // WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="md:w-[16.5%] w-full h-custom md:fixed bg-custom1 pt-3">
      <div className="p-5 text-custom2">
        <div className="mb-2">
          <h3 className="text-xl text-gray-500">Dashboard</h3>
          <ul className=" list-none p-1">
            <ul className="list-none p-1">
              <Link to="/">
                <li
                  className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                    activeMenu === "home" ? "bg-gray-300" : "hover:bg-gray-300"
                  }`}
                  onClick={() => handleMenuClick("home")}
                >
                  <LineStyle sx={{ fontSize: "2rem" }} />{" "}
                  <span className="md:text-2xl text-3xl">home</span>
                </li>
              </Link>

              <Link to="/analysis">
                <li
                  className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                    activeMenu === "analytics"
                      ? "bg-gray-300"
                      : "hover:bg-gray-300"
                  }`}
                  onClick={() => handleMenuClick("analytics")}
                >
                  <Timeline sx={{ fontSize: "2rem" }} />{" "}
                  <span className="md:text-2xl text-3xl">analytics</span>
                </li>
              </Link>

              <Link to="/sales">
                <li
                  className={`p-2 cursor-pointer flex gap-x-1 mb-1 items-center rounded-xl ${
                    activeMenu === "sales" ? "bg-gray-300" : "hover:bg-gray-300"
                  }`}
                  onClick={() => handleMenuClick("sales")}
                >
                  <TrendingUp sx={{ fontSize: "2rem" }} />{" "}
                  <span className="md:text-2xl text-3xl">sales</span>
                </li>
              </Link>
            </ul>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="text-xl text-gray-500">quick menu</h3>
          <ul className=" list-none p-1">
            <Link to="/userslist">
              <li
                className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                  activeMenu === "users" ? "bg-gray-300" : "hover:bg-gray-300"
                }`}
                onClick={() => handleMenuClick("users")}
              >
                <PermIdentity sx={{ fontSize: "2rem" }} />{" "}
                <span className="md:text-2xl text-3xl">users</span>
              </li>
            </Link>

            <Link to="/productslist">
              <li
                className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                  activeMenu === "products"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
                onClick={() => handleMenuClick("products")}
              >
                <Storefront sx={{ fontSize: "2rem" }} />{" "}
                <span className="md:text-2xl text-3xl">products</span>
              </li>
            </Link>

            <li
              className={`p-2 cursor-pointer flex gap-x-1 mb-1 items-center rounded-xl ${
                activeMenu === "transactions"
                  ? "bg-gray-300"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleMenuClick("transactions")}
            >
              <AttachMoney sx={{ fontSize: "2rem" }} />{" "}
              <span className="md:text-2xl text-3xl">transactions</span>
            </li>

            <li
              className={`p-2 cursor-pointer flex gap-x-1 mb-1 items-center rounded-xl ${
                activeMenu === "reports" ? "bg-gray-300" : "hover:bg-gray-300"
              }`}
              onClick={() => handleMenuClick("reports")}
            >
              <BarChartOutlined sx={{ fontSize: "2rem" }} />{" "}
              <span className="md:text-2xl text-3xl">reports</span>
            </li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="text-xl text-gray-500">Notifications</h3>
          <ul className=" list-none p-1">
            <li
              className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                activeMenu === "mail" ? "bg-gray-300" : "hover:bg-gray-300"
              }`}
              onClick={() => handleMenuClick("mail")}
            >
              <MailOutline sx={{ fontSize: "2rem" }} />{" "}
              <span className="md:text-2xl text-3xl">mail</span>
            </li>

            <li
              className={`p-2 cursor-pointer gap-x-1 mb-1 flex items-center rounded-xl ${
                activeMenu === "feedback" ? "bg-gray-300" : "hover:bg-gray-300"
              }`}
              onClick={() => handleMenuClick("feedback")}
            >
              <DynamicFeed sx={{ fontSize: "2rem" }} />{" "}
              <span className="md:text-2xl text-3xl">feedback</span>
            </li>

            <li
              className={`p-2 cursor-pointer flex gap-x-1 mb-1 items-center rounded-xl ${
                activeMenu === "message" ? "bg-gray-300" : "hover:bg-gray-300"
              }`}
              onClick={() => handleMenuClick("message")}
            >
              <ChatBubbleOutline sx={{ fontSize: "2rem" }} />{" "}
              <span className="md:text-2xl text-3xl">message</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
