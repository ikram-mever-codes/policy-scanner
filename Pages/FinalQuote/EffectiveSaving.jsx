import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SavingsIcon from "@mui/icons-material/Savings";
const EffectiveSaving = ({ setEffSaving, setPayTermLength, payTermLength }) => {
  return (
    <div className="w-full verflow-hidden relative h-[70vh] p-2 flex justify-between items-center flex-col gap-[0rem] ">
      {" "}
      <button
        className="absolute top-0 right-0"
        onClick={() => {
          setEffSaving(false);
        }}
      >
        <Close sx={{ fontSize: "20px" }} />
      </button>
      <div className="w-full h-full flex justify-between items-center flex-col">
        <h2 className="text-[24px] p-4 font-medium text-halfBlack w-full text-left">
          Save money with limited Pay
        </h2>
        <div className="w-full h-full flex gap-6 justify-between items-center">
          <div className="w-[50%] h-max text-[16px] rounded-md relative overflow-hidden text-primary2 border-primary border-2 border-solid">
            <div className="w-full h-[4rem]  flex justify-center items-center flex-col text-white  bg-primary2">
              <div className="text-[18px]">Pay for 10 years</div>
              <div className="text-[16px]">Covered till 100 years</div>
            </div>
            <div className="w-full  h-[30vh] p-4 flex  justify-end items-center flex-col gap-[3rem]">
              <div className="text-primary text-[22px]  font-bold flex justify-center items-center gap-3">
                <SavingsIcon className="text-[30px] text-primary" /> Save Upto
                40%
              </div>
              <button
                onClick={() => {
                  setPayTermLength("Life 10 Pay");
                  setEffSaving(false);
                }}
                className="w-max px-3 h-[3rem] bg-secondary text-black rounded-lg font-medium text-[15px]"
              >
                Save Money Now
              </button>
            </div>
          </div>
          <div className="w-[50%] h-max text-[16px] rounded-md relative overflow-hidden text-primary2 border-primary border-2 border-solid">
            <div className="w-full h-[4rem]  flex justify-center items-center flex-col text-white  bg-primary2">
              <div className="text-[18px]">Pay for 20 years</div>
              <div className="text-[16px]">Covered till 100 years</div>
            </div>
            <div className="w-full  h-[30vh] p-4 flex  justify-end items-center flex-col gap-[3rem]">
              <div className="text-primary text-[22px]  font-bold flex justify-center items-center gap-3">
                <SavingsIcon className="text-[30px] text-primary" /> Save Upto
                40%
              </div>
              <button
                onClick={() => {
                  setPayTermLength("Life 20 Pay");
                  setEffSaving(false);
                }}
                className="w-max px-3 h-[3rem] bg-secondary text-black rounded-lg font-medium text-[15px]"
              >
                Save Money Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectiveSaving;
