"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditInfoSidebar from "./EditInfoSidebar";
import "./Head.css";

const Head = ({ toggleLifeType, isWholeLife, quoteData }) => {
  const coverageOptions = [
    "10,000",
    "50,000",
    "100,000",
    "200,000",
    "500,000",
    "1,000,000",
  ];
  const yearOptions = ["1", "5", "10", "15", "20", "25", "30"];

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleEditClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="w-full h-max flex justify-start items-center gap-[1.5rem] flex-col">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
      <div className="w-full h-max flex justify-between items-center">
        <div className="w-max h-[2.5rem] rounded-md overflow-hidden border-solid border border-halfBlack">
          <button
            onClick={toggleLifeType}
            className={`w-[8rem] h-full ${
              isWholeLife
                ? "bg-transparent text-halfBlack"
                : "bg-primary text-white"
            }`}
          >
            Term Life
          </button>
          <button
            onClick={toggleLifeType}
            className={`w-[8rem] h-full ${
              isWholeLife
                ? "bg-primary text-white"
                : "bg-transparent text-halfBlack"
            }`}
          >
            Whole Life
          </button>
        </div>
        <div className="w-max h-max flex justify-end items-center gap-[1px] text-halfBlack text-[14px]">
          <div className="border-r border-solid border-halfBlack px-[5px]">
            {quoteData.gender === "male" ? "Male" : "Female"}
          </div>
          <div className="border-r border-solid border-halfBlack px-[5px]">
            {quoteData.years} Yrs
          </div>
          <div className="border-r border-solid border-halfBlack px-[5px]">
            {quoteData.smoker === "yes" ? "Smoker" : "Non-smoker"}
          </div>
          <button className="px-[5px] text-[#0066ff]" onClick={handleEditClick}>
            Edit
          </button>{" "}
        </div>
      </div>
      <div className="w-full rounded-lg bg-white shadow-sidebar h-[7rem] flex justify-between items-center gap-[1rem] px-[2rem] py-[1rem]">
        <div className="flex flex-col w-[10rem] h-full py-[5px]">
          <div className="flex flex-col items-start justify-center border-r border-solid border-halfBlack h-full">
            <div className="text-[16px] text-left text-halfBlack">
              Coverage Amount
            </div>
            <select
              id="coverage"
              value={""}
              className="rounded-md w-[8rem] py-[10px] text-left border-none font-medium focus:outline-none"
            >
              <option value="" disabled>
                $10,000,000
              </option>
              {coverageOptions.map((option) => (
                <option key={option} value={option}>
                  ${option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-[10rem] h-full py-[5px]">
          <div className="flex flex-col items-start justify-center border-r border-solid border-halfBlack h-full">
            <div className="text-[16px] text-left text-halfBlack">
              Term Length
            </div>
            <select
              id="coverage"
              value={""}
              className="rounded-md w-[8rem] py-[10px] text-left border-none font-medium focus:outline-none"
            >
              <option value="" disabled>
                20 Years
              </option>
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  ${option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-max h-full flex justify-center items-center gap-[1rem]">
          <div className="flex justify-between h-[3.5rem] gap-[1rem] border-solid border border-selected items-center p-[10px] rounded-md bg-selected2">
            <button className="w-[5rem] h-[2.5rem] shadow-xl text-halfBlack bg-white rounded-md">
              Monthly
            </button>
            <button className="w-[5rem] h-[2.5rem] text-halfBlack bg-transparent rounded-md">
              Yearly
            </button>
          </div>
          <div className="text-primary2 flex justify-start items-start gap-[5px] font-medium">
            <KeyboardBackspaceIcon />
            <span className="text-left w-full">
              Save 5% <br /> yearly
            </span>
          </div>
        </div>
        <div>
          <div>
            <div className="w-[60%] bg-[#596b8a] rounded-tl-lg rounded-br-lg p-[3px] text-white text-[12px] text-left">
              What is Critical illness?
            </div>
            <div className="flex gap-[6px] rounded-tl-none justify-center items-center bg-selected2 h-[4rem] px-[15px] rounded-md border border-solid border-selected ">
              <Switch
                sx={{
                  padding: "4px",
                  width: "4rem",
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#fff",
                    width: 20,
                    height: 20,
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#494949",
                    opacity: 1,
                    borderRadius: "50px",
                  },
                  "& .Mui-checked .MuiSwitch-thumb": {
                    backgroundColor: "#fff",
                  },
                  "& .Mui-checked .MuiSwitch-track": {
                    backgroundColor: "#494949",
                  },
                }}
                color="primary"
              />
              <span className="text-halfBlack text-[15px]">
                Add Critical illness
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <EditInfoSidebar open={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default Head;

// styles.css
