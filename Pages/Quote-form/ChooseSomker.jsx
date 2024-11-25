import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { SmokeFreeRounded, SmokingRoomsOutlined } from "@mui/icons-material";

const ChooseSmoker = ({ onClose }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (choice) => {
    setSelectedButton(choice);
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.smoker = choice;
    localStorage.setItem("quote-data", JSON.stringify(existingData));

    onClose(choice);
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col">
        <div className="flex items-center gap-2">
          <div>
            Have you smoked or used any nicotine products in the past 12 months?
          </div>
          <div className="flex items-center rounded-md border-solid border-halfBlack border px-[7px] cursor-pointer py-[3px]">
            <LightbulbOutlinedIcon className="text-yellow-500" />
            <span className="text-sm text-gray-500">Protip</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3rem] mt-[2rem]">
        <div className="w-max h-max flex justify-center items-center flex-col gap-[10px] text-[18px]">
          <button
            className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ${
              selectedButton === "yes" ? "bg-[#4949493e]" : "bg-transparent"
            }`}
            onClick={() => handleClick("yes")}
          >
            <SmokingRoomsOutlined className="text-[70px] text-halfBlack" />
          </button>
          Yes
        </div>
        <div className="w-max h-max flex justify-center items-center flex-col gap-[10px] text-[18px]">
          <button
            className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ${
              selectedButton === "no" ? "bg-[#4949493e]" : "bg-transparent"
            }`}
            onClick={() => handleClick("no")}
          >
            <SmokeFreeRounded className="text-[70px] text-halfBlack" />
          </button>
          No
        </div>
      </div>
    </div>
  );
};

export default ChooseSmoker;
