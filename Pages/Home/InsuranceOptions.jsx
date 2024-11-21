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
    <section className="w-full px-4 sm:px-10 py-[60px] lg:px-16 xl:px-24  bg-foreground2 flex items-center justify-center">
      <div className="w-[1140px] max-w-7xl flex justify-center items-center flex-col gap-[60px]">
        <h2 className="text-halfBlack text-[40px] font-bold text-center ">
          Customized plans. Full protection. Explore options{" "}
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 gap-y-[4rem] lg:gap-6 ">
          {insuranceOptions.map((ins, index) => (
            <div className=" ">
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                group relative bg-white    w-[555spx] h-[215px] overflow-hidden cursor-pointer
                 shadow-lg 
                flex  
                justify-center items-center
                transition-all duration-500 ease-in-out
                p-6
                
                `}
              >
                <div
                  className={`
                  
                  absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 
                  transition-opacity duration-500 
                  bg-gradient-to-br from-opposite/20 to-opposite/10
                  `}
                />

                <div
                  className={`
                  rounded-none
                  py-3
                  w-[104px]
                  m-2
                  h-[104px]
                  
                  
                  transition-transform duration-500
                  `}
                >
                  {ins.icon}
                </div>

                <div
                  className="flex-grow flex flex-col text-center 
                p-4 lg:p-6
                "
                >
                  <h4
                    className={`
                    text-[28px] text-left
                    font-semibold transition-colors duration-500
                    
                    `}
                  >
                    {ins.title}
                  </h4>

                  <p
                    className={`
                    text-gray text-dg text-left
                    transition-opacity duration-500
                    ${
                      activeIndex === index
                        ? "opacity-100"
                        : "group-hover:opacity-80"
                    }
                    `}
                  >
                    {ins.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceOptions;
