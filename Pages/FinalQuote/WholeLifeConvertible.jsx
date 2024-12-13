import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import {
  Clock,
  DollarSign,
  Calendar,
  Shield,
  TrendingUp,
  XCircle,
  Wallet,
  HandCoins,
  LockKeyhole,
  HeartPulse,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./Head.css";

const WholeLifeConvertible = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [currentAge, setCurrentAge] = useState(35);
  const [coverage, setCoverage] = useState(500000);
  const [termLength, setTermLength] = useState(20);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const termMonthlyPremium = React.useMemo(() => {
    return ((coverage * 0.0016) / 12).toFixed(2);
  }, [coverage]);

  const wholeLifeMonthlyPremium = React.useMemo(() => {
    return ((coverage * 0.004) / 12).toFixed(2);
  }, [coverage]);

  const conversionAge = currentAge + termLength;
  const generateData = React.useMemo(() => {
    const data = [];
    // Term phase
    for (let year = 0; year <= termLength; year++) {
      const age = currentAge + year;
      if (age > 100) break; // Stop if age exceeds 100
      data.push({
        age,
        coverage: coverage,
        cashValue: 0,
        premium: termMonthlyPremium * 12,
        phase: "Term",
      });
    }
    // Whole life phase
    for (let year = 1; year <= 30; year++) {
      const age = conversionAge + year;
      if (age > 100) break; // Stop if age exceeds 100
      data.push({
        age,
        coverage: coverage,
        cashValue: coverage * 0.03 * year,
        premium: wholeLifeMonthlyPremium * 12,
        phase: "Whole Life",
      });
    }
    return data;
  }, [
    currentAge,
    coverage,
    termLength,
    conversionAge,
    termMonthlyPremium,
    wholeLifeMonthlyPremium,
  ]);

  if (!isClient) return null;

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-screen w-[720px] z-[10000] bg-gray-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XCircle size={24} />
          </button>
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
          <div className="w-[24px]" />
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-blue-50 shadow-lg p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-semibold">
                What is convertible term insurance ?{" "}
              </h2>
            </div>
            <p className="mb-4  leading-[27px] text-[15px]  text-halfBlack">
              Let's consider whole life convertible term insurance as renting a
              home with a guaranteed option to buy it later.{" "}
            </p>

            <div>
              <h3 className="font-semibold mb-2">
                The whole life conversion feature:
              </h3>
              <ul className="list-disc pl-5 space-y-1 li-disc">
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  Any time before the expiry of the term insurance you can
                  convert it into a whole life insurance.
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  No new medical exam is needed
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  Your health when you first bought the policy will only be
                  considered.
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  You can convert all or part of your coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="flex justify-between items-center gap-2 pb-0 py-[10px] ">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Calendar size={18} />
                Your Age
              </label>
              <div className="w-max font-semibold px-6 py-2">45 Years</div>
            </div>

            <div className="space-y-2 w-[12rem]">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <DollarSign size={18} />
                Conversion Amount
              </label>
              <select
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                {[250000, 500000, 750000, 1000000].map((amount) => (
                  <option key={amount} value={amount}>
                    ${amount.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 w-[12rem]">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Clock size={18} />
                Conversion Term{" "}
              </label>
              <select
                value={termLength}
                onChange={(e) => setTermLength(Number(e.target.value))}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                {[10, 15, 20, 25, 30].map((term) => (
                  <option key={term} value={term}>
                    {term} years
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600" />
              Coverage & Value Timeline
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer>
                <LineChart data={generateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="age"
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                    tickSize={4}
                    domain={[
                      currentAge,
                      Math.min(100, currentAge + termLength + 30),
                    ]}
                  />
                  <YAxis
                    stroke="#6B7280"
                    tickFormatter={(value) =>
                      `$${(value / 1000000).toFixed(1)}M`
                    }
                    tick={{ fontSize: 12 }}
                    tickSize={4}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, ""]}
                    labelFormatter={(label) => `Age: ${label}`}
                  />
                  <ReferenceLine
                    x={conversionAge}
                    stroke="#EF4444"
                    label={{
                      value: "Conversion Point",
                      position: "top",
                      fill: "#EF4444",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="coverage"
                    name="Death Benefit"
                    stroke="#2563EB"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cashValue"
                    name="Cash Value"
                    stroke="#059669"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg  rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <HandCoins className="text-amber-600" size={20} />
              Key Benefits
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Wallet className="text-amber-600 mt-1" size={18} />
                <p className="text-gray-700">
                  Start with affordable term coverage
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="text-amber-600 mt-1" size={18} />
                <p className="text-gray-700">Convert without medical exam</p>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="text-amber-600 mt-1" size={18} />
                <p className="text-gray-700">
                  Build cash value after conversion
                </p>
              </div>
              <div className="flex items-start gap-2">
                <LockKeyhole className="text-amber-600 mt-1" size={18} />
                <p className="text-gray-700">Coverage never expires</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
          <div className="text-gray-900 font-semibold text-xl">
            ${termMonthlyPremium}
            <span className="text-gray-500 text-base font-normal">/month</span>
          </div>
          <button className="bg-secondary  text-black px-6 py-2 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default WholeLifeConvertible;
