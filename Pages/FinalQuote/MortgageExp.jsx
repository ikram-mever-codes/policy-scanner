import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { Home, DollarSign, Shield, Check, XCircle } from "lucide-react";

const MortgageExp = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState(500000);
  const [isHovered, setIsHovered] = useState(false);
  const [numChildren, setNumChildren] = useState(2);
  const baseRiderCost = 6;
  const coveragePerChild = 10000;

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

        <div className="p-6 space-y-6 bg-white">
          <div className="bg-blue-50 rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-blue-800 text-center">
              Decreasing Mortgage Protection Insurance in Canada
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Protect your family's home as your mortgage decreases
            </p>
          </div>

          {/* What Is It */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">
                What is Mortgage Protection Insurance?
              </h2>
            </div>
            <div className="p-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p>Pays off your remaining mortgage if you pass away</p>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p>Coverage decreases as your mortgage balance reduces</p>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p>Premiums typically stay the same throughout the term</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">
                Key Benefits for Canadians
              </h2>
            </div>
            <div className="p-4">
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Affordable Protection</p>
                    <p className="text-gray-600">
                      Lower premiums compared to traditional life insurance
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Guaranteed Coverage</p>
                    <p className="text-gray-600">
                      No medical exam required by most Canadian providers
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Tax-Free Payout</p>
                    <p className="text-gray-600">
                      Benefits are tax-free in Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Important Notes</h2>
            </div>
            <div className="p-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <p>
                    Coverage is separate from CMHC mortgage default insurance
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <p>
                    Available through banks, credit unions, and insurance
                    providers
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <p>
                    Consider comparing with term life insurance for best value
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-center">
                How It Works: 25-Year Example
              </h2>
            </div>
            <div className="p-4 grid gap-6">
              {[
                { year: 1, mortgage: 500000, insurance: 500000 },
                { year: 15, mortgage: 250000, insurance: 250000 },
                { year: 25, mortgage: 0, insurance: 0 },
              ].map((point) => (
                <div
                  key={point.year}
                  className="bg-blue-50 p-4 rounded-lg mt-3"
                >
                  <p className="font-bold text-white bg-blue-500 rounded-full w-max px-[3rem] py-2 mb-3 mx-auto relative top-[-30px] text-center">
                    Year {point.year}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Home className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <p className="font-medium">Home Value</p>
                      <p className="text-gray-600">
                        ${(500000).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <DollarSign className="w-6 h-6 text-red-500 mx-auto mb-2" />
                      <p className="font-medium">Mortgage</p>
                      <p className="text-gray-600">
                        ${point.mortgage.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="font-medium">Insurance</p>
                      <p className="text-gray-600">
                        ${point.insurance.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default MortgageExp;
