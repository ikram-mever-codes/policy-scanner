import {
  Close,
  Diversity1Outlined,
  SecurityOutlined,
} from "@mui/icons-material";
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
      <h2 className="text-[20px] text-halfBlack font-semibold w-full text-left ">
        Select coverage type
      </h2>
      <div className="w-full h-full  flex justify-center gap-4 items-center flex-col px-[0rem] border-t-2 border-gray-300   border-solid">
        {insurance !== "whole-life" && (
          <button
            onClick={() => {
              setInsurance("whole-life");
              localStorage.setItem("ins", "whole-life");
              setChoosePopup(false);
            }}
            className={`w-full p-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <SecurityOutlined className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Whole Life</div>
                <div className="text-sm text-white text-opacity-90">
                  Lifetime coverage with cash value benefits{" "}
                </div>
              </div>
            </div>
          </button>
        )}
        {insurance !== "term-life" && (
          <button
            onClick={() => {
              setInsurance("term-life");
              localStorage.setItem("ins", "term-life");
              setChoosePopup(false);
            }}
            className={`w-full p-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <SecurityOutlined className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Term Life</div>
                <div className="text-sm text-white text-opacity-90">
                  Protection for your home loan{" "}
                </div>
              </div>
            </div>
          </button>
        )}
        {insurance !== "mortgage-insurance" && insurance !== "level-term" && (
          <button
            onClick={() => {
              setInsurance("mortgage-insurance");
              localStorage.setItem("ins", "mortgage-insurance");
              setChoosePopup(false);
            }}
            className={`w-full p-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Diversity1Outlined className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Mortgage Insurance</div>
                <div className="text-sm text-white text-opacity-90">
                  Protection for your home loan{" "}
                </div>
              </div>
            </div>
          </button>
        )}
        {insurance !== "critical-illness" && (
          <button
            onClick={() => {
              setInsurance("critical-illness");
              localStorage.setItem("ins", "critical-illness");
              setChoosePopup(false);
            }}
            className={`w-full p-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-2">
                <Diversity1Outlined className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Critical Illness</div>
                <div className="text-sm text-white text-opacity-90">
                  Coverage for serious health conditions{" "}
                </div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChooseCoverageType;
