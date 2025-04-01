import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="p-5 w-full h-full my-5 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
      <h3 className="mb-5 text-2xl font-semibold">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  grid: PropTypes.bool,
};

Chart.defaultProps = {
  grid: false,
};

export default Chart;
