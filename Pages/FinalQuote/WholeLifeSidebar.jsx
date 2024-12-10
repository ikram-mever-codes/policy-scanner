import React, { useState } from "react";
import { Slide } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  DollarSign,
  Heart,
  RefreshCw,
  Shield,
  Wallet,
} from "lucide-react";
import logo from "../../assets/canada-life.png";
import { CloseOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function WholeLifeSidebar({ open, onClose }) {
  const sampleData = {
    dateOfBirth: "1980-05-15",
    coverageAmount: 500000,
    monthlyPremium: 500,
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const currentAge = calculateAge(sampleData.dateOfBirth);
  const yearsToHundred = 100 - currentAge;

  // Added open and onClose props
  const [activeTab, setActiveTab] = useState("Plan Summary");
  const [activeStep, setActiveStep] = useState(null);

  const conversionSteps = [
    {
      icon: Shield,
      title: "Timeline",
      details: "Submit before age 65",
      subDetails: "Convert any time before maximum age limit",
    },
    {
      icon: Shield,
      title: "Plan Selection",
      details: "Choose Whole Life plan",
      subDetails: "Multiple premium payment options available",
    },
    {
      icon: CreditCard,
      title: "Premium Adjustment",
      details: "New premium calculation",
      subDetails: "Based on age at conversion",
    },
    {
      icon: CheckCircle2,
      title: "Policy Issuance",
      details: "New policy documentation",
      subDetails: "Previous years credited to new policy",
    },
  ];

  const premiumData = [
    { age: "25", premium: 650 },
    { age: "35", premium: 900 },
    { age: "45", premium: 1300 },
    { age: "55", premium: 2600 },
  ];

  const benefits = [
    {
      title: "Family Security",
      desc: "Protection for loved ones",
    },
    {
      title: "Low Cost",
      desc: "Affordable payments",
    },
    {
      title: "High Coverage",
      desc: "Large protection",
    },
  ];

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-[100vh] w-[720px] select-none overflow-y-scroll z-[30] overflow-x-hidden bg-white shadow-lg  flex flex-col">
        <div className="bg-[#F0F1F2] text-white p-4 px-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <CloseOutlined sx={{ fontSize: "20px", color: "black" }} />
            </button>
            <Image
              src={logo}
              alt="Logo"
              className="mx-auto object-cover object-center relative left-[-150px]"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 p-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Coverage Amount */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-indigo-100">Coverage Amount</span>
              </div>
              <p className="text-3xl font-bold">
                ${sampleData.coverageAmount.toLocaleString()}
              </p>
              <p className="text-indigo-100 mt-2">Guaranteed death benefit</p>
            </div>

            {/* Age & Timeline */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Policy Timeline</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Current Age</span>
                    <span className="font-semibold">{currentAge} years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 rounded-full h-2"
                      style={{ width: `${(currentAge / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Years Until 100</span>
                    <span className="font-semibold">
                      {yearsToHundred} years
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 rounded-full h-2"
                      style={{ width: `${(yearsToHundred / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Monthly Premium */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Wallet className="w-5 h-5" />
                <span>Monthly Premium</span>
              </div>
              <p className="text-2xl font-bold text-indigo-600">
                ${sampleData.monthlyPremium}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <p className="text-sm text-gray-600">
                  Fixed rate for {yearsToHundred} years
                </p>
              </div>
            </div>

            {/* Policy Features */}
            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">Policy Features</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Lifetime Coverage</p>
                    <p className="text-sm text-gray-600">
                      Protection never expires
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">Guaranteed Benefit</p>
                    <p className="text-sm text-gray-600">
                      Amount never decreases
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Fixed Premiums</p>
                    <p className="text-sm text-gray-600">
                      Payments stay the same
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-t p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Key Benefits</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                "Lifelong protection",
                "Guaranteed benefit",
                "Fixed premiums",
                "Peace of mind",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                >
                  <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
