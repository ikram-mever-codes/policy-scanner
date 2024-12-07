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
import InfoIcon from "@mui/icons-material/Info";
import "./Head.css";

const Head = ({
  quoteData,
  insurance,
  setInsurance,
  setIsWholeType,
  isWholeLife,
  setChoosePopup,
  decreasingTerm,
  setDecreasingTerm,
  yearly,
  setYearly,
  setEffSaving,
  payTermLength,
  setPayTermLength,
  setSidebarOpenM,
  enhanced,
  setEnhanced,
}) => {
  const coverageTermOptions = [
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1M",
    "1.5M",
    "2M",
    "2.5M",
  ];

  const coverageWholeOptions = [
    "25,000",
    "50,000",
    "100,000",
    "150,000",
    "250,000",
    "400,000",
    "500,000",
    "750,000",
    "1M",
  ];

  const coverageMortgageOptions = [
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1M",
    "1.5M",
    "2M",
    "2.5M",
  ];

  const coverageCiOptions = [
    "10,000",
    "50,000",
    "100,000",
    "200,000",
    "250,000",
    "500,000",
  ];
  const yearTermOptions = ["Life 100 Pay", "Life 20 Pay", "Life 10 Pay"];
  const yearWholeOptions = [
    "10 Years",
    "20 Years",
    "25 Years",
    "30 Years",
    "35 Years",
    "40 Years",
  ];

  const yearCiOptions = ["10 Years", "20 Years", "Age 75 Pay", "Life pay 100"];
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleEditClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  function formatInsuranceHeading(insurance) {
    if (!insurance) return null;

    const formattedMap = {
      "term-life": "Term Life",
      "whole-life": "Whole Life",
      "critical-illness": "Critical illness",
      "mortgage-insurance": "Mortgage Insurance",
      "level-term": "Mortgage Insurance",
    };

    const formatted = formattedMap[insurance] || insurance;

    return formatted;
  }

  function renderComponent(insurances) {
    switch (insurances) {
      case "term-life":
        return (
          <button
            className={`w-[10rem] h-[3.5rem]  flex justify-center items-center gap-1  font-[500] text-text1 leading-l1 rounded-md 
                 bg-grays/10 border-gray1
             border-b-4 border-solid`}
            onClick={() => {}}
          >
            Term Calculator
            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: "17px" }} />
          </button>
        );
      case "level-term":
        return (
          <>
            <div>
              <div className="flex gap-[6px]  w-[10rem] justify-center items-center bg-primary2/20 h-[4rem] px-[0px] rounded-md border border-solid border-selected ">
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
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#00615F",
                      opacity: 1,
                    },
                  }}
                  checked={insurance === "level-term"}
                  onChange={() => {
                    setInsurance("mortgage-insurance");
                    localStorage.setItem("ins", "mortgage-insurance");
                  }}
                />
                <span className="text-halfBlack text-text1 leading-l1">
                  Level Term
                </span>
              </div>
            </div>
          </>
        );
      case "whole-life":
        return (
          <button
            className={`w-[10rem] h-[3.5rem] ${
              payTermLength === "Life 100 Pay"
                ? "bg-grays/10 border-gray1"
                : " bg-primary2/20 border-primary "
            } text-black flex justify-center items-center gap-1  font-[500] text-text1 leading-l1 rounded-md 
           border-b-4 border-solid`}
            onClick={() => {
              if (insurance === "whole-life") {
                setEffSaving(true);
              }
            }}
          >
            {payTermLength === "Life 10 Pay" && "Pay Term 10 yrs"}
            {payTermLength === "Life 20 Pay" && "Pay Term 20 yrs"}
            {payTermLength === "Life 100 Pay" && "Save upto 35%"}

            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: "17px" }} />
          </button>
        );
      case "critical-illness":
        return (
          <>
            <div>
              <div className="flex gap-[6px]  w-[10rem] justify-center items-center bg-selected2 h-[4rem] px-[0px] rounded-md border border-solid border-selected ">
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
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#00615F",
                      opacity: 1,
                    },
                  }}
                  checked={enhanced}
                  onChange={(e) => {
                    setEnhanced(e.target.checked);
                  }}
                  color="primary"
                />
                <span
                  className="text-halfBlack text-text1 leading-l1"
                  dangerouslySetInnerHTML={{
                    __html: enhanced
                      ? "Enhanced  <br /> (25 Illness)"
                      : "Basic Plan <br /> (4 Illness)",
                  }}
                ></span>
              </div>
            </div>
          </>
        );
      case "mortgage-insurance":
        return (
          <>
            <div>
              <div className="flex gap-[6px]  w-[10rem] justify-center bg-selected2 items-center h-[4rem] px-[0px] rounded-md border border-solid border-selected ">
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
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#00615F",
                      opacity: 1,
                    },
                  }}
                  onChange={(e) => {
                    setInsurance("level-term");
                    localStorage.setItem("ins", "level-term");
                    setSidebarOpenM(true);
                  }}
                />
                <span className="text-halfBlack text-text1 leading-l1">
                  Level Term
                </span>
              </div>
            </div>
          </>
        );
    }
  }

  return (
    <div className="w-[845px] h-max flex justify-start items-center gap-[20px] flex-col">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
      <EditInfoSidebar open={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="w-full h-max flex justify-between items-end">
        <div className="w-max flex justify-start items-center gap-0">
          <div className="w-max h-[45px] rounded-md overflow-hidden border-solid border border-halfBlack">
            <button
              className={`px-[1rem] min-w-[10rem] w-max h-full bg-primary text-white  rounded-r-[5px]
            }`}
            >
              {formatInsuranceHeading(insurance)}
            </button>
          </div>
        </div>
        <div className="w-max  h-max flex justify-end items-center gap-[1px] text-halfBlack text-[14px]">
          <div className="  border-r border-solid border-halfBlack px-[5px]">
            {quoteData.gender === "male" ? "Male" : "Female"}
          </div>
          <div className="border-r border-solid border-halfBlack px-[5px]">
            {quoteData.years} Yrs
          </div>
          <div className="border-r border-solid border-halfBlack px-[5px]">
            {quoteData.smoker === "yes" ? "Smoker" : "Non-smoker"}
          </div>
          <button
            className="px-[5px] text-[#0066ff] flex justify-center items-center gap-[3px]  border-r border-solid border-halfBlack"
            onClick={handleEditClick}
          >
            Edit <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
          </button>{" "}
          <button
            className="px-[5px] text-[#0066ff] flex justify-center items-center gap-[3px]"
            onClick={() => {
              setChoosePopup(true);
            }}
          >
            Change coverage type{" "}
          </button>{" "}
        </div>
      </div>
      <div className="w-full rounded-lg bg-white shadow-sidebar h-[5.5rem] flex justify-start   items-center gap-[1rem] px-[2rem] ">
        <div className="flex flex-col w-[10rem]   py-[10px] h-[70px]  pr-[1rem]">
          <div className="flex flex-col items-start justify-around border-r border-solid border-halfBlack h-full">
            <div className="text-text1 leading-l1 text-left text-halfBlack">
              Coverage Amount
            </div>
            <select
              id="coverage"
              value={""}
              onChange={(e) => console.log(`Selected: ${e.target.value}`)}
              className="rounded-md w-max  text-[16px] leading-[20px] text-left border-none font-medium focus:outline-none"
              style={{ width: "7rem" }}
            >
              {(insurance === "term-life" || insurance === "level-term") &&
                coverageTermOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}

              {insurance === "whole-life" &&
                coverageWholeOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}
              {insurance === "mortgage-insurance" &&
                coverageMortgageOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}

              {insurance === "critical-illness" &&
                coverageCiOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-[10rem]  py-[10px] h-[70px]  pr-[1rem]">
          <div className="flex flex-col items-start justify-around border-r border-solid border-halfBlack h-full">
            <div className="text-text1 leading-l1 text-left text-halfBlack">
              Term Length
            </div>
            <select
              id="pay-term"
              value={payTermLength}
              style={{ width: "7rem" }}
              onChange={(e) => {
                if (insurance === "whole-life") {
                  setPayTermLength(e.target.value);
                }
              }}
              className="rounded-md w-max  text-[16px] leading-[20px] text-left border-none font-medium focus:outline-none"
            >
              {insurance === "term-life" &&
                yearWholeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              {insurance === "level-term" &&
                yearWholeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              {insurance === "whole-life" &&
                yearTermOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              {insurance === "critical-illness" &&
                yearCiOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              {insurance === "mortgage-insurance" &&
                yearWholeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="w-max h-full flex justify-center items-center gap-[1rem]">
          <div className="flex justify-center  h-[50px] gap-[10px] border-solid border w-[164px] overflow-hidden border-selected items-center p-[10px] rounded-md bg-selected2">
            <button
              className={`w-[5rem] h-[30px]  ${
                !yearly
                  ? "text-black bg-white shadow-xl  font-medium"
                  : " text-halfBlack"
              } rounded-md p-4 flex justify-center items-center text-[14px] leading-l1`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`w-[5rem] h-[30px] ${
                yearly
                  ? "text-black bg-white  shadow-xl font-medium"
                  : "text-halfBlack"
              }  rounded-md text-[14px] leading-l1 p-3 flex justify-center items-center`}
            >
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
        <div>{renderComponent(insurance)}</div>
      </div>{" "}
    </div>
  );
};

export default Head;

// styles.css
