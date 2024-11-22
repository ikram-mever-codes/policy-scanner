"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import CurvyArrowUp from "../assets/curvy-arrow-up.svg";
import CurvyArrowDown from "../assets/curvy-arrow-down.svg";
const steps = [
  { no: 1, name: "Mortgage" },
  { no: 2, name: "Debt" },
  { no: 3, name: "Funeral" },
  { no: 4, name: "Lump Sum" },
  { no: 5, name: "Savings" },
  { no: 6, name: "Result" },
];

const InsuranceCalculator = ({ title, paragraph }) => {
  const [mortgage, setMortgage] = useState(0);

  const handleSliderChange = (event, value) => {
    setMortgage(value * 500);
  };

  return (
    <section className="px-[60px]  w-full h-max py-[40px] pt-0 gap-[50px] flex justify-start items-center flex-col">
      <div className="w-[1140px] h-[500px] rounded-2xl  flex justify-center items-center gap-[2rem] flex-col  bg-primary ">
        {/* <div className="w-max  h-max flex justify-center gap-[20px] items-center">
          {steps.map((step, index) => {
            return (
              <React.Fragment key={step.no}>
                <div className="flex justify-start items-center flex-col gap-[20px]">
                  {index === 0 ? (
                    <button className="w-[70px] h-[70px] text-[25px] bg-transparent border-2 border-solid border-opposite text-white rounded-full font-semibold ">
                      0{step.no}
                    </button>
                  ) : (
                    <button className="w-[70px] h-[70px] text-[25px] bg-white text-halfBlack rounded-full font-semibold ">
                      0{step.no}
                    </button>
                  )}
                  <div className="text-white font-normal text-[16px]">
                    {step.name}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center h-full items-center">
                    {index % 2 === 0 ? (
                      <CurvyArrowUp className="text-[60px]" />
                    ) : (
                      <CurvyArrowDown className="text-[60px]" />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div> */}

        <div className="w-[945px] h-max py-[40px] flex bg-white p-[50px] rounded-xl justify-start items-center gap-[30px] flex-col">
          <div className="flex justify-start items-center flex-col gap-[10px]">
            <h3 className="text-center text-halfBlack text-[22px] font-semibold">
              Mortgage
            </h3>
            <p className="text-center text-halfBlack text-dg">
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
      </div>
    </section>
  );
};

export default InsuranceCalculator;
