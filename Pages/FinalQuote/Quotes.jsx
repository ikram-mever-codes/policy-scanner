import React, { useState } from "react";
import CanadaLife from "../../assets/canada-life.png";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import {
  ArrowForwardIos,
  ExpandMore,
  Close,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { CSSTransition } from "react-transition-group";
import Star from "../../assets/star.svg";
import "./Head.css";
import PlanDetailsSidebar from "./PlanDetailsSidebar";
import Link from "next/link";

const Quotes = () => {
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paidAddons, setPaidAddons] = useState([]);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleCheckboxChange = (isChecked, value) => {
    setPaidAddons((prev) => {
      if (isChecked) {
        return [...prev, value];
      } else {
        return prev.filter((addon) => addon !== value);
      }
    });
  };
  return (
    <div className="w-[845px] h-max pb-[2rem]">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      <div className="w-full h-max flex justify-start items-center gap-[2rem] flex-col relative z-0">
        <div className="w-full rounded-lg h-max bg-white shadow-sidebar min-h-[220px] flex relative justify-between pb-[1.5rem] items-center gap-[4px] flex-col">
          <div className="w-max h-[30px] px-[1rem] py-[7px]  mb-[20px] rounded-tl-[10px] rounded-br-[10px] bg-[#596B8A] text-white self-start text-[14px] font-normal flex justify-center items-center gap-[3px]">
            $ Whole life convertiable- See How{" "}
            <KeyboardArrowDownOutlined sx={{ fontSize: "16px" }} />
          </div>
          <div className="w-full h-max  px-[2rem]  flex justify-between items-center ">
            <div className="w-full h-full flex justify-start items-center gap-[2rem]">
              <div className=" flex pr-[2rem] text-left justify-center gap-[3px] flex-col items-center w-[9rem] border-r border-solid border-grays h-[44px]">
                <Image
                  alt="Insurance Provider"
                  width={100}
                  height={40}
                  className="object-cover object-center"
                  src={CanadaLife}
                />
              </div>
              <div className=" flex text-left justify-center px-[2rem] gap-[3px] flex-col items-center w-max border-r border-solid border-halfBlack h-[44px]">
                <div className="text-grays w-full text-left text-text1 leading-l1">
                  Covered till
                </div>

                <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                  60 Years{" "}
                  <InfoIcon
                    sx={{
                      fontSize: "18px",
                      color: "#BDBDBD",
                      margin: "0px 10px",
                    }}
                  />
                </div>
              </div>
              <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
                <div className="text-grays w-full text-left text-text1 leading-l1">
                  Max limit
                </div>

                <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                  85 Years
                  <InfoIcon
                    sx={{
                      fontSize: "18px",
                      color: "#BDBDBD",
                      margin: "0px 10px",
                    }}
                  />
                </div>
              </div>
              {/* <div className=" flex text-left justify-center gap-[3px] flex-col items-center w-[10rem] h-[44px]">
                <div className="text-grays w-full text-left">
                  Coverage Amount
                </div>

                <div className="text-black font-semibold w-full text-left">
                  $100,000
                </div>
              </div> */}
            </div>

            <div className="w-max flex justify-center items-center h-[45px] gap-[12px] flex-row ">
              <div className="font-semibold flex justify-center gap-1 items-center h-full  flex-col text-center text-[20px] text-halfBlack">
                <div className="flex justify-center text-[18px] leading-[27px] items-center  gap-1">
                  $250.00 <span className="text-[14px]">p/m</span>
                </div>
                <span className="text-text2 leading-l2 text-grays font-light">
                  Incl. $5 policy fee{" "}
                </span>
              </div>
              <button className="w-full h-[45px] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] text-[14px] font-medium  flex-col rounded-lg">
                Get this Rate
              </button>
            </div>
          </div>

          <div className="w-full my-[20px] h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent px-[2rem]"></div>

          <div className="w-full px-[2rem] h-max flex justify-between items-center flex-row-reverse">
            <button
              className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
              onClick={toggleSidebar}
            >
              Plan Details <ArrowForwardIos className="text-[14px]" />
            </button>
            <div className="w-max flex justify-center items-center gap-[1rem]">
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
              <div className="flex justify-center items-center text-[14px] text-grays ">
                {" "}
                <Star className="mx-2 text-[18px]" />
                Insurer Rating:
                <span className="font-semibold mx-1 text-black">A+</span>
              </div>
            </div>
          </div>
          <CSSTransition
            in={expanded}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="overflow-hidden  mt-[2rem] gap-4 flex justify-start flex-col items-start  w-full">
              {paidAddons.length !== 0 && (
                <div className="w-full flex justify-start items-center gap-3 px-[2rem]">
                  {paidAddons.map((pds) => {
                    return (
                      <div>
                        <input
                          type="checkbox"
                          checked={true}
                          className="text-[20px] mx-[5px] "
                          onChange={(e) => handleCheckboxChange(false, pds)}
                        />
                        {pds}
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="py-5 pt-2 px-[2rem] overflow-hidden w-full flex justify-start items-center gap-[1.5rem] ">
                <div className="w-[23rem] shadow-sidebar p-[1rem] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
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

                <div className="w-[23rem] shadow-sidebar p-[1rem] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
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
                      <input
                        type="checkbox"
                        className="text-[20px] mx-[5px]"
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "accidental death $45"
                          )
                        }
                      />{" "}
                      Extra Payout on{""}
                      <Link
                        href={"#"}
                        className="text-[#0066FF] underline mx-1"
                      >
                        accidental death $45
                      </Link>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="text-[20px] mx-[5px]"
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "critical illnesses $65"
                          )
                        }
                      />{" "}
                      Cover against 34
                      <Link
                        href={"#"}
                        className="text-[#0066FF] underline mx-2"
                      >
                        critical illnesses $65
                      </Link>
                    </div>
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
