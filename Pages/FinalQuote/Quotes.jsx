import React, { useState } from "react";
import CanadaLife from "../../assets/canada-life.png";
import Image from "next/image";
import { ArrowForwardIos, ExpandMore, Close } from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { CSSTransition } from "react-transition-group";
import "./Head.css";
import PlanDetailsSidebar from "./PlanDetailsSidebar";

const Quotes = () => {
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-max ">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      <div className="w-full h-max flex justify-start items-center gap-[2rem] flex-col relative z-0">
        <div className="w-full rounded-lg bg-white shadow-sidebar h-max flex relative justify-start items-center gap-[10px] px-[2rem] py-[2rem] flex-col">
          <div className="w-full h-[5rem] flex justify-between items-center">
            <div className="px-[2rem] flex justify-center items-center w-max border-r border-solid border-halfBlack h-full">
              <Image
                alt="Insurance Provider"
                width={120}
                className="h-max"
                src={CanadaLife}
              />
            </div>
            <div className="px-[2rem] flex text-left justify-center gap-[10px] flex-col items-center w-[10rem] border-r border-solid border-halfBlack h-full">
              <div className="text-halfBlack w-full text-left">Term Length</div>
              <div className="text-black font-semibold w-full text-left">
                60 Years
              </div>
            </div>
            <div className="px-[2rem] flex text-left justify-center gap-[10px] flex-col items-center w-max border-r border-solid border-halfBlack h-full">
              <div className="text-halfBlack w-full text-left">
                Coverage Amount
              </div>
              <div className="text-black font-semibold w-full text-left">
                $100,000.00
              </div>
            </div>
            <div className="flex justify-center gap-[10px] flex-col items-center w-[5rem] border-r border-solid border-halfBlack h-full">
              <div className="text-halfBlack w-full text-left">Rating </div>
              <div className="text-black font-semibold w-full text-left">
                A+
              </div>
            </div>
            <div className="w-max h-full flex justify-center items-center gap-[5px] flex-col">
              <div className="font-semibold text-center text-[20px] text-halfBlack">
                $250.00/Month
              </div>
              <button className="w-full h-[3.4rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
                Get this Rate
              </button>
            </div>
          </div>

          <div className="w-[60vw] my-[20px] h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent"></div>

          <div className="w-full h-max flex justify-between items-center">
            <button
              className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
              onClick={toggleSidebar}
            >
              Plan Details <ArrowForwardIos className="text-[14px]" />
            </button>
            <div className="w-max flex justify-center items-center gap-[2rem]">
              <button
                className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
                onClick={toggleExpanded}
              >
                2 Free Add-ons{" "}
                {expanded ? (
                  <Close className="text-[16px]" />
                ) : (
                  <ExpandMore className="text-[16px]" />
                )}
              </button>
              <button className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition">
                2 Paid Riders
                <ExpandMore className="text-[16px]" />
              </button>
            </div>
          </div>

          <CSSTransition
            in={expanded}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="py-5 px-8 w-full flex justify-start items-center gap-[1.5rem] mt-[1rem]">
              <div className="w-[25rem] shadow-sidebar p-[1rem] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
                <div className="w-full flex justify-between items-center">
                  <div className="text-[17px] font-medium text-halfBlack">
                    4 Free Add-ons
                  </div>
                  <button
                    className="w-[20px] flex items-center justify-center h-[20px] rounded-full bg-selected text-halfBlack"
                    onClick={toggleExpanded}
                  >
                    {expanded ? (
                      <Close className="text-[16px]" />
                    ) : (
                      <ExpandMore className="text-[16px]" />
                    )}
                  </button>
                </div>
                <div className="w-full h-max flex justify-start items-start gap-[10px] flex-col">
                  <div>
                    <CheckCircleOutlineOutlinedIcon className="text-[20px]" />{" "}
                    Wavier Of Premium Cover
                    <span className="text-primary2 mx-[5px]">free</span>
                  </div>
                  <div>
                    <CheckCircleOutlineOutlinedIcon className="text-[20px]" />{" "}
                    100% payout on Terminal illness
                    <span className="text-primary2 mx-[5px]">free</span>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] shadow-sidebar p-[1rem] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
                <div className="w-full flex justify-between items-center">
                  <div className="text-[17px] font-medium text-halfBlack">
                    4 Paid Add-ons
                  </div>
                  <button
                    className="w-[20px] flex items-center justify-center h-[20px] rounded-full bg-selected text-halfBlack"
                    onClick={toggleExpanded}
                  >
                    {expanded ? (
                      <Close className="text-[16px]" />
                    ) : (
                      <ExpandMore className="text-[16px]" />
                    )}
                  </button>
                </div>
                <div className="w-full h-max flex justify-start items-start gap-[10px] flex-col">
                  <div>
                    <input type="checkbox" className="text-[20px] mx-[5px]" />{" "}
                    Extra Payout on Accidental death $45
                  </div>
                  <div>
                    <input type="checkbox" className="text-[20px] mx-[5px]" />{" "}
                    Cover against 34 critical illnesses $65
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>

      <PlanDetailsSidebar open={sidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Quotes;
