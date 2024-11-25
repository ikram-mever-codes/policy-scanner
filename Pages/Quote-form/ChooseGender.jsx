import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";

const ChooseGender = ({ onSelection }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (gender) => {
    setSelectedButton(gender);
    onSelection(gender);
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.gender = gender;
    localStorage.setItem("quote-data", JSON.stringify(existingData));
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col">
        <div>What is your Gender</div>
      </div>
      <div className="flex justify-center items-center gap-[3rem] mt-[2rem]">
        <button
          className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ${
            selectedButton === "male" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => handleClick("male")}
        >
          <Man2OutlinedIcon className="text-[70px] text-halfBlack" />
        </button>

        <button
          className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ${
            selectedButton === "female" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => handleClick("female")}
        >
          <WomanOutlinedIcon className="text-[70px] text-halfBlack" />
        </button>
      </div>
    </div>
  );
};

export default ChooseGender;
