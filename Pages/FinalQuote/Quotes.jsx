"use client";
import React, { useEffect, useState } from "react";
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

const Quotes = ({
  insurance,
  decreasingTerm,
  yearly,
  payTermLength,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const [expanded, setExpanded] = useState(false);
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

  function renderComponent(ins) {
    switch (ins) {
      case "term-life":
        return (
          <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
            <div className="text-grays w-full text-left text-text1 leading-l1">
              Max Coverage
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
        );
      case "whole-life":
        return (
          <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
            <div className="text-grays w-full text-left text-text1 leading-l1">
              Pay Term
            </div>

            <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
              {payTermLength}{" "}
              <InfoIcon
                sx={{
                  fontSize: "18px",
                  color: "#BDBDBD",
                  margin: "0px 10px",
                }}
              />
            </div>
          </div>
        );
      case "critical-illness":
        return (
          <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
            <div className="text-grays w-full text-left text-text1 leading-l1">
              Pay Type
            </div>

            <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
              Basic
              <InfoIcon
                sx={{
                  fontSize: "18px",
                  color: "#BDBDBD",
                  margin: "0px 10px",
                }}
              />
            </div>
          </div>
        );
      case "mortgage-insurance":
        return (
          <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
            <div className="text-grays w-full text-left text-text1 leading-l1">
              Plan type
            </div>

            <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
              {!decreasingTerm ? "Decreasing Term" : "Level Term"}{" "}
              <InfoIcon
                sx={{
                  fontSize: "18px",
                  color: "#BDBDBD",
                  margin: "0px 10px",
                }}
              />
            </div>
          </div>
        );

      case "level-term":
        return (
          <div className=" flex text-left justify-center px-[1rem] gap-[3px] flex-col items-center w-max h-[44px]">
            <div className="text-grays w-full text-left text-text1 leading-l1">
              Plan type
            </div>

            <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
              Level Term
              <InfoIcon
                sx={{
                  fontSize: "18px",
                  color: "#BDBDBD",
                  margin: "0px 10px",
                }}
              />
            </div>
          </div>
        );
      default:
        break;
    }
  }

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);
  return (
    <div className="w-[845px] h-max pb-[2rem]">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10 pointer-events-none overflow-hidden"></div>
      )}
      <div className="w-full h-max flex justify-between items-center gap-[1rem]  flex-col relative z-0">
        <div className="w-full rounded-lg h-max bg-white shadow-sidebar min-h-[190px] flex relative justify-between pb-[15px] items-center gap-[0px] flex-col">
          {(insurance === "term-life" || insurance === "level-term") && (
            <div className="w-max h-[30px] px-[1rem] py-[7px]  mb-[12px] rounded-tl-[10px] rounded-br-[10px] bg-[#596B8A] text-white self-start text-[14px] font-normal flex justify-center items-center gap-[3px]">
              $ Whole life convertible - See How{" "}
              <KeyboardArrowDownOutlined sx={{ fontSize: "16px" }} />
            </div>
          )}
          {insurance === "whole-life" && (
            <div className="w-max h-[30px] px-[1rem] py-[7px]  mb-[12px] rounded-tl-[10px] rounded-br-[10px] bg-[#AF7AB3] text-white self-start text-[14px] font-normal flex justify-center items-center gap-[3px]">
              $ Effective saving 40% - See How{" "}
              <KeyboardArrowDownOutlined sx={{ fontSize: "16px" }} />
            </div>
          )}
          {insurance === "critical-illness" && (
            <div className="w-max h-[30px] px-[1rem] py-[7px]  mb-[12px] rounded-tl-[10px] rounded-br-[10px] bg-[#AF7AB3] text-white self-start text-[14px] font-normal flex justify-center items-center gap-[3px]">
              $ Effective saving 40% - See How{" "}
              <KeyboardArrowDownOutlined sx={{ fontSize: "16px" }} />
            </div>
          )}

          {insurance === "mortgage-insurance" && (
            <div className="h-[30px]"></div>
          )}
          <div className="w-full h-max  px-[2rem]  flex justify-between items-center ">
            <div className="w-full h-full flex justify-start items-center gap-[2rem]">
              <div className=" flex pr-[2rem] text-left justify-center gap-[3px] flex-col items-center w-[9rem] border-r border-solid border-grays h-[38px]">
                <Image
                  alt="insurance Provider"
                  width={100}
                  height={40}
                  className="object-cover object-center"
                  src={CanadaLife}
                />
              </div>
              <div className=" flex text-left justify-center px-[2rem] gap-[3px] flex-col items-center w-max border-r border-solid border-halfBlack h-[38px]">
                {insurance === "whole-life" && (
                  <>
                    <div className="text-grays w-full text-left text-text1 leading-l1">
                      Covered till
                    </div>

                    <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                      100 Years
                      <InfoIcon
                        sx={{
                          fontSize: "18px",
                          color: "#BDBDBD",
                          margin: "0px 10px",
                        }}
                      />
                    </div>
                  </>
                )}
                {insurance === "term-life" && (
                  <>
                    <div className="text-grays w-full text-left text-text1 leading-l1">
                      Covered till
                    </div>

                    <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                      100 Years
                      <InfoIcon
                        sx={{
                          fontSize: "18px",
                          color: "#BDBDBD",
                          margin: "0px 10px",
                        }}
                      />
                    </div>
                  </>
                )}
                {insurance === "level-term" && (
                  <>
                    <div className="text-grays w-full text-left text-text1 leading-l1">
                      Covered till
                    </div>

                    <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                      100 Years
                      <InfoIcon
                        sx={{
                          fontSize: "18px",
                          color: "#BDBDBD",
                          margin: "0px 10px",
                        }}
                      />
                    </div>
                  </>
                )}
                {insurance === "critical-illness" && (
                  <>
                    <div className="text-grays w-full text-left text-text1 leading-l1">
                      Term Length
                    </div>

                    <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                      20 Years
                      <InfoIcon
                        sx={{
                          fontSize: "18px",
                          color: "#BDBDBD",
                          margin: "0px 10px",
                        }}
                      />
                    </div>
                  </>
                )}
                {insurance === "mortgage-insurance" && (
                  <>
                    <div className="text-grays w-full text-left text-text1 leading-l1">
                      Term Length
                    </div>

                    <div className="text-black font-semibold w-full text-left text-text1 leading-l1">
                      20 Years
                      <InfoIcon
                        sx={{
                          fontSize: "18px",
                          color: "#BDBDBD",
                          margin: "0px 10px",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
              {renderComponent(insurance)}
              {/* <div className=" flex text-left justify-center gap-[3px] flex-col items-center w-[10rem] h-[44px]">
                <div className="text-grays w-full text-left">
                  Coverage Amount
                </div>

                <div className="text-black font-semibold w-full text-left">
                  $100,000
                </div>
              </div> */}
            </div>

            <div className="w-max flex justify-center items-center h-[38px] gap-[12px] flex-row ">
              <div className="font-semibold flex justify-center gap-1 items-center h-full  flex-col text-center text-[20px] text-halfBlack">
                <div className="flex justify-center text-[18px] leading-[27px] items-center w-max  gap-1">
                  $250.00{" "}
                  <span className="text-[14px]">p/{yearly ? "y" : "m"}</span>
                </div>
                <span className="text-text2 leading-l2 text-grays font-light w-max">
                  Incl. ${yearly ? "60" : "5"} policy fee{" "}
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
              Plan info <ArrowForwardIos className="text-[14px]" />
            </button>
            <div className="w-max flex justify-center items-center gap-[1rem]">
              {insurance !== "whole-life" &&
                insurance !== "mortgage-insurance" && (
                  <button
                    className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
                    onClick={toggleExpanded}
                  >
                    2 Free Benefits{" "}
                    {expanded ? (
                      <Close className="text-[16px]" />
                    ) : (
                      <ExpandMore className="text-[16px]" />
                    )}
                  </button>
                )}
              <button
                onClick={toggleExpanded}
                className="w-max px-[10px] flex justify-center items-center gap-[5px] font-medium  text-[15px] h-[2.4rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
              >
                2 Paid Benefits
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
            <div className="overflow-hidden  mt-[10px] gap-4 flex justify-start flex-col items-start  w-full">
              {paidAddons.length !== 0 && (
                <div className="w-full flex justify-start items-center gap-3 px-[2rem]">
                  {paidAddons.map((pds) => {
                    return (
                      <div className="text-text1 leading-l1">
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
              <div className="py-5 pb-2 pt-1 px-[2rem] overflow-hidden w-full flex justify-start items-center gap-[1.5rem] ">
                {insurance !== "whole-life" && (
                  <div className="w-[23rem] shadow-sidebar p-[1rem] pb-[10px] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
                    <div className=" w-full flex justify-between items-center">
                      <div className="text-text1 leading-l1 font-medium text-halfBlack">
                        4 Free Benefits
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
                    <div className="w-full h-[60px] flex justify-start items-start gap-[10px] flex-col">
                      <div className="text-text1 leading-l1">
                        <CheckCircleOutlineOutlinedIcon className="text-[16px] mr-1" />
                        Wavier Of Premium Cover
                        <span className="text-primary2 mx-[5px]">free</span>
                      </div>
                      <div className="text-text1 leading-l1">
                        <CheckCircleOutlineOutlinedIcon className="text-[16px]" />{" "}
                        100% payout on Terminal illness
                        <span className="text-primary2 mx-[5px]">free</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-[23rem]   shadow-sidebar p-[1rem] pb-[10px] rounded-lg flex justify-start items-start flex-col gap-[1rem]">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-text1 leading-l1 font-medium text-halfBlack">
                      4 Paid Benefits
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

                  <div className="w-full h-[60px] flex justify-start items-start gap-[10px] flex-col text-text1 leading-l1">
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
                    <div className="text-text1 leading-l1">
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

      <PlanDetailsSidebar
        open={sidebarOpen}
        onClose={toggleSidebar}
        insurance={insurance}
        decreasingTerm={decreasingTerm}
      />
    </div>
  );
};

export default Quotes;
