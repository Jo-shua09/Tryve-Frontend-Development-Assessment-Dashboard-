const Sales = () => {
  return (
    <div className="min-h-screen mx-5">
      {/* Sales Overview Section */}
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Sales Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Total Revenue
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-green-600">
              $124,567.89
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              +12.5% from last month
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Orders
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">1,234</p>
            <p className="text-xs sm:text-sm text-gray-500">
              +5.3% from last month
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Average Order Value
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-purple-600">
              $98.45
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              +2.1% from last month
            </p>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Recent Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    #{Math.floor(Math.random() * 10000)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    Customer {item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    Product {item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    ${(Math.random() * 1000).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sales Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Sales by Category
          </h2>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-sm sm:text-base text-gray-500">
              Chart Placeholder
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Revenue Trend
          </h2>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-sm sm:text-base text-gray-500">
              Graph Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
