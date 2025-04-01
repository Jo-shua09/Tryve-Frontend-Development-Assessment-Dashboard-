import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Analysis = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    salesData: [],
    performanceMetrics: {},
    recentActivity: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setData({
          salesData: [
            { name: "Jan", sales: 4000, profit: 2400 }, // Changed 'month' to 'name'
            { name: "Feb", sales: 3000, profit: 1398 },
            { name: "Mar", sales: 2000, profit: 9800 },
            { name: "Apr", sales: 2780, profit: 3908 },
            { name: "May", sales: 1890, profit: 4800 },
            { name: "Jun", sales: 2390, profit: 3800 },
          ],
          performanceMetrics: {
            revenue: 128000,
            growth: 23.5,
            customers: 1234,
            satisfaction: 94.2,
          },
          recentActivity: [
            { id: 1, type: "Sale", value: "$2,400", time: "2 hours ago" },
            {
              id: 2,
              type: "New Customer",
              value: "John Doe",
              time: "4 hours ago",
            },
            {
              id: 3,
              type: "Support",
              value: "Ticket #123",
              time: "6 hours ago",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-5">
      <h1 className="text-2xl font-bold mb-8">Business Analysis Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {Object.entries(data.performanceMetrics).map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
            <p className="text-xl font-semibold">
              {typeof value === "number"
                ? key === "growth"
                  ? `${value}%`
                  : value.toLocaleString()
                : value}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${Math.min((value / 100) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Trend Analysis</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {data.recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{activity.type}</p>
                <p className="text-gray-600 text-sm">{activity.value}</p>
              </div>
              <p className="text-gray-600 text-sm">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
