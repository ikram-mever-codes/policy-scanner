import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { Heart, Brain, Activity, AlertCircle, XCircle } from "lucide-react";

const CiSidebar = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState(500000);
  const [isHovered, setIsHovered] = useState(false);

  const [riderAmount] = useState(45);

  const coverageOptions = [50000, 100000, 150000, 200000, 250000];

  const illnesses = [
    {
      name: "Heart Attack",
      icon: Heart,
      description: "Covers heart attacks and other cardiac conditions",
    },
    {
      name: "Stroke",
      icon: Brain,
      description: "Includes coverage for stroke and its immediate effects",
    },
    {
      name: "Kidney Failure",
      icon: Activity,
      description: "Covers end-stage renal disease requiring dialysis",
    },
    {
      name: "Cancer",
      icon: AlertCircle,
      description: "Covers most types of life-threatening cancers",
    },
  ];

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
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">What is it?</h2>
            <p className="text-gray-600">
              A Critical Illness Rider provides an additional lump-sum payment
              if you're diagnosed with specific serious illnesses. This money
              can be used for medical expenses, lifestyle changes, or any other
              purpose while you're still alive.
            </p>
          </div>

          {/* Covered illnesses grid */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Covered Critical Illnesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {illnesses.map(({ name, icon: Icon, description }) => (
                <div
                  key={name}
                  className="p-4 border rounded-lg flex items-start gap-3"
                >
                  <Icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="bg-green-50 p-4 rounded-lg space-y-3">
            <h2 className="text-lg font-semibold">How it Works</h2>
            <div className="space-y-2">
              <p>
                Selected Coverage Amount:{" "}
                <span className="font-semibold">
                  ${coverage.toLocaleString()}
                </span>
              </p>
              <p>
                Monthly Premium:{" "}
                <span className="font-semibold">${riderAmount}</span>
              </p>
              <p>
                If you're diagnosed with any covered critical illness, you
                receive:
              </p>
              <p className="text-xl font-bold text-green-700">
                ${coverage.toLocaleString()} tax-free payment
              </p>
            </div>
          </div>

          {/* Key benefits */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Key Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Immediate financial support upon diagnosis</li>
              <li>No restrictions on how you use the money</li>
              <li>Coverage continues even after a claim</li>
              <li>
                Helps cover medical expenses, lost income, or lifestyle changes
              </li>
            </ul>
          </div>

          {/* Important notes */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>30-day survival period required after diagnosis</li>
              <li>Pre-existing conditions may have waiting periods</li>
              <li>
                Coverage remains active until age 75 or policy termination
              </li>
              <li>Benefit paid is independent of your medical expenses</li>
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
          <div className="text-gray-900 font-semibold text-xl">
            ${coverage}
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

export default CiSidebar;
