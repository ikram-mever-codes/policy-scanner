import { Sparkles } from "lucide-react";
import React, { useState } from "react";

const TalkToExpert = ({ onClose }) => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-teal-200 via-emerald-200 to-teal-200"></div>
      </div>

      {/* Content Container */}
      <div className="relative p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 blur-lg opacity-30 rounded-full"></div>
            </div>
            <div className="relative bg-white p-4 rounded-xl shadow-sm">
              <Sparkles className="w-8 h-8 text-teal-600" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Expert Support Coming Up!
          </h2>
          <p className="text-gray-600">
            We'll connect you with a specialist momentarily
          </p>

          {/* Contact Info Card */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="font-medium text-teal-600">+1 ••• •• 8353</div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-sm text-gray-500">
            Available during business hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;
