import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { XCircle, Users, GraduationCap, ArrowRight } from "lucide-react";

const ChildrenRider = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState(500000);
  const [isHovered, setIsHovered] = useState(false);
  const [numChildren, setNumChildren] = useState(2);
  const baseRiderCost = 6;
  const coveragePerChild = 10000;

  const timelineEvents = [
    { age: 0, event: "Birth/Adoption" },
    { age: 15, event: "Teen Years" },
    { age: 21, event: "Coverage End" },
    { age: 25, event: "Conversion Option" },
  ];
  const [riderAmount] = useState(45);

  const coverageOptions = [50000, 100000, 150000, 200000, 250000];

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
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">What is it?</h3>
            <p className="text-gray-700">
              A Children's Insurance Rider adds life insurance coverage for all
              your eligible children under one rider. It provides coverage from
              15 days after birth until age 21, with an option to convert to
              permanent coverage up to age 25.
            </p>
          </div>

          {/* Coverage Calculator */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Coverage Calculator</h3>
            <div className="flex items-center gap-4 mb-4">
              <label className="font-medium">Number of Children:</label>
              <select
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={numChildren}
                onChange={(e) => setNumChildren(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Visual representation of coverage */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-blue-500" />
                <span className="mx-4 text-2xl font-bold">{numChildren}</span>
                <span className="text-xl">×</span>
                <span className="mx-4 font-bold text-green-600">
                  ${coveragePerChild.toLocaleString()}
                </span>
                <ArrowRight className="mx-4" />
                <span className="text-2xl font-bold text-green-700">
                  ${(numChildren * coveragePerChild).toLocaleString()}
                </span>
              </div>
              <p className="text-center text-gray-600">
                Monthly Premium: ${(numChildren * baseRiderCost).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Coverage Timeline */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Coverage Timeline</h3>
            <div className="relative">
              <div className="absolute top-[7px] left-0 right-0 h-1 bg-blue-200 -translate-y-1/2" />
              <div className="relative flex justify-between">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500  z-10" />
                    <div className="text-sm font-semibold">{`Age ${event.age}`}</div>
                    <div className="text-xs text-gray-600 text-center mt-1">
                      {event.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>One rider covers all eligible children</li>
              <li>Guaranteed insurability for future coverage</li>
              <li>No medical exams required for children</li>
              <li>Coverage automatically includes future children</li>
              <li>Conversion option to permanent insurance</li>
            </ul>
          </div>

          {/* Conversion Feature */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Conversion Feature</h3>
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="mb-2">
                  At age 21, each child has the option to convert their coverage
                  to a permanent life insurance policy of up to 5 times the
                  rider amount, without medical examination.
                </p>
                <p className="font-semibold">
                  Example: ${coveragePerChild.toLocaleString()} rider → Up to $
                  {(coveragePerChild * 5).toLocaleString()} permanent coverage
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Coverage begins 15 days after birth or adoption</li>
              <li>Rider must be purchased while children are under age 18</li>
              <li>Coverage ends at age 21 (or 25 if full-time student)</li>
              <li>One premium covers all eligible children</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
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

export default ChildrenRider;
