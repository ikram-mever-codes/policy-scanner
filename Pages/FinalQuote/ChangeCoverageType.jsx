import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const ChooseCoverageType = ({ setChoosePopup, setInsurance, insurance }) => {
  return (
    <div className="w-full overflow-hidden relative h-[50vh] p-2 flex justify-between items-center flex-col gap-[0rem] ">
      <button
        className="absolute top-0 right-0"
        onClick={() => {
          setChoosePopup(false);
        }}
      >
        <Close sx={{ fontSize: "18px" }} />
      </button>
      <h2 className="text-[23px] text-halfBlack font-semibold">
        Select coverage type
      </h2>
      <div className="w-full h-full  flex justify-center gap-4 items-center flex-col px-[4rem]">
        {insurance !== "whole-life" && (
          <button
            onClick={() => {
              setInsurance("whole-life");
              localStorage.setItem("ins", "whole-life");
              setChoosePopup(false);
            }}
            className="w-full flex justify-center  items-center gap-3 h-[4rem] rounded-lg border-solid border-2 text-white bg-primary2 font-medium text-[18px]"
          >
            <SecurityIcon /> Whole Life
          </button>
        )}
        {insurance !== "term-life" && (
          <button
            onClick={() => {
              setInsurance("term-life");
              localStorage.setItem("ins", "term-life");
              setChoosePopup(false);
            }}
            className="w-full flex justify-center items-center gap-3 h-[4rem] rounded-lg border-solid border-2 text-white bg-primary2 font-medium text-[18px]"
          >
            <SecurityIcon /> Term Life
          </button>
        )}
        {insurance !== "mortgage-insurance" && insurance !== "level-term" && (
          <button
            onClick={() => {
              setInsurance("mortgage-insurance");
              localStorage.setItem("ins", "mortgage-insurance");
              setChoosePopup(false);
            }}
            className="w-full flex justify-center items-center gap-3 h-[4rem] rounded-lg border-solid border-2 text-white bg-primary2 font-medium text-[18px]"
          >
            <Diversity1Icon /> Mortgage
          </button>
        )}
        {insurance !== "critical-illness" && (
          <button
            onClick={() => {
              setInsurance("critical-illness");
              localStorage.setItem("ins", "critical-illness");
              setChoosePopup(false);
            }}
            className="w-full flex justify-center items-center gap-3 h-[4rem] rounded-lg border-solid border-2 text-white bg-primary2 font-medium text-[18px]"
          >
            <FavoriteIcon /> Critical illness
          </button>
        )}
      </div>
    </div>
  );
};

export default ChooseCoverageType;
