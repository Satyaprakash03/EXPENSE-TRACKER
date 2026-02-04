import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#FFC154", "#EC6B56", "#47B39C"];

const FinanceOverview = ({
  totalBalance = 0,
  totalIncome = 0,
  totalExpenses = 0,
}) => {
  const balanceData = [
    { name: "Total Balance", amount: Math.max(0, totalBalance) },
    { name: "Total Expenses", amount: Math.abs(totalExpenses) },
    { name: "Total Income", amount: Math.max(0, totalIncome) },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium"> Financial Overview </h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`₹${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
