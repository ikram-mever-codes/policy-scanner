import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";

const ChooseGender = ({ onSelection, handleNext }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (gender) => {
    setSelectedButton(gender);
    onSelection(gender);
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.gender = gender;
    localStorage.setItem("quote-data", JSON.stringify(existingData));
    handleNext();
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col mt-[20px]">
        <div className="text-halfBlack font-normal text-[18px] text-center">
          What's your gender?
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3rem] mt-[4rem]">
        <button
          className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
            selectedButton === "male" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => handleClick("male")}
        >
          <Man2OutlinedIcon
            sx={{ fontSize: "70px" }}
            className="text-[70px] text-halfBlack"
          />
        </button>

        <button
          className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
            selectedButton === "female" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => handleClick("female")}
        >
          <WomanOutlinedIcon
            sx={{ fontSize: "70px" }}
            className="text-[70px] text-halfBlack"
          />
        </button>
      </div>
    </div>
  );
};

export default ChooseGender;
