import { userData } from "../../Services/DummyData";
import Chart from "../../components/Chart";
import FeaturedInfo from "./Sections/FeaturedInfo";
import WidgetSm from "./Sections/WidgetSm";
import WidgetLg from "./Sections/WidgetLg";

const Home = () => {
  return (
    <div className="w-full h-full px-5 mb-10">
      <div className="">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active Users"
        />
        <div className="flex gap-x-5 gap-y-10 flex-wrap-reverse md:flex-nowrap">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
};

export default Home;
