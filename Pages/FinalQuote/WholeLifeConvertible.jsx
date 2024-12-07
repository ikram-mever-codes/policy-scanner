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
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Simple Explanation</h2>
            </div>
            <p className="mb-4  leading-[27px] text-[15px]  text-halfBlack">
              Think of a Whole Life Convertible Term Plan like renting a house
              with a guaranteed option to buy it later. Here's how it works:
            </p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Starting Out:</h3>
              <ul className=" pl-5 space-y-2 li-disc">
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  You get temporary life insurance (like renting) at an
                  affordable rate
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  For example: $500,000 coverage for $66.67 per month
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  Your coverage is guaranteed for a specific period (say 20
                  years)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                The Special Conversion Feature:
              </h3>
              <ul className="list-disc pl-5 space-y-2 li-disc">
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  Any time during your term, you have a guaranteed right to
                  convert to permanent coverage
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  No new medical exam needed
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  Your health when you first bought the policy is what matters,
                  not your health when you convert
                </li>
                <li className="leading-[27px] text-[15px]  text-halfBlack">
                  You can convert all or part of your coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-3 gap-4  py-[10px]">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Calendar size={18} />
                Current Age
              </label>
              <select
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                {[25, 30, 35, 40, 45, 50].map((age) => (
                  <option key={age} value={age}>
                    {age} years
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <DollarSign size={18} />
                Coverage Amount
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
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Clock size={18} />
                Term Length
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

          {/* Phase Comparison */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">
                  Term Phase
                </h3>
              </div>
              <div className="space-y-3">
                <p className="flex justify-between text-gray-600">
                  Monthly Premium
                  <span className="font-semibold text-gray-900">
                    ${termMonthlyPremium}
                  </span>
                </p>
                <p className="flex justify-between text-gray-600">
                  Death Benefit
                  <span className="font-semibold text-gray-900">
                    ${coverage.toLocaleString()}
                  </span>
                </p>
                <p className="flex justify-between text-gray-600">
                  Cash Value
                  <span className="font-semibold text-gray-900">$0</span>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <HeartPulse className="text-emerald-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">
                  After Conversion
                </h3>
              </div>
              <div className="space-y-3">
                <p className="flex justify-between text-gray-600">
                  Monthly Premium
                  <span className="font-semibold text-gray-900">
                    ${wholeLifeMonthlyPremium}
                  </span>
                </p>
                <p className="flex justify-between text-gray-600">
                  Death Benefit
                  <span className="font-semibold text-gray-900">
                    ${coverage.toLocaleString()}
                  </span>
                </p>
                <p className="flex justify-between text-gray-600">
                  Cash Value Growth
                  <span className="font-semibold text-emerald-600">Yes</span>
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
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
