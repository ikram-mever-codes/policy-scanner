"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Opt1 from "../../assets/opt1.svg";
import Opt2 from "../../assets/opt2.svg";
import Opt3 from "../../assets/opt3.svg";
import Opt4 from "../../assets/opt4.svg";

const InsuranceOptions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const insuranceOptions = [
    {
      icon: <Opt1 width="100%" height="100%" />,
      title: "Term Life Insurance",
      description:
        "Provides coverage for a specific period, paying beneficiaries if you pass away.",
    },
    {
      icon: <Opt2 width="100%" height="100%" />,
      title: "Whole Life Insurance",
      description:
        "Secure lifelong coverage, offering cash value accumulation and peace of mind for your future.",
    },
    {
      icon: <Opt3 width="100%" height="100%" />,
      title: "Mortgage Insurance",
      description:
        "Term insurance to cover your mortgage against default and unexpected events.",
    },
    {
      icon: <Opt4 width="100%" height="100%" />,
      title: "Critical Illness Insurance",
      description:
        "Get a tax-free lump sum to cover expenses during life-threatening or terminal illnesses.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-[60px] lg:px-16 xl:px-24 bg-foreground2 flex items-center justify-center">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col gap-16">
        <h2 className="text-halfBlack text-4xl font-bold text-center">
          Want to Learn More? Explore Insurance Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-16 lg:gap-6">
          {insuranceOptions.map((ins, index) => (
            <InsuranceCard
              key={index}
              icon={ins.icon}
              title={ins.title}
              description={ins.description}
              active={activeIndex === index}
              setActive={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const InsuranceCard = ({ icon, title, description, active, setActive }) => {
  return (
    <div
      onClick={setActive}
      onMouseEnter={setActive}
      onFocus={setActive}
      tabIndex={0}
      className="relative group bg-white rounded-lg overflow-hidden w-[555px] h-[215px] cursor-pointer shadow-lg flex justify-center items-center p-6"
    >
      <div className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#007f73]/20 to-[#FFD700]/10"></div>
      <div className="rounded-none py-3 w-[104px] m-2 h-[104px] transition-transform duration-500">
        {icon}
      </div>
      <div className="flex-grow flex flex-col text-center p-4 lg:p-6">
        <h4 className="text-2xl text-left font-semibold transition-colors duration-500 text-halfBlack">
          {title}
        </h4>
        <p
          className={`text-gray text-dg text-left text-halfBlack transition-opacity duration-500 ${
            active ? "opacity-100" : "group-hover:opacity-80"
          }`}
        >
          {description}
        </p>
      </div>
      <svg
        className="absolute inset-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 555 215"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`gradient-border`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#007f73" />
            {/* <stop offset="100%" stopColor="#FFD700" /> */}
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="551"
          height="211"
          fill="none"
          stroke="url(#gradient-border)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1524"
          strokeDashoffset={active ? "0" : "1524"}
          style={{
            transition: active
              ? "stroke-dashoffset 1.2s linear"
              : "stroke-dashoffset 0s",
          }}
        />
      </svg>
    </div>
  );
};

InsuranceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default InsuranceOptions;
