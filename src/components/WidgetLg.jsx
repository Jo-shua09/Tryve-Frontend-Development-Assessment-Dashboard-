import React from "react";
import { transactions } from "../assets/DummyData";

const WidgetLg = () => {
  const Button = ({ type }) => {
    let backgroundColorClass, textColorClass;

    switch (type) {
      case "Approved":
        backgroundColorClass = "bg-green-100"; // Light green background
        textColorClass = "text-green-800"; // Dark green text
        break;
      case "Declined":
        backgroundColorClass = "bg-red-100"; // Light red background
        textColorClass = "text-red-800"; // Dark red text
        break;
      case "Pending":
        backgroundColorClass = "bg-gray-100"; // Light gray background
        textColorClass = "text-gray-800"; // Dark gray text
        break;
      default:
        backgroundColorClass = "bg-yellow-100"; // White background
        textColorClass = "text-yellow-600"; // Black text
    }

    return <button className={`px-6 py-3 rounded-lg text-2xl ${backgroundColorClass} ${textColorClass}`}>{type}</button>;
  };

  return (
    <div className="flex-[2] shadow-[1px_1px_5px_rgba(0,0,0,0.2)] p-5">
      <div className="text-3xl font-bold">Latest transactions</div>
      <table className="table-auto w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-2xl">
            <th className="text-left pb-5 pt-5">customer</th>
            <th className="text-left pb-5 pt-5">date</th>
            <th className="text-left pb-5 pt-5">amount</th>
            <th className="text-left pb-5 pt-5">status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((data) => (
            <tr className="" key={data.id}>
              <td className="flex items-center gap-x-4">
                <img src="face.jpg" alt="" className="w-14 h-14 rounded-full object-cover cursor-pointer" />
                <span className="font-semibold text-[1.3rem]">{data.customer}</span>
              </td>
              <td className="text-2xl font-normal">{data.date}</td>
              <td className="text-2xl font-normal">{data.amount}</td>
              <td className="">
                <Button type={data.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
