"use client";
import React, { useState, useEffect } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const CoveragePicker = ({ setDob, setAge, setYears, years, age, dob }) => {
  const [coverage, setCoverage] = useState("");
  const coverageOptions = [
    "10,000",
    "50,000",
    "100,000",
    "200,000",
    "500,000",
    "1,000,000",
  ];
  const yearOptions = ["1", "5", "10", "15", "20", "25", "30"];
  const [errorMessage, setErrorMessage] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("quote-data"));
    if (savedData) {
      setCoverage(savedData.coverage || "");
      setYears(savedData.years || "");
      setDob(savedData.dob || "");
      setAge(savedData.age || null);
    }
  }, []);

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
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col">
        <div className="flex items-center gap-2">
          <div>How much Coverage amount and number of years?</div>
          <div className="flex items-center rounded-md border-solid border-halfBlack border px-[7px] cursor-pointer py-[3px]">
            <LightbulbOutlinedIcon className="text-yellow-500" />
            <span className="text-sm text-gray-500">Protip</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-[1rem] mt-[2rem]">
          <div className="flex flex-col items-center">
            <select
              id="coverage"
              value={coverage}
              onChange={(e) => handleCoverageChange(e.target.value)}
              className="border border-halfBlack rounded-md p-2 py-[10px]"
              style={{ width: "140px" }}
            >
              <option value="" disabled>
                Coverage
              </option>
              {coverageOptions.map((option) => (
                <option key={option} value={option}>
                  ${option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <select
              id="years"
              value={years}
              onChange={(e) => handleYearsChange(e.target.value)}
              className="border border-halfBlack rounded-md px-[5px] py-[10px]"
              style={{ width: "100px" }}
            >
              <option value="" disabled>
                Years
              </option>
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  {option} years
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-[1rem] mt-[2rem]">
          <div className="border border-solid w-full h-[3rem] border-halfBlack pr-3 rounded-md overflow-hidden relative flex justify-center items-center gap-[1rem]">
            <input
              type="text"
              value={dob}
              onChange={handleDobChange}
              className="w-[8rem] h-full text-center border-none outline-none"
              placeholder="MM/DD/YYYY"
            />
            <span className="text-halfBlack text-[14px] bg-selected p-[3px] flex justify-center items-center w-[4rem] rounded-md">
              {age} years
            </span>
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
