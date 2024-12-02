"use client";
import React, { useState, useEffect } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const CoveragePicker = ({ setDob, setAge, setYears, years, age, dob }) => {
  const [coverage, setCoverage] = useState("");
  const [ins, setIns] = useState("term-life");
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
  const [errorMessage, setErrorMessage] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    let ins = localStorage.getItem("ins");
    setIns(ins);
    const savedData = JSON.parse(localStorage.getItem("quote-data"));
    if (savedData) {
      setCoverage(savedData.coverage || "");
      setYears(savedData.years || "");
      setDob(savedData.dob || "");
      setAge(savedData.age || null);
    }
  }, []);

  // Update the Logic to accept age above 18 yrs old

  const handleDobChange = (event) => {
    const dobInput = event.target.value;
    const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    setDob(dobInput);

    if (dobInput && !dobPattern.test(dobInput)) {
      setErrorMessage("Date of birth must be in MM/DD/YYYY format.");
      setAge(null);
      return;
    }

    if (dobInput) {
      const [month, day, year] = dobInput.split("/").map(Number);
      const selectedDate = new Date(year, month - 1, day);
      const today = new Date();

      if (selectedDate > today) {
        setAge(null);
        setErrorMessage("Date of birth cannot be in the future.");
        return;
      } else {
        setErrorMessage("");
      }

      let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < selectedDate.getDate())
      ) {
        calculatedAge--;
      }

      if (calculatedAge >= 0) {
        setAge(calculatedAge);
      } else {
        setAge(null);
        setErrorMessage("Please select a valid date.");
      }
    } else {
      setErrorMessage("");
      setAge(null);
    }

    saveToLocalStorage();
  };

  const handleCoverageChange = (value) => {
    setCoverage(value);
    saveToLocalStorage();
  };

  const handleYearsChange = (value) => {
    setYears(value);
    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.dob = dob;
    existingData.years = years;
    existingData.age = age;
    localStorage.setItem("quote-data", JSON.stringify(existingData));
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[1rem]">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col mt-[20px]">
        <div className="flex items-center gap-2">
          <div className="text-halfBlack font-normal text-[18px] leading-l2">
            How much Coverage amount and Date of Birth?{" "}
          </div>
        </div>
      </div>
      <div className="w-[350px]">
        <div className="flex justify-center items-center w-full mt-[2rem]">
          <div className="relative w-full">
            <label
              htmlFor="coverage"
              className="absolute top-[-8px] left-2 bg-white px-1 text-sm text-gray-600"
            >
              Coverage
            </label>
            <select
              id="coverage"
              value={coverage}
              onChange={(e) => handleCoverageChange(e.target.value)}
              className="border-2 border-[#e5e7eb]  border-solid rounded-md p-4 h-[3.5rem] text-[16px] py-[10px] w-full text-halfBlack "
            >
              {(ins === "term-life" || ins === "level-term") &&
                coverageTermOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}

              {ins === "whole-life" &&
                coverageWholeOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}
              {ins === "mortgage-insurance" &&
                coverageMortgageOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{ width: "150rem" }}
                  >
                    ${option}
                  </option>
                ))}

              {ins === "critical-illness" &&
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
        <div className="flex justify-center items-center flex-col gap-[1rem] mt-[5px]">
          <div className="w-full h-full flex justify-start items-center flex-col gap-[1rem]">
            <div className="relative w-full mt-[1rem]">
              <label
                htmlFor="dob"
                className="absolute top-[-8px] left-2 bg-white px-1 text-sm text-gray-600"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                type="text"
                value={dob}
                onChange={handleDobChange}
                className="border-2 border-[#e5e7eb]  border-solid rounded-md p-4 h-[3.5rem] text-[16px] w-full text-halfBlack outline-none "
                placeholder="MM/DD/YYYY"
              />
              {age !== null && (
                <span className="text-halfBlack text-[14px] bg-selected p-[3px] flex justify-center items-center w-[4rem] rounded-md absolute right-2 top-2/4 transform -translate-y-2/4">
                  {age} years
                </span>
              )}
            </div>
            {errorMessage && (
              <span className="text-red-500 text-xs mt-1">{errorMessage}</span>
            )}
          </div>

          {errorMessage && (
            <span className="text-red-500 text-xs">{errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoveragePicker;
