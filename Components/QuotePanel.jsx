"use client";
import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";

const QuotePanel = () => {
  const [gender, setGender] = useState("Male");
  const [coverage, setCoverage] = useState("Myself");
  const [province, setProvince] = useState("Ontario");

  const provinces = [
    "Ontario",
    "Quebec",
    "British Columbia",
    "Alberta",
    "Manitoba",
  ];

  return (
    <section className="w-full h-max bg-foreground2 gap-[3rem] px-[80px] py-[5rem] flex justify-start items-center flex-col">
      <form className="flex gap-[20px] items-center justify-center flex-wrap w-full">
        <div className="flex flex-col items-start">
          <label className="text-[16px] font-semibold mb-2">Gender</label>
          <div className="flex">
            <button
              type="button"
              onClick={() => setGender("Male")}
              className={`px-[20px] py-[10px] border-2 border-primary rounded-l-lg ${
                gender === "Male" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender("Female")}
              className={`px-[20px] py-[10px] border-2 border-primary border-l-0 rounded-r-lg ${
                gender === "Female" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label className="text-[16px] font-semibold mb-2">
            I want to Cover
          </label>
          <div className="flex">
            <button
              type="button"
              onClick={() => setCoverage("Me & My Partner")}
              className={`px-[20px] py-[10px] border-2 border-primary rounded-l-lg ${
                coverage === "Me & My Partner"
                  ? "bg-primary text-white"
                  : "text-primary"
              }`}
            >
              Me & My Partner
            </button>
            <button
              type="button"
              onClick={() => setCoverage("Myself")}
              className={`px-[20px] py-[10px] border-2 border-primary border-l-0 rounded-r-lg ${
                coverage === "Myself" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              Myself
            </button>
          </div>
        </div>

        {/* Date of Birth Section */}
        <div className="flex flex-col items-start">
          <label className="text-[16px] font-semibold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            className="px-[15px] py-[10px] border-2 bg-transparent text-black border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="text-[16px] font-semibold mb-2">Province</label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="px-[15px] py-[10px] border-2 bg-transparent text-black border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg mt-[20px]">
          Get a Quote
          <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
        </button>
      </form>
    </section>
  );
};

export default QuotePanel;
