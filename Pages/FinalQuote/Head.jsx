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
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
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
  function renderComponent(insurance) {
    switch (insurance) {
      case "term-life":
        return (
          <button className="min-w-[164px] w-max px-[5px] text-[15px] h-[50px] rounded-[6px] bg-selected2 border-solid border border-gray-200 flex justify-center items-center gap-[2px] text-gray-500">
            Term Calculator{" "}
            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: "17px" }} />
          </button>
        );
    }
  }

  return (
    <div className="w-[845px] h-max flex justify-start items-center gap-[1.5rem] flex-col">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
      <div className="w-full h-max flex justify-between items-center">
        <div className="w-[240px] h-[45px] rounded-md overflow-hidden border-solid border border-halfBlack">
          <button
            onClick={toggleLifeType}
            className={`w-[50%] h-full ${
              isWholeLife
                ? "bg-transparent text-halfBlack "
                : "bg-primary text-white  rounded-r-[5px]"
            }`}
          >
            Term Life
          </button>
          <button
            onClick={toggleLifeType}
            className={`w-[50%] h-full ${
              isWholeLife
                ? "bg-primary text-white  rounded-l-[5px]"
                : "bg-transparent text-halfBlack "
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
          <button
            className="px-[5px] text-[#0066ff] flex justify-center items-center gap-[3px]"
            onClick={handleEditClick}
          >
            Edit <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
          </button>{" "}
        </div>
      </div>
      <div className="w-full rounded-lg bg-white shadow-sidebar h-[7rem] flex justify-start  items-center gap-[1rem] px-[2rem] py-[1rem]">
        <div className="flex flex-col w-[10rem]  py-[5px] h-[70px]  pr-[1rem]">
          <div className="flex flex-col items-start justify-center border-r border-solid border-halfBlack h-full">
            <div className="text-[14px] text-left text-halfBlack">
              Coverage Amount
            </div>
            <select
              id="coverage"
              value={""}
              className="rounded-md w-max py-[10px] text-left border-none font-medium focus:outline-none"
            >
              <option value="" disabled>
                $100,000{" "}
              </option>
              {coverageOptions.map((option) => (
                <option key={option} value={option}>
                  ${option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-[10rem]  py-[5px] h-[70px]  pr-[1rem]">
          <div className="flex flex-col items-start justify-center border-r border-solid border-halfBlack h-full">
            <div className="text-[14px] text-left text-halfBlack">
              Term Length
            </div>
            <select
              id="coverage"
              value={""}
              className="rounded-md w-max py-[10px] text-left border-none font-medium focus:outline-none"
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
          <div className="flex justify-center  h-[50px] gap-[10px] border-solid border w-[164px] overflow-hidden border-selected items-center p-[10px] rounded-md bg-selected2">
            <button className="w-[5rem] h-[30px] shadow-xl text-black bg-white rounded-md p-4 flex justify-center items-center font-medium text-[14px]">
              Monthly
            </button>
            <button className="w-[5rem] h-[30px] text-halfBlack rounded-md text-[14px] p-3 flex justify-center items-center">
              Yearly
            </button>
          </div>

          <div className="text-primary2 flex justify-start w-max items-start gap-[5px] text-[14px] font-medium">
            <KeyboardBackspaceIcon />
            <span className="text-left w-full">
              Save up to <br />
              8% yearly
            </span>
          </div>
        </div>
        <div>
          {renderComponent("term-life")}
          {/* <div>
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
          </div> */}
        </div>
      </div>{" "}
      <EditInfoSidebar open={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default Head;

// styles.css
