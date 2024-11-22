"use client";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { ArrowForwardIos, Star } from "@mui/icons-material";
import { PhoneInTalk } from "@mui/icons-material";
import Google from "../../assets/google.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex justify-start items-center gap-[1.5rem] flex-col">
      <button className="w-full h-[3.5rem] flex justify-center items-center gap-[10px] font-semibold bg-primary2 text-white">
        <LocalPhoneIcon /> Talk to Expert
      </button>
      <p>Connect with an expert</p>
      <div className="w-[17rem] h-max px-[15px] py-[20px] rounded-xl mt-[2rem] flex justify-between items-center flex-col gap-[10px] bg-white text-halfBlack shadow-sidebar">
        <h4 className="text-center  font-extrabold tracking-wider text-[35px]">
          4.99/5{" "}
          <span className="text-[16px] font-medium tracking-normal">
            Rating
          </span>
        </h4>
        <div className="flex justify-center items-center gap-[3px]">
          <Star className="text-secondary text-[35px]" />
          <Star className="text-secondary text-[35px]" />
          <Star className="text-secondary text-[35px]" />
          <Star className="text-secondary text-[35px]" />
          <Star className="text-secondary text-[35px]" />
        </div>
        <div className="text-center flex justify-center items-center gap-[7px] font-medium text-[16px]">
          <Image src={Google} alt="Google" /> Google reviews
        </div>
        <div className="text-center text-[14px] font-light">
          100% of Our Customer Recommend us
        </div>
      </div>
      <div className="w-full h-[5.5rem] flex justify-start items-center flex-col overflow-hidden rounded-lg shadow-sidebar ">
        <div className="bg-primary text-white w-full h-max p-[5px] text-center text-[14px]">
          Speak our advisor at your free time
        </div>

        <button className="w-full h-full flex justify-center font-medium items-center bg-white text-nowrap px-[15px] py-[5px] gap-[5px] ">
          <PhoneInTalk className="text-opposite mx-[5px]" />
          Schedule a Call <ArrowForwardIos className="text-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
