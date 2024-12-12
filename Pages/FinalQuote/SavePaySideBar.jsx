import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import { DollarSign, Calendar } from "lucide-react";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { Heart, Brain, Activity, AlertCircle, XCircle } from "lucide-react";

const SavePaySideBar = ({ open, onClose, payTermLength }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState(500000);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-screen w-[720px] z-[10000] bg-gray-50 shadow-2xl overflow-y-auto">
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

        <div className="p-6 bg-white space-y-6">
          {/* Simple Header */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-700 text-center">
              You're saving 40% with {payTermLength}
            </h2>
          </div>

          {/* Payment Comparison */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Life 100 Pay</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gray-600" />
                  <span>$250 monthly payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span>Pay for life</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Total over lifetime:
                  </div>
                  <div className="text-xl font-semibold">$150,000</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-lg mb-4">{payTermLength}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span>$375 monthly payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span>Pay for 20 years only</span>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="text-sm text-green-600">
                    Total over 20 years:
                  </div>
                  <div className="text-xl font-semibold text-green-700">
                    $90,000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Savings */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Your Total Savings</h3>
              <div className="text-3xl font-bold text-green-600">$60,000</div>
            </div>
            <div className="mt-4 w-full flex justify-between items-center px-6">
              <div>
                <span className="text-sm text-gray-600">Without 20 Pay:</span>
                <div className="text-lg font-semibold">$150,000</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">With 20 Pay:</span>
                <div className="text-lg font-semibold text-green-600">
                  $90,000
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Key Benefits</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">No Payments After 20 Years</div>
                <div className="text-sm text-gray-600">
                  Complete freedom from premiums
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">Same Coverage Amount</div>
                <div className="text-sm text-gray-600">
                  Lifetime protection guaranteed
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">Faster Cash Value Growth</div>
                <div className="text-sm text-gray-600">
                  Build wealth quicker
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">Fixed End Date</div>
                <div className="text-sm text-gray-600">
                  Know exactly when payments end
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm">
            Your payments will be completed by 2044
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

export default SavePaySideBar;
