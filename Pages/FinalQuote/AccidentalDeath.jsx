import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import {
  Clock,
  DollarSign,
  Shield,
  XCircle,
  AlertTriangle,
  Car,
  Hammer,
  Heart,
} from "lucide-react";
import "./Head.css";

const AccidentalDeath = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState(500000);
  const [riderAmount] = useState(45);

  const coverageOptions = [100000, 250000, 500000, 750000, 1000000];

  // Calculate dimensions for the visualization
  const maxBarHeight = 200;
  const barWidth = 100;
  const scale = maxBarHeight / (coverage * 2);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50  to-blue-100 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-800">
                Accidental Death Benefit Rider
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              An additional benefit that pays your beneficiaries extra money if
              death occurs due to an accident. This is on top of your regular
              life insurance payout.
            </p>
          </div>

          {/* Coverage Selector */}
          <div className="bg-white  rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-blue-600" size={20} />
              <label className="font-medium">Select Coverage Amount:</label>
              <select
                className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
              >
                {coverageOptions.map((amount) => (
                  <option key={amount} value={amount}>
                    ${amount.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Visual Representation */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">
                Coverage Comparison
              </h3>
              <div className="flex justify-center">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {/* Regular Death Benefit Bar */}
                  <g transform="translate(60, 20)">
                    <rect
                      x="0"
                      y={maxBarHeight - coverage * scale}
                      width={barWidth}
                      height={coverage * scale}
                      fill="#3b82f6"
                      className="transition-all duration-300"
                    />
                    <text
                      x={barWidth / 2}
                      y={maxBarHeight + 30}
                      textAnchor="middle"
                      className="text-sm fill-gray-600"
                    >
                      Regular Death
                    </text>
                    <text
                      x={barWidth / 2}
                      y={maxBarHeight - coverage * scale - 10}
                      textAnchor="middle"
                      className="text-sm font-semibold fill-gray-900"
                    >
                      ${coverage.toLocaleString()}
                    </text>
                  </g>

                  {/* Accidental Death Bar */}
                  <g transform="translate(180, 20)">
                    <rect
                      x="0"
                      y={maxBarHeight - coverage * 2 * scale}
                      width={barWidth}
                      height={coverage * 2 * scale}
                      fill="#60a5fa"
                      className="transition-all duration-300"
                    />
                    <text
                      x={barWidth / 2}
                      y={maxBarHeight + 30}
                      textAnchor="middle"
                      className="text-sm fill-gray-600"
                    >
                      Accidental Death
                    </text>
                    <text
                      x={barWidth / 2}
                      y={maxBarHeight - coverage * 2 * scale - 10}
                      textAnchor="middle"
                      className="text-sm font-semibold fill-gray-900"
                    >
                      ${(coverage * 2).toLocaleString()}
                    </text>
                  </g>

                  <line
                    x1="40"
                    y1={maxBarHeight + 20}
                    x2="260"
                    y2={maxBarHeight + 20}
                    stroke="#666"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Example Scenario */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-yellow-600" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">
                Example Scenario
              </h3>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between text-gray-600">
                Base Policy Death Benefit
                <span className="font-semibold text-gray-900">
                  ${coverage.toLocaleString()}
                </span>
              </p>
              <p className="flex justify-between text-gray-600">
                Additional Accidental Death Benefit
                <span className="font-semibold text-gray-900">
                  ${coverage.toLocaleString()}
                </span>
              </p>
              <p className="flex justify-between text-gray-600 font-medium">
                Total Payout in Case of Accidental Death
                <span className="font-semibold text-blue-600">
                  ${(coverage * 2).toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* Common Covered Accidents */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-emerald-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">
                  Key Benefits
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <DollarSign className="text-emerald-600 mt-1" size={16} />
                  <span className="text-gray-600">
                    Doubles your coverage in case of accidental death
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-emerald-600 mt-1" size={16} />
                  <span className="text-gray-600">
                    Additional protection for just ${riderAmount}/month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="text-emerald-600 mt-1" size={16} />
                  <span className="text-gray-600">
                    Provides extra financial security
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br shadow-lg from-amber-50 to-orange-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-amber-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">
                  Covered Accidents
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Car className="text-amber-600 mt-1" size={16} />
                  <span className="text-gray-600">Car accidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="text-amber-600 mt-1" size={16} />
                  <span className="text-gray-600">Falls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Hammer className="text-amber-600 mt-1" size={16} />
                  <span className="text-gray-600">Work-related accidents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
          <div className="text-gray-900 font-semibold text-xl">
            ${riderAmount}
            <span className="text-gray-500 text-base font-normal">/month</span>
          </div>
          <button className="bg-secondary text-black  px-6 py-2 rounded-lg font-medium transition-colors">
            Add to Policy
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default AccidentalDeath;
