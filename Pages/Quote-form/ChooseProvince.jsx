import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";

const ChooseProvince = ({ setProvinceSelected, setCurrentStepIndex }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (province) => {
    setSelectedButton(province);
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.province = province;

    localStorage.setItem("quote-data", JSON.stringify(existingData));
    setProvinceSelected(true);
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" className="" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col mt-[20px]">
        <h2 className="font-semibold text-[30px]">Hey I'm Tenna</h2>
        <div className="text-halfBlack font-normal text-[18px] ">
          Before we start, which province do you reside in?
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3rem] mt-[5rem]">
        <button
          className={`w-[8rem] h-[3.5rem] rounded-md text-[18px] border border-solid border-halfBlack ${
            selectedButton === "Ontario" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => {
            handleClick("Ontario");
            setCurrentStepIndex(0);
          }}
        >
          Ontario
        </button>

        <button
          className={`w-[8rem] h-[3.5rem] rounded-md text-[18px] border border-solid border-halfBlack ${
            selectedButton === "Other" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => {
            handleClick("other");
            setCurrentStepIndex(3);
          }}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default ChooseProvince;
