"use client";
import React, { useState } from "react";
import Opt1 from "../../assets/opt1.svg";
import Opt2 from "../../assets/opt2.svg";
import Opt3 from "../../assets/opt3.svg";
import Opt4 from "../../assets/opt4.svg";

const InsuranceOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const insuranceOptions = [
    {
      icon: <Opt1 width="100%" height="100%" />,
      title: "Term life insurance",
      description:
        "Provides coverage for a specific period, paying beneficiaries if you pass away.",
    },
    {
      icon: <Opt2 width="100%" height="100%" />,
      title: "Whole life insurance",
      description:
        "Secure lifelong coverage, offering cash value accumulation and peace of mind for your future.",
    },
    {
      icon: <Opt3 width="100%" height="100%" />,
      title: "Mortgage insurance",
      description:
        "Term insurance to cover your mortgage against default and unexpected events.",
    },
    {
      icon: <Opt4 width="100%" height="100%" />,
      title: "Critical Illness insurance",
      description:
        "Get a tax-free lump sum to cover expenses during life-threatening or terminal illnesses.",
    },
  ];

  return (
    <section className="w-full h-[100vh] px-[80px] py-[40px] bg-foreground2 flex flex-col items-center gap-[50px]">
      <h2 className="w-full font-bold text-[25px] text-center text-halfBlack">
        Connect with an Advisor Now
      </h2>
      <div className="grid grid-cols-2 gap-[20px]">
        {insuranceOptions.map((ins, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[35vw] h-[35vh] relative bg-white rounded-xl shadow-md flex flex-col justify-start p-[20px] transition-all duration-300 ${
                activeIndex === index
                  ? "border-opposite border-2 scale-105 shadow-lg"
                  : "hover:shadow-lg"
              }`}
            >
              {/* Icon */}
              <div className="w-[90px] h-[60px] mb-[15px]">{ins.icon}</div>
              {/* Title */}
              <h4
                className={`text-[20px] font-medium transition-colors duration-300 ${
                  activeIndex === index ? "text-opposite" : "text-halfBlack"
                }`}
              >
                {ins.title}
              </h4>
              {/* Description */}
              <p className="text-[15px] mt-[10px] text-gray">
                {ins.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InsuranceOptions;
