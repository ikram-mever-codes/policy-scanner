"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const steps = [
  { no: 1, name: "Mortgage" },
  { no: 2, name: "Debt" },
  { no: 3, name: "Funeral" },
  { no: 4, name: "Lump Sum" },
  { no: 5, name: "Savings" },
  { no: 6, name: "Result" },
];

const CurvyArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    width="100"
    height="50"
    fill="none"
    stroke="#FFF"
    strokeWidth="4"
    strokeLinecap="round"
  >
    <path d="M 20 80 Q 100 30, 180 80" />
    <path d="M 165 75 L 180 80 L 165 85 L 175 80 Z" />
  </svg>
);

const CurvyArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    width="100"
    height="50"
    fill="none"
    stroke="#FFF"
    strokeWidth="4"
    strokeLinecap="round"
  >
    <path d="M 20 20 Q 100 70, 180 20" />
    <path d="M 165 15 L 180 20 L 165 25 L 175 20 Z" />
  </svg>
);

const InsuranceCalculator = ({ title, paragraph }) => {
  const [mortgage, setMortgage] = useState(0);

  const handleSliderChange = (event, value) => {
    setMortgage(value * 500);
  };

  return (
    <section className="px-[60px] bg-primary w-full h-max py-[60px] gap-[50px] flex justify-start items-center flex-col">
      <div className="w-[1000px] h-max flex justify-start items-center gap-[20px] flex-col">
        <h2 className="text-white text-[30px] font-medium text-center">
          {title}
        </h2>
        <p className="text-center font-light text-[15px] text-white w-[50%]">
          {paragraph}
        </p>
        <div className="w-max  h-max flex justify-center gap-[20px] items-center">
          {steps.map((step, index) => {
            return (
              <React.Fragment key={step.no}>
                <div className="flex justify-start items-center flex-col gap-[20px]">
                  {index === 0 ? (
                    <button className="w-[55px] h-[55px] bg-transparent border-2 border-solid border-opposite text-white rounded-full font-semibold ">
                      0{step.no}
                    </button>
                  ) : (
                    <button className="w-[55px] h-[55px] bg-white text-halfBlack rounded-full font-semibold ">
                      0{step.no}
                    </button>
                  )}
                  <div className="text-white font-normal text-[15px]">
                    {step.name}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center items-center">
                    {index % 2 === 0 ? <CurvyArrowUp /> : <CurvyArrowDown />}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="w-[1000px] h-max flex bg-white p-[50px] rounded-xl justify-start items-center gap-[30px] flex-col">
        <div className="flex justify-start items-center flex-col gap-[10px]">
          <h3 className="text-center text-halfBlack text-[20px] font-medium">
            Mortgage
          </h3>
          <p className="text-center text-halfBlack text-[15px] font-light">
            How much is outstanding on your mortgage ?
          </p>
        </div>
        <Box
          mt={5}
          width={600}
          className="flex justify-center items-center gap-[30px]"
        >
          <Slider
            value={mortgage / 500}
            onChange={handleSliderChange}
            aria-labelledby="mortgage-slider"
            min={0}
            max={100}
            step={1}
            className="text-opposite w-full h-[20px]"
            sx={{
              "& .MuiSlider-thumb": {
                backgroundColor: "white",
                border: "8px solid #FE685E",
                width: "35px",
                height: "35px",
              },
              "& .MuiSlider-rail": {
                height: "20px",
                width: "100%",
                backgroundColor: "#BDBDBD",
              },
            }}
          />
          <div className="w-[8rem] h-[3rem] border-[1px] border-solid flex justify-center items-center border-opposite rounded-lg text-halfBlack font-medium text-[20px]">
            ${mortgage}
          </div>
        </Box>
        <button className="w-[8rem] h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
          Next{" "}
          <ArrowForwardIos className="rounded-full w-[25px] h-[25px] text-[15px] bg-white text-black p-[5px]" />
        </button>
      </div>
    </section>
  );
};

export default InsuranceCalculator;
