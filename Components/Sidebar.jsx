import React, { useState } from "react";
import { Menu, X, FileText, Home, Heart, Building, Lock } from "lucide-react";

const SidebarPreview = ({ setIsOpen, isOpen }) => {
  const insuranceOptions = [
    {
      title: "Term Life Insurance",
      icon: <FileText />,
      path: "/quote/term-life",
    },
    {
      title: "Whole Life Insurance",
      icon: <Home />,
      path: "/quote/whole-life",
    },
    {
      title: "Mortgage Insurance",
      icon: <Building />,
      path: "/quote/mortgage",
    },
    {
      title: "Critical Illness",
      icon: <Heart />,
      path: "/quote/critical-illness",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-[300px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <span className="text-xl font-semibold text-teal-600">
          PolicyScanner
        </span>
        <X
          className="h-5 w-5 text-gray-400 cursor-pointer hover:text-teal-600"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="mt-6 px-4">
        {insuranceOptions.map((option, index) => (
          <button
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-teal-50 group cursor-pointer"
          >
            <div className="text-gray-400 group-hover:text-teal-600">
              {option.icon}
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-teal-600">
              {option.title}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-16 left-0 w-full px-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>Step 0 of 3</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-teal-600 h-2 rounded-full w-0"></div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full px-6 flex items-center gap-2 text-xs text-gray-400">
        <Lock className="h-4 w-4" />
        <span>Your personal information is secure with us</span>
      </div>
    </div>
  );
};

export default SidebarPreview;
