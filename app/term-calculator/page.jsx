"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AlertCircle, Edit2, Check, HelpCircle, Info } from "lucide-react";
import TermInfo from "./TermInfo";
const CADTermCalculator = () => {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const [formData, setFormData] = useState({
    monthlyExpenses: "5000",
    existingSavings: "0",
    dependents: "2",
    age: "35",
  });

  const [activeIndex, setActiveIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showExpenseHelp, setShowExpenseHelp] = useState(false);
  const [customAmounts, setCustomAmounts] = useState({
    livingExpenses: null,
    childrenFuture: null,
    funeralCosts: null,
    emergencyFund: null,
  });

  const monthlyExpensesList = [
    "Mortgage or rent payments",
    "Property taxes and insurance",
    "Utilities (electricity, water, gas)",
    "Car payments and transportation",
    "Groceries and dining",
    "Healthcare expenses",
    "Education costs",
    "Child care costs",
    "Loan payments",
    "Entertainment",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCustomAmountChange = (amount, key) => {
    setCustomAmounts((prev) => ({
      ...prev,
      [key]: amount !== "" ? amount : null,
    }));
  };

  const formatCAD = (amount) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
      notation: "compact",
      compactDisplay: "short",
    }).format(amount);
  };

  const calculateCoverageNeeds = () => {
    const monthlyExpenses = parseFloat(formData.monthlyExpenses) || 0;
    const dependents = parseFloat(formData.dependents) || 0;
    const yearlyExpenses = monthlyExpenses * 12;

    return [
      {
        name: "Living Expenses",
        value: customAmounts.livingExpenses
          ? parseFloat(customAmounts.livingExpenses)
          : yearlyExpenses * 10,
        description: "10 years of current expenses",
        baseValue: yearlyExpenses * 10,
        key: "livingExpenses",
      },
      {
        name: "Children's Future",
        value: customAmounts.childrenFuture
          ? parseFloat(customAmounts.childrenFuture)
          : dependents * 100000,
        description: "Education & care costs",
        baseValue: dependents * 100000,
        key: "childrenFuture",
      },
      {
        name: "Funeral Costs",
        value: customAmounts.funeralCosts
          ? parseFloat(customAmounts.funeralCosts)
          : 15000,
        description: "Final expenses",
        baseValue: 15000,
        key: "funeralCosts",
      },
      {
        name: "Emergency Fund",
        value: customAmounts.emergencyFund
          ? parseFloat(customAmounts.emergencyFund)
          : yearlyExpenses * 2,
        description: "2 years of expenses as buffer",
        baseValue: yearlyExpenses * 2,
        key: "emergencyFund",
      },
    ];
  };

  const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#f43f5e"];
  const coverageData = calculateCoverageNeeds();
  const totalBeforeSavings = coverageData.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const totalCoverage = Math.max(
    0,
    totalBeforeSavings - (parseFloat(formData.existingSavings) || 0)
  );

  if (!clientReady) {
    return (
      <div className="w-main my-[4rem]  mx-auto bg-white rounded-xl overflow-hidden p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
              <div className="w-full space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-main  my-[3rem] mx-auto bg-white rounded-xl overflow-hidden transition-all duration-300">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-3xl font-semibold   text-gray-800 mb-4">
            Term Life Calculator
          </h2>
          <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
            <Info className="text-blue-600 shrink-0" size={24} />
            <p className="text-sm text-blue-800">
              Calculate your recommended life insurance coverage in Canadian
              dollars. Adjust the amounts to match your specific needs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Inputs */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Monthly Family Expenses
                  </label>
                  <button
                    onClick={() => setShowExpenseHelp(!showExpenseHelp)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
                  >
                    <HelpCircle size={18} />
                  </button>
                </div>

                {showExpenseHelp && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="grid grid-cols-2 gap-2">
                      {monthlyExpensesList.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="relative mt-1">
                  <input
                    type="number"
                    name="monthlyExpenses"
                    value={formData.monthlyExpenses}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-8 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    min="0"
                  />
                  <span className="absolute left-3 top-3.5 text-gray-500">
                    $
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Existing Savings
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="existingSavings"
                    value={formData.existingSavings}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-8 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    min="0"
                  />
                  <span className="absolute left-3 top-3.5 text-gray-500">
                    $
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Dependents
                </label>
                <input
                  type="range"
                  name="dependents"
                  value={formData.dependents}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  min="0"
                  max="5"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  min="18"
                  max="70"
                />
              </div>
            </div>

            <div className="flex flex-col items-center w-full gap-6">
              <div className="relative w-[300px] h-[300px]">
                {" "}
                {/* Fixed size container */}
                <PieChart width={300} height={300}>
                  <Pie
                    data={coverageData}
                    cx={150}
                    cy={150}
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={4}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {coverageData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        style={{
                          filter:
                            activeIndex === index
                              ? "brightness(1.1) drop-shadow(0 0 4px rgba(0,0,0,0.2))"
                              : "none",
                          transform:
                            activeIndex === index ? "scale(1.05)" : "scale(1)",
                          transformOrigin: "center",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
                  </Pie>
                </PieChart>{" "}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-sm font-medium text-gray-600">
                    Coverage Needed
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {formatCAD(totalCoverage)}
                  </div>
                  {parseFloat(formData.existingSavings) > 0 && (
                    <div className="text-xs text-gray-500 mt-1">
                      After deducting savings
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-6 mt-3 px-6">
          {coverageData.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg  border transition-all  duration-300 ${
                activeIndex === index
                  ? "bg-gray-50 border-blue-200 shadow-sm"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex justify-between items-start ">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <button
                  onClick={() =>
                    setEditingIndex(editingIndex === index ? null : index)
                  }
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {editingIndex === index ? (
                    <Check className="text-green-600" size={18} />
                  ) : (
                    <Edit2 className="text-gray-400" size={18} />
                  )}
                </button>
              </div>

              {editingIndex === index ? (
                <div className="mt-2">
                  <input
                    type="number"
                    value={customAmounts[item.key] ?? item.baseValue}
                    onChange={(e) =>
                      handleCustomAmountChange(e.target.value, item.key)
                    }
                    className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    min="0"
                    step="1000"
                  />
                </div>
              ) : (
                <>
                  <div className="font-medium text-lg text-gray-900 mt-1">
                    {formatCAD(item.value)}
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  {customAmounts[item.key] !== null && (
                    <p className="text-xs text-blue-600 mt-1">
                      Customized from {formatCAD(item.baseValue)}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 w-full  p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            These calculations are estimates. For personalized advice, please
            consult with a licensed PolicyScanner advisor.
          </p>
        </div>
      </div>
      <div className="w-full h-max flex justify-center items-center">
        <TermInfo />
      </div>
    </div>
  );
};

export default CADTermCalculator;
