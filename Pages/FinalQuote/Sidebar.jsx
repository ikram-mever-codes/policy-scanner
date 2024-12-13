"use client";
import React, { useState } from "react";
import { ArrowForwardIos, PhoneInTalk, Star } from "@mui/icons-material";
import Google from "../../assets/google.png";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Modal } from "@mui/material";
import ScheduleACall from "@/Components/ScheduleACall";

const Sidebar = () => {
  return (
    <div className="w-full z-[1]  overflow-hidden  min-h-[80vh] flex justify-start items-center gap-[1.5rem] flex-col">
      {/* <button className="w-[268px] h-[60px] flex text-[18px] justify-center items-center gap-[4px] font-medium bg-primary rounded-[10px] text-white">
        <AddIcCallOutlinedIcon /> Talk to Expert
      </button> */}
      <Link href={"#"} target="__blank">
        <div className="w-[268px] h-max   py-[20px] rounded-xl mt-[2px] flex justify-between items-center flex-col gap-[10px] bg-white text-halfBlack shadow-sidebar">
          <h4 className="text-center  font-extrabold tracking-wider text-[35px]">
            4.65/5
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
      </Link>
    </div>
  );
};

export default Sidebar;
