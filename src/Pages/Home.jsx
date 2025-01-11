import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { userData } from "../assets/DummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const Home = () => {
  return (
    <div className="flex-[4] pt-3">
      <div className="">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
        <div className="flex m-5 gap-x-5">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
};

export default Home;
